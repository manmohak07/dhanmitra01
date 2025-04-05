import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EPFNameChangePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">How to Change Name in EPF Account: Steps & Other Details</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The Employee Provident Fund (EPF) allows individuals to ensure financial security for their post-retirement life. 
          However, errors like incorrect names can delay the claim process. Individuals should correct their names by visiting 
          the Employees Provident Fund Organisation (EPFO) portal. This guide will walk you through the process of changing 
          your name in EPF accounts by offering simple steps.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Format of EPF Name Change Form</h2>
        <p className="text-gray-700 mb-4">
          To know how to change name in EPF account, first of all, you must go through the form. Before submitting it with changes 
          to the regional EPFO commissioner, you must know the format of the EPF name change form.
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Declare the topic of the letter as "Joint declaration by the member and the employer."</li>
          <li>State that you are a current or an ex-employee of the organisation, who entered your information incorrectly and you are writing to recommend correction.</li>
          <li>
            In a table with three columns, enter your information which will be changed, including the wrong entry and the right entry. 
            This form also helps to correct the following errors:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Error in members' names, father's or husband's name</li>
              <li>Error in the date of birth</li>
              <li>Incorrect numbers in PF or EPS accounts</li>
              <li>Wrong entry of information regarding company joining date and leaving date</li>
            </ul>
          </li>
          <li>The form lists all the columns, which you will fill in, where the collected information is required to be updated.</li>
          <li>After completing the form, you may add any documents that act as evidence of changes you have applied for.</li>
          <li>While signing and attesting the form, you will need to affix your signature to it and then sign it.</li>
          <li>You will also need to enter the name of the registered signatory of your former organisation.</li>
          <li>The approved signatory is responsible to sign the application form and affix the business.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Required Documents for EPF Name Change</h2>
        <p className="text-gray-700 mb-4">
          As per the latest declaration of the government, individuals should keep documents ready that are suitable for the EPF name 
          correction process, which include:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>PAN card</li>
          <li>Driver's license</li>
          <li>Aadhaar card</li>
          <li>Voters ID card</li>
          <li>ESIC ID card</li>
          <li>Passports</li>
          <li>Certificates of members' schools</li>
          <li>Bank or post office passbooks</li>
          <li>A single copy of an electric, phone, or water bill that bears your signature</li>
          <li>Any credential created based on central or state government service documents</li>
          <li>Birth or death certificates that have been received by the registrar of births and deaths</li>
          <li>A letter is signed by a well-known public official and confirmed by the appropriate authority in exceptional situations</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Name Correction Process in EPF Account Offline</h2>
        <p className="text-gray-700">
          You need to directly contact your employer or nearest EPF office to correct your name in an EPF account offline. 
          With the required supporting documents, you have to submit the EPF name correction form.
        </p>
        <p className="text-gray-700 mt-3">
          However, this procedure of correcting your name is quite tedious because of the physical handling and processing of documents. 
          You must follow up with the concerned authorities frequently to ensure that your request has been processed. 
          This process allows you to know how to change name in EPF account offline.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Name Correction Process in EPF Account Online</h2>
        <p className="text-gray-700 mb-4">
          The EPFO portal allows you to change name in EPF online. The following steps can inform you how to change name in your EPF account:
        </p>
        
        <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-medium mb-3">Step 1: Login to UAN Portal</h3>
          <p className="text-gray-700">
            Open and log in to the UAN portal to make any updates. Make sure you have completed your registration with the portal. 
            In case you haven't, visit the 'Important Links' and click the 'Enable UAN' button.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-medium mb-3">Step 2: Access Modification Options</h3>
          <p className="text-gray-700">
            Select the option 'Manage' and click 'Modify Basic Details' once you have logged in. Now you can submit your request for a name change. 
            You also need to make sure this information corresponds to your Aadhaar card, since it acts as the primary mode of verification.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-medium mb-3">Step 3: Enter Correct Details</h3>
          <p className="text-gray-700">
            Enter the name, date of birth as well as other relevant information included in the Aadhaar card. 
            You will receive a One Time Password (OTP) for verification in your mobile number that is linked with Aadhaar after the submission of the request.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-medium mb-3">Step 4: Employer Approval</h3>
          <p className="text-gray-700">
            Your employer now must approve the changes from their end. It is the most crucial step for validating your request. 
            By clicking the 'Member' section in the EPFO employer portal, they can access these requests. Then select 'Details Change Request'.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-medium mb-3">Step 5: EPFO Verification</h3>
          <p className="text-gray-700">
            After employers approve your request, they will forward it to the concerned EPFO field office. 
            You can track your status online with the help of the EPFO portal. The EPFO office may require some additional verification or documents, 
            which will be communicated to you or your employer. After completing all verifications, the EPFO will update your records.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium mb-3">Step 6: Confirmation</h3>
          <p className="text-gray-700">
            In the confirmation stage, you will get a notification after the details are updated. 
            You must log back into the EPFO portal and verify the updated information.
          </p>
        </div>
        
        <p className="text-gray-700 mt-6">
          Now that you know how to change name in EPF account both offline and online, it is safe to conclude that the online name change process 
          in EPF accounts is comparatively easier than offline.
        </p>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          Changing your name and other crucial information from your EPF account requires you to visit the online website of EPFO. 
          Similarly, you can also contact your employer or the nearest EPF office. Besides gaining knowledge on how to change name in EPF account, 
          you must also explore other investment options for emergency withdrawal of funds.
        </p>
      </section>
    </div>
  );
};

export default EPFNameChangePage; 