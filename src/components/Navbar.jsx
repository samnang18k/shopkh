import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Brand",
    path: "/brand",
  },
  {
    title: "Accessories",
    path: "/accessories",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-6 px-8 font-[inter]'>
      <ul className='flex gap-8 justify-center items-center w-full font-medium text-sm md:text-base'>
         {NavItem.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 font-bold border-b-2 border-purple-600"
              : "text-gray-600 hover:text-purple-500"
          }
        >
          {item.title}
        </NavLink>
      ))}
      </ul> 
    </nav>
  )
}

export default Navbar
