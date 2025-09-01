import Logo from "../Logo/Logo";


function Header() {
    return(
        <header className="flex items-center justify-between px-4 py-6 bg-white border-b-2 border-gray-300">
            <div className="flex items-center space-x-4">
                <Logo />
                <nav className="flex space-x-6">

                <a 
                href="#" 
                className="text-gray-600 font-normal hover:text-black transition-colors">Dashboard</a>

                <a 
                href="#"
                className="text-gray-600 font-normal hover:text-black transition-colors"
                >Analytics</a>
                </nav>
            </div>

            {/*Placeholder for later*/}
            <div className="flex items-center space-x-4">

            </div>

            <div className="flex items-center justify-between px-8 py-3 bg-white">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-900">Job Applications</h2>

                    <span className="text-sm text-gray-500">3 active applications</span>
                </div>
            

                <div className="flex items-center space-x-3">
                    <input
                        type="text"
                        placeholder="Search applications..."
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">Filter</button>

                    <button className="px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition-colors">+ Add Job</button>
                </div>
            </div>
        </header>
    )
}

export default Header;