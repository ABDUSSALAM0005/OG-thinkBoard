import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router'


const Links = [
    {
        name:"HomePage",
        path:"/",
    },
    {
        name:"CreatePage",
        path:"/create"
    },
    {
        name:"NoteDetailPage",
        path: "/note/:id"
    }
]


const MobileNav = () => {
    const pathname = useLocation();
    console.log(pathname);
  return (
    <div>MobileNav</div>
  )
}

export default MobileNav