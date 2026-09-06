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
