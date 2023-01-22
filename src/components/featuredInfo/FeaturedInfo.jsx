import Featured from "../../UI/Featured";
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <>
      <Featured
        title = "Welcome"
        message = "Dr Tiamiyu Rexxie"
        id = "Staff id: 35863537738x"
      />  

      <div className="featured">
      <Featured
        title = "Notifications"
        message = "0"
        id=''
      /> 
      <Featured
        title = "Appointments"
        message = "0"
        id = ''
      /> 
      </div>    
    </>
  );
}