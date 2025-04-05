import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info, CreditCard, AlertCircle } from 'lucide-react';

const NPSPranCardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/nps"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to NPS Resources
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">PRAN Card: Everything You Need to Know</h1>
          
          <div className="prose max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <CreditCard className="w-8 h-8 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">What is a PRAN Card?</h2>
              <p className="text-gray-600">
                PRAN (Permanent Retirement Account Number) is a unique 12-digit number assigned to every NPS subscriber. 
                The PRAN card serves as an identity proof for NPS subscribers and contains important details about your NPS account.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features of PRAN Card</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Unique 12-digit identification number</li>
                <li>Lifetime validity</li>
                <li>Portable across jobs and locations</li>
                <li>Contains subscriber's photograph and signature</li>
                <li>Can be used as identity proof for NPS-related transactions</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Get Your PRAN Card</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Open an NPS account through a Point of Presence (POP) or online</li>
                <li>Complete KYC verification</li>
                <li>Make the initial contribution</li>
                <li>PRAN will be generated and card will be dispatched to your registered address</li>
              </ol>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Important Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>PRAN card is dispatched within 20 days of account opening</li>
                <li>Keep your PRAN card safe and secure</li>
                <li>Report loss of PRAN card immediately to CRA</li>
                <li>Update your contact details if you change address</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <AlertCircle className="w-8 h-8 text-yellow-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Lost Your PRAN Card?</h2>
              <p className="text-gray-600">
                If you've lost your PRAN card, you can request a duplicate card through the CRA website or by contacting 
                your nearest Point of Presence (POP). A nominal fee may be charged for issuing a duplicate card.
              </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start">
              <Info className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-600">
                For more information about PRAN card or to request a duplicate card, please visit the official CRA website 
                or contact your nearest Point of Presence (POP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPSPranCardPage; 