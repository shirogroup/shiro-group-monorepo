export {}

declare global {
  interface Window {
    gtag: (
      command: 'consent' | 'config' | 'event' | 'js',
      targetOrAction: string | Date,
      params?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}
