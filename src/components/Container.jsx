function Container({children}) {
    return (
        <div className="mt-10 flex-grow">
            <div className="h-full bg-white dark:bg-gray-800">
                <div className="max-w-screen-xl h-full mx-auto p-4 dark:text-white">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container