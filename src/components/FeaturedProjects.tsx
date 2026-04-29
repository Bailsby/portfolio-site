export default function FeaturedProjects() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-800 p-6 rounded">
          <h3 className="font-bold">API Monitoring SaaS</h3>
          <p className="text-gray-400 mt-2">
            Uptime monitoring system with dashboards and alerts.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded">
          <h3 className="font-bold">Travel Planner</h3>
          <p className="text-gray-400 mt-2">
            Full-stack trip planning and budgeting app.
          </p>
        </div>
      </div>
    </section>
  );
}