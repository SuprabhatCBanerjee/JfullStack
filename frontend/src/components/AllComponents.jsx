const AllComponents = () => {
    return(
        <>
            <h1>All Components</h1>

            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://placehold.co/400" alt="" />
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg font-semibold text-black">Erin Lindford</p>
                <p className="font-medium text-gray-500">Product Engineer</p>
                </div>
                <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                Message
                </button>
            </div>
            </div>


            <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                <div>
                    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                    <svg
                        class="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        
                    </svg>
                    </span>
                </div>
                <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>


            <div>
                <div class="flex items-center space-x-2 text-base">
                    <h4 class="font-semibold text-slate-900">Contributors</h4>
                    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
                </div>
                <div class="mt-3 flex -space-x-2 overflow-hidden">
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div class="mt-3 text-sm font-medium">
                    <a href="#" class="text-blue-500">+ 198 others</a>
                </div>
            </div>

            <button class="btn-primary">Save changes</button>
        </>
    );
}

export default AllComponents;