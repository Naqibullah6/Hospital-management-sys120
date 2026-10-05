function PatientBanner() {
  return (
    <div className="relative w-screen left-50  h-20 -translate-y-39.5 overflow-hidden ">
      

      <img
        src="/BannerPhoto.png"
        alt="Hospital Banner"
        className="h-full top-50 w-full object-cover  object-[100%_80%]"
      />

     
      <div className="absolute inset-0 flex items-center">
        <div className="flex items-center gap-2 px-8">

         
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <i className="bi bi-person-fill text-3xl text-blue-600"></i>
          </div>

         
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Patient Registration
            </h1>

            <p className="mt-0 text-sm text-gray-500">
              Add new patient information to the system
            </p>
          </div>
          
        </div>
       
      </div>
      

    </div>
    
  );
}

export default PatientBanner;