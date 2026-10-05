import HospitalImage from "../assets/hospital.jpg";
function LeftPanel(){
    return (
        
         <div>

            <div className="h-screen overflow-hidden">
          
          <img src={HospitalImage} alt="hospital" className="w-full object-cover"/>
       
            </div>
           
            </div>
        
    );
}
export default LeftPanel;