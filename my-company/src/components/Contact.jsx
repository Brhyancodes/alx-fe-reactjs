import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Send form data to your server
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', flexDirection: 'column' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0' }}
          />
          <input
            type="email"
  
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0' }}
          />
          <button type="submit" style={{ display: 'block', margin: '10px 0' }}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;