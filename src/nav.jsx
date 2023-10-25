import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DataContext from './context/datacontext';

const Nav = () => {
  
  const {search,setSearch}=useContext(DataContext)
  return (
    <nav className="Nav">
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input id="search" type="text" placeholder="Search Posts" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </form>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="posts">Post</Link></li>
            <li><Link to="about">About</Link></li>
            <Outlet />
        </ul>
    </nav>
  )
}

export default Nav