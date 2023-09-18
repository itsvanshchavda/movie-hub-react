import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'


function Navigation() {
  return (

    <nav>
      <div className="main-content">
        <h1 className='heading'><Link to="/">Moviehub</Link></h1>
        <ul className='nav-links'>
          <li> 
            <Link to='/movies'>Movies</Link>
          </li>
          <li> 
          <Link to='/tvshows'>  Tv Shows  </Link> 
          </li>
          <li> 
            Genres
          </li>
          <li> 
           <Link to='/webseries'>Web Series </Link> 
            </li>
          <li> Anime </li>
        </ul>

        <div className="btn-search">
          <input type="text" placeholder='Search' /><i className="fa-solid fa-magnifying-glass"></i>
          <button>Sign up</button>
          <button>LOG IN</button>
        </div>
      </div>
    </nav>

  )
}

export default Navigation