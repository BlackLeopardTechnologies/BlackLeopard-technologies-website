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
            <p>BlackLeopard Technologies is a dynamic global technology solutions provider headquartered in Ghana, dedicated to empowering businesses through comprehensive technology services. We specialize in three fundamental pillars of modern business technology: Computer Hardware, Computer Software, and Computerized Accounting.</p>
          </div>
        </div>
        
         <div className="img"  data-aos="fade-up"
              data-aos-duration="2000">
          <img src={aboutIcon2} alt="" />
        </div>
        
      </div>
      

      
      <div className="about">
        <div className="img" data-aos="fade-up"
              data-aos-duration="2000">
          <img src={aboutIcon} alt="" />
        </div>
       <div className="head" data-aos="fade-up"
              data-aos-duration="2000">
          <div className="">
            <h2>Who We Are</h2>
            <p>With our headquarters rooted in Ghana and our vision set on the world, we bridge the gap between businesses and the technology they need to thrive. We understand that in today's digital landscape, success requires more than just technology—it requires the right technology, expertly implemented and reliably supported.
            Our team combines technical expertise with deep industry knowledge to deliver solutions that are not only innovative but also practical and results-driven. Whether you're looking to upgrade your hardware infrastructure, develop custom software solutions, or implement sophisticated accounting systems, BlackLeopard Technologies is your trusted partner for complete <p id="Services"></p>technology transformation.
            We serve businesses across industries and continents, bringing world-class technology solutions with a personalized approach that puts your unique needs first. From small enterprises to large organizations, we scale our services to match your ambitions and drive your growth in an increasingly connected world.</p>
          </div>
        </div>
        
      </div>

       
    </>

  )
};