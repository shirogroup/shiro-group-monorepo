'use client'

import { useState } from 'react'

export function ValueVsViabilityTool() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [result, setResult] = useState<any>(null)

  const questions = [
    { id: 'business_impact', text: 'What is the potential business impact?', type: 'value' },
    { id: 'people_affected', text: 'How many people/processes will this affect?', type: 'value' },
    { id: 'roi_timeline', text: 'Expected ROI timeline?', type: 'value' },
    { id: 'measurability', text: 'How measurable are the outcomes?', type: 'value' },
    { id: 'data_quality', text: 'What is your data quality?', type: 'viability' },
    { id: 'technical_complexity', text: 'Technical complexity assessment?', type: 'viability' },
    { id: 'ai_maturity', text: 'Current AI maturity level?', type: 'viability' },
    { id: 'leadership_support', text: 'Level of leadership support?', type: 'viability' },
  ]

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [questions[currentStep - 1].id]: score })
    
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateResult({ ...answers, [questions[currentStep - 1].id]: score })
    }
  }

  const calculateResult = (allAnswers: Record<string, number>) => {
    const valueQuestions = questions.filter(q => q.type === 'value')
    const viabilityQuestions = questions.filter(q => q.type === 'viability')

    const valueScore = valueQuestions.reduce((sum, q) => sum + (allAnswers[q.id] || 0), 0) / valueQuestions.length
    const viabilityScore = viabilityQuestions.reduce((sum, q) => sum + (allAnswers[q.id] || 0), 0) / viabilityQuestions.length

    const valuePercent = Math.round((valueScore / 5) * 100)
    const viabilityPercent = Math.round((viabilityScore / 5) * 100)

    let category, color, recommendation
    if (valuePercent >= 70 && viabilityPercent >= 70) {
      category = 'Quick Win'
      color = 'green'
      recommendation = 'High priority - Immediate implementation recommended'
    } else if (valuePercent >= 70 && viabilityPercent < 70) {
      category = 'Strategic Bet'
      color = 'blue'
      recommendation = 'Invest in addressing viability constraints'
    } else if (valuePercent < 70 && viabilityPercent >= 70) {
      category = 'Low-Hanging Fruit'
      color = 'yellow'
      recommendation = 'Good learning opportunity, lower priority'
    } else {
      category = 'Reconsider'
      color = 'red'
      recommendation = 'Not recommended at this time'
    }

    setResult({ valuePercent, viabilityPercent, category, color, recommendation })
  }

  const reset = () => {
    setCurrentStep(1)
    setAnswers({})
    setResult(null)
  }

  if (result) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold text-center mb-6">Assessment Results</h3>
        
        <div className={`bg-${result.color}-50 border-l-4 border-${result.color}-500 p-6 mb-6`}>
          <h4 className="text-xl font-bold mb-2">Category: {result.category}</h4>
          <p className="text-gray-700">{result.recommendation}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Value Score</p>
            <div className="bg-gray-200 rounded-full h-4">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: `${result.valuePercent}%` }}></div>
            </div>
            <p className="text-2xl font-bold mt-2">{result.valuePercent}%</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Viability Score</p>
            <div className="bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${result.viabilityPercent}%` }}></div>
            </div>
            <p className="text-2xl font-bold mt-2">{result.viabilityPercent}%</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={reset}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-md font-semibold transition-all"
          >
            Start Over
          </button>
          <a
            href="/contact"
            className="flex-1 bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold text-center transition-all"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentStep - 1]

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Question {currentStep} of {questions.length}</span>
          <span className="text-sm text-gray-600">{Math.round((currentStep / questions.length) * 100)}% Complete</span>
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div className="bg-shiro-red h-2 rounded-full transition-all" style={{ width: `${(currentStep / questions.length) * 100}%` }}></div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-shiro-black mb-6 text-center">
        {currentQuestion.text}
      </h3>

      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            onClick={() => handleAnswer(score)}
            className="w-full bg-gray-50 hover:bg-shiro-red hover:text-white p-4 rounded-md transition-all text-left font-semibold border-2 border-gray-200 hover:border-shiro-red"
          >
            {score} - {score === 1 ? 'Very Low' : score === 2 ? 'Low' : score === 3 ? 'Medium' : score === 4 ? 'High' : 'Very High'}
          </button>
        ))}
      </div>
    </div>
  )
}
