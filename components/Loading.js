import {Circle} from "better-react-spinkit"
import Image from "next/image"
function Loading() {
    return (
        <center style={{display:"grid",placeItems:"center", height:"100vh"}}>
            <div>
                <Image style={{marginBottom:10}} src="/1.png" alt="whatsapp" width={200} height={200} />
                <Circle color="#3CBC28" size={60} />
                </div> 
        </center>
    )
}

export default Loading
