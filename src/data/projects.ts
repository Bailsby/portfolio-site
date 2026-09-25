export type Project = {
  title: string
  problem: string
  architecture: string
  techStack: string[]
  github: string
  /** Public demo URL. Its presence is what renders the "Live demo" badge and
      the primary call-to-action on the card. */
  live?: string
  /** Shown under the demo button. Sets expectations before the click — what is
      real, what is seeded, whether a login is needed. */
  liveNote?: string
  /** Screenshot shown at the top of the card. Path under /public. */
  image?: string
  /** Describes what the screenshot shows, not that it is a screenshot. */
  imageAlt?: string
}

export const projects: Project[] = [
  {
    title: 'API Monitoring SaaS',
    problem:
      'When a small business site or booking form breaks at 2am, nobody finds out until a customer complains — usually after they have given up and gone elsewhere.',
    architecture:
      'A scheduled worker checks each endpoint and records the result; failures are grouped into incidents with a start, an end and a cause. A Next.js dashboard charts uptime and response times, and every service gets a shareable public status page.',
    techStack: [
      'TypeScript',
      'Next.js',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'GitHub Actions',
    ],
    github: 'https://github.com/Bailsby/api-monitoring-saas',
    live: 'https://monitor.jake-bailey.dev',
    liveNote:
      'No login needed. It monitors real public APIs, so the numbers are live — and one endpoint is deliberately pointed at a failing URL, so there is always an incident to look at.',
    image: '/api-monitoring-dashboard.webp',
    imageAlt:
      'The API Monitor dashboard, listing five monitored endpoints with uptime and average response time, above a log of recent incidents.',
  },
  {
    title: 'Booking Platform',
    problem:
      'A one-person salon takes bookings by phone with a dog on the table — calls go unanswered, slots get double-booked, and a 15-minute nail trim and a 90-minute groom never fit the same fixed-length calendar blocks.',
    architecture:
      'Opening hours are stored as weekly rules plus one-off exceptions, and free times are worked out on request in the salon’s own time zone, so a clock change never moves an appointment. A database constraint makes double booking impossible, even when two customers click the same slot at once, and customers reschedule or cancel from a signed link in their email — no accounts.',
    techStack: [
      'TypeScript',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Tailwind',
      'Vitest',
    ],
    github: 'https://github.com/Bailsby/booking-platform',
    live: 'https://dog-groomers.jake-bailey.dev',
    liveNote:
      'No sign-up. Book, reschedule and cancel as much as you like — the salon is fictional, the confirmation email appears on screen instead of being sent, and the diary resets every night.',
    image: '/booking-platform-picker.webp',
    imageAlt:
      'A dog grooming salon’s booking page: a fortnight of dates with fully booked days struck through, and the free morning appointment times for the selected Tuesday.',
  },
  // {
  //   title: 'Travel Planner',
  //   problem:
  //     'Users struggle to organise multi-country trips, budgets, and itineraries in one place.',
  //   architecture:
  //     'Full-stack app with REST API backend, React frontend dashboard, and persistent storage.',
  //   techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  //   github: 'https://github.com/Bailsby/travel-planner',
  // },
]
