import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navber = () => {

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Login", path: "/login" }
    ];

  const [open, setOpen] = useState('false')

    return (
        <div>
            <nav className="bg-yellow-200 text-black">
                <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>

                    {
                        open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                    }
                    
                </div>

                <ul className={`md:flex content-end absolute md:static ${open ? '' : 'hidden'} duration-1000`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }

                </ul>
            </nav>

        </div>
    );
};

export default Navber;