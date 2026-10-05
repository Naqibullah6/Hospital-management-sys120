# HospitalCare — Pharmacy Dashboard

## Stack
- React
- Tailwind CSS
- Bootstrap Icons (`bootstrap-icons`)

## Install
```bash
npm install bootstrap-icons
```

If Tailwind is already configured in your project, no other dependency is required.

## Files
- `src/PharmacyDashboard.jsx` — pharmacy dashboard UI
- `src/HospitalSidebar.jsx` — sidebar with expandable Pharmacy menu
- `src/MainDashboard.jsx` — example integration into the main dashboard
- `public/pharmacy-banner.jpg` — cropped banner from the supplied prototype

## Integration
1. Copy `PharmacyDashboard.jsx` into your components folder.
2. Copy the sidebar logic from `HospitalSidebar.jsx` into your existing sidebar, or use the provided component.
3. In your existing main dashboard, show `<PharmacyDashboard />` when `activePage === "pharmacy"` (and for the pharmacy submenu pages).
4. Make sure your `index.css` / Tailwind setup is working.
5. Import Bootstrap Icons once:
```js
import "bootstrap-icons/font/bootstrap-icons.css";
```

The layout intentionally uses Tailwind classes rather than Bootstrap CSS, while Bootstrap Icons are used for the icons.
