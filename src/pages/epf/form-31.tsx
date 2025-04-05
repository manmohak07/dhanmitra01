import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EPFForm31Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">How to Withdraw Funds Using EPF Withdrawal Form 31?</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The Employee Provident Fund (EPF) is a government-backed savings scheme, which helps employees to make their post-retirement life secure. 
          Sometimes it becomes necessary to withdraw funds due to some emergencies. The EPF withdrawal form 31 allows individuals to withdraw 
          accumulated funds from their accounts in advance during these situations.
        </p>
        <p className="text-gray-700 mt-3">
          This guide will walk you through the process of advance EPF withdrawal with the help of the form.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Purpose and Conditions for Partial Withdrawal from EPF</h2>
        <p className="text-gray-700 mb-4">
          You can withdraw accumulated EPF savings in advance using EPF withdrawal form 31. The below table shows the purpose, 
          conditions and times when you can withdraw funds using EPF form 31 for partial withdrawal:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Purpose</th>
                <th className="py-3 px-4 border-b text-left">Withdrawal limit</th>
                <th className="py-3 px-4 border-b text-left">Number of years in service required</th>
                <th className="py-3 px-4 border-b text-left">Other conditions to fulfill</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Medical purposes</td>
                <td className="py-3 px-4 border-b">Six times of monthly basic salary or employees' total share, whichever is lower.</td>
                <td className="py-3 px-4 border-b">NA</td>
                <td className="py-3 px-4 border-b">Medical treatment for spouse, self, children, and parents</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Education</td>
                <td className="py-3 px-4 border-b">Maximum of 50% to the contributions of employees</td>
                <td className="py-3 px-4 border-b">7 years</td>
                <td className="py-3 px-4 border-b">Eligible for account holder's education or child's education for 10th standard</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Marriage</td>
                <td className="py-3 px-4 border-b">50% of employees' contribution to EPF</td>
                <td className="py-3 px-4 border-b">7 years</td>
                <td className="py-3 px-4 border-b">Marriage for self, brother/sister, and son-daughter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Home Loan Repayment</td>
                <td className="py-3 px-4 border-b">
                  i. Maximum of 36 times of monthly basic salary and dearness allowance.<br/>
                  ii. Overall corpus with employer and employee's contribution, and interest<br/>
                  iii. Total outstanding principal and housing loan interest.
                </td>
                <td className="py-3 px-4 border-b">10 years</td>
                <td className="py-3 px-4 border-b">
                  i. Property should be registered in the name of the employee or spouse or jointly with the spouse.<br/>
                  ii. Withdrawals can be made based on the furnishing of necessary documents as stated by the EPFO.<br/>
                  iii. The accumulated amount in employees' PF accounts has to be more than ₹20,000 without interest.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Purchase of land/property</td>
                <td className="py-3 px-4 border-b">
                  For Land: Up to 24 times of basic monthly salary and dearness allowance of the employees, or share of employees, including the addition of interest or cost, which is lower.<br/><br/>
                  For House: A maximum of 36 times of employees' basic monthly salary and dearness allowance or share of employees, which includes interest or cost, which is lower.
                </td>
                <td className="py-3 px-4 border-b">5 years</td>
                <td className="py-3 px-4 border-b">The property must be in the name of a member or spouse, and it can be owned jointly too.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Download EPF Form 31?</h2>
        <p className="text-gray-700 mb-4">
          To request a partial withdrawal, EPF withdrawal form 31 is required. Below are the steps by which you can download this form online:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Log in with your UAN and password in the EPFO member portal.</li>
          <li>Click on the 'Online Services' tab and select 'Claim' for online requests.</li>
          <li>After clicking on 'Claim', you will find a new page where you have to put your name, date of birth, father's name, Aadhaar number, PAN number, company joining date and mobile number.</li>
          <li>To ensure all information is correct, you can click 'Proceed for Online Claim'.</li>
          <li>In the drop-down option, you need to enter the type of claim. Choose 'PF ADVANCE (FORM 31)'.</li>
          <li>Choose your purpose to claim for partial withdrawal like illness, natural calamities, and issues in wage receipt. You must also enter the desired amount and your address.</li>
          <li>Sign the disclosure and click on the 'Get Aadhaar OTP' button.</li>
        </ol>
        
        <p className="text-gray-700 mt-4">
          After clicking the button, you will receive an OTP which you must authenticate. By entering the OTP and clicking on 'Validate OTP and Submit Claim Form,' 
          you complete the procedure of EPF Form 31 download online.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Submit EPF Form 31 Offline?</h2>
        <p className="text-gray-700 mb-4">
          If you want to submit the form physically, you need to download it from the UAN portal. To fill out EPF withdrawal form 31 in offline, 
          you should follow the below steps:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Fill out and sign EPF withdrawal form 31 after downloading it.</li>
          <li>Ensure your employer validates your certificate, by filling all the required information and attesting all relevant enclosures.</li>
          <li>Submit the form to the EPF office which is responsible for your jurisdiction.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Submit EPF Form 31 Online?</h2>
        <p className="text-gray-700 mb-4">
          You have to submit the form in the UAN portal to withdraw the funds from EPF online. Follow the simple steps to submit the EPF withdrawal form 31 online:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Visit the official UAN portal.</li>
          <li>Enter the UAN number and password and click on 'Sign In'.</li>
          <li>Click on 'Online Services' and choose any one from Form-31, 19, 10C, and 10D from the list.</li>
          <li>By entering the last four digits of your account number, verify your bank account.</li>
          <li>Click 'Yes' when you will be asked to agree to the terms and conditions of the Certificate of Undertaking.</li>
          <li>After selecting the 'Proceed for Online Claim' option, choose 'PF Withdrawal'.</li>
          <li>Choose the 'PF Advance Form' and enter your withdrawal information like the amount and the purpose.</li>
          <li>After the completion of the form, click 'Submit'. You will easily complete the online application process to submit EPF form 31 online.</li>
        </ol>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          EPF withdrawal form 31 is beneficial to apply for the advance withdrawal of funds from EPF savings. In terms of emergencies like medical purposes, 
          education, marriage, home loan repayment and others, employees can fill up this form and submit it both online and offline.
        </p>
      </section>
    </div>
  );
};

export default EPFForm31Page; 