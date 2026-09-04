import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiTerraform,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFastify,
  SiVercel,
  SiPrisma,
  SiSupabase,
  SiContentful,
  SiAlgolia,
  SiVitest,
  SiJest,
  SiGithubactions,
  SiBitbucket,
} from 'react-icons/si'

import { FaAws, FaDatabase } from 'react-icons/fa'
import type { IconType } from 'react-icons'

export const techIcons: Record<string, IconType> = {
  // Languages
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  SQL: FaDatabase,

  // Frontend
  React: SiReact,
  'Next.js': SiNextdotjs,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,

  // Backend
  'Node.js': SiNodedotjs,
  Laravel: SiLaravel,
  Fastify: SiFastify,

  // Data
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  Supabase: SiSupabase,

  // Commerce & Content
  Contentful: SiContentful,
  Algolia: SiAlgolia,

  // Testing
  Vitest: SiVitest,
  Jest: SiJest,

  // Cloud & Infrastructure
  AWS: FaAws,
  Terraform: SiTerraform,
  Docker: SiDocker,
  Vercel: SiVercel,

  // CI/CD & Tooling
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  'Bitbucket Pipelines': SiBitbucket,
}
