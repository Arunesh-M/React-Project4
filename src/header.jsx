import React, { useContext } from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import DataContext from './context/datacontext';

const Header = ({title}) => {
  const {width}=useContext(DataContext)
  return (
    <header className="Header">
        <h1>{title}</h1>
        {width < 768 ? <FaMobileAlt />
            : width < 992 ? <FaTabletAlt />
                : <FaLaptop />}
    </header>
  )
}

Header.defaultProps={
    title:"Sample Social Media"
}

export default Header