import Featured from "../../UI/Featured";
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <>
      <Featured
        title = "Welcome"
        message = "Kehinde, Ayobami Stephen"
        id = "Patient's id: 15264274276367"
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