function AppointmentPage(){
    return (
      // boock new Appoint ment card
        <div className="absolute right-30 left-[220px] mt-60  mr-[200px] h-[240px] w-260 -translate-y-38 bg-white rounded-xl border border-gray-200 shadow-sm  p-4">
        <div className="flex items-center gap-2 -translate-y-3">
            <i className="bi bi-calendar-plus text-blue-700  text-xl"></i>
            <div className="flex flex-col">
            <h2 className="text-sm  font-bold text-gary-800">
            Boock new Appointments
            </h2>
            <p className="mt-0 text-xs text-gray-500"> Enter appointment information</p>
            </div>
        </div>
        <div className="p-0">
   <div className="grid grid-cols-4 gap-3">
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Select Patient <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-person-fill absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <select
        type="text"
        placeholder="Enter your full name"
        className="h-7 w-full rounded-md border border-blue-100  pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      >
       <option >Search patient by name or phone</option>
           
           
          </select>
      </div>
      </div>
      <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Select Doctor <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="fa-solid fa-stethoscope pl-1.5  absolute left-1 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <select
        type="text"
       
        className="h-7 w-full rounded-md border border-blue-100  py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      >
            <option >Choose a doctor</option>
            <option>Dr. Ahmad Rahimi</option>
            <option>Dr. Mohammad Khan</option>
            <option>Dr. Ali Ahmad</option>
           
          </select>
    </div>
  </div>
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Appointment Date <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-calendar-plus absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

   <input   
        type="date"
       
        className="h-7 w-full rounded-md border border-blue-100  py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
     />
     
    </div>
  </div>
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Appointment Time <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-clock  absolute left-2 top-1/2 -translate-y-1/2 text-[14px] text-blue-700"></i>

      <input
        type="time"
        
        className="h-7 w-full rounded-md border border-blue-100  py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
      
    </div>
    
  </div>
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Department <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-hospital absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <select
        type="text"
        placeholder="Enter your full name"
        className="h-7 w-full rounded-md border border-blue-100  pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      >
       <option >Select Department</option>
           
           
          </select>
      </div>
      </div>
      <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Appointment Type <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-list-ul absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <select
        type="text"
        placeholder="Enter your full name"
        className="h-7 w-full rounded-md border border-blue-100  pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      >
       <option >New Visit</option>
       <option > Follow-up</option>

           
           
          </select>
      </div>
      </div>
  <div>
    <label className="mb-0.5 block text-[10px] font-semibold ">
      Note <span className="text-red-500">*</span>
    </label>

    <div className="relative ">
      <i className="bi bi-file-earmark-text absolute left-4 top-3 mr-30  -translate-y-1/2 text-[14px] text-blue-600"></i>

      <textarea
        type="text"
        placeholder="Enter reason for the appointment "
        className="h-14 w-full rounded-md border border-blue-100  py-1 pl-8 pr-3 pt-1 border border-gray-200  text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
     ></textarea> 
    </div>
  </div>
  </div>
  <div className="flex items-center Justify-between mt-1 pt-1 border-gray-100">
    <button type="button" className="flex items-center gap-2 shrink-0 px-2 py-2 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 ">
        <i className="bi bi-calendar2-plus"></i>
        Boock Appointment
    </button>

    <button type="button" className="flex items-center gap-2 px-6 py-2 text-xs font-medium text-gray-600 border border-gray-200 ml-4 rounded-md hover:bg-gray-100 ">
        <i className="bi bi-arrow-repeat"></i>
        Reset
    </button>
    </div>
    
    {/*  Appointments   */}
    <div className="  bg-white mt-3 w-260 h-70 rounded-xl border border-gray-200  -translate-x-4.5 shadow-sm p-2">
        <div className=" flex items-center gap-2 ">
         <i className="bi bi-calendar-plus text-blue-600 text-[18px]"> </i>
         <h2 className="text-sm font-bold text-gray-600 ">
          Appointments
         </h2>

        </div>
        <div className="relative -top-7.5 flex items-center  gap-3    ">
          <div className="relative ">
          <i className="  absolute bi bi-search abolute top-2   ml-180   text-gray-400 text-xs"></i>
          <input type="text" placeholder="Search Patient by phone Number" 
          className="  w-56 h-8 pl-8 pr-3 ml-178  border border-blue-100 rounded-md text-xs outline-none text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 " />
        
          </div>
          <button type="button" className="h-7 px-4 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400">
            Search
          </button>
        
        </div>
       
              <div className="grid grid-cols-4">
          <div  className="relative ">
            <i className=" bi bi-calendar3 absolute left-3 top-1/2 z-10  -translate-y-10 text-blue-700"></i>
           
          
            <select className="h-6 w-45 -translate-y-7 outline-none rounded-lg   border border-gray-400  bg-white pl-10 pr-9 text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 text-[13px]  ">
           
              <option >All Dates</option>
              <option >Today</option>
              <option >tomarrow</option>
              <option >This Week </option>
              <option >This Month</option>
            </select>
            
          </div>
       
          <div  className="relative">
            <i className=" bi bi-clock absolute left-3 top-1/2 z-10 text-size[12px]   -translate-y-10 -translate-x-17 text-blue-700"></i>
           
          
            <select className="h-6 w-45 -translate-y-7 -translate-x-16  outline-none rounded-lg   border border-gray-400  bg-white pl-10 pr-9 text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 text-[13px]  ">
           
              <option >All Status</option>
              <option >Confirmed</option>
              <option >Pending</option>
              <option >Completed </option>
              <option >Cancelled</option>
            </select>
            
          </div>
          <div  className="relative">
            <i className=" fa-solid fa-stethoscope  absolute left-3 top-1/2 z-10    -translate-y-9 -translate-x-33 text-blue-600"></i>
           
          
            <select className="h-6 w-45 -translate-y-7 -translate-x-32  outline-none rounded-lg   border border-gray-400  bg-white pl-10 pr-9 text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 text-[13px]  ">
           
              <option >All Doctors</option>
              <option >Dr. Sarah Khan</option>
              <option >Dr. Ali</option>
              <option >Dr. Ahmad</option>
              <option >Dr. faizi</option>
            </select>
            
          </div>
          <div  className="relative">
            <i className=" bi bi-hospital  absolute left-3 top-1/2 z-10    -translate-y-10 -translate-x-49 text-blue-700"></i>
           
          
            <select className="h-6 w-45 -translate-y-7 -translate-x-48  outline-none rounded-lg   border border-gray-400  bg-white pl-10 pr-9 text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 text-[13px]  ">
           
              <option >All Departments</option>
              <option >Cardiology</option>
              <option >General Medicine</option>
              <option >Orthopidics</option>
              <option >Pediarics</option>
            </select>
           
          </div>
          
          <button className="h-6 w-25 rounded-lg -translate-y-13 translate-195 border border-gray-300 bg-white  text-sm font-medium text-blue-600 hover:bg-blue-100">
            <i className="bi bi-funnel-fill text-blue-600 mr-1 "></i>
              Clear Filter
          </button>
        
          
          </div>
          
         {/* Table */}
<div className="mt-0 overflow-x-auto -translate-y-12">
  <table className="w-full text-xs text-left">

    <thead className="bg-slate-100 border-y border-slate-100">
      <tr>
        <th className="px-3 py-2 font-semibold text-gray-600">
          #
        </th>
        <th className="px-3 py-2 font-semibold text-gray-600">
          Appointment ID
        </th>
            
        <th className="px-3 py-2 font-semibold text-gray-600">
          Patient
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
        Doctor
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Date
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Time  
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Department
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Type
        </th>
        <th className="px-3 py-2 font-semibold text-gray-600">
            Status
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600 text-center">
          Actions
        </th>
      </tr>
    </thead>

   
    <tbody>

      <tr className="border-b border-gray-100 hover:bg-gray-200">

        <td className="px-3 py-2 text-gray-600">
          P-001
        </td>

        <td className="px-3 py-2 font-medium text-gray-800">
          Ahmad Khan
        </td>

        <td className="px-3 py-2 text-gray-600">
          32
        </td>

        <td className="px-3 py-2 text-gray-600">
          Male
        </td>

        <td className="px-3 py-2 text-gray-600">
          0701234567
        </td>

        <td className="px-3 py-2 text-gray-600">
          Dr. Ahmad
        </td>

        <td className="px-3 py-2 text-gray-600">
          24 Sep 2026
        </td>
        <td className="px-3 py-2 text-gray-600">
          new 
        </td>
        <td className=" relative">
          <span className=" rounded-md  bg-green-100 px-3 py-1  z-10  items-cemter  text-[10px] font-medium text-green-1">
          Confirmed
          </span>
        </td>

        <td className="px-0 py-2">
          <div className="flex items-center  justify-center  gap-2">

            <button className="text-blue-600 hover:text-blue-300 ">
              <i className="bi bi-eye text-[15px ] rounded-md  bg-blue-100 px-3 py-1  z-10  items-cemter  text-[10px] font-medium text-green-1"></i>
            </button>

            <button className="text-gray-600 hover:text-blue-300">
              <i className="bi bi-pencil text-[15px]rounded-md  bg-blue-100 px-3 py-1  z-10  items-cemter  text-[10px] font-medium text-gren-1"></i>
            </button>

            <button className="text-red-500 hover:text-red-700">
              <i className="bi bi-trash text-[15px]rounded-md  bg-red-100 px-3 py-1  z-10  items-cemter  text-[10px] font-medium text-green-1"></i>
            </button>

          </div>
        </td>

      </tr>

    </tbody>

  </table>
</div>
        </div>
        
  </div>
  <div className="flex items-center justify-between -translate-y-14.5 px-2">

{/* Showing */}
<p className="text-[11px] translate-y-2.5 text-slate-500">
  Showing <span className="font-medium text-slate-700">1 to 6</span> of{" "}
  <span className="font-medium text-slate-700">42</span> appointments
</p>

{/* Pagination */}
<div className="flex items-center gap-1">

  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500">
    <i className="bi bi-chevron-left text-[11px]"></i>
  </button>

  <button className="h-8 w-8 rounded-md bg-blue-600 text-[11px] font-medium text-white">
    1
  </button>

  <button className="h-8 w-8 rounded-md border border-slate-200 text-[11px] text-slate-600">
    2
  </button>

  <button className="h-8 w-8 rounded-md border border-slate-200 text-[11px] text-slate-600">
    3
  </button>

  <button className="h-8 w-8 rounded-md border border-slate-200 text-[11px] text-slate-600">
    4
  </button>

  <button className="h-8 w-8 rounded-md border border-slate-200 text-[11px] text-slate-600">
    5
  </button>

  <button className="h-8 w-8 rounded-md border border-slate-200 text-[11px] text-slate-600">
    ...
  </button>

  <button className="h-8 w-8 rounded-md border border-slate-200 text-[11px] text-slate-600">
    7
  </button>

  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500">
    <i className="bi bi-chevron-right text-[11px]"></i>
  </button>

</div>
</div>
        </div>
    );
}
export default AppointmentPage;