import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-3">
              At Dhanmitra ("we," "our," or "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Services").
            </p>
            <p className="text-gray-700">
              Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-3">
              We collect several types of information from and about users of our Services, including:
            </p>
            
            <h3 className="text-lg font-medium mb-2">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-3">
              Personal information is information that identifies you as an individual. We may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Contact information (such as name, email address, phone number, and mailing address)</li>
              <li>Account credentials (such as username and password)</li>
              <li>Financial information (such as income, expenses, and investment preferences)</li>
              <li>Demographic information (such as age, gender, and occupation)</li>
              <li>Profile information (such as profile picture and bio)</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">2.2 Usage Information</h3>
            <p className="text-gray-700 mb-3">
              We may collect information about how you use our Services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Log data (such as IP address, browser type, operating system, and pages visited)</li>
              <li>Device information (such as device type, device ID, and mobile network information)</li>
              <li>Usage patterns (such as features used, time spent on the Services, and interactions with content)</li>
              <li>Location information (such as general location based on IP address)</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">2.3 Cookies and Similar Technologies</h3>
            <p className="text-gray-700">
              We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our Services. Cookies are small data files that are stored on your device when you visit a website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until they expire or you delete them).
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. How We Collect Information</h2>
            <p className="text-gray-700 mb-3">
              We collect information in the following ways:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Directly from you when you provide it to us (such as when you register for an account, fill out forms, or communicate with us)</li>
              <li>Automatically as you navigate through our Services (such as through cookies and similar technologies)</li>
              <li>From third-party sources (such as business partners, analytics providers, and social media platforms)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing, maintaining, and improving our Services</li>
              <li>Processing transactions and managing your account</li>
              <li>Personalizing your experience and delivering content relevant to your interests</li>
              <li>Communicating with you about our Services, updates, and promotions</li>
              <li>Responding to your inquiries, comments, and feedback</li>
              <li>Monitoring and analyzing usage patterns and trends</li>
              <li>Protecting the security and integrity of our Services</li>
              <li>Complying with legal obligations and enforcing our terms and policies</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. How We Share Your Information</h2>
            <p className="text-gray-700 mb-3">
              We may share your information with the following parties:
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.1 Service Providers</h3>
            <p className="text-gray-700 mb-3">
              We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, customer service, and marketing assistance.
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.2 Business Partners</h3>
            <p className="text-gray-700 mb-3">
              We may share your information with our business partners to offer you certain products, services, or promotions that may be of interest to you.
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.3 Legal Requirements</h3>
            <p className="text-gray-700 mb-3">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (such as a court or government agency).
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.4 Business Transfers</h3>
            <p className="text-gray-700 mb-3">
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.5 With Your Consent</h3>
            <p className="text-gray-700">
              We may share your information with third parties when we have your consent to do so.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-3">
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p className="text-gray-700">
              You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account. Please notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
              <li>Accessing, updating, or deleting your personal information</li>
              <li>Objecting to the processing of your personal information</li>
              <li>Restricting the processing of your personal information</li>
              <li>Requesting the portability of your personal information</li>
              <li>Withdrawing your consent at any time (where we rely on consent as the legal basis for processing)</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below. Please note that we may ask you to verify your identity before responding to such requests.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700">
              Our Services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">9. Third-Party Links and Services</h2>
            <p className="text-gray-700">
              Our Services may contain links to third-party websites, services, and applications that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of these third parties before providing any information to them.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting the updated Privacy Policy on our Services and updating the "Last Updated" date at the top of this Privacy Policy. Your continued use of our Services after any such changes constitutes your acceptance of the new Privacy Policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at <a href="mailto:privacy@dhanmitra.com" className="text-blue-600 hover:text-blue-800">privacy@dhanmitra.com</a> or through our <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 