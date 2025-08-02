import { useEffect, useState } from 'react'
import Logo from './logo'

function Splash() {
    const [splash, setSplash] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 3000)
    })

    return (
        <div className={"fixed left-0 w-screen h-screen bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white z-10 transition duration-1000 top-0 " + (splash ? "" : "hidden")} >
            <div className='h-full flex flex-row items-center'>
                <div className='w-full flex flex-col items-center'>
                    <div className='my-10 h-[200px] aspect-square object-fill flex flex-col justify-center'>
                        <Logo/>
                    </div>
                    <div className='text-3xl italic'>
                    Project Athena
                    </div>
                    <div className='text-xl italic'>
                    Tudás mindenkinek
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash