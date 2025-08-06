import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    submitted: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (formData.phoneNumber && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const submitToVercel = async (data) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        subject: data.subject,
        message: data.message,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit via Vercel');
    }
    return response;
  };

  const submitToFormspree = async (data) => {
    const response = await fetch('https://formspree.io/f/xeoqkqpr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        subject: data.subject,
        message: data.message,
        _replyto: data.email,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit via Formspree');
    }
    return response;
  };

  const submitToNetlify = async (data) => {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', data.fullName);
    formData.append('email', data.email);
    formData.append('phone', data.phoneNumber);
    formData.append('subject', data.subject);
    formData.append('message', data.message);

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to submit via Netlify');
    }
    return response;
  };

  const sendMailto = (data) => {
    const subject = encodeURIComponent(data.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phoneNumber || 'Not provided'}\n\nMessage:\n${data.message}`
    );
    window.open(`mailto:bisal.career@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus({ isSubmitting: true, submitted: false, error: null });

    try {
      // Try multiple submission methods
      let submitted = false;
      
      // Method 1: Try Vercel API (primary for Vercel deployment)
      try {
        await submitToVercel(formData);
        submitted = true;
      } catch (vercelError) {
        console.log('Vercel API failed, trying Formspree...');
        
        // Method 2: Try Formspree (free tier)
        try {
          await submitToFormspree(formData);
          submitted = true;
        } catch (formspreeError) {
          console.log('Formspree failed, trying Netlify...');
          
          // Method 3: Try Netlify Forms (if hosted on Netlify)
          try {
            await submitToNetlify(formData);
            submitted = true;
          } catch (netlifyError) {
            console.log('Netlify failed, using mailto...');
            
            // Method 4: Fallback to mailto
            sendMailto(formData);
            submitted = true;
          }
        }
      }

      if (submitted) {
        setFormStatus({ 
          isSubmitting: false, 
          submitted: true, 
          error: null 
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: ''
          });
          setFormStatus({ isSubmitting: false, submitted: false, error: null });
        }, 5000);
      }
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please try again or contact directly.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email",
      value: "bisal.career@gmail.com",
      link: "mailto:bisal.career@gmail.com"
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Phone",
      value: "+91 9395360772",
      link: "tel:+919395360772"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Location",
      value: "NIT Silchar, Assam, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-3xl" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/bisal-prasad"
    },
    {
      icon: <FaGithub className="text-3xl" />,
      label: "GitHub",
      url: "https://github.com/bisal2003"
    },
    {
      icon: <SiLeetcode className="text-3xl" />,
      label: "LeetCode",
      url: "https://leetcode.com/Bisal2003"
    }
  ];

  return (
    <section id="contact" className="py-40 px-[12%] bg-bg-primary">
      <h2 className="text-[8rem] text-center mb-12 text-white">
        Contact <span className="text-accent">Me</span>
      </h2>
      <p className="text-3xl text-center mb-20 text-accent">
        Let's discuss opportunities in AI/ML, Web Development, or collaboration
      </p>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <h3 className="text-4xl font-bold text-white mb-8">Get In Touch</h3>
          
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-6 p-6 bg-bg-secondary rounded-2xl border-2 border-accent/30 hover:border-accent transition-colors duration-300">
              <div className="text-accent">
                {info.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">{info.title}</h4>
                <a 
                  href={info.link}
                  className="text-lg text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  {info.value}
                </a>
              </div>
            </div>
          ))}
          
          <div className="mt-12">
            <h4 className="text-2xl font-bold text-white mb-6">Connect with me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-accent text-black rounded-full hover:bg-white hover:scale-110 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-bg-secondary p-6 rounded-2xl border-2 border-accent/30">
            <h4 className="text-xl font-bold text-accent mb-4">Development & Research Interests</h4>
            <ul className="text-white space-y-2">
              <li>• Brain-Computer Interfaces</li>
              <li>• Real-world problem solution</li>
              <li>• Sustainable AI Solutions</li>
              <li>• AI Ethics & Responsible AI</li>
              <li>• Machine Learning Applications</li>
            </ul>
          </div>
        </div>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6" netlify="true" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <h3 className="text-4xl font-bold text-white mb-8">Send Message</h3>
          
          {/* Success Message */}
          {formStatus.submitted && (
            <div className="flex items-center gap-3 p-4 bg-green-500/20 border-2 border-green-500 rounded-xl">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-green-400 font-semibold">
                Message sent successfully! I'll get back to you soon.
              </span>
            </div>
          )}
          
          {/* Error Message */}
          {formStatus.error && (
            <div className="flex items-center gap-3 p-4 bg-red-500/20 border-2 border-red-500 rounded-xl">
              <FaExclamationTriangle className="text-red-500 text-2xl" />
              <span className="text-red-400 font-semibold">
                {formStatus.error}
              </span>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-4 text-xl text-white bg-bg-secondary rounded-xl border-2 ${
                  errors.fullName ? 'border-red-500' : 'border-accent/30'
                } focus:outline-none focus:border-accent transition-colors duration-300`}
                required
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 text-xl text-white bg-bg-secondary rounded-xl border-2 ${
                  errors.email ? 'border-red-500' : 'border-accent/30'
                } focus:outline-none focus:border-accent transition-colors duration-300`}
                required
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Ph. Number(Optional)"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full p-4 text-xl text-white bg-bg-secondary rounded-xl border-2 ${
                  errors.phoneNumber ? 'border-red-500' : 'border-accent/30'
                } focus:outline-none focus:border-accent transition-colors duration-300`}
              />
              {errors.phoneNumber && (
                <p className="text-red-400 text-sm mt-1">{errors.phoneNumber}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-4 text-xl text-white bg-bg-secondary rounded-xl border-2 ${
                  errors.subject ? 'border-red-500' : 'border-accent/30'
                } focus:outline-none focus:border-accent transition-colors duration-300`}
                required
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message (minimum 10 characters) *"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`w-full p-4 text-xl text-white bg-bg-secondary rounded-xl border-2 ${
                errors.message ? 'border-red-500' : 'border-accent/30'
              } resize-none focus:outline-none focus:border-accent transition-colors duration-300`}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={formStatus.isSubmitting}
            className={`w-full py-4 px-8 text-xl font-bold rounded-xl transition-all duration-300 ${
              formStatus.isSubmitting
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-accent text-black shadow-[0_0_25px_#00ffee] hover:bg-white hover:scale-105 hover:shadow-[0_0_50px_#00ffee]'
            }`}
          >
            {formStatus.isSubmitting ? (
              <div className="flex items-center justify-center gap-3">
                <FaSpinner className="animate-spin" />
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              * Required fields | Your privacy is protected
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Alternative: Email directly at{' '}
              <a 
                href="mailto:bisal.career@gmail.com" 
                className="text-accent hover:underline"
              >
                bisal.career@gmail.com
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
