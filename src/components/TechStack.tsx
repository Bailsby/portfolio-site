const tech = [
    "React",
    "TypeScript",
    "Node.js",
    "PHP",
    "Laravel",
    "Docker",
    "AWS",
    "Terraform",
    "Git",
    "SQL",
];

export default function TechStack() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-2xl font-semibold">Tech Stack</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="px-4 py-1 border border-gray-700 rounded-full text-sm text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}