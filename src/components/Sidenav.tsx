import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png';
function Sidenav() {
    const location = useLocation();
    return (
        <div className="bg-white p-5 border-r-2 h-screen">
            <div className="flex justify-between">
                <img src={logo} alt="" className="h-10 " />
                <i>close</i>
            </div>
            <div>
                <ul className="mt-4">
                    <li>
                        <Link to="/dashboard" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/dashboard' ? 'bg-gray-100 border' : 'bg-white text-gray-800 my-1'}`}>
                            <i className="fas fa-tachometer-alt"></i>
                            <span className="pl-2">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addproduct" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/addproduct'? 'bg-gray-100 border' : 'bg-white text-gray-800 my-1'}`}>
                            <i className="fas fa-plus"></i>
                            <span className="pl-2">Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bids" className={` block py-2 pl-5 rounded-3xl ${location.pathname === '/bids' ? 'bg-gray-100 border' : 'bg-white text-gray-800 my-1'}`}>
                            <i className="fas fa-shopping-cart"></i>
                            <span className="pl-2">Requests</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/transactions' ? 'bg-gray-100 border' : 'bg-white text-gray-800 my-1'}`}>
                            <i className="fas fa-th-list"></i>
                            <span className="pl-2">All Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/messages" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/messages' ? 'bg-gray-100 border' : 'bg-white text-gray-800 my-1'}`}>
                            <i className=" fas fa-user-graduate"></i>
                            <span className="pl-2">All students</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/settings' ? 'bg-gray-100 border' : 'bg-white text-gray-800 my-1'}`}>
                            <i className="fas fa-cog"></i>
                            <span className="pl-2">Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidenav;
