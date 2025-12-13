'use client'

import { useState } from 'react'
import { CalculatorInputs, CalculatorResults } from '@/lib/types'

export function QASavingsCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    teamSize: 5,
    duration: 12,
    region: 'us',
    engagementType: 'qa',
  })

  const [results, setResults] = useState<CalculatorResults | null>(null)

  const regionalRates = {
    us: { dev: 12000, qa: 10000, ai: 15000, devops: 13000 },
    eu: { dev: 10000, qa: 8500, ai: 13000, devops: 11000 },
    uk: { dev: 11000, qa: 9000, ai: 14000, devops: 12000 },
  }

  const shiroRates = {
    dev: 4000,
    qa: 3200,
    ai: 5500,
    devops: 4500,
  }

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault()

    const localRate = regionalRates[inputs.region][inputs.engagementType]
    const shiroRate = shiroRates[inputs.engagementType]

    const localCost = localRate * inputs.teamSize * inputs.duration
    const shiroCost = shiroRate * inputs.teamSize * inputs.duration
    const savings = localCost - shiroCost
    const savingsPercent = Math.round((savings / localCost) * 100)
    const roiMonths = Math.max(1, Math.floor(inputs.duration / 4))

    setResults({
      totalSavings: savings,
      savingsPercent,
      roiMonths,
      qualityScore: 95,
    })
  }

  return (
    <div id="calculator" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-shiro-black mb-3">
          QA Savings Calculator
        </h3>
        <p className="text-lg text-shiro-gray-dark">
          See your potential cost savings with SHIRO's global delivery model
        </p>
      </div>

      <form onSubmit={calculateSavings} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-sm font-semibold text-shiro-black mb-2">
              Team Size (number of resources)
            </label>
            <input
              type="number"
              id="teamSize"
              min="1"
              max="100"
              value={inputs.teamSize}
              onChange={(e) => setInputs({ ...inputs, teamSize: parseInt(e.target.value) })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="duration" className="block text-sm font-semibold text-shiro-black mb-2">
              Engagement Duration (months)
            </label>
            <input
              type="number"
              id="duration"
              min="1"
              max="36"
              value={inputs.duration}
              onChange={(e) => setInputs({ ...inputs, duration: parseInt(e.target.value) })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Region */}
          <div>
            <label htmlFor="region" className="block text-sm font-semibold text-shiro-black mb-2">
              Your Region
            </label>
            <select
              id="region"
              value={inputs.region}
              onChange={(e) => setInputs({ ...inputs, region: e.target.value as any })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
            >
              <option value="us">United States</option>
              <option value="eu">European Union</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>

          {/* Engagement Type */}
          <div>
            <label htmlFor="engagementType" className="block text-sm font-semibold text-shiro-black mb-2">
              Service Type
            </label>
            <select
              id="engagementType"
              value={inputs.engagementType}
              onChange={(e) => setInputs({ ...inputs, engagementType: e.target.value as any })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
            >
              <option value="qa">QA & Testing</option>
              <option value="dev">Software Development</option>
              <option value="ai">AI/ML Development</option>
              <option value="devops">DevOps & Infrastructure</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:shadow-lg"
        >
          Calculate Savings
        </button>
      </form>

      {results && (
        <div className="mt-10 p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-green-300">
          <h4 className="text-2xl font-bold text-shiro-black mb-6 text-center">Your Potential Savings</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">Total Savings</p>
              <p className="text-4xl font-bold text-green-600">
                ${results.totalSavings.toLocaleString()}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">Savings Percentage</p>
              <p className="text-4xl font-bold text-shiro-red">
                {results.savingsPercent}%
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">ROI Timeline</p>
              <p className="text-4xl font-bold text-blue-600">
                {results.roiMonths} months
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">Quality Score</p>
              <p className="text-4xl font-bold text-purple-600">
                {results.qualityScore}%
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/contact"
              className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-3 rounded-md font-semibold transition-all"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
