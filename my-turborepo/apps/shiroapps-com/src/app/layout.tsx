import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shiroapps.com"),
  title: "ShiroApps - AI Hiring Compliance Audits & Human-in-the-Loop Oversight",
  description: "Free EU AI Act / US state law risk assessment for AI hiring tools, plus compliance audits and staffed human-in-the-loop review services for recruiting teams and HR-tech builders.",
  keywords: "EU AI Act compliance, AI hiring audit, human in the loop review, AI governance, Article 14 human oversight, NYC Local Law 144, California SB-833, Colorado AI Act, AI recruitment compliance, HITL review service",
  openGraph: {
    title: "ShiroApps - AI Hiring Compliance Audits & Human-in-the-Loop Oversight",
    description: "Free risk assessment for AI hiring tools, plus compliance audits and staffed human review services.",
    url: "https://www.shiroapps.com",
    siteName: "ShiroApps",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6L7ZS22D89"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6L7ZS22D89');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
