import React from "react";

export default function ContactMe() {
  
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const whatsappNumber = "919498353593"; 
    
    const text = `Hi Rupashree!%0A%0AI am reaching out from your portfolio.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    window.open(whatsappUrl, "_blank");
    
    e.target.reset();
  };

  return (
    <section className="contact--section" id="Contact">
      <div className="contact--container">
        
        <div className="contact--info-box">
          <p className="section--subtitle">GET IN TOUCH</p>
          <h2 className="section--heading">Let's build<br />something great.</h2>
          <p className="contact--description">
            Whether you have a question, a project in mind, or just want to say hi, 
            I'm always open to discussing new opportunities and impact-driven ideas.
          </p>
          
          <div className="contact--details">
            <div className="contact--detail-item">
             
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>rupashreethulasiraman@gmail.com</span> 
            </div>
            
            <div className="contact--detail-item">
             
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>

        <div className="contact--form-box">
          <form className="contact--form" onSubmit={handleWhatsAppSubmit}>
            <div className="form--group">
              <label htmlFor="name" className="form--label">Full Name</label>
              <input type="text" id="name" name="name" className="form--input" placeholder="John Doe" required />
            </div>
            
            <div className="form--group">
              <label htmlFor="email" className="form--label">Email Address</label>
              <input type="email" id="email" name="email" className="form--input" placeholder="john@example.com" required />
            </div>
            
            <div className="form--group">
              <label htmlFor="message" className="form--label">Message</label>
              <textarea id="message" name="message" className="form--input form--textarea" placeholder="Tell me about your project..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary form--submit-btn">
              Send via WhatsApp
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}