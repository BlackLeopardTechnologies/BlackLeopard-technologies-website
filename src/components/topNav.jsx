import React, { useState } from "react";
import AppLogo from "../assets/logo.png";


const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="top" data-aos="fade-down" data-aos-duration="500">
        <div className={`inner ${isOpen ? "open" : ""}`}>
          {/* Logo + Hamburger */}
          <div className="cont a">
            <img
              src={AppLogo}
              alt="App Logo"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            />
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="menu"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <ion-icon
                name={isOpen ? "close-outline" : "menu-outline"}
              ></ion-icon>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`cont n ${isOpen ? "visible" : ""}`}>
            <ul data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300">
              <li>
                <a onClick={()=>{
                  location.href="#Home"
                   setIsOpen(!isOpen)
                }} className="active">Home</a>
              </li>
              <li>
                <a onClick={()=>{
                  location.href="#About"
                   setIsOpen(!isOpen)
                }}>About Us</a>
              </li>
              <li>
                <a onClick={()=>{
                  location.href="#Services"
                   setIsOpen(!isOpen)
                }}>Our Services</a>
              </li>
              <li>
                <a onClick={()=>{
                  location.href="#Contact"
                   setIsOpen(!isOpen)
                }}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg" id="Home">
        <div className="title" data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="300">
          <div className="inn">
          <h1>BlackLeopard Technologies <br></br>Innovating Tomorrow, Today</h1>
          <p>BlackLeopard Technologies is a forward-thinking tech company dedicated to delivering cutting-edge digital solutions that empower businesses and individuals. With a focus on software development, cloud services, and emerging technologies, we combine innovation, security, and efficiency to help our clients stay ahead in a rapidly evolving digital world.</p>
          <button className="cta" onClick={()=>window.location.href='#Services'}>Our Services</button>
       </div> </div>
      </div>
    </>
  );
};

export default TopNav;
