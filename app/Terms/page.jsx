// app/teams/page.jsx
export const metadata = {
  title: "Teams | KVA Logistics",
  description: "Meet the people behind KVA Logistics operations."
};

const team = [
  { name: "Operations", role: "Dispatch & routing coordination" },
  { name: "Warehouse", role: "Inbound, storage, and picking" },
  { name: "Fleet", role: "Drivers & vehicle maintenance" },
  { name: "Customer Support", role: "Shipment updates & resolution" }
];

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-[#EB9003] px-3 py-1 text-xs font-semibold text-white">
              KVA Logistics
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-[#310F0B]">
              Our Teams
            </h1>
            <p className="mt-3 text-base text-[#310F0B]/90 sm:text-lg">
              A logistics business runs on coordination—these are the groups that
              keep shipments moving, safely and on time.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#C55500] bg-white p-6 shadow-lg">
            <p className="text-sm font-semibold text-[#310F0B]">Quick contact</p>
            <p className="mt-1 text-sm text-[#310F0B]/80">
              Replace with your support email / phone.
            </p>
            <div className="mt-3 h-1 w-full rounded-full bg-[#EB9003]" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl border-2 border-[#C55500] bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-[#EB9003]"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-[#310F0B]">{t.name}</h2>
                <span className="h-4 w-4 rounded-full bg-[#EB9003] ring-4 ring-white mt-1" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#310F0B]">{t.role}</p>
              <div className="mt-6 h-2 w-full rounded-full bg-[#EB9003]/20">
                <div className="h-2 w-3/4 rounded-full bg-[#EB9003] transition-all group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border-4 border-[#C55500] bg-gradient-to-r from-[#310F0B] to-[#9F4100] p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Want to join the team?</h3>
          <p className="text-lg mb-6 text-white/90 leading-relaxed">
            Add your hiring text here (email, form link, or careers page).
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-[#EB9003] px-8 py-4 text-lg font-bold text-[#310F0B] shadow-lg hover:bg-[#C55500] hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
