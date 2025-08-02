function NavbarButton(params) {
    var buttonClass = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    if (params.active === true){ 
        buttonClass = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent";

    }

    return(
        <>
            <li>
                <a 
                href={"#/" + (params.link ?? "") } 
                { ...params.active ? 'aria-current="page"' : ''} 
                class={buttonClass}>
                    {params.text ?? ""}
                </a>
            </li>
        </>
    )
}

export default NavbarButton