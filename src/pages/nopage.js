import { width } from "@fortawesome/free-solid-svg-icons/fa0"
import nopageImage from "../images/nopage.jpg"
export default function NoPage(){
    return(
        <div style={{height:'80vh',display:"flex",justifyContent:"center",alignItems:"center"}}>
            
            <img src={nopageImage} style={{marginTop:'8vh',width:"60vw"}}/>
        </div>
    )
}