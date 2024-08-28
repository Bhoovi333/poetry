import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (

    <>
    <div className="d-inline-flex p-2" id="container">
      <img src="https://api.logo.com/api/v2/images?logo=logo_5851544a-6d79-436d-8b35-d2de6125a972&width=128&height=128&fit=contain&margins=24&format=webp&quality=60&u=1724824803123" className='imgg' ></img>
        <div className='headerr'> 
       <ul>
        <li><h4><i>PEOPLE'S POETRY HAVEN</i></h4><h5> __for readers, by poets</h5></li><br></br>
        <li><input id="bubuu"type='text' placeholder='Search Poet Name Here' ></input><br></br>
       <button id='bubu'><h5>Search</h5><SearchIcon/></button> </li>
       </ul> 
  </div>
    </div></>
  )
}

export default Header;