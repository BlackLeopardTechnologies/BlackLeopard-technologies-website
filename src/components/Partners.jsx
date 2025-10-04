import aboutIcon from "../assets/vector (3).png";
import icon from "../assets/icon.png";

export const Partners = () => {
  return (
    <>



      
      <div className="about aa">
        
          <div className="b">

           <div className="headd" >
                <h2>Our Partners</h2>
            </div>
<marquee 
 onMouseOver={(e) => e.target.stop()}
  onMouseOut={(e) => e.target.start()}
className="Marquee" behavior="" direction=""> 
            <div className="inerAbout">
                
               
                <div className="values a new" data-aos="fade-up" data-aos-duration="1000">
                   <div className="img">
                        <img className="Imagepart" src={icon} alt="" />
                    </div>
                    <div className="dess">
                        <h3>1. Intuit QuickBooks</h3>
                        <p>BlackLeopard Technologies have partnered with intuit in providing QuickBooks online services and support that helps transforms business accounting for proper record keeping and business finance management
                        </p>
                   </div>
                </div>

                <div className="values a new" data-aos="fade-up" data-aos-duration="1000">
                   <div className="img">
                        <img className="Imagepart" src={icon} alt="" />
                    </div>
                    <div className="dess">
                        <h3>2. AdmitsXtra</h3>
                        <p>BlackLeopard Technologies in partnership with Admits Incorporation to develop and maintain the AdmitsXtra system that facilitate coupon management, event ticketing, application form sales and voting and support business and individual on easy access of what the love most.
                        </p>
                   </div>
                </div>

            





            </div> </marquee>
          </div>

        
      </div>

       
    </>

  )
};