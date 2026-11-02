import React from 'react'
import { User,ShoppingCart, Moon, Search } from 'lucide-react'

const TopBar = () => {
  return (
    <section className=" py-4 px-12 flex items-center justify-between bg-white shadow-md ">
      <div className=" flex items-center justify-center gap-3 cursor-pointer  ">
        <img src="/logo.png" alt=""  className="w-13 md:w-11 "/>
        <span className="text-2xl font-bold text-gray-800 md:text-2xl">
           <span className="text-purple-600">KH</span>
            SHOP
        </span>
      </div>
      <div className="relative flex items-center justify-center">
        <input 
        className="border border-gray-300  text-gray-700 w-60 rounded-md py-1 px-4 focus:outline-none transition-ease-in-out  duration-300 md:py-2 md:w-120 "
        placeholder="Search..."  
        />
        <button className="absolute right-0 py-1 px-4  text-white bg-purple-400 rounded-r-md cursor-pointer md:py-2">
          <Search />
        </button>
      </div>
      <div className="flex items-center gap-8 ">
        <button>
          <User />
        </button>
        <button>
          <ShoppingCart />
        </button>
        <button>
          <Moon />
        </button>
      </div>
    </section>
  )
}

export default TopBar