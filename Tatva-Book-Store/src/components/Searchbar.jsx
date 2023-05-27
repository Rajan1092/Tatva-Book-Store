const Searchbar = () => {
    const handleChange = () => { }

    return (
        <div className="text-center py-5 bg-gray-100">
            <input className="block mb-4 ml-auto mr-auto w-4/5 sm:mb-4 sm:w-4/5 sm:ml-auto sm:mr-auto md:mb-0 md:inline-block md:ml-0 md:mr-4 md:w-1/4 lg:mb-0 lg:inline-block lg:ml-0 lg:mr-4 lg:w-1/4 xl:mb-0 xl:inline-block xl:ml-0 xl:mr-4 xl:w-1/4 px-5 italic rounded-sm py-2 border border-gray-300 text-sm" id="search" name="search" value="" onChange={handleChange} placeholder="I'm looking for..." />
            <button className="w-32 px-4 mr-4 py-2 text-center bg-green-300 rounded-sm text-white bg-opacity-90 hover:bg-opacity-100 focus:bg-opacity-100 transition">
                <img className="h-[20px] mr-1.5 bg-green-300 inline-block" src="/images/search-icon.svg" alt="Search Icon" />
                <span>Search</span>
            </button>
            <button className="w-32 px-4 py-2 bg-opacity-90 hover:bg-opacity-100 focus:bg-opacity-100 transition text-center bg-[#f14d54] text-white rounded-sm">
                Cancel
            </button>
        </div>
    )
}

export default Searchbar