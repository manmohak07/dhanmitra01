import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const NPSRegistrationPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/nps" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to NPS Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">How to Open NPS Account Online</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          Opening an NPS account online is a simple process that can be completed through the eNPS portal. 
          Follow this step-by-step guide to start your retirement planning journey with NPS.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              PAN Card
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              Aadhaar Card
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              Bank Account Details
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              Mobile Number linked with Aadhaar
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              Email ID
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Registration Process</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Step 1: Visit eNPS Portal</h3>
            <p className="text-gray-700">
              Go to the official eNPS website (https://enps.nsdl.com) and click on "Register" or "New Registration".
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Step 2: Choose Registration Type</h3>
            <p className="text-gray-700">
              Select between Individual Subscriber or Corporate Subscriber registration based on your requirement.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Step 3: Fill Personal Details</h3>
            <p className="text-gray-700">
              Enter your personal information including name, date of birth, contact details, and PAN number.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Step 4: Aadhaar Authentication</h3>
            <p className="text-gray-700">
              Complete Aadhaar-based KYC verification through OTP sent to your registered mobile number.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Step 5: Set Password</h3>
            <p className="text-gray-700">
              Create a strong password for your eNPS account and set security questions for recovery.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Step 6: Choose Investment Options</h3>
            <p className="text-gray-700">
              Select your preferred pension fund manager and investment allocation pattern.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Step 7: Make Payment</h3>
            <p className="text-gray-700">
              Complete the initial contribution payment using net banking, debit card, or UPI.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">After Registration</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-4">
            After successful registration and payment:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              Your PRAN (Permanent Retirement Account Number) will be generated
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              You'll receive confirmation via email and SMS
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              Physical PRAN card will be dispatched to your registered address
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              You can start making regular contributions to your NPS account
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NPSRegistrationPage; 