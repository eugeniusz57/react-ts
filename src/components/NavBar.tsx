import React from "react"

export const NavBar: React.FC = () =>  (
        <>
         <nav>
    <div className="nav-wrapper blue darken-3 px1">
      <a href="/" className="brand-logo">React + TS</a>
      <ul  className="right hide-on-med-and-down">
        <li><a href="/">List</a></li>
        <li><a href="/">About</a></li>
      
      </ul>
    </div>
  </nav>
        </>
    )
