import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EPFForm11Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">What Is EPF Form 11: Meaning, Purpose & Steps to Fill It</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          The Employee Provident Fund (EPF) is a scheme that helps employees save funds for their post-retirement life. 
          Both employers and employees make a contribution of 12% of an employee's basic salary to the EPF account.
        </p>
        <p className="text-gray-700 mt-3">
          While recruiting a new employee, employers verify their previous EPF membership status. A self-declaration form 
          named EPF Form 11 is used to check whether an employee is a part of the EPF scheme or not. This guide will walk 
          you through how to fill out and submit EPF Form 11.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Purpose of EPF Form 11</h2>
        <p className="text-gray-700">
          EPF Form 11 allows employees to show their EP status when they join a new company that offers the EPF scheme. 
          This form helps to check whether he/she is not a member of the Employee Provident Fund Organisation (EPFO). 
          The company or the employer has to continue his/her PF obligations if the employee is already a member of EPFO.
        </p>
        <p className="text-gray-700 mt-3">
          An employee must fill out the form before joining a new organisation. This form is needed while transferring PF accounts. 
          You can also create multiple EPF accounts if you link your Universal Account Number (UAN) details with your new organisation.
        </p>
        <p className="text-gray-700 mt-3">
          A new employee can also opt not to contribute to EPF or EPS. This can happen in situations if the new employee was not a 
          member of EPFO while working in his or her previous organisation or has not worked before and receives a monthly salary 
          of more than ₹15,000 from the new organisation.
        </p>
        <p className="text-gray-700 mt-3">
          Such employees are known as excluded employees. Members who receive PF pensions or those who have withdrawn their PF 
          previously also come under excluded employees.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who Should Fill EPF Form 11?</h2>
        <p className="text-gray-700">
          All individuals should fill out EPF Form 11 while joining a new organisation. The existing members of EPFO must also 
          fill out the EPF Form 11. New employees as well as existing members who have a UAN are included in this category for 
          transferring funds from old PF accounts into new ones. This is crucial for switching their jobs to share the details 
          of the employee's contributions.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Fill EPF Form 11?</h2>
        <p className="text-gray-700 mb-4">
          You must know how to fill out the EPF Form 11 if you want to transfer funds from your old PF account to a new one. 
          You must complete the EPF Form 11 PDF download by visiting the official portal. Below are the details you must fill in the form:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Member's name</li>
          <li>Father or Spouse's Name (which is applicable)</li>
          <li>Date of Birth</li>
          <li>Gender (Select between male, female and other genders)</li>
          <li>Contact details like email ID and mobile number</li>
          <li>Marital Status</li>
          <li>Educational credentials</li>
          <li>Employee's relationship with the EPF scheme and Employees' Pension scheme (EPS), if he or she was a member of these schemes</li>
          <li>Details of previous employment, like the last working day, UAN and scheme certificate number</li>
        </ul>
        
        <p className="text-gray-700 mb-4">
          If any employee has marked 'YES' regarding participation in any of the two aforementioned schemes, he or she must provide 
          some additional details. Here are the additional details you must fill:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>UAN or PF Account Number</li>
          <li>Date of leaving from previous employment in the dd/mm/yyyy format</li>
          <li>Scheme certificate number (if issued)</li>
          <li>Pension Payment Order (PPO) number (if issued)</li>
        </ul>
        
        <p className="text-gray-700 mb-4">
          In case you are an international employee, you have to fill in the following details:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Passport Number</li>
          <li>Passport Validity</li>
          <li>Country of origin</li>
        </ul>
        
        <p className="text-gray-700 mb-4">
          Employees also need to attach the following self-attested KYC documents while filling out EPF Form 11 new employee form:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Bank account details with IFSC</li>
          <li>Aadhaar Number</li>
          <li>Permanent Account Number (PAN) details</li>
          <li>Driving License</li>
          <li>Election Card</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsibility of an Employer During Form 11 Filing</h2>
        <p className="text-gray-700 mb-4">
          The employers are also responsible for ensuring the successful filling of the EPF Form 11. Here's what they are responsible for:
        </p>
        
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Make sure all the new employees fill out this self-declaration form within a timeframe of one month. They must also make sure new joiners upload the details on the UAN portal within 25 days from the end of each month.</li>
          <li>The employers are also responsible for sharing the UAN details with all existing members of the fund within 15 days and getting their acknowledgement.</li>
          <li>They must seed KYC details like PAN, bank account and Aadhaar card of such members within a month of receiving the UAN.</li>
          <li>Some members also do not have an Aadhaar card. The employer is responsible for ensuring an Aadhaar Acknowledgement Slip is submitted within a month from the time of receipt of UAN in this instance.</li>
          <li>Employers must ensure that members upload their Aadhaar information on the UAN Portal within 15 days of receiving it from the employee.</li>
          <li>The employers should also check the claim forms from their end before sending them to the EPFO.</li>
          <li>The employer should check whether it is completed from all aspects such as all relevant KYC information should be linked to UAN.</li>
        </ul>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          It is crucial to know the overall process of filling EPF form 11, which allows employees to transfer their PF details 
          while entering into new employment. Some essential KYC details also needed to be attached to the form to complete the 
          overall process.
        </p>
      </section>
    </div>
  );
};

export default EPFForm11Page; 