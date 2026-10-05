
import { useState } from "react";
// import Header from "./components/header";
import Sidebar from "./components/Sidebar";
// import PharmacyDashboard from "./Com-pharmacy/src/components/Pharmacy/PharmacyDashboard";
import PharmacyDashboard from "./Com-pharmacy/src/PharmacyDashboard (5)";

function App() {
  const [activePage, setActivePage] = useState("pharmacy");

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[#f4f9ff]">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <div className="ml-50 flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="shrink-0">
          {/* <Header /> */}
        </div> 
        

        <main className="min-h-0 min-w-0 flex-1 overflow-hidden">
          {activePage === "pharmacy" ? (
            <PharmacyDashboard />
          ) : (
            <div className="p-6">
              <h1 className="text-xl font-bold text-[#123e7b]">
                {activePage === "dashboard"
                  ? "Main Dashboard"
                  : activePage}
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Select a section from the sidebar.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;