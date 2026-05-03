export default function Home() {
  const faqs = [
    {
      q: 'How does it find the best meeting time?',
      a: 'It analyzes each team member\'s timezone, working hours, and recent meeting load to score every available slot and surface the least disruptive options.'
    },
    {
      q: 'Which calendar services are supported?',
      a: 'Google Calendar and Outlook are supported. Connect them in seconds via OAuth — no manual exports needed.'
    },
    {
      q: 'Can I try it before paying?',
      a: 'Yes. You get a 7-day free trial with full access. No credit card required to start.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Remote Team Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Smart Meeting Scheduler<br />
          <span className="text-[#58a6ff]">for Distributed Teams</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Stop the timezone guessing game. Automatically find meeting windows that respect everyone&apos;s work hours, preferences, and meeting fatigue — across any number of timezones.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Free Trial
        </a>
        <p className="text-[#8b949e] text-sm mt-3">7-day free trial · No credit card required</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$8</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Per workspace · Unlimited team members</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'AI-powered optimal slot detection',
              'Google Calendar & Outlook sync',
              'Meeting fatigue scoring',
              'Timezone overlap heatmap',
              'Slack & email notifications',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started — $8/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
