import React from 'react'
import { Button } from 'antd' 
import './ContactCardcomp.scss'
import { Link } from 'react-router-dom'

function ContactCardcomp() {
  return ( 
    <div className="ContactCardcompStyles">
      <div className="ContactCardbox">
        <div className="ContactCardelement">
          <div className="ContactCardwrap">
            <h2>If you want to know more about 10 world Trade?</h2>
            <p>Please click contact us button</p>
          </div>
          <div className="ContactCardbtn">
            <Button size="large" type="primary">
              <Link to="contactus">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default ContactCardcomp
