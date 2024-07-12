import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <div className="right-content">
        <p>User :</p>
        <p>Abhiram Anish</p>
        <img className='avatar' src="https://media.licdn.com/dms/image/D5603AQHXaCRwzhypOg/profile-displayphoto-shrink_800_800/0/1705602489200?e=1724889600&v=beta&t=xcpLeHrBBlnB3Y14n8S01RP9ZhoQQpE1MpeCKGhr2yM" alt="Avatar" />
      </div>
          
        
    </div>
  )
}

export default NavBar
