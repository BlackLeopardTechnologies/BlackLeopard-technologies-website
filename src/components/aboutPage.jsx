import aboutIcon from "../assets/vector (3).png";
import aboutIcon2 from "../assets/vector (1).png";

export const AboutPage = () => {
  return (
    <>

    <div id="About" className="about b">
       
        <div className="head"  data-aos="fade-up"
              data-aos-duration="2000">
          <div className=""> 
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt laborum quos! Id unde optio sunt, quia ea similique sint velit, incidunt accusantium magni numquam, harum voluptas quam et? Cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vero dolorem maiores nulla sunt perferendis, saepe cumque accusamus perspiciatis ducimus ratione, iure assumenda officia repellat sed? Voluptatibus nobis in debitis?</p>
          </div>
        </div>
        
         <div className="img"  data-aos="fade-up"
              data-aos-duration="2000">
          <img src={aboutIcon2} alt="" />
        </div>
        
      </div>
      

      
      <div id="About" className="about">
        <div className="img" data-aos="fade-up"
              data-aos-duration="2000">
          <img src={aboutIcon} alt="" />
        </div>
       <div className="head" data-aos="fade-up"
              data-aos-duration="2000">
          <div className="">
            <h2>Who We Are</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt laborum quos! Id unde optio sunt, quia ea similique sint velit, incidunt accusantium magni numquam, harum voluptas quam et? Cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vero dolorem maiores nulla sunt perferendis, saepe cumque accusamus perspiciatis ducimus ratione, iure assumenda officia repellat sed? Voluptatibus nobis in debitis?</p>
          </div>
        </div>
        
      </div>

       
    </>

  )
};