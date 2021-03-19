import React from "react";
import './App.css';
import './Nav.css'

function NavigationBar() {
    function ShowDropdown1() {
        document.getElementById("dropdown-show1").style.display = "block";
        document.getElementById("dropdown-show2").style.display = "none";
        document.getElementById("dropdown-show3").style.display = "none";
    }
    function ShowDropdown2() {
        document.getElementById("dropdown-show1").style.display = "none";
        document.getElementById("dropdown-show2").style.display = "block";
        document.getElementById("dropdown-show3").style.display = "none";
    }
    function ShowDropdown3() {
        document.getElementById("dropdown-show1").style.display = "none";
        document.getElementById("dropdown-show2").style.display = "none";
        document.getElementById("dropdown-show3").style.display = "block";
    }
    window.onclick = function (e) {
        if (!e.target.matches('#menu1')) {
            document.getElementById("dropdown-show1").style.display = "none";
        }
        if (!e.target.matches('#menu2')) {
            document.getElementById("dropdown-show2").style.display = "none";
        }
        if (!e.target.matches('#menu3')) {
            document.getElementById("dropdown-show3").style.display = "none";
        }
    }
    function hamIcon(e) {
        var x = document.getElementById("naviRight");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }

    }
    return (
        <div className="App" id="app-listener">
            <div className="navBar">
                <div className="navLeft">
                    LOGO
                </div>
                <ul className="navRight" id = "naviRight">

                    <li className="nav-names" id="menu1" onClick={ShowDropdown1}>
                        ABOUT US
                        <div className="dropdown-1" id="dropdown-show1">
                            <ul className="dropdown-container">
                                <a className="dropdown-items">item 1</a>
                                <a className="dropdown-items">item 1</a>
                                <a className="dropdown-items">item 1</a>
                                <a className="dropdown-items">item 1</a>
                            </ul>
                        </div>
                    </li>


                    <li className="nav-names" id="menu2" onClick={ShowDropdown2}>
                        LEARNING FKS
                        <div className="dropdown-2" id="dropdown-show2">
                            <ul>
                                <a className="dropdown-items-1">item 2</a>
                                <a className="dropdown-items-1">item 2</a>
                                <a className="dropdown-items-1">item 2</a>
                                <a className="dropdown-items-1">item 2</a>
                                <a className="dropdown-items-1">item 2</a>
                            </ul>
                        </div>
                    </li>


                    <li className="nav-names" id="menu3" onClick={ShowDropdown3}>
                        BEYOND LEARNING
                        <div className="dropdown-3" id="dropdown-show3">
                            <ul>
                                <a className="dropdown-items-2">item 3</a>
                                <a className="dropdown-items-2">item 3</a>
                                <a className="dropdown-items-2">item 3</a>
                            </ul>
                        </div>
                    </li>

                    <li><a href="#">CAMPUS</a></li>

                    <li><a href="#">PARENTS AND FKS</a></li>

                    <li><a href="#">GET IN TOUCH</a></li>

                </ul>
            </div>
            <div className="hamIcon" onClick={e=>{e.preventDefault(); hamIcon(e)}} >
                <img src="https://img.icons8.com/plumpy/48/000000/menu.png" className="hamImg"/>
            </div>

        </div>
    );
}

export default NavigationBar;