import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TDSOnPFWithdrawalPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">All About TDS on PF Withdrawal in 2025</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          As per Income Tax Rules, TDS applies to income from other sources. EPF withdrawal might or might not attract TDS, 
          based on the tenure of continuous service of the member and the time of withdrawal. The applicable TDS on PF withdrawal 
          depends on PAN card submission as well. If you do not submit your PAN card, the rate of TDS deduction is higher. 
          Learn in detail about the TDS applicability on EPF withdrawal and how to avoid it in a planned manner.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Eligibility for EPF Withdrawal</h2>
        <p className="text-gray-700 mb-4">
          Here are the eligibility criteria to withdraw PF:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>If you have attained the retirement age of 55 years, as set by EPFO, you can withdraw the entire amount.</li>
          <li>You can withdraw 90% of your EPF amount a year before retirement, provided you have attained the age of 54 years.</li>
          <li>A member can withdraw 75% of the EPF amount after 1 month of unemployment while the remaining 25% is transferred into the new employer's PF account.</li>
          <li>After 2 months of unemployment, you can withdraw the entire PF amount.</li>
          <li>If your Aadhaar number is linked to UAN and approved by your employer, you can withdraw the EPF amount without additional consent from the employer.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Reasons for Partial EPF Withdrawal</h2>
        <p className="text-gray-700">
          You can withdraw EPF for multiple purposes as detailed by the Employees' PF Organisation. These purposes might include 
          medical purposes, education, marriage, construction of house, purchase of land and house, house renovation and home loan repayment.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax on EPF Withdrawal</h2>
        <p className="text-gray-700">
          EPF includes the employee's contribution, the employer's contribution and the interest earned on these contributions. 
          If you have claimed a deduction under Section 80C for your contributions in previous years, you may be required to pay 
          additional tax as though you had not claimed the 80C deduction for those years.
        </p>
        <p className="text-gray-700 mt-3">
          On the flip side, an employer's contribution and the interest earned on it are taxable. Form 26AS reflects this TDS 
          deduction under the salary TDS head.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax on EPF Withdrawal Before 5 Years</h2>
        <p className="text-gray-700">
          Withdrawal of PF before completing 5 years of service attracts Tax Deducted at Source. However, if the PF amount is less 
          than ₹50,000, there will be no TDS deduction. 5 years of service includes all employers within the period. For PF withdrawal 
          after 5 years, there is no TDS applicable. Notably, the tenure needs to be 5 years exactly without any grace period.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax on EPF Withdrawal By Temporary Employee</h2>
        <p className="text-gray-700">
          If you join a company as a temporary employee or on a contractual basis, your employer will not be liable to contribute to EPF. 
          As a result, TDS rules do not apply. However, if your employer hires you as a permanent employee, TDS on EPF applies based on 
          the 5-year service completion rule.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax on EPF Withdrawal from an Unrecognised EPF</h2>
        <p className="text-gray-700">
          If the Income Tax Commissioner does not approve a provident fund, it is termed unrecognised PF, even if the Commissioner of PF 
          or other formal authority approves it. Notably, if you want to enjoy the Income Tax benefits, the fund needs to be recognised 
          by the Income Tax Commissioner.
        </p>
        <p className="text-gray-700 mt-3">
          In such a case, withdrawal after 5 years of continuous service does not attract TDS. If you are a member of an unrecognised 
          Provident Fund (URPF), income tax applies, irrespective of whether you have completed 5 years of continuous service.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax on EPF Withdrawal After 5 Years</h2>
        <p className="text-gray-700">
          As per EPFO and tax rules, there is no TDS deduction, if you withdraw PF after 5 years of completing services. 
          Notably, 5 years of service includes all employers within the tenure.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">TDS Rules for PF Withdrawal</h2>
        <p className="text-gray-700 mb-4">
          The following table illustrates the TDS applicability on PF withdrawal:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Scenario</th>
                <th className="py-3 px-4 border-b text-left">Taxability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Amount withdrawn from PF is below ₹50,000 before completion of 5 years of service.</td>
                <td className="py-3 px-4 border-b">TDS does not apply; however, if the member falls in the taxable bracket, he/ she has to present the withdrawal amount in Income Tax Return</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Amount withdrawn from PF before completion of 5 years does not exceed ₹50,000</td>
                <td className="py-3 px-4 border-b">A TDS of 10% applies provided the individual presents a PAN card. Notably, if you submit form 15G/15H, no TDS will apply.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">PF withdrawal after 5 years of continued service</td>
                <td className="py-3 px-4 border-b">No TDS applies. In addition, the amount is exempt from taxation under the Income Tax rules.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Transfer of PF from one account to another after job switch</td>
                <td className="py-3 px-4 border-b">Neither TDS nor Income Tax applies</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Before completion of 5 years of continuous service, if the company is discontinued, employment is terminated due to ill-health of the employee or the reasons for withdrawal are beyond the employer's control.</td>
                <td className="py-3 px-4 border-b">TDS and Income Tax do not apply</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Avoid TDS Deduction on EPF?</h2>
        <p className="text-gray-700 mb-4">
          You can follow the ways mentioned below to avoid TDS deduction on EPF withdrawal:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Transfer your EPF when you switch jobs rather than withdrawing it to avoid a TDS deduction.</li>
          <li>Deferring PF withdrawal and withdrawing it after 5 years of service completion, can effectively help you avoid TDS.</li>
          <li>You can choose to withdraw a PF amount below ₹50,000 to avoid a TDS deduction.</li>
        </ul>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          TDS on PF withdrawals depends on whether you withdraw before or after completing 5 years of continuous service, 
          and also on the withdrawal amount, which is ₹50,000. To reduce the TDS deduction, make sure to submit your PAN card details. 
          Alternatively, you can avoid TDS deductions by transferring your EPF when switching jobs or by withdrawing after completing 
          5 years of continuous service.
        </p>
      </section>
    </div>
  );
};

export default TDSOnPFWithdrawalPage; 