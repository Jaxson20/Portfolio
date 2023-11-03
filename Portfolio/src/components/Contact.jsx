import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { validateForm } from './utils/formUtils'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      
    } else {
      
      setErrors(validationErrors);
    }
  };

  return (
    <section className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label htmlFor="name" className="">Your name</label>
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label htmlFor="email" className="">Your email</label>
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  <label htmlFor="subject" className="">Subject</label>
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className={`form-control md-textarea ${errors.message ? 'is-invalid' : ''}`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <label htmlFor="message">Your message</label>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
            <div className="status"></div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
