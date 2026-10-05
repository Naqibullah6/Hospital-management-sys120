function PatientInformation(){
 
   return (
    <div className="absolute right-30 left-55 mt-0  mr-50 h-75 -translate-y-38 bg-white rounded-xl border border-gray-200 shadow-sm  p-4">
        <div className="flex items-center gap-2 mb-1">
            <i className="bi bi-person-fill text-blue-600  text-lg"></i>
            <h2 className="text-sm font-semibold text-gary-800">
                Patient Information
            </h2>
       
        </div>
        <div className="p-0">
   <div className="grid grid-cols-2 gap-3">
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Full Name <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-person absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <input
        type="text"
        placeholder="Enter your full name"
        className="h-7 w-full rounded-md border border-blue-100  pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
      </div>
      </div>
      <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Patient ID <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-card-text absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <input
        type="text"
        placeholder="Auto Generated"
        className="h-7 w-full rounded-md border border-blue-100  py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
    </div>
  </div>
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Gender <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-calendar-event absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <input
        type="text"
        placeholder="Enter Your Age"
        className="h-7 w-full rounded-md border border-blue-100  py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
    </div>
  </div>
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Phone Number <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-telephone  absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <input
        type="text"
        placeholder="Enter Phone Number"
        className="h-7 w-full rounded-md border border-blue-100  py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
    </div>
  </div>
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Address <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-geo-alt absolute left-4 top-3  -translate-y-1/2 text-[11px] text-blue-700"></i>

      <textarea
        type="text"
        placeholder="Enter Address"
        className="h-14 w-full rounded-md border border-blue-100  py-1 pl-8 pr-3 pt-1  text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
     ></textarea> 
    </div>
  </div>
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Notes <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-file-text absolute left-4 top-3  -translate-y-1/2 text-[11px] text-blue-700"></i>

      <textarea
        type="text"
        placeholder="Additional Notes (Optional)"
        className="h-14 w-full rounded-md border border-blue-100  py-1 pl-8 pr-3 pt-1  text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
     ></textarea> 
    </div>
  </div>
    </div>
  </div>
  <div className="flex items-center Justify-between mt-2 pt-1 border-gray-100">
    <button type="button" className="flex items-center gap-2 shrink-0 px-5 py-2 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 ">
        <i className="bi bi-floppy"></i>
        Save Patient
    </button>

    <button type="button" className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-600 border border-gray-200 ml-4 rounded-md hover:bg-gray-100 ">
        <i className="bi bi-arrow-counterclockwise"></i>
        Reset
    </button>
               
                
        <button type="button" className="flex items-center  gap-2 px-5 py-2 text-xs font-medium border border-gray-200  text-white bg-blue-500 ml-3 rounded-md hover:bg-blue-400 ">
        <i className="bi bi-printer"></i>
        Print
    </button>
        
    <button type="button" className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-600 border border-gray-200 ml-65 shrink-0 rounded-md hover:bg-gray-100 ">
        <i className="bi bi-arrow-left"></i>
        Back to List
    </button>   
          
        
    </div>  

   
    {/* Recent Patient  */}
    <div className="  bg-white mt-20 w-260 h-30 rounded-xl border border-gray-200  -translate-x-4.5 shadow-sm p-2">
        <div className=" flex items-center gap-2 ">
         <i className="bi bi-people-fill text-blue-600 text-[18px]"> </i>
         <h2 className="text-sm font-bold text-gray-600 ">
          Recent Patients
         </h2>

        </div>
        <div className="relative -top-7 flex items-center  gap-3    ">
          <div className="relative ">
          <i className="  absolute bi bi-search abolute top-2   ml-180   text-gray-400 text-xs"></i>
          <input type="text" placeholder="Search Patient by phone Number" 
          className="  w-56 h-8 pl-8 pr-3 ml-178  border border-blue-100 rounded-md text-xs outline-none text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 " />
        
          </div>
          <button type="button" className="h-7 px-4 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400">
            Search
          </button>
        </div>
        {/* Table */}
<div className="mt-0 overflow-x-auto -translate-y-6">
  <table className="w-full text-xs text-left">

    {/* Table Header */}
    <thead className="bg-slate-100 border-y border-slate-100">
      <tr>
        <th className="px-3 py-2 font-semibold text-gray-600">
          Patient ID
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Name
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Age
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Gender
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Phone
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Doctor
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600">
          Visit Date
        </th>

        <th className="px-3 py-2 font-semibold text-gray-600 text-center">
          Actions
        </th>
      </tr>
    </thead>

    {/* Table Body */}
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

        <td className="px-3 py-2">
          <div className="flex items-center justify-center gap-2">

            <button className="text-blue-600 hover:text-blue-800">
              <i className="bi bi-eye text-[15px]"></i>
            </button>

            <button className="text-gray-600 hover:text-gray-800">
              <i className="bi bi-pencil text-[15px]"></i>
            </button>

            <button className="text-red-500 hover:text-red-700">
              <i className="bi bi-trash text-[15px]"></i>
            </button>

          </div>
        </td>

      </tr>

    </tbody>

  </table>
</div>
    </div>
    
        
    </div>

);
}
export default PatientInformation;