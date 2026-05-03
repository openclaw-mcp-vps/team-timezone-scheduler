import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Team Timezone Scheduler — Smart Meeting Scheduler for Distributed Teams',
  description: 'Finds optimal meeting times across timezones considering work hours, preferences, and meeting fatigue. Built for remote team managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="16fb6e94-a8d4-4e83-93ff-2d7ed4f86726"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
