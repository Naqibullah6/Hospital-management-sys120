function LoginPanel({onCreateAccount}){
    return(
    
    <div className="absolute right-5 top-8 h-[88vh] w-[30vw] rounded-3xl bg-white p-8 shadow-2xl animate-[cardEnter_700ms_ease-out_forwards]">
<svg
    // border blue color
  viewBox="0 0 600 210"
  className="pointer-events-none absolute right-0 top-0 h-57.5 w-1/2"
  preserveAspectRatio="none"
>
  <path
    d="M320 0H600V105C553 97 518 77 483 43C457 18 426 5 390 0H320Z"
    fill="#d9efff"
    opacity="0.90"
  />

 
</svg>

    <div className="relative z-10 flex justify-center pt-2">    
  <i className="bi bi-heart-pulse-fill bg-linear-to-br from-blue-700 to-cyan-400 bg-clip-text text-[55px] leading-none text-transparent"></i>
    </div>
    <div className="relative z-20 mt-0 text-center">
  <h5 className="text-xl font-bold tracking-tight text-[#0b315f]">
    Welcome Back
  </h5>
  <p className="mt-2 text-xs leading-5 text-slate-400">
  Sign in to your account to continue to
  <br />
  Hospital Management System
</p>
</div>
<div className="relative z-10 mt-2">
  <label
    htmlFor="email"
    className="mb-2 block text-xs font-semibold text-[#1c3c63]"
  >
    Email Address
  </label>

  <div className="relative">
    <i className="bi bi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-xs text-blue-700"></i>

    <input
      id="email"
      type="email"
      placeholder="Enter your email address"
      className="h-9 w-full rounded-lg border border-slate-600 bg-white py-2 pl-11 pr-4 text-[px11] outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-300"
    />
  </div>
    </div>
    <div className="relative z-10 mt-1">
  <label
    htmlFor="password"
    className="mb-2 block text-[11px] font-semibold text-[#1c3c63]"
  >
    Password
  </label>

  <div className="relative">
    <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-xs text-blue-700"></i>

    <input
      id="password"
      type="password"
      placeholder="Enter your password"
      className="h-9 w-full rounded-lg border border-blue-600 bg-white py-2 pl-11 pr-11 text-[14px] text-slate-700 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-300"
    />

    <i className="bi bi-eye-slash absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xs text-blue-700"></i>
  </div>
</div>
        <div className="relative z-10 mt-1 flex items-center justify-between">
  <label className="flex! cursor-pointer items-center gap-2">
    <input
      type="checkbox"
      defaultChecked
      className="h-3 w-3 accent-blue-500"
    />

    <span className="text-[10px] font-semibold text-slate-700">
      Remember me
    </span>
  </label>

  <button
    type="button"
    className="text-[11px]! font-semibold text-blue-500 hover:text-blue-700"
  >
    Forgot password?
  </button>
</div>
<button
  type="button"
  className="relative z-10 mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-700 to-sky-500 text-[11px] font-medium text-white shadow-md shadow-blue-500/30 transition hover:brightness-110"
>
  <i className="bi bi-box-arrow-in-right text-sm"></i>
  Log In
</button>
<div className="relative z-10 mt-3 flex items-center gap-2">
  <span className="h-px flex-1 bg-slate-200"></span>

  <span className="text-[10px] font-medium text-slate-400">
    OR
  </span>

  <span className="h-px flex-1 bg-slate-200"></span>
</div>
<button
  onClick={onCreateAccount}
  type="button"
  className="relative z-10 mt-4 flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-[10px] font-medium text-[#1c3c63] transition hover:border-blue-400 hover:bg-blue-50"
>
  <i className="bi bi-person-plus text-xs text-blue-700"></i>
  Create Account
</button>
</div>
    );  

}
export default LoginPanel;