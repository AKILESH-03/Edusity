import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "38e022dd-48d0-47e7-a927-f187397150b6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="contact" id='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon}/></h3>
            <p>Fel Free to reach out through contact form or find our contact information
                below.Your feedback , questions, and suggestions are important to us We
                strive to provide exceptional service to our university community. 
            </p>
            <ul>
                <li><img src={mail_icon}/>Contact@AKR.dev</li>
                <li><img src={phone_icon}/>+91 123-456-7890</li>
                <li><img src={location_icon}/>77 Massachusetts Ave, Cambride<br/> MA 02134, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write Messages here</label>
                <textarea name='message' rows="6" placeholder='enter your message' required/>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></button>
            </form> 
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact