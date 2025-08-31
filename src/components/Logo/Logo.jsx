import { FaBriefcase } from "react-icons/fa";

function Logo() {
    return(
        <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg">
                <FaBriefcase className="text-sky-600 w-6 h-6"/>
            </div>
            <span className="text-black font-semibold text-xl">JobTrackr</span>
        </div>
    )
}

export default Logo;