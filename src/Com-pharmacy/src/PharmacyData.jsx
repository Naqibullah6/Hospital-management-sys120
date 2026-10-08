export const transactions = [
  { id: 1, patient: "Ahmad Khan", medicine: "Paracetamol 500mg", qty: 2, unit: 60, total: 120, date: "2025-09-20 10:15 AM", status: "Completed" },
  { id: 2, patient: "Fatima Noor", medicine: "Amoxicillin 250mg", qty: 3, unit: 90, total: 270, date: "2025-09-20 09:45 AM", status: "Completed" },
  { id: 3, patient: "Sayed Ali", medicine: "Ibuprofen 400mg", qty: 1, unit: 75, total: 75, date: "2025-09-20 09:20 AM", status: "Completed" },
  { id: 4, patient: "Zahra Mohammad", medicine: "Vitamin C 500mg", qty: 2, unit: 50, total: 100, date: "2025-09-20 08:50 AM", status: "Completed" },
  { id: 5, patient: "Abdul Basir", medicine: "Omeprazole 20mg", qty: 1, unit: 110, total: 110, date: "2025-09-19 04:30 PM", status: "Completed" },
  { id: 6, patient: "Rafiullah", medicine: "Metformin 500mg", qty: 2, unit: 70, total: 140, date: "2025-09-19 03:15 PM", status: "Completed" },
  { id: 7, patient: "Noor Ahmad", medicine: "Ciprofloxacin 500mg", qty: 1, unit: 95, total: 95, date: "2025-09-19 11:20 AM", status: "Pending" },
  { id: 8, patient: "Shabnam Rahimi", medicine: "Atorvastatin 20mg", qty: 1, unit: 130, total: 130, date: "2025-09-19 10:05 AM", status: "Completed" },
];

export const stock = [
  { name: "Amoxicillin 250mg", count: 5, color: "rose" },
  { name: "Vitamin C 500mg", count: 3, color: "rose" },
  { name: "Atorvastatin 20mg", count: 2, color: "rose" },
  { name: "Salbutamol 2mg", count: 15, color: "amber" },
  { name: "Omeprazole 20mg", count: 0, color: "slate" },
];

export const actions = [
  {
    label: "Add Medicine",
    desc: "Add new medicine to inventory",
    icon: "bi-plus-circle",
    tone: "blue",
    key: "add-medicine",
  },
  {
    label: "View Inventory",
    desc: "Check stock and details",
    icon: "bi-box-seam",
    tone: "green",
    key: "inventory",
  },
  {
    label: "Dispense Medicine",
    desc: "Give medicine to patient",
    icon: "bi-capsule",
    tone: "purple",
    key: "dispense",
  },
  {
    label: "Patient Billing",
    desc: "Generate bill for patient",
    icon: "bi-receipt",
    tone: "orange",
    key: "billing",
  },
  {
    label: "Pharmacy Reports",
    desc: "View reports & analytics",
    icon: "bi-bar-chart-line",
    tone: "pink",
    key: "reports",
  },
];

export const reports = [
  ["Daily Sales", "View today's sales", "bi-calendar-day", "blue"],
  ["Monthly Sales", "View monthly report", "bi-bar-chart", "green"],
  ["Medicine Usage", "Usage statistics", "bi-activity", "purple"],
  ["Low Stock Report", "Low stock items", "bi-exclamation-triangle", "pink"],
  ["Expired Medicines", "Expired items", "bi-clock-history", "orange"],
  ["Purchase Report", "Purchase history", "bi-clipboard-data", "blue"],
];

export const tones = {
  blue: "bg-sky-50 text-sky-700 border-sky-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  purple: "bg-violet-50 text-violet-700 border-violet-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
  pink: "bg-pink-50 text-pink-700 border-pink-100",
  rose: "bg-rose-50 text-rose-700 border-rose-100",
};