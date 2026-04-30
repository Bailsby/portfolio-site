export default function Hero() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-6xl font-bold tracking-tight">Jake Bailey</h1>

      <p className="text-2xl text-gray-300">Software Engineer</p>

      <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
        Full-stack developer specialising in React, TypeScript, Node.js and
        cloud infrastructure.
      </p>

      <div className="flex justify-center gap-4 pt-6">
        <a
          href="/projects"
          className="px-6 py-2 rounded-md bg-white text-black hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-2 rounded-md border border-gray-800 hover:border-gray-300 hover:scale-[1.02] transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
