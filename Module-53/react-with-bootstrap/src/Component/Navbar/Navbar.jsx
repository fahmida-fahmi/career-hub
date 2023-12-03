import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Outlet } from "react-router-dom";

const Navbar = () => {
    const [open,setOpen]= useState(false)
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Services",
          path: "/services"
        },
        {
          id: 4,
          name: "Contact",
          path: "/contact"
        },
        {
          id: 5,
          name: "Products",
          path: "/products"
        }
      ];
 
      
    return (
        <nav>
            <div className="lg:hidden bg-violet-500 relative" onClick={()=>setOpen(!open)}>
                <span className="">
                    {open === true? 
                        <Bars3Icon className="h-10 w-10 text-white" />
                        :
                        <XMarkIcon className="h-10 w-10 text-white absolute z-10 left-56" />
                    }
                    </span>

            </div>
           <ul className={`lg:flex lg:static absolute justify-center bg-violet-400 text-center ${open?'-left-80 lg:-left-0': 'left-0'} duration-1000 lg:py-0 py-10 lg:px-0 px-10`}>
           { routes.map(route => (
                <Link 
                key={route.id}
                item = {route}
                ></Link>
           ))}
           </ul>

        </nav>
    );
};

export default Navbar;