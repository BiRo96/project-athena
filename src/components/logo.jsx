import logo from '../assets/logo.svg'

function Logo({size}){
    return <img src={logo} className={"dark:bg-white bg-gray-200 shadow-md shadow-black p-1 rounded-b-full " + (size ?? "h-full")} alt="Project Athena Logo" />
}

export default Logo