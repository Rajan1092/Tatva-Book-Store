import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main className="py-12 px-12 sm:px-12 md:px-12 lg:px-28 xl:px-28 text-[#414141]">
            <h1 className="text-center text-3xl font-semibold leading-tight">Displaying Books</h1>
            <div className="w-[10%] mx-auto mt-6 h-0.5 bg-[#f14d54] min-w-[100px]"></div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center font-medium text-lg mb-12">
                <span>Total 500 items available.</span>
                <div className="font-normal text-base">
                    <label className="" htmlFor="sort-by">Sort by - </label>
                    <select className="inline-block w-[200px] rounded-sm border border-gray-300 text-sm py-2 px-3" id="sort-by" name="sortBy">
                        <option value="a-Z" selected>a-Z</option>
                        <option value="A-z">A-Z</option>
                    </select>
                </div>
            </div>
            <div className="grid mb-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                <div>
                    <img className="bg-gray-500 aspect-video object-cover rounded-t-xl" src="/images/placeholder.jpg" alt="Product Image" />
                    <div className="p-6 bg-gray-100 rounded-b-xl">
                        <h3 className="font-bold text-xl mb-2">Product Name</h3>
                        <p className="text-sm mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio laborum necessitatibus fugit voluptate quia ipsam?</p>
                        <div className="flex justify-between items-center mb-3">
                            <span className="uppercase font-medium">MRP <span className="line-through">₹ 1000</span></span>
                            <span className="uppercase font-semibold text-green-300">20.0% OFF</span>
                        </div>
                        <button className="bg-[#f14d54] py-1.5 rounded-md text-sm w-full bg-opacity-90 hover:bg-opacity-100 block text-white font-semibold uppercase">Add to Cart</button>
                    </div>
                </div>
                <div>
                    <img className="bg-gray-500 aspect-video object-cover rounded-t-xl" src="/images/placeholder.jpg" alt="Product Image" />
                    <div className="p-6 bg-gray-100 rounded-b-xl">
                        <h3 className="font-bold text-xl mb-2">Product Name</h3>
                        <p className="text-sm mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio laborum necessitatibus fugit voluptate quia ipsam?</p>
                        <div className="flex justify-between items-center mb-3">
                            <span className="uppercase font-medium">MRP <span className="line-through">₹ 1000</span></span>
                            <span className="uppercase font-semibold text-green-300">20.0% OFF</span>
                        </div>
                        <button className="bg-[#f14d54] py-1.5 rounded-md text-sm w-full bg-opacity-90 hover:bg-opacity-100 block text-white font-semibold uppercase">Add to Cart</button>
                    </div>
                </div>
                <div>
                    <img className="bg-gray-500 aspect-video object-cover rounded-t-xl" src="/images/placeholder.jpg" alt="Product Image" />
                    <div className="p-6 bg-gray-100 rounded-b-xl">
                        <h3 className="font-bold text-xl mb-2">Product Name</h3>
                        <p className="text-sm mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio laborum necessitatibus fugit voluptate quia ipsam?</p>
                        <div className="flex justify-between items-center mb-3">
                            <span className="uppercase font-medium">MRP <span className="line-through">₹ 1000</span></span>
                            <span className="uppercase font-semibold text-green-300">20.0% OFF</span>
                        </div>
                        <button className="bg-[#f14d54] py-1.5 rounded-md text-sm w-full bg-opacity-90 hover:bg-opacity-100 block text-white font-semibold uppercase">Add to Cart</button>
                    </div>
                </div>
                <div>
                    <img className="bg-gray-500 aspect-video object-cover rounded-t-xl" src="/images/placeholder.jpg" alt="Product Image" />
                    <div className="p-6 bg-gray-100 rounded-b-xl">
                        <h3 className="font-bold text-xl mb-2">Product Name</h3>
                        <p className="text-sm mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio laborum necessitatibus fugit voluptate quia ipsam?</p>
                        <div className="flex justify-between items-center mb-3">
                            <span className="uppercase font-medium">MRP <span className="line-through">₹ 1000</span></span>
                            <span className="uppercase font-semibold text-green-300">20.0% OFF</span>
                        </div>
                        <button className="bg-[#f14d54] py-1.5 rounded-md text-sm w-full bg-opacity-90 hover:bg-opacity-100 block text-white font-semibold uppercase">Add to Cart</button>
                    </div>
                </div>
                <div>
                    <img className="bg-gray-500 aspect-video object-cover rounded-t-xl" src="/images/placeholder.jpg" alt="Product Image" />
                    <div className="p-6 bg-gray-100 rounded-b-xl">
                        <h3 className="font-bold text-xl mb-2">Product Name</h3>
                        <p className="text-sm mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio laborum necessitatibus fugit voluptate quia ipsam?</p>
                        <div className="flex justify-between items-center mb-3">
                            <span className="uppercase font-medium">MRP <span className="line-through">₹ 1000</span></span>
                            <span className="uppercase font-semibold text-green-300">20.0% OFF</span>
                        </div>
                        <button className="bg-[#f14d54] py-1.5 rounded-md text-sm w-full bg-opacity-90 hover:bg-opacity-100 block text-white font-semibold uppercase">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-2 mb-5">
                <Link className="w-[30px] flex justify-center items-center h-[30px] rounded-full text-[#f14d54] hover:text-white hover:bg-[#f14d54] transition">&lt;</Link>
                <Link className="w-[30px] flex justify-center items-center h-[30px] rounded-full hover:bg-[#f14d54] hover:text-white transition">1</Link>
                <Link className="w-[30px] flex justify-center items-center h-[30px] rounded-full hover:bg-[#f14d54] hover:text-white transition">2</Link>
                <Link className="w-[30px] flex justify-center items-center h-[30px] rounded-full hover:bg-[#f14d54] hover:text-white transition">3</Link>
                <Link className="w-[30px] flex justify-center items-center h-[30px] rounded-full hover:bg-[#f14d54] hover:text-white transition">4</Link>
                <Link className="w-[30px] flex justify-center items-center h-[30px] rounded-full hover:bg-[#f14d54] hover:text-white transition">5</Link>
                <span className="w-[30px] flex justify-center items-center h-[30px] rounded-full">...</span>
                <Link className="w-[30px] flex justify-center items-center h-[30px] rounded-full hover:bg-[#f14d54] hover:text-white transition">10</Link>
                <Link className="w-[30px] flex justify-center items-center h-[30px] rounded-full text-[#f14d54] hover:text-white hover:bg-[#f14d54] transition">&gt;</Link>
            </div>
        </main>
    )
}

export default Home