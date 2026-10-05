function CreateAccount({onBackToLogin}){
    return (
        <div className="absolute! right-9 top-3 h-[95vh] w-[35vw] rounded-[26px] bg-white p-3  animate-[cardEnter_700ms_ease-out_forwards]">

<svg
  viewBox="0 0 500 180"
  preserveAspectRatio="none"
  className="pointer-events-none absolute right-0 top-0 h-40 w-full"
>
 

  <path
    d="M300 0H500V102C455 97 419 76 385 44C360 19 330 5 298 0Z"
    fill="#d7efff"
    opacity="0.5"
  />
</svg>
<div className="relative z-0 flex justify-center pt-0">
  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100/80">
    <i className="bi bi-person-add text-2xl text-blue-700"></i>
  </div>
</div>
<div className="relative z-10 mt-1 text-center">
  <h1 className="text-lg font-bold ">
    Create Account
  </h1>
</div>
<p className="mt-1 text-center font-semibold text-[10px] leading-3 text-blue-300">
  Join our healthcare team and make a difference
  <br />
  Create your account to access the Hospital Management System
</p>
<div className="relative z-10 mt-1 overflow-hidden rounded-lg border border-blue-100">
  <div className="flex items-center gap-2 bg-blue-50 px-1 py-1">
    <i className="bi bi-person-gear text-base text-blue-700"></i>

    <div>
      <h2 className="text-[10px] font-bold ">
        Account Information
      </h2>

      <p className="text-[7px] text-slate-400">
        Provide your personal and contact details
      </p>
    </div>
  </div>

  <div className="p-1">
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
      Email Address <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-envelope absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <input
        type="email"
        placeholder="Enter your email address"
        className="h-7 w-full rounded-md border border-blue-100  py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
    </div>
  </div>
</div>
 
<div className="mt-1 grid grid-cols-2 gap-3">
  <div>
    <label className="mb-1 block text-[10px] font-semibold ">
      Username <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-person absolute left-2 top-1/2 -translate-y-1/2 text-[12px] text-blue-700"></i>

      <input
        type="text"
        placeholder="Choose a username"
        className="h-7 w-full rounded-md border border-blue-100 bg-white py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
    </div>
  </div>

  <div>
    <label className="mb-1 block text-[11px] font-semibold ">
      Phone Number <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-telephone absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-blue-700"></i>

      <input
        type="tel"
        placeholder="Enter your phone number"
        className="h-7 w-full rounded-md border border-blue-100 bg-white py-1 pl-7 pr-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
    </div>
  </div>
</div>
<div className="mt-1 grid grid-cols-2 gap-3">
  <div>
    <label className="mb-1 block text-[11px] font-semibold ">
      Password <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-lock absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <input
        type="password"
        placeholder="Enter your password"
        className="h-7 w-full rounded-md border border-blue-100 bg-white py-1 pl-7 pr-7 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />

      <i className="bi bi-eye-slash absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>
    </div>
  </div>

  <div>
    <label className="mb-1 block text-[11px] font-semibold ">
      Confirm Password <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-lock absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <input
        type="password"
        placeholder="Confirm your password"
        className="h-7 w-full rounded-md border border-blue-100 py-1 pl-7 pr-7 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />

      <i className="bi bi-eye-slash absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>
    </div>
  </div>
</div>
  </div>
</div>
<div className="relative z- mt-0 overflow-hidden rounded-lg border border-blue-100">
  <div className="flex items-center gap-1 bg-blue-50 px-1 py-1">
    <i className="bi bi-person-gear text-base text-blue-700"></i>

    <div>
      <h2 className="text-[10px] font-bold ">
        Role & Access Control
      </h2>

      <p className="text-[7px] text-slate-400">
        Assign a role and set permissions for this account
      </p>
    </div>
  </div>

  <div className="p-1">
  <div className="grid grid-cols-2 gap-3">
  <div>
    <label className="mb-1 block text-[11px] font-semibold ">
      User Role <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-person-badge absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-blue-700"></i>

      <select
        defaultValue=""
        className="h-7 w-full appearance-none rounded-md border border-blue-100 py-1 pl-7 pr-6 text-[11px] text-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      >
        <option value="" disabled>
          Select a role
        </option>
       
        <option>Administrator</option>
        <option>Nurse</option>
        <option>Receptionist</option>
       
      </select>

      <i className="bi bi-chevron-down pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[7px] text-blue-700"></i>
    </div>
  </div>

  <div>
    <label className="mb-1 block text-[11px] font-semibold ">
      Department <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <i className="bi bi-building absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-blue-700"></i>

      <select
        defaultValue=""
        className="h-7 w-full appearance-none rounded-md border border-blue-100 bg-white py-1 pl-7 pr-6 text-[11px] text-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      >
        <option value="" disabled>
          Select department
        </option>

        <option>Reception</option>
        <option>Laboratory</option>
        <option>Pharmacy</option>
        <option>Administration</option>
      </select>

      <i className="bi bi-chevron-down pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[7px] text-blue-700"></i>
    </div>
  </div>
</div>
<div className="mt-1">
  <div>
    <h3 className="flex items-center gap-1 text-[10px] font-bold text-[#1c3c63]">
      <i className="bi bi-shield-check text-[9px] text-blue-700"></i>
      Permissions
    </h3>

    <p className="text-[8px] text-slate-400">
      Choose the areas this user can access
    </p>
  </div>

  <div className="mt-1 grid grid-cols-[1.3fr_1fr] gap-4">
    <div className="grid grid-cols-2 gap-x-0 gap-y-1">
      <label className="flex items-center gap-1 font-bold text-[8px] text-slate-600">
        <input type="checkbox" defaultChecked className="h-3 w-3 accent-blue-600" />
        View Patient Records
      </label>

      <label className="ml-3 flex items-center gap-1 font-bold text-[8px] text-slate-600">
        <input type="checkbox" className="h-3 w-3 accent-blue-600" />
        Access Pharmacy
      </label>

      <label className="flex items-center gap-1 whitespace-nowrap font-bold text-[8px] leading-none text-slate-600">
  <input
    type="checkbox"
    defaultChecked
    className="h-3 w-3 shrink-0 accent-blue-600"
  />
  Add /Edit Patient Records
</label>

      <label className=" ml-3 flex items-center gap-1 font-bold text-[8px] text-slate-600">
        <input type="checkbox" className="h-3 w-3 accent-blue-600" />
        Access Laboratory
      </label>

      <label className="flex items-center gap-1 font-bold text-[8px] text-slate-600">
        <input type="checkbox" defaultChecked className="h-3 w-3 accent-blue-600" />
        Manage Appointments
      </label>

      <label className="ml-3 flex items-center gap-1  font-bold text-[8px] text-slate-600">
        <input type="checkbox" className="h-3 w-3 accent-blue-600" />
        Manage Users
      </label>

      <label className="flex items-center gap-1 font-bold text-[8px] text-slate-600">
        <input type="checkbox" className="h-3 w-3 accent-blue-600" />
        Access Billing
      </label>

      <label className="ml-3 flex items-center gap-1 font-bold text-[8px] text-slate-600">
        <input type="checkbox" className="h-3 w-3 accent-blue-600" />
        System Settings
      </label>
    </div>

    <div className="flex items-start gap-1 rounded-md bg-blue-50 p-2">
      <i className="bi bi-shield-lock text-base text-blue-600"></i>

      <div>
        <h4 className="text-[10px] font-bold text-[#1c3c63]">
          Role-based Access Control
        </h4>

        <p className="mt-0.5 text-[6px] leading-2 text-slate-400">
          Permissions are automatically configured based on the selected role and department.
        </p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>

<div className="mt-0 flex items-center gap-3">
<button
  type="button"
  className=" mt-0 relative z-10 flex h-8 w-[43%] items-center justify-center gap-1 rounded-md bg-linear-to-r from-blue-700 to-sky-500 text-[10px] font-medium text-white shadow-sm shadow-blue-300/30 transition hover:brightness-110"
>
  <i className="bi bi-person-plus text-[11px]"></i>
  Create Account
</button>
<button
  type="button"
  className=" mt-3 flex h-8 w-20 items-center justify-center gap-1 rounded-md border border-blue-200 bg-white text-[10px] font-medium text-blue-700 transition hover:bg-blue-50"
>
  <i className="bi bi-arrow-counterclockwise text-[11px]"></i>
  Reset
</button>
<button
    onClick={onBackToLogin}
  type="button"
  className=" mt-2 shrink-0 ml-12 flex items-center gap-2 text-[10px] font-medium text-blue-600 hover:text-blue-800"
>
  <i className="bi bi-arrow-left text-[10px]"></i>
  Back to Login
</button>

    </div>
</div>
    )
        
    
}
export default CreateAccount;

