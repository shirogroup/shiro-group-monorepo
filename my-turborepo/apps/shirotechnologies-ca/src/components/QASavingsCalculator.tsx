'use client'

import { useState } from 'react'
import { Calculator } from 'lucide-react'

export default function QASavingsCalculator() {
  const [teamSize, setTeamSize] = useState(5)
  const [hourlyRate, setHourlyRate] = useState(150)
  const [hoursPerWeek, setHoursPerWeek] = useState(40)

  const usRate = teamSize * hourlyRate * hoursPerWeek * 4
  const indiaRate = usRate * 0.35 // 65% savings
  const savings = usRate - indiaRate
  const annualSavings = savings * 12

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-2xl mb-4">
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          QA Savings Calculator
        </h2>
        <p className="text-gray-600">
          See how much you can save with offshore delivery
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Team Size
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-2xl font-bold text-[#CC0000] mt-2">
              {teamSize} {teamSize === 1 ? 'person' : 'people'}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              US/EU Hourly Rate
            </label>
            <input
              type="range"
              min="50"
              max="250"
              step="10"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-2xl font-bold text-[#CC0000] mt-2">
              ${hourlyRate}/hr
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Hours per Week
            </label>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-2xl font-bold text-[#CC0000] mt-2">
              {hoursPerWeek} hrs/week
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 space-y-4">
          <div className="pb-4 border-b border-gray-300">
            <div className="text-sm text-gray-600 mb-1">US/EU Monthly Cost</div>
            <div className="text-2xl font-bold text-gray-900">
              ${usRate.toLocaleString()}
            </div>
          </div>

          <div className="pb-4 border-b border-gray-300">
            <div className="text-sm text-gray-600 mb-1">India Monthly Cost</div>
            <div className="text-2xl font-bold text-gray-900">
              ${indiaRate.toLocaleString()}
            </div>
          </div>

          <div className="pb-4 border-b border-gray-300">
            <div className="text-sm text-gray-600 mb-1">Monthly Savings</div>
            <div className="text-3xl font-bold text-[#CC0000]">
              ${savings.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              (65% reduction)
            </div>
          </div>

          <div className="pt-2">
            <div className="text-sm text-gray-600 mb-1">Annual Savings</div>
            <div className="text-4xl font-bold text-[#CC0000]">
              ${annualSavings.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#CC0000] to-[#990000] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Get Started with India Delivery
        </a>
      </div>
    </div>
  )
}
