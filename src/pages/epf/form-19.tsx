import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PFForm19Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">PF Form 19 Download: Final Settlement of PF Funds</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          Both employees and employers in India have to make equal contributions to the Employee Provident Fund (EPF) under the 
          Employees' Provident Funds and Miscellaneous Provisions Act, 1952. To withdraw an amount under this scheme, employees 
          need to fill out and submit some forms. Provident Fund (PF) Form 19 is one of them, which allows individuals to collect 
          funds for particular reasons.
        </p>
        <p className="text-gray-700 mt-3">
          This guide will walk you through the PF Form 19 download process and how to submit it offline as well as online.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is PF Form 19 and When to Use It?</h2>
        <p className="text-gray-700">
          A PF Form 19 helps individuals to withdraw funds from their PF accounts. The actual purpose of PF Form 19 is to allow 
          EPFO members to go for a final settlement at the time of retirement or resignation. This form is used by the EPFO members 
          if they do not have a Universal Account Number (UAN). In this situation, employees need to use their PF account number and 
          name to fill out the form.
        </p>
        <p className="text-gray-700 mt-3">
          To avail the pension benefits by claiming settlements with your EPF account, this form becomes beneficial for employees. 
          If an employee suddenly quits a job, he or she needs to go through the process of PF Form 19 download process.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites for PF Form 19 Application</h2>
        <p className="text-gray-700 mb-4">
          While applying for PF form 19, employees must prepare some prerequisites. Follow the below prerequisites to withdraw funds from your PF account:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>First of all, you need to visit the EPF Member portal and activate your UAN.</li>
          <li>It is also important to link your UAN with your bank account and PAN.</li>
          <li>You should link your mobile number with UAN.</li>
          <li>Now check for the eligibility for the final settlement of withdrawal. If you do not meet the PF Form 19 eligibility criteria, the form will not be displayed.</li>
          <li>You can fill out the form only after two months of quitting a job or on retirement.</li>
          <li>You must provide a mobile number to access the final settlement.</li>
          <li>Whether you apply online or go for PF form 19 download and apply offline, it is mandatory to provide your PAN to claim the final settlement.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Fill the Form 19 Online?</h2>
        <p className="text-gray-700 mb-4">
          After quitting your job, you can transfer your PF account to your new organisation. However, if you want to claim the final settlement 
          of your PF account, you need to initiate a PF Form 19 download. Follow these steps below to fill out Form 19 online:
        </p>
        
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 1: Login to EPF Member Portal</h3>
            <p className="text-gray-700">
              After visiting the EPF Member Portal, log in to your UAN account.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 2: Access Claim Services</h3>
            <p className="text-gray-700">
              Under the 'Online Services' section, click the 'Claim (Form – 31, 19, 10C & 10D)'.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 3: Verify Bank Account</h3>
            <p className="text-gray-700">
              Enter the last four digits of the bank account that is linked with the PF account as well as click on 'Verify'.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 4: Complete Certificate of Undertaking</h3>
            <p className="text-gray-700">
              Click 'Yes' to complete the signing of 'Certificate of Undertaking'.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 5: Select Form Type</h3>
            <p className="text-gray-700">
              From the drop-down menu, select 'Only PF Withdrawal (Form-19)' in the 'I want to apply for' section.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 6: Enter Address and Get OTP</h3>
            <p className="text-gray-700">
              Now you have to enter your complete address in a new section of the form. After that, you should tick the disclaimer and click 'Get Aadhaar OTP'.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 7: Verify OTP</h3>
            <p className="text-gray-700">
              You will receive an OTP on your registered number with Aadhaar. Now enter the OTP in the particular space and submit your application.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 8: Note Reference Number</h3>
            <p className="text-gray-700">
              You will find a reference number after you have successfully submitted your application.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Step 9: Receive Funds</h3>
            <p className="text-gray-700">
              The withdrawal amount from your PF account will be deposited in your bank account in 15-20 days.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Download PF Form 19 and Apply Offline?</h2>
        <p className="text-gray-700">
          You can visit the link and download the form in a PDF version. After downloading it, you can fill out the form and submit it in person 
          at your nearest EPFO office to withdraw your funds.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Essential Details to Fill in PF Form 19</h2>
        <p className="text-gray-700 mb-4">
          The EPF Form 19 includes two pages, which must be filled by the employees to withdraw funds from the PF account. The first page requires 
          employees' personal and contact information. On the other hand, the second page is to be filled only if you choose cheque payment with a 
          revenue stamp of ₹1. Here are the detailed requirements you should fill while applying for the withdrawal:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Members' name, father's/husband's name, as well as the date of birth</li>
          <li>Name and address of the establishment</li>
          <li>Date of leaving the service and the reason for it</li>
          <li>PF account number and/or UAN</li>
          <li>Permanent Account Number (PAN) and full postal address</li>
          <li>Payment mode – You can choose between a money order on expense, account payee cheque or electronic payment mode.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits and Limitations of PF Form 19</h2>
        <p className="text-gray-700 mb-4">
          After knowing the PF form 19 download process as well as the procedure of applying it online, it is also required to understand the benefits 
          and limitations. Below is the list of benefits and limitations of PF Form 19 that you should consider:
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-3">Benefits of PF Form 19</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>No need for employee attestation</li>
            <li>For online applications, the claims of PF withdrawal can be processed within 5 days if the UAN number is linked to your Aadhaar.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-3">Limitations of PF Form 19</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Although employer attestation is not required to withdraw the PF amount, he or she still needs to update the exit date of the employee. Otherwise, the PF department will consider the employee is still working in the organisation, which can delay the overall process.</li>
          </ul>
        </div>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          Employees need to understand the whole process of PF withdrawal claim settlement before they start their retirement life. 
          As an employee, you can either apply offline or assess the PF Form 19 download process to withdraw the funds.
        </p>
      </section>
    </div>
  );
};

export default PFForm19Page; 