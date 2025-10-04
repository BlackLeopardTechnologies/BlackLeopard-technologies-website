import React, { useState, useEffect } from "react";
import AppLogo from "../assets/logo.png";


const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  


   const slides = [
    {
      title: "BlackLeopard Technologies <br/>Innovating Tomorrow, Today",
      desc: "BlackLeopard Technologies is a forward-thinking tech company dedicated to delivering cutting-edge digital solutions that empower businesses and individuals. With a focus on software development, cloud services, and emerging technologies, we combine innovation, security, and efficiency to help our clients stay ahead in a rapidly evolving digital world."
    },
    {
      title: "Driving Digital Transformation",
      desc: "We help businesses embrace the future with AI-driven solutions, scalable cloud infrastructure, and secure digital platforms tailored to unique needs."
    },
    {
      title: "Empowering Innovation Everywhere",
      desc: "From startups to enterprises, our mission is to provide smart, reliable, and efficient tech solutions that make a real impact in everyday life."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000); // change slide every 5s
    return () => clearInterval(interval);
  }, []);



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
                }}>About us</a>
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
          {/* <h1>BlackLeopard Technologies <br></br>Innovating Tomorrow, Today</h1>
          <p>BlackLeopard Technologies is a forward-thinking tech company dedicated to delivering cutting-edge digital solutions that empower businesses and individuals. With a focus on software development, cloud services, and emerging technologies, we combine innovation, security, and efficiency to help our clients stay ahead in a rapidly evolving digital world.</p> */}
           <h1
            dangerouslySetInnerHTML={{ __html: slides[index].title }}
          />
          <p className="navP">{slides[index].desc}</p>
          {/* <button
            className="cta"
            onClick={() => (window.location.href = "#Products")}
          ></button> */}
          
          <button className="cta" onClick={()=>window.location.href='#Services'}>
            Services</button>
       </div> </div>
      </div>


    

      
    </>
  );
};

export default TopNav;
