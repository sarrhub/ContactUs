import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faLocationDot, faMobile, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="outer">
      <div className="left">
        <div className="head">Send us a message</div>
        <p>You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.</p>
        <div className="input">
          <label htmlFor="name">Your Name</label>
          <input type="text" name='name' placeholder='Name here...' />
        </div>
        <div className="input">
          <label htmlFor="email">Email address</label>
          <input type="text" name='email' placeholder='Email here...' />
        </div>
        <div className="input">
          <label htmlFor="phone">Phone</label>
          <input type="text" name='phone' placeholder= 'Number here...' />
        </div>
        <div className="input">
          <label htmlFor="message">Your message</label>
          <textarea name="message" rows="4" cols="37"></textarea>
        </div>
        <div className="line"></div>
        <div className="btn"><button>Contact Us</button></div>
      </div>
      <div className="right">
        <div className="box-outer">
          <div className="upper">
            <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
           <div className="out">
           <div className="text-head">Find us at the office</div>
            <div className="para">ADSBld Mihail Kogalniceanu, nr.8, 7652 Burcharest, Romania</div>
           </div>
          </div>
          <div className="upper">
            <div className="icon"><FontAwesomeIcon icon={faMobile} /></div>
            <div className="out">
            <div className="text-head">Give as a ring</div>
            <div className="para">
              <p>Michael Jordan</p>
              <p>+40 762321712</p>
              <p>Mon - Fri, 8:00-22:00</p>
            </div>
            </div>
          </div>
          <div className="upper">
            <div className="icon"><FontAwesomeIcon icon={faBuildingColumns} /></div>
            <div className="out">
            <div className="text-head">Legal Information</div>
            <div className="para">
              <p>XYZ</p>
              <p>VAT - EN234124SD</p>
              <p>IBAN - EN8732ENGB23003422</p>
              <p>Bank - Great Britain Bank</p>
            </div></div>
          </div>
          <div className="lower"></div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
