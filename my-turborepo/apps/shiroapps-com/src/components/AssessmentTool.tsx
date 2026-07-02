'use client'

import { useState } from 'react'

type Question = {
  id: string
  text: string
  weight: number
  tip: string
}

const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'Does your organisation use AI to screen or rank job applicants?',
    weight: 3,
    tip: 'Automated resume screening and candidate ranking tools are explicitly named as high-risk under EU AI Act Annex III.',
  },
  {
    id: 'q2',
    text: 'Does your AI system influence decisions about interviews, shortlisting, or offers?',
    weight: 3,
    tip: 'Any AI that affects consequential hiring decisions triggers mandatory human oversight requirements.',
  },
  {
    id: 'q3',
    text: 'Do you or your clients hire candidates based in the EU?',
    weight: 3,
    tip: 'EU AI Act obligations apply regardless of where your company is headquartered if EU-based candidates are involved.',
  },
  {
    id: 'q4',
    text: 'Do you have written documentation of how your AI hiring system makes decisions?',
    weight: 2,
    tip: 'Technical documentation and transparency requirements are mandatory for high-risk AI systems.',
  },
  {
    id: 'q5',
    text: 'Is there a named human reviewer who can override your AI hiring decisions?',
    weight: 2,
    tip: 'EU AI Act Article 14 requires demonstrable human oversight — not just a policy, but a documented person and process.',
  },
  {
    id: 'q6',
    text: 'Have you conducted a bias or accuracy audit of your AI hiring tool in the last 12 months?',
    weight: 2,
    tip: 'NYC Local Law 144 already requires annual bias audits. EU standards are converging on similar requirements.',
  },
  {
    id: 'q7',
    text: 'Do you notify candidates that AI is being used to evaluate them?',
    weight: 1,
    tip: 'Transparency obligations require candidates to be informed before automated tools are used in their evaluation.',
  },
]

const RISK_QUESTION_IDS = new Set(['q1', 'q2', 'q3'])

type RiskProfile = {
  label: string
  colorClass: string
  ringClass: string
  barClass: string
  summary: string
  cta: string
  emoji: string
}

function getRiskProfile(score: number, maxScore: number): RiskProfile {
  const pct = score / maxScore
  if (pct >= 0.7) {
    return {
      label: 'High Risk',
      colorClass: 'text-danger',
      ringClass: 'border-danger bg-danger/10',
      barClass: 'bg-danger',
      summary:
        'Your current setup likely has significant compliance gaps under the EU AI Act and/or US state-level regulations. An audit is strongly advisable before your next hiring cycle.',
      cta: 'Book a Free Gap-Check Call',
      emoji: '⚠️',
    }
  }
  if (pct >= 0.35) {
    return {
      label: 'Moderate Risk',
      colorClass: 'text-warning',
      ringClass: 'border-warning bg-warning/10',
      barClass: 'bg-warning',
      summary:
        'You have some safeguards in place but gaps remain. Partial compliance is not the same as defensible compliance — one incident or audit could expose those gaps.',
      cta: 'Book a Free Gap-Check Call',
      emoji: '🔶',
    }
  }
  return {
    label: 'Lower Risk',
    colorClass: 'text-success',
    ringClass: 'border-success bg-success/10',
    barClass: 'bg-success',
    summary:
      'Your current practices align reasonably well with oversight requirements. We still recommend a quick review to confirm your documentation is audit-ready.',
    cta: 'Confirm Your Compliance — Book a Call',
    emoji: '✅',
  }
}

export default function AssessmentTool() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const riskQuestions = QUESTIONS.slice(0, 3)
  const safeguardQuestions = QUESTIONS.slice(3)

  const handleAnswer = (qid: string, isYes: boolean) => {
    setAnswers((prev) => ({ ...prev, [qid]: isYes }))
  }

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined)

  const computeScore = () => {
    let score = 0
    let maxScore = 0
    QUESTIONS.forEach((q) => {
      maxScore += q.weight
      const isRiskQuestion = RISK_QUESTION_IDS.has(q.id)
      if (isRiskQuestion && answers[q.id] === true) score += q.weight
      if (!isRiskQuestion && answers[q.id] === false) score += q.weight
    })
    return { score, maxScore }
  }

  const { score, maxScore } = computeScore()
  const risk = submitted ? getRiskProfile(score, maxScore) : null
  const pct = risk ? Math.round((score / maxScore) * 100) : 0

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  if (submitted && risk) {
    return (
      <div className={`border-2 rounded-xl p-8 bg-white ${risk.ringClass}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl ${risk.ringClass}`}>
            {risk.emoji}
          </div>
          <div>
            <div className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">Your Risk Rating</div>
            <div className={`text-2xl font-extrabold ${risk.colorClass}`}>{risk.label}</div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-1.5 mb-5">
          <div className="h-2 bg-gray-200 rounded overflow-hidden">
            <div className={`h-full rounded transition-all duration-700 ${risk.barClass}`} style={{ width: `${pct}%` }} />
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-7">{risk.summary}</p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="mailto:info@shiroapps.com?subject=Gap-Check Call - AI Hiring Compliance"
            className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
          >
            {risk.cta} →
          </a>
          <button
            onClick={reset}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="text-xs font-bold text-gray-500 tracking-wide uppercase mb-4">Risk Exposure</div>
      {riskQuestions.map((q, i) => (
        <QuestionCard key={q.id} q={q} index={i} answers={answers} onAnswer={handleAnswer} />
      ))}

      <div className="text-xs font-bold text-gray-500 tracking-wide uppercase mb-4 mt-9">Safeguards in Place</div>
      {safeguardQuestions.map((q, i) => (
        <QuestionCard key={q.id} q={q} index={i + 3} answers={answers} onAnswer={handleAnswer} />
      ))}

      <button
        onClick={() => allAnswered && setSubmitted(true)}
        disabled={!allAnswered}
        className={`w-full mt-8 py-4 rounded-lg font-bold text-base transition-colors ${
          allAnswered
            ? 'bg-primary text-white hover:bg-primary-dark cursor-pointer'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {allAnswered
          ? 'See My Risk Rating →'
          : `Answer all ${QUESTIONS.length - Object.keys(answers).length} remaining questions`}
      </button>
    </div>
  )
}

function QuestionCard({
  q,
  index,
  answers,
  onAnswer,
}: {
  q: Question
  index: number
  answers: Record<string, boolean>
  onAnswer: (qid: string, isYes: boolean) => void
}) {
  const answered = answers[q.id] !== undefined
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-3">
      <div className="flex gap-4 items-start">
        <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0 mt-0.5">
          {index + 1}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 mb-3 leading-relaxed">{q.text}</p>
          <div className="flex gap-2">
            {(['Yes', 'No'] as const).map((opt) => {
              const isYes = opt === 'Yes'
              const selected = answers[q.id] === isYes
              return (
                <button
                  key={opt}
                  onClick={() => onAnswer(q.id, isYes)}
                  className={`px-5 py-1.5 rounded-md border text-sm font-semibold transition-colors ${
                    selected
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          {answered && <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">ℹ {q.tip}</p>}
        </div>
      </div>
    </div>
  )
}
