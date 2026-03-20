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
<main className="bg-white min-h-screen flex flex-col">
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12 flex-1 w-full">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-[#EB9003] px-3 py-1 text-xs font-medium text-white">
              KVA Logistics
            </p>
            <h1 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl text-[#310F0B]">
              Our Teams
            </h1>
            <p className="mt-2 text-sm text-[#310F0B]/80 sm:text-base">
              A logistics business runs on coordination—these are the groups that
              keep shipments moving, safely and on time.
            </p>
          </div>

          <div className="rounded-xl border border-[#C55500] bg-white p-5 shadow-md">
            <p className="text-sm font-medium text-[#310F0B]">Quick contact</p>
            <p className="mt-1 text-sm text-[#310F0B]/70">
              Replace with your support email / phone.
            </p>
            <div className="mt-2 h-0.5 w-full rounded-full bg-[#EB9003]" />
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div
              key={t.name}
              className="group rounded-xl border border-[#C55500] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-[#EB9003]"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-[#310F0B]">{t.name}</h2>
                <span className="h-3 w-3 rounded-full bg-[#EB9003] ring-2 ring-white mt-1" />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#310F0B]/80">{t.role}</p>
              <div className="mt-4 h-1.5 w-full rounded-full bg-[#EB9003]/20">
                <div className="h-1.5 w-3/4 rounded-full bg-[#EB9003] transition-all group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-2 border-[#C55500] bg-gradient-to-r from-[#310F0B] to-[#9F4100] p-6 text-white shadow-xl">
          <h3 className="text-xl font-medium mb-2">Want to join the team?</h3>
          <p className="text-sm mb-4 text-white/80 leading-relaxed">
            Add your hiring text here (email, form link, or careers page).
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#EB9003] px-6 py-3 text-sm font-medium text-[#310F0B] shadow hover:bg-[#C55500] hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}