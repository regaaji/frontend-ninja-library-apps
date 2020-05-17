import React, {Component} from "react"
// import {getBooks, getSearch} from '../../utils/http';
// import ListBook from '../Card/ListBook';



class Navbar extends Component{

    


render(){

    
  const openNav = () => {
    // document.getElementById("mySidenav").style.width = "100%";
    if (window.matchMedia("(max-width: 1200px)").matches) {
      document.getElementById("mySidebar").style.width = "100%"
      document.getElementById("main").style.marginLeft = "0"
      document.getElementById("openSidebar").style.display = "none"
    } else {
      document.getElementById("mySidebar").style.width = "300px"
      document.getElementById("main").style.marginLeft = "300px"
      document.getElementById("openSidebar").style.display = "none"
    }

    return false;
  }
  return (
    <div className="top-nav-container-fluid">
      <nav className="top-nav"> 
        <ul>
          <li id="openSidebar">
            <div className="topnav-btn">
              <i onClick={openNav} className="fas fa-bars"></i>
            </div>
          </li>
         
            
         
          <li>
         
              <input
                className="input is-primary"
                type="text"
                placeholder="Search for Books"
                onChange={(e) => this.props.onSearch(e.target.value)}
              />
           
          </li>
          <li>
          <button className="btn btn-warning" onClick={() => this.props.onSort()}>All Title</button>
          </li>
          <li>
          <button className="btn btn-warning" onClick={() => this.props.onSortAuth()}>All Author</button>
          </li>
          <li>
          <button className="btn btn-warning" onClick={() => this.props.onSortGen()}>All Genre</button>
          </li>
        
        </ul>
        
          <p className="mr-5 mt-2"><strong>Ninja Library App</strong></p>
      </nav>
    </div>
  );
};
} 

 

export default Navbar;
