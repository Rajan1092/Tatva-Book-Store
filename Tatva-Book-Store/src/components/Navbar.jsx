import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="h-2 bg-[#f14d54]"></div>
            <nav className="py-6 px-12 flex gap-5 flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center text-[#f14d54] text-sm">
                <Link className="h-[40px]" to="/">
                    <img className="h-full" src="/images/logo.png" alt="TatvaSoft Logo" />
                </Link>
                <div className="flex gap-4 items-center">
                    <Link to="/auth/login">Login</Link>
                    <div className="w-[2px] bg-[#f14d54] h-[20px]"></div>
                    <Link to="/auth/register">Register</Link>
                    <Link className="flex py-3 px-4 border bg-opacity-90 hover:bg-gray-50 focus:bg-gray-50 transition" to="/cart">
                        <img className="h-[20px] inline-block mr-1.5" src="/images/cart-icon.png" alt="Cart Icon" />
                        <span className="">(0) Items</span>
                    </Link>
                </div>
            </nav >
        </div>
    )
}

export default Navbar