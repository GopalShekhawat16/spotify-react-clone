import {Icon} from 'components/Icons';
import { NavLink } from 'react-router-dom';
import React from 'react'


export default function Menu() {



  return (
      <div id='menu'>
      <nav className="px-2">
          
        <ul className="flex flex-col">
            <li>
               
                <NavLink activeClassName="!text-white " to={"/"} exact className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {window.location.href === 'http://localhost:3000/' ? <Icon name="acthome"/> : <Icon name="home"/>}
                    Home page
                    </NavLink>
            </li>
            <li>
                <NavLink activeClassName="!text-white" to={"/search"} className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {window.location.href === 'http://localhost:3000/search' ? <Icon name="actsearch"/> : <Icon name="search"/>}

                    Search
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="!text-white" to={"/collection"} className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {window.location.href === 'http://localhost:3000/collection' ? <Icon name="actlibrary"/> : <Icon name="lib"/>}

                    Your library
                </NavLink>
            </li>
        </ul>
      </nav>
      </div>
  )
}


