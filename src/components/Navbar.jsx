import Logo from "./logo"
import NavbarButton from "./navbar_button"

function Navbar() {
    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <Logo/>
                    <div class="flex flex-col">
                        <span class="self-center text-xs dark:text-white">Project</span>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Athena</span>
                    </div>
                </a>
                
                <div class="w-full block md:w-auto" id="navbar-dropdown">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavbarButton text="Főoldal" link="" active={true} />
                        <NavbarButton text="Kategóriák" link="" active={false} />
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar