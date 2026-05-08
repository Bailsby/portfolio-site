import {
  SiReact,
  SiTypescript,
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
} from 'react-icons/si'

import { FaAws } from 'react-icons/fa'
import type { IconType } from 'react-icons'

export const techIcons: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  PHP: SiPhp,
  Laravel: SiLaravel,
  Docker: SiDocker,
  AWS: FaAws,
  Terraform: SiTerraform,
  Git: SiGit,
  SQL: SiMysql,
  PostgreSQL: SiPostgresql,
  'Next.js': SiNextdotjs,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  Fastify: SiFastify,
  Vercel: SiVercel,
  Prisma: SiPrisma,
}
