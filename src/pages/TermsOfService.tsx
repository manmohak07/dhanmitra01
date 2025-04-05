import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-3">
              Welcome to Dhanmitra ("we," "our," or "us"). By accessing or using our website, mobile application, and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our Services.
            </p>
            <p className="text-gray-700">
              If you do not agree to these Terms, you may not access or use our Services. By accessing or using our Services, you represent that you have read, understood, and agree to be bound by these Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-gray-700 mb-3">
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
            </p>
            <p className="text-gray-700">
              If you are using our Services on behalf of a company, organization, or other entity, you represent and warrant that you have the authority to bind such entity to these Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
            <p className="text-gray-700 mb-3">
              To access certain features of our Services, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself and to update such information as necessary to keep it accurate, current, and complete.
            </p>
            <p className="text-gray-700 mb-3">
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>
            <p className="text-gray-700">
              We reserve the right to disable your account at any time, including if we believe that you have violated these Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Financial Information and Advice</h2>
            <p className="text-gray-700 mb-3">
              The financial information provided through our Services is for informational and educational purposes only and should not be construed as financial, legal, or tax advice. We do not provide personalized investment advice or recommendations.
            </p>
            <p className="text-gray-700 mb-3">
              The investment roadmaps, comparisons, and other tools provided through our Services are based on general principles and assumptions and may not be suitable for your individual circumstances. You should consult with a qualified financial advisor before making any investment decisions.
            </p>
            <p className="text-gray-700">
              Past performance is not indicative of future results, and investments involve risk, including the possible loss of principal.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. User Content</h2>
            <p className="text-gray-700 mb-3">
              Our Services may allow you to post, upload, or submit content, such as reviews, comments, and feedback ("User Content"). You retain ownership of your User Content, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display your User Content in connection with our Services.
            </p>
            <p className="text-gray-700 mb-3">
              You represent and warrant that your User Content does not violate any third-party rights, including intellectual property rights and privacy rights, and that it complies with these Terms and all applicable laws and regulations.
            </p>
            <p className="text-gray-700">
              We reserve the right to remove any User Content that we believe violates these Terms or is otherwise objectionable, without notice or liability to you.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Prohibited Conduct</h2>
            <p className="text-gray-700 mb-3">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use our Services for any illegal purpose or in violation of any applicable laws or regulations</li>
              <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
              <li>Interfere with or disrupt our Services or servers or networks connected to our Services</li>
              <li>Attempt to gain unauthorized access to any part of our Services, other accounts, or computer systems or networks connected to our Services</li>
              <li>Use any robot, spider, or other automated device to access our Services</li>
              <li>Transmit any viruses, worms, defects, Trojan horses, or other items of a destructive nature</li>
              <li>Collect or harvest any personally identifiable information from our Services</li>
              <li>Use our Services to send unsolicited communications, promotions, or advertisements</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-3">
              Our Services and all content and materials included on our Services, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, are the property of Dhanmitra or our licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700">
              You may not use, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as necessary for your personal, non-commercial use of our Services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-3">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 mb-3">
              WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
            <p className="text-gray-700">
              WE MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE CONTENT OR INFORMATION PROVIDED THROUGH OUR SERVICES.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-3">
              IN NO EVENT WILL WE, OUR AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, OUR SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>
            <p className="text-gray-700">
              THIS LIMITATION OF LIABILITY APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">10. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless Dhanmitra and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">11. Modifications to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by posting the updated Terms on our Services and updating the "Last Updated" date at the top of these Terms. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-gray-700">
              These Terms and your use of our Services shall be governed by and construed in accordance with the laws of India, without giving effect to any principles of conflicts of law.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">13. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@dhanmitra.com" className="text-blue-600 hover:text-blue-800">legal@dhanmitra.com</a> or through our <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 