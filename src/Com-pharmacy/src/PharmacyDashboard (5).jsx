import { useMemo, useState } from "react";
import {
  Activity, AlertTriangle, ArrowRight, CalendarDays, 
  ClipboardList, Clock3, FileBarChart2, HeartPulse,
  Package, Pill, Search, TrendingUp, Users, 
  BarChart3, X,
} from "lucide-react";

const transactions = [
  { id: 1, patient: "Ahmad Khan", medicine: "Paracetamol 500mg", qty: 2, unit: 60, total: 120, date: "2025-09-20 10:15 AM", status: "Completed" },
  { id: 2, patient: "Fatima Noor", medicine: "Amoxicillin 250mg", qty: 3, unit: 90, total: 270, date: "2025-09-20 09:45 AM", status: "Completed" },
  { id: 3, patient: "Sayed Ali", medicine: "Ibuprofen 400mg", qty: 1, unit: 75, total: 75, date: "2025-09-20 09:20 AM", status: "Completed" },
  { id: 4, patient: "Zahra Mohammad", medicine: "Vitamin C 500mg", qty: 2, unit: 50, total: 100, date: "2025-09-20 08:50 AM", status: "Completed" },
  { id: 5, patient: "Abdul Basir", medicine: "Omeprazole 20mg", qty: 1, unit: 110, total: 110, date: "2025-09-19 04:30 PM", status: "Completed" },
  { id: 6, patient: "Rafiullah", medicine: "Metformin 500mg", qty: 2, unit: 70, total: 140, date: "2025-09-19 03:15 PM", status: "Completed" },
  { id: 7, patient: "Noor Ahmad", medicine: "Ciprofloxacin 500mg", qty: 1, unit: 95, total: 95, date: "2025-09-19 11:20 AM", status: "Pending" },
  { id: 8, patient: "Shabnam Rahimi", medicine: "Atorvastatin 20mg", qty: 1, unit: 130, total: 130, date: "2025-09-19 10:05 AM", status: "Completed" },
];
const stock = [
  { name: "Amoxicillin 250mg", count: 5, color: "rose" },
  { name: "Vitamin C 500mg", count: 3, color: "rose" },
  { name: "Atorvastatin 20mg", count: 2, color: "rose" },
  { name: "Salbutamol 2mg", count: 15, color: "amber" },
  { name: "Omeprazole 20mg", count: 0, color: "slate" },
];

const actions = [
  {
    label: "Add Medicine",
    desc: "Add new medicine to inventory",
    icon: "bi bi-plus-circle",
    tone: "blue",
    key: "add-medicine",
  },
  {
    label: "View Inventory",
    desc: "Check stock and details",
    icon: "bi bi-box-seam",
    tone: "green",
    key: "inventory",
  },
  {
    label: "Dispense Medicine",
    desc: "Give medicine to patient",
    icon: "bi bi-capsule",
    tone: "purple",
    key: "dispense",
  },
  {
    label: "Patient Billing",
    desc: "Generate bill for patient",
    icon: "bi bi-receipt",
    tone: "orange",
    key: "billing",
  },
  {
    label: "Pharmacy Reports",
    desc: "View reports & analytics",
    icon: "bi bi-bar-chart-line",
    tone: "pink",
    key: "reports",
  },
];


const reports = [
  { label: "Daily Sales", desc: "View today's sales", icon: CalendarDays, tone: "blue" },
  { label: "Monthly Sales", desc: "View monthly report", icon: BarChart3, tone: "green" },
  { label: "Medicine Usage", desc: "Usage statistics", icon: Activity, tone: "purple" },
  { label: "Low Stock Report", desc: "Low stock items", icon: AlertTriangle, tone: "pink" },
  { label: "Expired Medicines", desc: "Expired items", icon: Clock3, tone: "orange" },
  { label: "Purchase Report", desc: "Purchase history", icon: ClipboardList, tone: "blue" },
];

const tones = {
  blue: "bg-sky-50 text-sky-700 border-sky-100", green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  purple: "bg-violet-50 text-violet-700 border-violet-100", orange: "bg-orange-50 text-orange-700 border-orange-100",
  pink: "bg-pink-50 text-pink-700 border-pink-100", rose: "bg-rose-50 text-rose-700 border-rose-100",
};

function BadgeAfg({ size = 24 }) {
  return (
    <span
      style={{ width: size, height: size }}
      className="inline-flex items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700"
    >
      ؋
    </span>
  );
}



