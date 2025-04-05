import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend API
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need assistance? Our team is here to help you with any inquiries about Dhanmitra.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 mb-4">
            Our support team will get back to you within 24 hours.
          </p>
          <a href="mailto:support@dhanmitra.com" className="text-blue-600 hover:text-blue-800">
            support@dhanmitra.com
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <Phone className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600 mb-4">
            Available Monday to Friday, 9am to 6pm IST.
          </p>
          <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800">
            +91 9876 543 210
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600 mb-4">
            Our office is located in New Delhi, India.
          </p>
          <address className="not-italic text-blue-600">
            123 Financial District, New Delhi, 110001
          </address>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
          
          {formSubmitted ? (
            <div className="bg-green-50 p-4 rounded-md flex items-center mb-6">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-green-700">
                Thank you for your message! We'll get back to you soon.
              </span>
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Account Issues">Account Issues</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">How can I reset my password?</h3>
              <p className="text-gray-600 text-sm">
                You can reset your password by clicking on "Forgot Password" on the login page and following the instructions sent to your email.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Is my data secure on Dhanmitra?</h3>
              <p className="text-gray-600 text-sm">
                Yes, we use industry-standard encryption to protect your data. We never share your personal information with third parties without your consent.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Can I delete my account?</h3>
              <p className="text-gray-600 text-sm">
                Yes, you can delete your account from your profile settings. All your data will be permanently removed from our systems.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">How accurate is the investment roadmap?</h3>
              <p className="text-gray-600 text-sm">
                The investment roadmap is based on your inputs and general financial principles. It's meant to be a guide, not financial advice. Always consult with a financial advisor for personalized advice.
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <a 
              href="/faq" 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View all FAQs
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-xl font-semibold mb-6">Our Location</h2>
        <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          {/* In a real app, this would be a Google Maps or similar embed */}
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Map would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 