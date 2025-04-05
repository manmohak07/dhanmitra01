import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EPFForm13Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">EPF Transfer Form 13: What Is It and How to Submit It Online?</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The Employees' Provident Fund Organisation (EPFO) has introduced a streamlined system to enable members to submit transfer claims online with ease. 
          This initiative aims to make the transfer process more transparent, efficient and user-friendly. Using Form 13, employees can request a transfer of 
          their EPF account either through their current employer or their previous one, ensuring flexibility. This process is straightforward for both 
          employees and employers.
        </p>
        <p className="text-gray-700 mt-4">
          To learn more about EPF transfer form 13 and its relevant details, scroll through this guide.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is EPF Transfer Form 13?</h2>
        <p className="text-gray-700">
          EPF Form 13 is a transfer form provided by the Employees' Provident Fund Organisation. You can access it in both online and offline methods. 
          To transfer your EPF account, you simply need to fill out Form 13 and submit it.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Are the Documents Required to Transfer PF?</h2>
        <p className="text-gray-700 mb-3">
          The following are some important documents you must provide along with the EPF transfer online application:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>The employer must have approved the employee's e-KYC details.</li>
          <li>The previous or current employer should have authorised signatories digitally registered with EPFO.</li>
          <li>The PF account numbers from both the previous and current employers must be up to date in the EPFO database.</li>
          <li>Only one transfer request is applicable for a particular member ID.</li>
          <li>The employee should have activated their UAN through the UAN portal and the mobile number used during activation must remain active.</li>
          <li>The employee's bank account and IFSC code must be linked to their UAN. Linking Aadhaar and PAN with the UAN is not mandatory for submitting a transfer claim.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Are the Details You Need to Provide in EPF Form 13?</h2>
        <p className="text-gray-700 mb-3">
          EPF Form 13 includes several sections that both the employee and the new employer must complete before submission. 
          Below is a summary of the information, you need to provide when filling out the PF transfer form online:
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-3">Details to Be Given by the Employee</h3>
          <p className="text-gray-700 mb-2">Here are the details that an employee needs to provide in the form:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Full name as recorded in the Employee Provident Fund database</li>
            <li>Father's name or husband's name for married women</li>
            <li>Address and name of the previous employer</li>
            <li>EPF account number linked to the previous employer</li>
            <li>Information about who managed the EPF account in the previous organisation (e.g., Regional PF Commissioner or PF Trust)</li>
            <li>The date when you complete and submit the form</li>
            <li>Date of joining the new organisation</li>
            <li>Date of leaving the previous job</li>
            <li>Employee's signature or left-hand thumb impression</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-3">Details to Be Given by the New Employer</h3>
          <p className="text-gray-700 mb-2">Here are the details that an employer needs to provide in the form:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Establishment's name and address</li>
            <li>The EPF code and new account number which is given to the employee</li>
            <li>Details of the payee</li>
            <li>Date of filling and submitting the form</li>
            <li>Employers must provide information about the EPF account for the new employee. In the case of an unexempted establishment, it is necessary to include the address of the regional or sub-regional office. If the establishment is exempted, then the name of the exempted provident fund trust or the name of the private provident fund not governed by the Act should be specified.</li>
            <li>Address of the regional or sub-regional office where the account is maintained (if applicable)</li>
            <li>Signature of the authorised official from the new employer, along with the company seal</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Transfer PF Online?</h2>
        <p className="text-gray-700 mb-3">
          Below is a step-by-step procedure you need to follow if you are looking for how to transfer PF online:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Sign in to the Unified Portal with your UAN number and password.</li>
          <li>Once logged in, under the Online Services menu you will find the 'One Member – One EPF Account (Transfer Request)'. Click on this option.</li>
          <li>Verify your personal details and the PF account linked to your current employment.</li>
          <li>Tap on the 'Get Details' option to view the PF account information from your previous employer.</li>
          <li>Select either your previous employer or present employer to attest the claim form. You need to choose the one who has an authorised signatory with a DSC (Digital Signature Certificate). Provide the member ID/UAN number for verification.</li>
          <li>Next, hit on the 'Get OTP' button to receive a one-time password on your UAN-registered mobile number.</li>
          <li>Enter the OTP that you will receive and select 'Submit'.</li>
          <li>After submitting, your PF account details and tracking ID will appear on the screen.</li>
          <li>Print a copy of 'Form 13' and provide your signature on it. You must submit this form to your employer within 10 days of receiving it.</li>
          <li>Your previous employer will verify and approve the claim before forwarding it to EPFO for final approval and fund transfer. You will receive an SMS notification once the employer and EPFO approve the transfer.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Check the Status of PF Transfer?</h2>
        <p className="text-gray-700 mb-3">
          To perform a PF transfer status check, you need to follow the steps mentioned below:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Navigate to the official EPFO member portal.</li>
          <li>Sign in with your UAN number and password.</li>
          <li>You will be taken to a new page where you will need to input your UAN, password and CAPTCHA.</li>
          <li>Tap on the 'Login' button.</li>
          <li>Once logged in, go to the 'Online Services' section and select 'Track Claim Status'.</li>
          <li>A new tab will open and you need to select 'Transfer Claim Status' to view the status of your claim.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Are the Benefits of EPF Transfer?</h2>
        <p className="text-gray-700 mb-3">
          When an employee changes jobs, it is advisable to transfer the existing provident fund (PF) balance to the new PF account established by their current employer. 
          Transferring the PF balance rather than withdrawing it offers several advantages, which are as follows:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>If a PF amount is withdrawn within five years of joining, Tax Deducted at Source (TDS) is applicable. However, transferring the corpus within this period allows for a tax-free transition.</li>
          <li>The EPFO offers compound interest on PF contributions. By opting for a transfer instead of a withdrawal, employees can ensure that their interest earnings are maximised over time.</li>
        </ul>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          Overall, EPF transfer form 13 simplifies the process of transferring your PF account. By following the online process mentioned above, 
          you can quickly initiate and track your transfer without hassle. Make sure your UAN, e-KYC and employer details are updated to avoid delays. 
          Efficiently transferring your PF allows you to consolidate your savings and secure your retirement fund.
        </p>
      </section>
    </div>
  );
};

export default EPFForm13Page; 