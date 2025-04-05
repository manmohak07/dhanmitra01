import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Smartphone, Phone, MessageSquare } from 'lucide-react';

const EPFClaimStatusPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">How to Track Your EPF Claim Status?</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          Employee Provident Fund (EPF) is a scheme that helps employees build a retirement fund. Although it can be 
          fully withdrawn after retirement, employees can withdraw 90% of the amount when they reach age 54. In addition, 
          the new rule allows individuals to withdraw 75% of their EPF savings after two months of unemployment.
        </p>
        <p className="text-gray-700 mt-3">
          As an employee, you can apply for withdrawal of your PF money under specific conditions. In that case, you have 
          to monitor your EPF claim status. Read this guide to understand the different ways to check claim status.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is EPF Claim Status?</h2>
        <p className="text-gray-700">
          The EPF claim status is the latest information about an individual's application for EPF withdrawal. 
          Individuals come up with an idea of the development of their claim process. This claim status also helps 
          individuals by preparing them to address significant errors and delays in the withdrawal process.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites to Check EPF Claim Status</h2>
        <p className="text-gray-700 mb-4">
          To check your EPF claim status, you need to prepare the following information:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Universal Account Number (UAN)</li>
          <li>EPF regional office</li>
          <li>Employer details</li>
          <li>Extension code (if possible)</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Check EPF Claim Status?</h2>
        <p className="text-gray-700 mb-4">
          It is essential to check EPF claim status to avoid issues while withdrawing funds from your EPF savings. 
          You can very easily check the development process of EPF claim status, as there are various options to do it:
        </p>
        
        <div className="space-y-6">
          {/* Method 1: EPFO Portal */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <Globe className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium">Through EPFO Portal</h3>
            </div>
            <p className="text-gray-700 mb-3">
              You may opt for the Employee Provident Fund Organisation (EPFO) portal to check your EPF claim status with UAN. 
              EPFO website allows individuals to avail different types of information, including EPFO's schemes and services.
            </p>
            <p className="text-gray-700 mb-3">
              Here are the steps that you can take to check the status:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Visit the official website of EPFO.</li>
              <li>Click on the 'Services' option and select 'For Employees'.</li>
              <li>Choose the 'Know Your Claim Status' option. You will be redirected to the member passbook application.</li>
              <li>Put the UAN number, password and CAPTCHA in the required blocks.</li>
              <li>Now you will get the 'View Claim Status' option. This will allow you to find the progress of your EPF claim status.</li>
            </ol>
          </div>
          
          {/* Method 2: UMANG Application */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <Smartphone className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium">Through UMANG Application</h3>
            </div>
            <p className="text-gray-700 mb-3">
              The EPF claim status can also be checked with the help of the UMANG application. Here are the steps that 
              should be followed to track EPF claim online through this process:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Download and install the Unified Mobile Application for New Governance (UMANG) app on your preferred device.</li>
              <li>Log in to the application using your registered credentials.</li>
              <li>There will be two options available for you, 'MPIN' and 'Login with OTP'. Now put your mobile number and select your most preferred location.</li>
              <li>If you select 'Login with OTP', you will receive an OTP on your registered mobile number.</li>
              <li>Submit it and click on 'Login'.</li>
              <li>You will be redirected to the EPFO portal main page and then you need to select 'Employee-Centric Services'.</li>
              <li>Click on the 'Track Claim' option.</li>
              <li>Now you can track ID, type of claim, the date of raising the claim and its status.</li>
            </ol>
          </div>
          
          {/* Method 3: UAN Member Portal */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <Globe className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium">Through the UAN Member Portal</h3>
            </div>
            <p className="text-gray-700 mb-3">
              The UAN member portal allows individuals to assess their account information. Follow the given steps to 
              check EPF claim status through the UAN Member Portal:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>By entering the UAN number and password, you must log in to the UAN portal.</li>
              <li>Click on the 'Track Claim Status' under the 'Online Services' tab.</li>
              <li>You can see the details of the withdrawal claim status of EPF on your screen.</li>
            </ol>
          </div>
          
          {/* Method 4: Using PF Account Number Without UAN */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <Globe className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium">Using PF Account Number Without UAN</h3>
            </div>
            <p className="text-gray-700 mb-3">
              You may also check the EPF claim status if you do not have a UAN number. In this case, you have to use your 
              EPF account number. Follow these below steps to check the status using the PF account number and without UAN:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Go to the official website of EPFO.</li>
              <li>Switch to the 'Know Your Claim Status' page, and click on the 'Click Here for Knowing the Claim Status' option.</li>
              <li>From the drop-down menu, choose your respective EPF office state and select the city.</li>
              <li>Enter your EPF account number and click 'Submit'.</li>
              <li>You can see your EPF claim status on the screen immediately, only if the information is correct.</li>
            </ol>
          </div>
          
          {/* Method 5: EPFO Toll-Free Number */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium">Through EPFO Toll-Free Number</h3>
            </div>
            <p className="text-gray-700">
              You can check your EPF withdrawal claim status by making a phone call. You need to call the EPFO 24×7 
              customer care number, 1800 118 005. Make sure that your PF Account Number as well as UAN is ready as 
              the helpline officer will ask for it to check the status of the claims.
            </p>
          </div>
          
          {/* Method 6: SMS */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium">Through SMS</h3>
            </div>
            <p className="text-gray-700 mb-3">
              You can also check the status of your PF claim with SMS. An employee needs to link their mobile number 
              with the UAN portal. An SMS needs to be sent from that mobile number. Use the number 7738299899 to send the SMS.
            </p>
            <p className="text-gray-700 mb-3">
              To send an SMS, use the format 'EPFOHO UAN ENG'. Specify your preferred communication language in the SMS 
              by using the first three letters of the language's name. For example, to receive updates in English, 
              type 'EPFOHO UAN ENG'.
            </p>
            <p className="text-gray-700 mb-3">
              In addition to English, there are a variety of languages you can choose to receive the details of EPF claim status.
            </p>
            <p className="text-gray-700 mb-3">
              Refer to the table below to find out the availability of different language options:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Language</th>
                    <th className="py-2 px-4 border-b text-left">Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Hindi</td>
                    <td className="py-2 px-4 border-b">HIN</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Bengali</td>
                    <td className="py-2 px-4 border-b">BEN</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Punjabi</td>
                    <td className="py-2 px-4 border-b">PUN</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Marathi</td>
                    <td className="py-2 px-4 border-b">MAR</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Gujarati</td>
                    <td className="py-2 px-4 border-b">GUJ</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Kannada</td>
                    <td className="py-2 px-4 border-b">KAN</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Malayalam</td>
                    <td className="py-2 px-4 border-b">MAL</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Telugu</td>
                    <td className="py-2 px-4 border-b">TEL</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Tamil</td>
                    <td className="py-2 px-4 border-b">TAM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Initiation of EPF Claim Process</h2>
        <p className="text-gray-700 mb-4">
          Employees need to submit the respective claim form before initiating the claim online or offline. 
          They must consider essential factors like their age, reason for withdrawal and their status of 
          employment while applying for the claim.
        </p>
        <p className="text-gray-700 mb-4">
          There can be multiple situations when employees encounter and make the decision to initiate the EPF claim process. 
          The below table comes with a suitable claim form to address each situation:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Forms</th>
                <th className="py-3 px-4 border-b text-left">Suitable Cases for PF Claim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Form 13</td>
                <td className="py-3 px-4 border-b">While changing a job, transferring the funds into a new EPF account</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Form 10C</td>
                <td className="py-3 px-4 border-b">To claim Certificates or Withdrawal Benefits from Employees' Pension Scheme</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Form 10D</td>
                <td className="py-3 px-4 border-b">Claiming pension funds when the employee is aged less than 58 years and leaves an establishment for physical disability</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Form 14</td>
                <td className="py-3 px-4 border-b">To pay for LIC policy</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Form 20</td>
                <td className="py-3 px-4 border-b">To claim the PF of a deceased EPF member.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Form 31</td>
                <td className="py-3 px-4 border-b">To claim interim withdrawal of EPF</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          EPF account holders can withdraw their accumulated funds under specific conditions. Tracking the EPF claim 
          status is crucial to ensure a seamless withdrawal process. You can use methods like the UMANG application, 
          EPFO portal, toll-free number as well as SMS services to check the EPF claim status for withdrawal.
        </p>
      </section>
    </div>
  );
};

export default EPFClaimStatusPage; 