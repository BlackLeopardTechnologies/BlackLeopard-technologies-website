import {React, useState} from 'react'

export const Services = () => {

   const [activeTab, setActiveTab] = useState("accounting"); // default active
  return (

    <div data-aos="fade-up" data-aos-duration="2000">

    <div className="headd" >
      <h2>Our Services</h2>
    </div>
      <div id="Services" className="p-2">
      {/* Tab buttons */}
      <div className="flex space-x-2 btnss">
        <button
          onClick={() => setActiveTab("accounting")}
          className={`px-4 py-2 btnssMen a ${
            activeTab === "accounting"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Computerised Accounting
        </button>
        <button
          onClick={() => setActiveTab("software")}
          className={`px-4 py-2 btnssMen ${
            activeTab === "software"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Computer Software
        </button>
        <button
          onClick={() => setActiveTab("hardware")}
          className={`px-4 py-2 btnssMen b ${
            activeTab === "hardware"
              ? "bg-blue-800 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Computer Hardware
        </button>
      </div>

      {/* Tab content */}
      <div className="p-4   ServMain">
        <div className="ann">
          {activeTab === "accounting" && 
          <>
            <p>Streamline your accounting processes with our smart and efficient solutions.</p>
             <div className="boxes">
              <div className="box">Accounting Service Sample 1</div>
              <div className="box">Accounting Service Sample 2</div>
              <div className="box">Accounting Service Sample 3</div>
              <div className="box">Accounting Service Sample 4</div>
              <div className="box">Accounting Service Sample 5</div>
              <div className="box"> Accounting Service Sample 6</div>
            </div>
          </>
          }
          {activeTab === "software" && 
          <>
            <p>Custom software development to fit your business needs and boost productivity.</p>
            <div className="boxes">
              <div className="box"> Software Service Samople 1</div>
              <div className="box"> Software Service Samople 2</div>
              <div className="box"> Software Service Samople 3</div>
              <div className="box"> Software Service Samople 4</div>
              <div className="box"> Software Service Samople 5</div>
              <div className="box"> Software Service Samople 6</div>
            </div>
          </>
          }
          {activeTab === "hardware" && 
          <>
            <p>Reliable hardware solutions to keep your systems running smoothly.</p>
             <div className="boxes">
              <div className="box">Hardware Service Sample 1</div>
              <div className="box">Hardware Service Sample 2</div>
              <div className="box">Hardware Service Sample 3</div>
              <div className="box">Hardware Service Sample 4</div>
              <div className="box">Hardware Service Sample 5</div>
              <div className="box"> Hardware Service Sample 6</div>
            </div>
          </>
          }
        </div>
      </div>
    </div>
    </div>
  )
}
