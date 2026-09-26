export type Project = {
  title: string
  /** One sentence for the compact home-page card, written for a business
      owner rather than a developer. */
  summary: string
  /** Shown on the home page. The first three featured, in this file's order. */
  featured?: boolean
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
    summary:
      'Watches your website and APIs around the clock, logs every outage, and gives your customers a live status page.',
    featured: true,
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
    title: 'Hill Bagger',
    summary:
      'A personal record of 636 British summits across six hill lists, on Ordnance Survey mapping.',
    featured: true,
    problem:
      'Hill lists overlap — Pen-y-ghent is one of the Yorkshire Three Peaks and one of the Dales 30 — so tracking Munros, Wainwrights and the rest in spreadsheets means ticking the same summit in several places, and old climbs are often remembered only by the year.',
    architecture:
      'Six lists built from the Database of British and Irish Hills, with each climb recorded once against the hill so it counts on every list it belongs to. Dates are as precise as they’re remembered — a day, a year or unknown — and every summit sits on Ordnance Survey mapping. Anyone can browse; GitHub sign-in is limited to one account, and notes stay private.',
    techStack: [
      'TypeScript',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Leaflet',
      'Vitest',
    ],
    github: 'https://github.com/Bailsby/hill-bagger',
    live: 'https://hills.jake-bailey.dev',
    liveNote:
      'My own record, kept up to date after each walk. Browse the lists and the map; only my GitHub account can record climbs.',
    image: '/hill-bagger-map.webp',
    imageAlt:
      'An Ordnance Survey map of the Lake District with every Wainwright marked, climbed fells filled in green, and Scafell Pike selected, showing it was climbed on 7 October 2018.',
  },
  {
    title: 'Booking Platform',
    summary:
      'Online booking for a dog groomer: real availability, no double bookings, and reschedule or cancel from an email link.',
    featured: true,
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

/** A URL fragment for a project, e.g. "Hill Bagger" → "hill-bagger". */
export const projectSlug = (project: Pick<Project, 'title'>): string =>
  project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
