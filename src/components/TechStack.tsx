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
} from "react-icons/si";

import {
  FaAws
} from "react-icons/fa";

export default function TechStack() {
  const tech = [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "Docker", icon: SiDocker },
    { name: "AWS", icon: FaAws },
    { name: "Terraform", icon: SiTerraform },
    { name: "Git", icon: SiGit },
    { name: "SQL", icon: SiMysql },
  ];

  return (
    <section className="text-center space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {tech.map((item) => {
          const Icon = item.icon;

          return (
            <span
              key={item.name}
              className="flex items-center gap-2 px-4 py-1.5 border border-gray-800 rounded-full text-sm text-gray-300 
              hover:border-gray-500 hover:text-white 
              hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] 
              hover:scale-[1.05] 
              transition-all duration-300"
            >
              {Icon && <Icon size={16} />}
              {item.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}