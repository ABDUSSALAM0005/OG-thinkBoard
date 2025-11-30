import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router';
import { PlusIcon } from "lucide-react";



const Navbar = () => {
    const pathname = useLocation();
    console.log(pathname);

  return (
   <nav className=''>
     <Link to={"/create"} className='btn bg-[#00FF9D]/60 hover:bg-[#00FF9D]/90 text-white'>
       <PlusIcon className="size-5" />
        <span>New Note</span>
     </Link>
   </nav>
  )
}

export default Navbar