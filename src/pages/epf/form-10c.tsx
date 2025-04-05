import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EPFForm10CPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">EPF Form 10C for EPS Withdrawal</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          EPF Form 10C is a crucial document that allows EPF members to claim their employer's contribution to the 
          Employee Pension Scheme (EPS). Employers contribute 8.33% of the 12% EPF contribution to EPS, with the 
          remaining amount going to the EPF. By using Form 10C, you can withdraw the employer's share of the 
          contribution under specific circumstances. Learn more about Form 10C here to understand the eligibility 
          criteria and the procedure for usage.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is EPF Form 10C?</h2>
        <p className="text-gray-700">
          The Employee Provident Fund (EPF) is a crucial retirement savings scheme that includes contributions from 
          both employees and employers. The employer's contribution is divided into two components: the EPF (Employee 
          Provident Fund) and the EPS (Employee Pension Scheme). If you wish to withdraw funds from your EPS account, 
          where your employer contributes towards your pension, you will need to submit EPF Form 10C. This form is 
          essential for accessing the pension funds accumulated under the EPS.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">When to Use EPF Form 10C?</h2>
        <p className="text-gray-700 mb-4">
          Here is when you use Form 10C:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Employer Contribution Refund:</strong> If you are unemployed and have not completed 10 years of service, you can raise claims for employer contribution in EPS.</li>
          <li><strong>Scheme Certificate:</strong> This is a document that verifies your tenure of service and membership to EPS. Notably, you need to transfer your EPS if you switch a job.</li>
          <li><strong>EPF Balance Withdrawal:</strong> You can withdraw EPS balance under special circumstances if allowed as per EPFO rules.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Content of EPF Form 10C</h2>
        <p className="text-gray-700 mb-4">
          The following content is included in Form 10C:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Name, address and date of birth of claimant</li>
          <li>Father's name</li>
          <li>Husband's name if you are a married woman</li>
          <li>Name and address of the organisation the member worked before retirement</li>
          <li>Region code, establishment code of the last company and PF account number of the individual</li>
          <li>Joining date in the previous organisation</li>
          <li>Reason and date of quitting service</li>
          <li>Preference for a scheme certificate instead of withdrawals</li>
          <li>Family details such as spouse and children if applicable and nominee</li>
          <li>If the member is deceased, the name and relation (with the deceased member) of the applicant, the date of death of the member</li>
          <li>Remittance modes such as electronic/cheque/postal money order</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria to Apply for EPF Form 10C</h2>
        <p className="text-gray-700 mb-4">
          Here are the eligibility criteria to apply for Form 10C:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Eligibility Criteria for Type I:</strong> If you have quit your job before completing 10 years of service or if you attain 58 years before completing 10 years of service.</li>
          <li><strong>Eligibility Criteria for Type II:</strong> If you are below 50 years, however, completed 10 years of service while leaving your organisation or if you are between 50 to 58 years not willing to reduce your pension.</li>
          <li><strong>Eligibility Criteria for Type III:</strong> If you are a family member, legal heir or nominee of a member who expired after 58 years, however, before 10 years of service completion.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Documents Required for EPF Form 10C Submission Process</h2>
        <p className="text-gray-700 mb-4">
          You need the following documents to submit Form 10C of EPF:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>A copy of the cancelled cheque</li>
          <li>For scheme certificate applications, you need to submit your children's birth certificate.</li>
          <li>Death certificate of members if the member has expired</li>
          <li>Legal heir's succession certificate</li>
          <li>₹1 stamp if you are applying for withdrawal through a bank</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Download EPF Form 10C PDF?</h2>
        <p className="text-gray-700 mb-4">
          Here are the steps to follow to download Form 10C:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Visit the official EPFO portal.</li>
          <li>Navigate to the 'Downloads' option.</li>
          <li>Select the 'Claim Forms' option.</li>
          <li>Choose the 'Form 10C' option.</li>
          <li>Your Form 10C will be downloaded in PDF format.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Fill EPF Form 10C Online?</h2>
        <p className="text-gray-700 mb-4">
          Follow the steps below to fill form 10C online:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Log in to the EPF member portal using your UAN and password.</li>
          <li>Go to 'Online Services' and choose 'Claim Form 10C, 19 and 31'.</li>
          <li>Fill in the last 4 digits of your registered bank account and click 'Verify'.</li>
          <li>Sign the 'Certificate of Undertaking' to confirm your agreement.</li>
          <li>Select 'Only Pension Withdrawal (Form 10C)'.</li>
          <li>Fill in your address and click on 'Get Aadhaar OTP'.</li>
          <li>Enter the OTP you receive on your Aadhaar-registered mobile number before you click on 'Validate OTP and Submit Claim Form'.</li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Attestation Process for EPF Form 10C for Pension Withdrawal</h2>
        <p className="text-gray-700 mb-4">
          The following table illustrates the attestation process for pension withdrawal using form 10C:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Case</th>
                <th className="py-3 px-4 border-b text-left">Attestation Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">If you apply with a form taken from the centre</td>
                <td className="py-3 px-4 border-b">Employer of your previous establishment</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">If you download form 10C online</td>
                <td className="py-3 px-4 border-b">Both employers and employees need to attest</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">If your previous establishment is a closed organisation</td>
                <td className="py-3 px-4 border-b">Postmaster, Magistrate, Secretary or Chairman of District Local Board, Gazetted Officer, Bank Manager of the bank you hold a savings account, Panchayat or President of Village Union</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          EPF Form 10C is crucial when you have not completed 10 years of service with your employer, however, you want to withdraw the EPS balance. 
          The EPFO allows EPS withdrawal under various circumstances and provides the contributed fund to members based on online or offline applications. 
          You can choose your convenient mode of application and payment while raising claims.
        </p>
      </section>
    </div>
  );
};

export default EPFForm10CPage; 