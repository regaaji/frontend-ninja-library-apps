import React from "react";
import Profile from "../../images/profile.png"
import { Link } from 'react-router-dom'


const Sidebar = () => {


  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openSidebar").style.display = "flex";

    return false;
  };

   


  const addModal = () => {
    // Get the modal
    let addModal = document.getElementById("addModal");
   
    // Get the button that opens the modal
    let addBtn = document.getElementById("add");

    // Get the <span> element that closes the modal
    let addSpan = document.getElementsByClassName("add-close")[0];

    // When the user clicks the button, open the modal
    addBtn.onclick = function() {
      addModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    addSpan.onclick = function() {
      addModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === addModal) {
        addModal.style.display = "none";
      }
    };
    return false;
  };

  const handleLogout = () => {

    try {
        const token = localStorage.getItem('token');
       //  const role = localStorage.getItem('role');
        // const username = localStorage.getItem('username');
        if (token) {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('username');
            this.props.history.push('/login')
        } else {

        }
    } catch  {
        console.log("Something's wrong")
    }
}

const role = localStorage.getItem('role');
const username = localStorage.getItem('username');
const user = "official"

  return (
    <div>
      <aside id="mySidebar" className="aside-nav-container">
        <div className="menu-btn">
          <i onClick={closeNav} className="fas fa-bars"></i>
        </div>
        <div className="profile-container">
          <img src={Profile} width="100%" alt="profil.jpg" />
          <h3>{username == null ? user : username}</h3>
        </div>
        <nav className="aside-nav">
          <ul>
            {role==="2"?
             <li>
              <Link to="/manage">Manage</Link>
            </li>
            :
            <li>
             <Link to="#"></Link>
            </li>
            }
             {role==="2"?
            <li>
              <Link to="#" id="add" onClick={addModal}>Add Book</Link>
            </li>

             :
             <li>
             <Link to="#"></Link>
            </li>
             }
              {role==="1"?
             <li>
              <Link to="/history/">History</Link>
            </li>
            :
            <li>
             <Link to="#"></Link>
            </li>
            }
             {role !==null ?
             <form>
               <li>
                 <Link to="/login" onClick={(e) => { handleLogout(e) }}>
                  Logout
                 </Link>
               </li>
               


             </form>
             :
               <li>
             <Link to="/login">Login</Link>
            </li>
              }

             
          
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;