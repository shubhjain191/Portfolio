import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import './contact.css';

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "ea46393a-0a77-44a2-94bf-ff3f47d8cb9f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-card">
        <div className="card-header">
          <h1 className="card-title">Get in Touch</h1>
          <p className="card-description">
            Let's collaborate on your next digital innovation
          </p>
        </div>
        
        <div className="card-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  aria-label="Your Name"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  aria-label="Your Email"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <MessageSquare className="input-icon" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  aria-label="Your Message"
                />
              </div>
            </div>

            <button 
              type="submit"
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
              aria-label={isSubmitting ? 'Sending message' : 'Send message'}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className="button-icon" />
            </button>

            {result && (
              <div className={`form-result ${
                result === "Sending...." ? "sending" :
                result === "Form Submitted Successfully" ? "success" :
                "error"
              }`}>
                {result}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;