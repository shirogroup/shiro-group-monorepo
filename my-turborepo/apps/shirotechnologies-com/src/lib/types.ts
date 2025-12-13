export type ProductStatus = 'live' | 'development'

export interface Product {
  id: string
  name: string
  tagline: string
  status: ProductStatus
  url?: string
  betaDate?: string
  description: string
  features: string[]
  pricing?: {
    [key: string]: string
  }
  target?: string
}

export interface CalculatorInputs {
  teamSize: number
  duration: number
  region: 'us' | 'eu' | 'uk'
  engagementType: 'dev' | 'qa' | 'ai' | 'devops'
}

export interface CalculatorResults {
  totalSavings: number
  savingsPercent: number
  roiMonths: number
  qualityScore: number
}

export interface NavItem {
  label: string
  href: string
}

export interface ServicePreview {
  title: string
  icon: string
  features: string[]
  link: string
}

export interface Stat {
  value: string
  label: string
}
