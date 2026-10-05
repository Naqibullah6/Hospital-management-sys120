function PatientDoctor() {
    return (
      <div>
      <div className="rounded-xl border border-gray-200 bg-white p-2 mb-3 -translate-y-38">

  
        {/* Select Doctor Header */}
        <div className="flex items-center gap-3 ">
          <i className="fa-solid fa-stethoscope pl-1.5 "></i>
  
          <h2 className="text-sm font-bold text-gray-800">
            Select Doctor
          </h2>
        </div>
  
        {/* Doctor Select */}
        <div className="relative  mt-1">
            <i className="bi bi-person-circle  absolute left-2   top-3.5 -translate-y-1/2  text-lg text-gray-500"  ></i>
          <select
            className="w-full mt-0 rounded-lg border border-gray-200 bg-white pl-7 px-4 py-1 text-xs  font-semibold  text-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
          >
           
            <option >Choose a doctor</option>
            <option>Dr. Ahmad Rahimi</option>
            <option>Dr. Mohammad Khan</option>
            <option>Dr. Ali Ahmad</option>
           
          </select>
        </div>
      
  
        {/* Selected Doctor */}
        <div className="mt-1 rounded-md bg-blue-50 p-0 px1">
          <div className="flex items-center gap-3">
  
            {/* Doctor Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <i className="bi bi-person-badge-fill text-2xl text-blue-600"></i>
            </div>
  
            {/* Doctor Information */}
            <div>
              <h3 className="text-xs font-semibold text-gray-800 ">
                Dr. Ahmad Rahimi
              </h3>
  
              <p className="text-xs text-gray-500 ">
                Cardiologist
              </p>
  
              <p className="mt-1 text-xs text-blue-500 -translate-y-1 font-bold">
                Fee: AFN 200
              </p>
            </div>
  
          </div>
          
        </div>
      
      </div>
      {/* Consultation / Doctor Fee */}
<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 pt-1  -translate-y-40">

{/* Header */}
<div className="flex items-center gap-2 mb-0.5">
  <span className="absulte left-2  top-6 flex items-center justify-center w-7 h-7 rounded-full  border border-blue-500  text-[10px] font-bold text-blue-500 ">
        AFN
  </span>

  <h2 className="text-sm font-semibold text-gray-800">
    Consultation / Doctor Fee
  </h2>
</div>

{/* Doctor Fee */}
<div className="mb-0.5">
  <label className="mb-1 block text-[10px] font-semibold text-gray-700">
    Doctor Fee
  </label>

  <div className="relative">
    <span className=" absolute left-1 top-1/2 -translate-y-1/2 text-[11px] text-blue-500 font-bold">
      AFN
    </span>
    
        
    <input
        type="text"
        placeholder="Enter Doctor Fee  "
        className="h-7 w-full  rounded-md border border-blue-100  py-1 pl-8 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400  focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
  </div>
</div>

{/* Payment Type */}
<div className="mb-0.5">
  <label className="mb-1 block text-[10px] font-semibold text-gray-700">
    Payment Type
  </label>

  <div className="relative">
    <i className="bi bi-credit-card absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

    <select
      className="h-7 w-full appearance-none rounded-md border border-blue-100 bg-white pl-7 pr-7 text-[11px] text-slate-600 outline-none"
      defaultValue="Cash"
    >
      <option value="Cash">Cash</option>
      <option value="Card">Card</option>
      <option value="Bank Transfer">Bank Transfer</option>
    </select>

    <i className="bi bi-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-gray-500 pointer-events-none"></i>
  </div>
</div>

{/* Payment Status */}
<div className="mb-0.5">
  <label className="mb-1 block text-[10px] font-semibold text-gray-700">
    Payment Status
  </label>

  <div className="relative">
    <i className="bi bi-check-lg absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-green-500"></i>

    <select
      className="h-7 w-full appearance-none rounded-md border border-blue-100 bg-white pl-7 pr-7 text-[11px] text-slate-600 outline-none"
      defaultValue="Paid"
    >
      <option value="Paid">Paid</option>
      <option value="Pending">Pending</option>
      <option value="Unpaid">Unpaid</option>
    </select>

    <i className="bi bi-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-gray-500 pointer-events-none"></i>
  </div>
</div>

{/* Payment Date */}
<div>
  <label className="mb-0.5 block text-[10px] font-semibold text-gray-700">
    Payment Date
  </label>

  <div className="relative">
    <i className="bi bi-calendar-event absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

    <input
      type="date"
      defaultValue="2025-09-20"
      className="h-7 w-full rounded-md border border-blue-100 bg-white pl-7 pr-2 text-[11px] text-slate-600 outline-none"
    />
  </div>
</div>

</div>
      </div>
    );
  }
  
  export default PatientDoctor;