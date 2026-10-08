import { useMemo, useState } from "react";

import {
  transactions,
  stock,
  actions,
  reports,
  tones,
} from "./PharmacyData";

import {
  Icon,
  PanelTitle,
  StatCard,
  DynamicPage,
} from "./PharmacyComponent";

export default function PharmacyDashboard({ onNavigate }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [active, setActive] = useState("dashboard");

  const filtered = useMemo(
    () =>
      transactions.filter((t) =>
        `${t.patient} ${t.medicine} ${t.status}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [search]
  );

  const rows = filtered.slice(
    (page - 1) * 8,
    page * 8
  );

  const go = (key) => {
    setActive(key);
    onNavigate?.(key);
  };

  if (active !== "dashboard") {
    return (
      <DynamicPage
        page={active}
        onBack={() => setActive("dashboard")}
      />
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col gap-1.5 overflow-hidden bg-[#f4faff] p-2">

      {/* Banner */}
      <section
        className="relative flex min-h-17.5 shrink-0 items-center justify-between overflow-hidden rounded-md border border-blue-100 px-5"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(225,243,255,.97),rgba(203,232,255,.86),rgba(5,76,145,.42),rgba(3,65,128,.90)),url(https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1400&q=85)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-blue-700">
            <Icon name="bi-capsule" size="25px" />
          </span>

          <div>
            <h1 className="text-xl font-extrabold text-[#174477]">
              Pharmacy
            </h1>
            <p className="text-xs text-[#32618f] sm:text-sm">
              Manage medicines, inventory, dispensing and reports
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-3 text-right text-white md:flex">
          <div className="text-sm italic">
            Safe Medicines
            <br />
            Better Health
          </div>
          <Icon name="bi-heart-pulse" size="36px" />
        </div>
      </section>

      {/* Statistics */}
      <section className="grid shrink-0 grid-cols-2 gap-1.5 sm:grid-cols-3 xl:grid-cols-5">

        <StatCard
          icon="bi-capsule"
          label="Total Medicines"
          value="152"
          change="12%"
          note="In stock"
          tone="blue"
        />

        <StatCard
          icon="bi-box-seam"
          label="Total Stock Quantity"
          value="8,420"
          change="8%"
          note="Total units"
          tone="green"
        />

        <StatCard
          icon="bi-exclamation-triangle"
          label="Low Stock Items"
          value="7"
          change="Need reorder"
          tone="rose"
          negative
        />

        <StatCard
          icon="bi-calendar-event"
          label="Expiring Soon"
          value="12"
          change="5%"
          note="Within 30 days"
        />

        <StatCard
          icon="afn"
          label="Total Sales (This Month)"
          value=" 284,650AFN"
          change="15%"
          note="From pharmacy"
          tone="green"
        />

      </section>

      {/* Quick Actions */}
      <section className="shrink-0 rounded-lg  bg-white/80 p-1.5 shadow-sm">

        <PanelTitle
          icon="bi-lightning-charge"
          action="View All"
          onAction={() => go("reports")}
        >
          Quick Actions
        </PanelTitle>

        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-5">

          {actions.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className={`min-h-16 rounded-md border p-2 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${tones[item.tone]}`}
            >
              <span className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/70">
                <Icon name={item.icon} size="20px" />
              </span>

              <span className="block text-[12px] font-bold">
                {item.label}
              </span>

              <span className="text-[10px]">
                {item.desc}
              </span>
            </button>
          ))}

        </div>
      </section>

      {/* Main */}
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-1.5 overflow-hidden lg:grid-cols-[2fr_.9fr]">

        {/* LEFT */}
        <div className="flex min-h-0 flex-col gap-1.5 overflow-hidden">

          {/* Transactions */}
          <section className="min-h-0 rounded-lg  bg-white/90 p-2 shadow-sm">

            <PanelTitle
              icon="bi-clipboard-data"
              action="View All"
              onAction={() => go("transactions")}
            >
              Recent Pharmacy Transactions
            </PanelTitle>

            <div className="mb-2 flex gap-2">

              <div className="relative flex-1">
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search patient or medicine..."
                 className="w-full rounded-md border border-slate-100 py-1 px-3 text-[11px] outline-none hover:border-blue-400"
                />

                <Icon
                  name="bi-search"
                  size="14px"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>

              <button
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
                className="rounded-md  px-3 text-[10px]"
              >
                Clear
              </button>

            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-160 text-left text-[9px]">

                <thead>
                  <tr className="bg-[#edf6ff] text-[#24517e]">
                    <th className="p-1.5">#</th>
                    <th className="p-1.5">Patient</th>
                    <th className="p-1.5">Medicine</th>
                    <th className="p-1.5">Qty</th>
                    <th className="p-1.5">Unit Price</th>
                    <th className="p-1.5">Total</th>
                    <th className="p-1.5">Date & Time</th>
                    <th className="p-1.5">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((t) => (
                    <tr
                      key={t.id}
                      className="border border-slate-100 hover:bg-blue-100"
                    >
                      <td className="p-1.5">{t.id}</td>
                      <td className="p-1.5 font-medium">
                        {t.patient}
                      </td>
                      <td className="p-1.5">
                        {t.medicine}
                      </td>
                      <td className="p-1.5">{t.qty}</td>
                      <td className="p-1.5">{t.unit}</td>
                      <td className="p-1.5">{t.total}</td>
                      <td className="p-1.5 whitespace-nowrap">
                        {t.date}
                      </td>
                      <td className="p-1.5">
                        <span
                          className={`rounded px-2 py-1 ${
                            t.status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            <div className="mt-1 flex justify-between text-[9px]">
              <span>
                Showing {rows.length} of {filtered.length}
              </span>

              <div className="flex gap-1">
                

               

               
              </div>
            </div>

          </section>

          {/* Reports */}
          <section className="rounded-lg border border-slate-100 bg-white/90 p-2 shadow-sm">

            <PanelTitle
              icon="bi-bar-chart-line"
              action="View All"
              onAction={() => go("reports")}
            >
              Pharmacy Reports
            </PanelTitle>

            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 2xl:grid-cols-6">

              {reports.map(([label, desc, icon, tone]) => (
                <button
                  key={label}
                  onClick={() =>
                    go(
                      label
                        .toLowerCase()
                        .replaceAll(" ", "-")
                    )
                  }
                  className={`flex min-h-12 gap-1 rounded-md border p-1 text-left ${tones[tone]}`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/70">
                    <Icon name={icon} />
                  </span>

                  <span>
                    <span className="block text-[10px] font-bold">
                      {label}
                    </span>
                    <span className="text-[9px]">
                      {desc}
                    </span>
                  </span>
                </button>
              ))}

            </div>
          </section>

        </div>

        {/* RIGHT */}
        <aside className="flex min-h-0 flex-col gap-1.5 overflow-hidden">

          {/* Stock Alerts */}
          <section className="rounded-lg border border-slate-100 bg-white/90 p-2 shadow-sm">

            <PanelTitle
              icon="bi-exclamation-triangle"
              action="View All"
              onAction={() => go("stock-alerts")}
            >
              Stock Alerts
            </PanelTitle>

            {stock.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between border-b border-slate-100 hover:border-blue-400 py-1"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border-slate-100 bg-blue-50 text-blue-700">
                    <Icon name="bi-capsule" size="13px" />
                  </span>

                  <span className="text-[10px]">
                    {item.name}
                  </span>
                </div>

                <span
                  className={`rounded-full px-2 py-1 text-[9px] ${
                    item.color === "amber"
                      ? "bg-amber-50 text-amber-700"
                      : item.color === "slate"
                      ? "bg-slate-100 text-slate-600"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {item.count} left
                </span>
              </div>
            ))}

          </section>

          {/* Statistics */}
          <section className="rounded-lg border border-slate-100 bg-white/90 p-2 shadow-sm">

            <PanelTitle icon="bi-bar-chart">
              Quick Statistics
            </PanelTitle>

            <div className="grid grid-cols-2 gap-1.5">

              {[
                ["This Month Sales", " 284,650AFN", "15%", "afn"],
                ["Total Patients", "186", "8%", "bi-people"],
                ["Total Medicines", "152", "12%", "bi-capsule"],
                ["Low Stock Items", "7", "3%", "bi-exclamation-triangle"],
              ].map(([label, value, change, icon]) => (
                <div
                  key={label}
                  className="rounded-md border border-slate-100 p-2.5"
                >
                  <div className="mb-1 flex items-center gap-1 text-[9px] text-slate-500">
                    <Icon name={icon} size="13px" />
                    {label}
                  </div>

                  <p className="text-sm font-extrabold text-[#174477]">
                    {value}
                  </p>

                  <p className="text-[9px] text-emerald-600">
                    ↑ {change}
                  </p>
                </div>
              ))}

            </div>
          </section>

        </aside>

      </div>
    </div>
  );
}