'use client'

import { useState } from 'react'

type CalculatorInputs = {
  teamSize: number
  duration: number
  region: 'us' | 'eu' | 'uk'
  serviceType: 'ai-strategy' | 'agent-dev' | 'rpa' | 'integration'
}

type CalculatorResults = {
  totalSavings: number
  savingsPercent: number
  roiMonths: number
  efficiencyGain: number
}

export function AISavingsCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    teamSize: 5,
    duration: 12,
    region: 'us',
    serviceType: 'agent-dev',
  })

  const [results, setResults] = useState<CalculatorResults | null>(null)

  const regionalRates = {
    us: { 'ai-strategy': 18000, 'agent-dev': 15000, rpa: 12000, integration: 13000 },
    eu: { 'ai-strategy': 15000, 'agent-dev': 13000, rpa: 10000, integration: 11000 },
    uk: { 'ai-strategy': 16000, 'agent-dev': 14000, rpa: 11000, integration: 12000 },
  }

  const shiroRates = {
    'ai-strategy': 7000,
    'agent-dev': 5500,
    rpa: 4500,
    integration: 4800,
  }

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault()

    const localRate = regionalRates[inputs.region][inputs.serviceType]
    const shiroRate = shiroRates[inputs.serviceType]

    const localCost = localRate * inputs.teamSize * inputs.duration
    const shiroCost = shiroRate * inputs.teamSize * inputs.duration
    const savings = localCost - shiroCost
    const savingsPercent = Math.round((savings / localCost) * 100)
    const roiMonths = Math.max(1, Math.floor(inputs.duration / 4))
    const efficiencyGain = inputs.serviceType === 'rpa' ? 60 : 45

    setResults({
      totalSavings: savings,
      savingsPercent,
      roiMonths,
      efficiencyGain,
    })
  }

  return (
    <div id="calculator" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-shiro-black mb-3">
          AI Transformation Savings Calculator
        </h3>
        <p className="text-lg text-gray-600">
          Calculate potential savings with SHIRO's global AI delivery model
        </p>
      </div>

      <form onSubmit={calculateSavings} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-sm font-semibold text-shiro-black mb-2">
              Team Size (resources needed)
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

          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-semibold text-shiro-black mb-2">
              Service Type
            </label>
            <select
              id="serviceType"
              value={inputs.serviceType}
              onChange={(e) => setInputs({ ...inputs, serviceType: e.target.value as any })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
            >
              <option value="ai-strategy">AI Strategy & Consulting</option>
              <option value="agent-dev">Custom AI Agent Development</option>
              <option value="rpa">RPA & Process Automation</option>
              <option value="integration">AI Integration Services</option>
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
              <p className="text-sm text-gray-600 mb-2">Efficiency Gain</p>
              <p className="text-4xl font-bold text-purple-600">
                {results.efficiencyGain}%
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
