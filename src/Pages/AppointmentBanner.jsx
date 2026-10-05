function AppointmentBanner(){
    return(
        <div className="relative w-screen left-[200px]  h-20 w-fulloverflow-hidden ">
      

        <img
          src="/AppointmentBanner.png"
          alt="Hospital Banner"
          className="h-full top-[200px] w-full object-cover  object-[100%_80%]"
        />
             <div className="absolute inset-0 flex items-center">
        <div className="flex items-center gap-2 px-8">

         
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <i className="bi bi-calendar-plus text-3xl text-blue-700"></i>
          </div>

         
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Appointment Management
            </h1>

            <p className="mt-0 text-sm text-gray-500">
              Schedule and manage patient appointments
            </p>
          </div>
          
        </div>
       
      </div>
        </div>
        
    );
   

}
export default AppointmentBanner;