function PanelTitle({ icon: Icon, children, action, onAction }) {
  return <div className="mb-2 flex items-center justify-between gap-2"><div className="flex min-w-0 items-center gap-2"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700"><Icon size={17}/></span><h2 className="truncate text-[13px] font-bold text-[#174477]">{children}</h2></div>{action && <button onClick={onAction} className="shrink-0 text-[10px] font-semibold text-blue-700 hover:text-blue-900">{action} <ArrowRight className="ml-0.5 inline" size={11}/></button>}</div>;
}

function StatCard({ icon: Icon, label, value, change, note, tone = "blue", negative = false }) {
  return <div className="flex min-w-0 items-start gap-1.5 rounded-lg border border-slate-100 bg-white/90 p-1.5 shadow-[0_2px_8px_rgba(35,90,145,.06)]"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tones[tone] || tones.blue}`}>{label === "Total Sales (This Month)" ? (
  <span className="text-xl font-bold">AFN</span>
) : (
  <Icon size={19} strokeWidth={2.4} />
)}</span><div className="min-w-0"><p className="text-[4px] font-normal leading-4 text-slate-600">{label}</p><p className="text-lg font-extrabold leading-5 tracking-tight text-[#174477]">{value}</p><p className={`mt-1 flex items-center gap-1 text-[10px] font-semibold ${negative ? "text-rose-600" : "text-emerald-700"}`}>{negative ? <AlertTriangle size={11}/> : <TrendingUp size={11}/>} {change}</p><p className="mt-0.5 text-[9px] text-slate-500">{note}</p></div></div>;
}
export default function PharmacyDashboard({ onNavigate }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [notice, setNotice] = useState("");
  const filtered = useMemo(() => transactions.filter(t => `${t.patient} ${t.medicine} ${t.status}`.toLowerCase().includes(search.toLowerCase())), [search]);
  const pageSize = 8;
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);
  const go = (key, label) => { setNotice(`${label} selected`); onNavigate?.(key); window.dispatchEvent(new CustomEvent("pharmacy:navigate", { detail: { page: key } })); };
  return <div className="flex h-full min-h-0 flex-col gap-1.5 overflow-hidden bg-[#f4faff] p-1.5 text-slate-700 sm:gap-1.5 sm:p-2">
    {notice && <div className="shrink-0 flex items-center justify-between rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs text-blue-800"><span>{notice} — connect this action to your page when ready.</span><button onClick={() => setNotice("")} aria-label="Close notice"><X size={14}/></button></div>}
    {/* Pharmacy banner */}
    <section className="relative flex min-h-17 shrink-0 items-center justify-between overflow-hidden rounded-md border border-blue-100 bg-[#07539b] px-3 py-2 sm:px-5" style={{backgroundImage: "linear-gradient(90deg, rgba(225,243,255,.97) 0%, rgba(203,232,255,.86) 38%, rgba(5,76,145,.42) 67%, rgba(3,65,128,.90) 100%), url(https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1400&q=85)", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="absolute inset-y-0 right-0 w-[48%] bg-linear-to-r from-transparent via-blue-400/20 to-blue-900/20"/>
      <div className="relative z-10 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-blue-700 shadow-sm"><Pill size={25} fill="currentColor" strokeWidth={1.5}/></span><div><h1 className="text-xl font-extrabold tracking-tight text-[#174477]">Pharmacy</h1><p className="mt-0.5 text-xs text-[#32618f] sm:text-sm">Manage medicines, inventory, dispensing and reports</p></div></div>
      <div className="relative z-10 hidden items-center gap-3 text-right text-white md:flex"><div className="text-sm italic leading-5">Safe Medicines<br/>Better Health</div><HeartPulse size={36} strokeWidth={1.3}/></div>
      <div className="pointer-events-none absolute right-[25%] top-1/2 hidden -translate-y-1/2 gap-2 opacity-20 lg:flex"><Pill size={42}/><Package size={38}/><Pill size={32}/></div>
    </section>
    {/* Key figures */}
    <section className="grid shrink-0 grid-cols-2 gap-1.5 sm:grid-cols-3 xl:grid-cols-5">
      <StatCard icon={Pill} label="Total Medicines" value="152" change="12%" note="In stock" tone="blue"/>
      <StatCard icon={Package} label="Total Stock Quantity" value="8,420" change="8%" note="Total units" tone="green"/>
      <StatCard icon={AlertTriangle} label="Low Stock Items" value="7" change="Need reorder" note="" tone="rose" negative/>
      <StatCard icon={CalendarDays} label="Expiring Soon" value="12" change="5%" note="Within 30 days" tone="blue"/>
      <StatCard icon={BadgeAfg} label="Total Sales (This Month)" value="؋ 284,650" change="15%" note="From pharmacy" tone="green"/>
    </section>
    {/* Quick actions */}
  
<section className="shrink-0 rounded-lg border border-slate-100 bg-white/80 p-1.5 shadow-[0_2px_10px_rgba(35,90,145,.05)]">
  <PanelTitle
    icon={Activity}
    action="View All"
    onAction={() => go("actions", "Quick Actions")}
  >
    Quick Actions
  </PanelTitle>

  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-5">
    {actions.map(({ label, desc, icon, tone, key }) => (
      <button
        key={key}
        onClick={() => go(key, label)}
        className={`group min-h-16 rounded-md border p-1.5 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${tones[tone]}`}
      >
        <span className={`mb-1.5 flex h-9 w-9 items-center justify-center rounded-xl ${
          {
            blue: "bg-blue-100 text-blue-600",
            green: "bg-green-100 text-green-600",
            purple: "bg-violet-100 text-violet-600",
            orange: "bg-orange-100 text-orange-600",
            pink: "bg-pink-100 text-pink-600",
          }[tone]
        }`}>
          <i className={`${icon} text-xl`} aria-hidden="true"></i>
        </span>

        <span className="block text-[12px] font-bold">{label}</span>
        <span className="mt-1 block text-[10px] leading-4 opacity-80">
          {desc}
        </span>
      </button>
    ))}
  </div>
</section>

    {/* Main dashboard grid */}
    <div className="grid min-h-0 flex-1 grid-cols-1 items-stretch gap-1.5 overflow-hidden lg:grid-cols-[minmax(0,2fr)_minmax(220px,.9fr)]">
      <div className="flex min-h-0 min-w-0 flex-col gap-1.5 overflow-hidden">
        <section className="min-h-0 rounded-lg border border-slate-100 bg-white/90 p-2 shadow-[0_2px_10px_rgba(35,90,145,.05)]">
          <PanelTitle icon={ClipboardList} action="View All" onAction={() => go("transactions", "Transactions")}>Recent Pharmacy Transactions</PanelTitle>
          <div className="mb-2 flex items-center gap-2"><div className="relative min-w-0 flex-1"><Search className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14}/><input value={search} onChange={e => {setSearch(e.target.value);setPage(1);}} placeholder="Search patient or medicine..." className="w-full rounded-md border border-slate-200 bg-white py-1.5 pl-8 pr-3 text-[11px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"/></div><button onClick={() => {setSearch("");setPage(1);}} className="rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] text-slate-600 hover:bg-slate-50">Clear</button></div>
          <div className="overflow-x-auto"><table className="w-full min-w-140 border-collapse text-left text-[9px]"><thead><tr className="bg-[#edf6ff] text-[#24517e]"><th className="px-1.5 py-1.5 font-bold">#</th><th className="px-1.5 py-1.5 font-bold">Patient Name</th><th className="px-1.5 py-1.5 font-bold">Medicine</th><th className="px-1.5 py-1.5 font-bold">Qty</th><th className="px-1.5 py-1.5 font-bold">Unit Price (AFN)</th><th className="px-1.5 py-1.5 font-bold">Total (AFN)</th><th className="px-1.5 py-1.5 font-bold">Date & Time</th><th className="px-1.5 py-1.5 font-bold">Status</th></tr></thead><tbody>{pageRows.length ? pageRows.map(t => <tr key={t.id} className="border-b border-slate-100 last:border-0 hover:bg-blue-50/40"><td className="px-1.5 py-1.5 text-slate-500">{t.id}</td><td className="whitespace-nowrap px-1.5 py-1.5 font-medium text-[#24517e]">{t.patient}</td><td className="whitespace-nowrap px-1.5 py-1.5">{t.medicine}</td><td className="px-1.5 py-1.5">{t.qty}</td><td className="px-1.5 py-1.5">{t.unit}</td><td className="px-1.5 py-1.5">{t.total}</td><td className="whitespace-nowrap px-1.5 py-1.5 text-slate-500">{t.date}</td><td className="px-1.5 py-1.5"><span className={`rounded px-2 py-1 text-[9px] font-medium ${t.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>{t.status}</span></td></tr>) : <tr><td colSpan="8" className="px-3 py-8 text-center text-slate-400">No transactions found.</td></tr>}</tbody></table></div>
          <div className="mt-1 flex items-center justify-between text-[9px] text-slate-500"><span>Showing {pageRows.length} of {filtered.length} transactions</span><div className="flex items-center gap-1"><button disabled={page <= 1} onClick={() => setPage(p => p-1)} className="rounded border border-slate-200 px-2 py-1 disabled:opacity-30">Previous</button><span className="px-1">{page}</span><button disabled={page * pageSize >= filtered.length} onClick={() => setPage(p => p+1)} className="rounded border border-slate-200 px-2 py-1 disabled:opacity-30">Next</button></div></div>
        </section>
        <section className="min-h-0 rounded-lg border border-slate-100 bg-white/90 p-2 shadow-[0_2px_10px_rgba(35,90,145,.05)]"><PanelTitle icon={FileBarChart2} action="View All" onAction={() => go("reports", "Pharmacy Reports")}>Pharmacy Reports</PanelTitle><div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 2xl:grid-cols-6">{reports.map(({label,desc,icon:Icon,tone}) => <button key={label} onClick={() => go(label.toLowerCase().replaceAll(" ","-"),label)} className={`flex min-h-11.5 items-start gap-1 rounded-md border p-1 text-left transition hover:shadow-sm ${tones[tone]}`}><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/80"><Icon size={16}/></span><span className="min-w-0"><span className="block text-[10px] font-bold leading-4">{label}</span><span className="mt-0.5 block text-[9px] leading-3 opacity-75">{desc}</span></span></button>)}</div></section>
      </div>
      <aside className="flex min-h-0 min-w-0 flex-col gap-1.5 overflow-hidden">
        <section className="min-h-0 rounded-lg border border-slate-100 bg-white/90 p-2 shadow-[0_2px_10px_rgba(35,90,145,.05)]"><PanelTitle icon={AlertTriangle} action="View All" onAction={() => go("stock-alerts", "Stock Alerts")}>Stock Alerts</PanelTitle><div className="divide-y divide-slate-100">{stock.map(item => <div key={item.name} className="flex items-center justify-between gap-2 py-1 first:pt-0 last:pb-0"><div className="flex min-w-0 items-center gap-2"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700"><Pill size={13} fill="currentColor"/></span><span className="truncate text-[10px] font-medium text-slate-700">{item.name}</span></div><span className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-semibold ${item.color === "amber" ? "bg-amber-50 text-amber-700" : item.color === "slate" ? "bg-slate-100 text-slate-600" : "bg-rose-50 text-rose-700"}`}>{item.count} left</span></div>)}</div></section>
        <section className="min-h-0 rounded-lg border border-slate-100 bg-white/90 p-2 shadow-[0_2px_10px_rgba(35,90,145,.05)]"><PanelTitle icon={BarChart3}>Quick Statistics</PanelTitle><div className="grid grid-cols-2 gap-1.5"><div className="rounded-md border border-slate-100 p-2.5"><div className="mb-1 flex items-center gap-1.5 text-[9px] text-slate-500"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-700"><BadgeAfg size={24}/></span>This Month Sales</div><p className="text-sm font-extrabold text-[#174477]">؋ 284,650</p><p className="mt-1 flex items-center gap-1 text-[9px] font-semibold text-emerald-600"><TrendingUp size={10}/> 15%</p></div><div className="rounded-md border border-slate-100 p-2.5"><div className="mb-1 flex items-center gap-1.5 text-[9px] text-slate-500"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-700"><Users size={13}/></span>Total Patients</div><p className="text-sm font-extrabold text-[#174477]">186</p><p className="mt-1 flex items-center gap-1 text-[9px] font-semibold text-emerald-600"><TrendingUp size={10}/> 8%</p></div><div className="rounded-md border border-slate-100 p-2.5"><div className="mb-1 flex items-center gap-1.5 text-[9px] text-slate-500"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-700"><Pill size={13}/></span>Total Medicines</div><p className="text-sm font-extrabold text-[#174477]">152</p><p className="mt-1 flex items-center gap-1 text-[9px] font-semibold text-emerald-600"><TrendingUp size={10}/> 12%</p></div><div className="rounded-md border border-slate-100 p-2.5"><div className="mb-1 flex items-center gap-1.5 text-[9px] text-slate-500"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-rose-600"><AlertTriangle size={13}/></span>Low Stock Items</div><p className="text-sm font-extrabold text-[#174477]">7</p><p className="mt-1 flex items-center gap-1 text-[9px] font-semibold text-rose-600"><TrendingUp size={10}/> 3%</p></div></div></section>
      </aside>
    </div>
  </div>;
}
