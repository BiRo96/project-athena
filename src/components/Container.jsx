function Container({children}) {
    return (
        <div className="mt-10 flex-grow">
            <div class="h-full bg-white dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto p-4 dark:text-white">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container