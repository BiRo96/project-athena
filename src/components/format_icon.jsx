import { FaPlay } from "react-icons/fa";
import { IoMdPlanet } from "react-icons/io";


function FormatIcon({format}) {
    switch (format) {
        case "video":
            return (
                <FaPlay className="h-5 w-5" alt={format} title={format}/>
            )
            break;
    
        default:
            return (
                <IoMdPlanet className="h-5 w-5" alt={format} title={format}/>
            )
            break;
    }
}

export default FormatIcon