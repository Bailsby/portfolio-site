export default function Hero() {
  return (
    <section className="text-center space-y-6 py-20">
      <h1 className="text-5xl font-bold">
        Jake Bailey
      </h1>

      <p className="text-xl text-gray-400">
        Software Engineer
      </p>

      <p className="text-gray-500 max-w-xl mx-auto">
        Full-stack developer specialising in React, TypeScript, Node.js and cloud infrastructure.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-2 border border-gray-600 rounded hover:border-white"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}