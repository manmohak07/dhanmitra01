import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EPFOLoginPortalPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">EPFO Login Portal: Here's What You Need to Know</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The Employee Provident Fund Organisation (EPFO) is a statutory board established by the Government of India. 
          It offers several benefits such as a contributory provident fund, a pension scheme, and an insurance scheme for the Indian workforce. 
          Through the EPFO login portal, employees can access detailed information about these benefits.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Importance of EPFO Login Portal</h2>
        <p className="text-gray-700 mb-4">
          EPFO is one of the world's largest social security organizations, crucial for any financial transaction involving employee benefits. 
          It has enabled numerous online facilities to ensure easy compliance for leading industries, MSMEs, and other establishments. 
          The portal supports three main schemes:
        </p>
        
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Employees' Provident Fund Scheme 1952 (EPF)</h3>
            <p className="text-gray-700">
              Allows partial withdrawals for specific needs like retirement, resignation, or death.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Employees' Pension Scheme 1995 (EPS)</h3>
            <p className="text-gray-700">
              Provides monthly contributions for retirement or to nominees in case of a member's death.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Employees Deposit Linked Scheme 1976 (EDLI)</h3>
            <p className="text-gray-700">
              Offers up to 20 times an employee's salary (capped at ₹7 lakh) as a benefit to the family if a member passes away.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Steps To Login in EPFO Member Portal as Employees</h2>
        <p className="text-gray-700 mb-4">
          To access services on the EPFO portal, follow these steps:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Visit the official EPFO portal.</li>
          <li>Select 'For Employees' under the 'Services' section.</li>
          <li>Click on 'Member UAN/Online Services'.</li>
          <li>Log in using your UAN. If it's inactive, select 'Activate UAN'.</li>
          <li>Post-activation, use your UAN to log in anytime to check PF balance, settlements status, and make partial withdrawals.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Steps To Login in EPFO Member Portal as Employers</h2>
        <p className="text-gray-700 mb-4">
          Employers also need to access the EPFO portal to manage their obligations:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Go to the EPFO employer login page.</li>
          <li>Enter your username and password, then click on 'Sign In'.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Activate UAN for the First Time?</h2>
        <p className="text-gray-700 mb-4">
          Activating your UAN is crucial for availing EPF services:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Visit the EPFO UAN member portal and click on 'Activate UAN'.</li>
          <li>Enter your UAN, name, date of birth, mobile number, and CAPTCHA code.</li>
          <li>After verification, you'll receive a password on your registered mobile number to log into your account.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Reset the Login Password at EPFO Portal?</h2>
        <p className="text-gray-700 mb-4">
          If you forget your password, follow these steps to reset it:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Visit the EPFO member portal and select 'Forgot Password'.</li>
          <li>Enter your UAN and verify your details.</li>
          <li>After verification, reset your password and confirm to complete the process.</li>
        </ol>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          The EPFO login portal is essential for accessing various savings schemes and managing your EPF account effectively.
          By following the steps outlined in this guide, both employees and employers can easily navigate the portal and make the most of the services offered.
        </p>
      </section>
    </div>
  );
};

export default EPFOLoginPortalPage; 