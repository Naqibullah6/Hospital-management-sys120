import { useState } from "react";
function Sidebar({ activePage, onNavigate }) {
  const [patientOpen,setPatientOpen]=useState(false);
  const [doctorOpen, setDoctorOpen]= useState(false);
  const [appointmentOpen, setAppointmentOpen]=useState(false);
  const [pharmacyOpen, setPharmacyOpen] = useState(false);
    return (

        
        <aside className="fixed left-0 top-0 h-screen w-50 overflow-hidden bg-[linear-gradient(180deg,#075a9e_0%,#064b8c_48%,#03376e_100%)]">
            <div className="relative z-10">

<div className="relative z-10 flex items-center gap-2 px-5 pt-4">
  <div className="flex h-11 w-11 items-center justify-center">
    <i className="bi bi-heart-pulse-fill bg-linear-to-br from-cyan-300 to-blue-700 bg-clip-text text-[42px] leading-none text-transparent  ">
        
    </i>
  </div>

  <div className="leading-none">
    <h1 className="text-[20px] font-bold tracking-tight text-white">
      Hospital<span className="text-cyan-500">Care</span>
    </h1>

    <p className="mt-1 text-[10px] text-blue-100">
      Management System
    </p>
  </div>
</div>
<div className="relative z-10 mt-1 px-3">
  <button
    type="button"
    className="flex h-9 w-full items-center gap-1 rounded-md px-3 text-left text-[11px] font-medium text-white transition hover:bg-white/10"
  >
    <i className="bi bi-house-door-fill text-base"></i>
    Dashboard
  </button>

</div>
<button
  type="button"
  onClick={()=> setPatientOpen(!patientOpen)}
  className="flex h-9 w-full items-center justify-between rounded-md  px-3 text-left text-[11px] font-semibold text-white shadow-sm hover:bg-white/10"
>
  <span className="flex items-center gap-3">
    <i className="bi bi-person-fill text-base"></i>
    Patient Management
  </span>

  <i className={ `bi ${patientOpen ? "bi-chevron-down" : "bi-chevron-right"} text-[9px]`} ></i>
</button>


  {patientOpen && (

    <>
<button

  type="button"
  className="mt-1 flex h-5 w-full items-center rounded-md  pl-8 text-[10px] font-medium text-white transition hover:bg-white/10"
>
  Patient Registration
</button>
<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Add Patient
</button>

<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  View Patients
</button>

<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Update Patient
</button>

<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Delete Patient
</button>

<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Search Patient
</button>

<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Patient Details
</button>
</>

)}
<button
  type="button"
  onClick={()=> setDoctorOpen(!doctorOpen)}
  className="mt-2 flex h-8 w-full items-center justify-between rounded-md px-3 text-[11px] font-medium text-white hover:bg-white/10"
>
  <span className="flex items-center gap-3">
  <i className="fa-solid fa-stethoscope"></i>
    Doctor
  </span>

  <i className={ `bi ${doctorOpen ? "bi-chevron-down" : "bi-chevron-right"} text-[9px]`} ></i>
</button>
{doctorOpen && (

<>
<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Manage Doctors
</button>

<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Doctor Fee
</button>
</>
)}

<button
  type="button"
  onClick={()=> setAppointmentOpen(!appointmentOpen)}
  className="mt-2 flex h-8 w-full items-center justify-between rounded-md px-3 text-[11px] font-medium text-white hover:bg-white/10"
>
  <span className="flex items-center gap-3">
  <i className="fa-solid fa-stethoscope"></i>
    Appointment
  </span>

  <i className={ `bi ${appointmentOpen ? "bi-chevron-down" : "bi-chevron-right"} text-[9px]`} ></i>
</button>
{appointmentOpen && (

<>
<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Boock Appointment
</button>

<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  View Appointments
</button>
<button className="flex h-6 w-full items-center pl-8 text-[10px] text-blue-100 hover:text-white">
  Manage Schedule
</button>
</>
)}

<button className="flex h-8 w-full items-center justify-between rounded-md px-3 text-[11px] font-medium text-white hover:bg-white/10">
  <span className="flex items-center gap-3">
    <i className="bi bi-flask text-base"></i>
    Laboratory
  </span>
  <i className="bi bi-chevron-right text-[9px]"></i>
</button>


{/* Pharmacy Menu */}
<button
  type="button"
  onClick={() => {
    setPharmacyOpen(!pharmacyOpen);
    if (activePage !== "pharmacy") {
      onNavigate("pharmacy");
    }
  }}
  className={`flex h-9 w-full items-center justify-between rounded-md px-3 text-[11px] font-semibold transition ${
    activePage === "pharmacy"
      ? "bg-white/15 text-white shadow-sm"
      : "text-white hover:bg-white/10"
  }`}
>
  <span className="flex items-center gap-3">
    <i className="bi bi-capsule text-base" />
    Pharmacy
  </span>

  <i
    className={`bi ${
      pharmacyOpen ? "bi-chevron-down" : "bi-chevron-right"
    } text-[9px]`}
  />
</button>

{pharmacyOpen && (
  <div className="ml-3 border-l border-blue-300/40 pl-3">
    {[
      ["Add Medicine", ],
      ["View Inventory", ],
      ["Dispense Medicine", ],
      ["Patient Billing", ],
      ["Pharmacy Reports", ],
    ].map(([label, icon]) => (
      <button
        key={label}
        type="button"
        onClick={() => onNavigate(label)}
        className="flex h-7 w-full items-center gap-2 rounded-md px-2 text-left text-[10px] text-blue-100 transition hover:bg-white/10 hover:text-white"
      >
        <i className={`bi ${icon} text-xs`} />
        {label}
      </button>
    ))}
  </div>
)}



<button className="flex h-8 w-full items-center justify-between rounded-md px-3 text-[11px] font-medium text-white hover:bg-white/10">
  <span className="flex items-center gap-3">
    <i className="bi bi-file-earmark-text text-base"></i>
    Billing
  </span>
  <i className="bi bi-chevron-right text-[9px]"></i>
</button>

<button className="flex h-8 w-full items-center justify-between rounded-md px-3 text-[11px] font-medium text-white hover:bg-white/10">
  <span className="flex items-center gap-3">
    <i className="bi bi-bar-chart-fill text-base"></i>
    Reports
  </span>
  <i className="bi bi-chevron-right text-[9px]"></i>
</button>
<div className="absolute -bottom-6 -left-2 z-10 flex w-full items-center gap-2 px-5">
  <i className="bi bi-activity text-xl text-cyan-300"></i>

  <span className="text-[8px] text-blue-100">
    Better Care
    <span className="mx-1 text-cyan-500">•</span>
    Healthier Tomorrow
  </span>
</div>
</div>
<svg
    // sidebar design start
    
  viewBox="0 0 200 180"
  className="absolute bottom-0 left-0 h-25 w-full"
  preserveAspectRatio="none"
 
> 
  <path
    d="M0 70 C45 116, 104 82, 200 18 V180 H0 Z"
    fill="#0b5ca1"
    opacity="0.9"
  />

 
  <path
    
    d="M0 70 C45 116, 104 82, 200 18"
    fill="none"
    stroke="#2e8fd5"
    strokeWidth="1.2"
    opacity="0.7"
  />
  <path
    d="M0 125 C60 92, 128 132, 200 88 V180 H0 Z"
    fill="#064783"
    opacity="0.45"
    // end of sidebar design
  />
</svg>
    </aside>


    );
  }
  
  export default Sidebar;