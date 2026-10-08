import { tones } from "./PharmacyData";

export function Icon({ name, size = "16px", className = "" }) {
  if (name === "afn") {
    return (
      <span
        className={`inline-flex items-center justify-center font-bold ${className}`}
        style={{
          fontSize: size,
          lineHeight: 1,
        }}
      >
        AFN
      </span>
    );
  }

  return (
    <i
      className={`bi ${name} ${className}`}
      style={{ fontSize: size }}
    />
  );
}

export function PanelTitle({ icon, children, action, onAction }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
          <Icon name={icon} />
        </span>

        <h2 className="text-[13px] font-bold text-[#174477]">
          {children}
        </h2>
      </div>

      {action && (
        <button
          onClick={onAction}
          className="text-[10px] font-semibold text-blue-700"
        >
          {action}
          <Icon
            name="bi-arrow-right"
            size="11px"
            className="ml-1"
          />
        </button>
      )}
    </div>
  );
}

export function StatCard({
  icon,
  label,
  value,
  change,
  note,
  tone = "blue",
  negative = false,
}) {
  return (
    <div className="flex min-w-0 items-start gap-2 rounded-lg bg-white/90 p-2 shadow-sm">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tones[tone]}`}
      >
        <Icon name={icon} />
      </span>

      <div className="min-w-0">
        <p className="text-[10px] text-slate-600">
          {label}
        </p>

        <p className="text-lg font-extrabold text-[#174477]">
          {value}
        </p>

        <p
          className={`flex items-center gap-1 text-[10px] font-semibold ${
            negative
              ? "text-rose-600"
              : "text-emerald-700"
          }`}
        >
          <Icon
            name={
              negative
                ? "bi-exclamation-triangle"
                : "bi-graph-up-arrow"
            }
            size="11px"
          />
          {change}
        </p>

        <p className="text-[9px] text-slate-500">
          {note}
        </p>
      </div>
    </div>
  );
}

export function DynamicPage({ page, onBack }) {
  const pages = {
    "add-medicine": [
      "Add Medicine",
      "bi-plus-circle",
      "Add a new medicine to inventory.",
    ],
    inventory: [
      "Medicine Inventory",
      "bi-box-seam",
      "Manage pharmacy inventory.",
    ],
    dispense: [
      "Dispense Medicine",
      "bi-capsule",
      "Dispense medicine to patients.",
    ],
    billing: [
      "Patient Billing",
      "bi-receipt",
      "Create patient pharmacy bills.",
    ],
    reports: [
      "Pharmacy Reports",
      "bi-bar-chart-line",
      "View pharmacy reports and analytics.",
    ],
    transactions: [
      "Pharmacy Transactions",
      "bi-clipboard-data",
      "View all pharmacy transactions.",
    ],
    "stock-alerts": [
      "Stock Alerts",
      "bi-exclamation-triangle",
      "View medicines that need attention.",
    ],
  };

  const current = pages[page];

  if (!current) return null;

  return (
    <div className="h-full bg-[#f4faff] p-3">
      <div className="rounded-xl bg-white p-5 shadow-sm">

        <button
          onClick={onBack}
          className="mb-5 flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-slate-600"
        >
          <Icon name="bi-arrow-left" />
          Back to Dashboard
        </button>

        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <Icon name={current[1]} size="22px" />
          </span>

          <div>
            <h1 className="text-xl font-bold text-[#174477]">
              {current[0]}
            </h1>

            <p className="text-sm text-slate-500">
              {current[2]}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}