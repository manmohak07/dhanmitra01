import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Smartphone } from 'lucide-react';

const EPFPassbookDownloadPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">EPF Passbook Download: A Simple Guide on How to Access Your Account Details</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          An EPF passbook is an essential document that keeps track of your Employee Provident Fund contributions, 
          withdrawals and interest earned. With the convenience of digital access, you can now download your EPF 
          passbook online without visiting the EPF office. Whether you need to monitor your retirement savings or 
          verify contributions, the process is quick and hassle-free. Keep reading this guide to understand how you 
          can easily perform the EPF passbook download process and stay updated on your financial progress.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is an EPF Passbook?</h2>
        <p className="text-gray-700">
          The EPF (Employee Provident Fund) passbook is a detailed record of an individual's EPF account transactions. 
          It contains information about monthly contributions from both the employer and employee, the account balance 
          and any withdrawals or transfers made. You can access or download an EPF passbook after registering your UAN 
          on the EPFO portal.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Proceed with EPF Passbook Download Online?</h2>
        <p className="text-gray-700 mb-4">
          If you are an EPF member, the online process of EPF passbook download is simple. You just need to follow the steps given below:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <div className="flex items-center mb-3">
            <Download className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-medium">Download via EPFO Portal</h3>
          </div>
          
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Access the EPFO Website</strong>
              <p>Go to the official EPFO portal and under the 'Our Services' tab, select the 'For Employees' option.</p>
            </li>
            <li>
              <strong>Locate the Passbook Option</strong>
              <p>Click on the 'Member Passbook' option available on the page.</p>
            </li>
            <li>
              <strong>Log in with Your Credentials</strong>
              <p>Enter your UAN and password from the EPF member portal and click the 'Login' button. All member IDs linked to your UAN will appear on the screen.</p>
            </li>
            <li>
              <strong>Select Your EPF Account</strong>
              <p>Choose your desired EPF account by clicking on 'Select Member ID' and then click on 'View Passbook.'</p>
            </li>
            <li>
              <strong>View Your Passbook</strong>
              <p>Your EPF passbook will open in PDF format in a new browser tab.</p>
            </li>
            <li>
              <strong>Download the Passbook</strong>
              <p>To save the passbook, click on the 'Download Passbook' option and store the PDF for future reference.</p>
            </li>
          </ol>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is the Procedure for EPF Passbook Download Via UMANG App?</h2>
        <p className="text-gray-700 mb-4">
          The UMANG (Unified Mobile Application for New-age Governance) app is a convenient way to access your EPF passbook. 
          This mobile app for EPF passbook offers an easy and efficient way to manage your account. Here is a step-by-step 
          process you need to follow to download this passbook:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <div className="flex items-center mb-3">
            <Smartphone className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-medium">Download via UMANG App</h3>
          </div>
          
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Download the UMANG App</strong>
              <p>Install the UMANG app from either Google Play Store or Apple App Store, depending on your device.</p>
            </li>
            <li>
              <strong>Complete Registration</strong>
              <p>Upon installation, complete your register using your mobile number. Provide your phone number, verify it with the OTP (One-Time Password) and complete the setup process.</p>
            </li>
            <li>
              <strong>Log In to the App</strong>
              <p>After completion of registration, sign into the app using your mobile number and the OTP sent to your phone.</p>
            </li>
            <li>
              <strong>Navigate to the EPFO Section</strong>
              <p>Use the search bar within the app to look for 'EPFO' and choose it from the results. Next, go to the 'Employee Centric Services' section and select 'View Passbook.'</p>
            </li>
            <li>
              <strong>Provide Your UAN Details</strong>
              <p>To access your passbook, input your UAN and password. Once authenticated, your EPF passbook will be available for viewing.</p>
            </li>
            <li>
              <strong>Download the Passbook</strong>
              <p>Download EPF passbook in PDF format directly from the app for easy access and future reference.</p>
            </li>
          </ol>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is the Significance of an EPF Passbook?</h2>
        <p className="text-gray-700 mb-4">
          The following mentions the importance of an EPF passbook:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Track Contributions</h3>
            <p className="text-gray-700">
              This passbook lets you monitor your EPF contributions made by both you and your employer. It provides a clear transaction record, ensuring all deposits into your retirement fund are accurate and timely.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Stay Updated on Retirement Savings</h3>
            <p className="text-gray-700">
              Regularly reviewing your EPF passbook helps you track your retirement savings and estimate the amount you will accumulate by retirement. It plays a key role in effective financial planning, allowing you to adjust your savings strategy if needed.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Ensure Transparency</h3>
            <p className="text-gray-700">
              The EPF passbook offers a detailed breakdown of employer contributions, employee deposits, withdrawals and accrued interest. This transparency ensures you remain fully informed about your EPF account status.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Proof of Contributions</h3>
            <p className="text-gray-700">
              An updated EPF passbook serves as proof of your retirement fund contributions. Whether applying for a loan or consulting a financial planner, this document can be a valuable resource.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm md:col-span-2">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Easy Accessibility</h3>
            <p className="text-gray-700">
              You can easily access or download your EPF passbook online through the EPFO portal or the UMANG app. This convenience eliminates the need to visit an EPF office, letting you check your balance and contributions from anywhere.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Are the Details that an EPF Passbook Contains?</h2>
        <p className="text-gray-700 mb-4">
          Your EPF passbook provides vital information essential for monitoring your retirement savings. Here are the main details included in the passbook:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Member ID:</strong> This is a distinctive number linked to your EPF account for each employer you have been associated with.</li>
          <li><strong>Contributions from Employee and Employer:</strong> This section illustrates the contributions made by both you and your employer to your EPF account each month.</li>
          <li><strong>Total EPF Balance:</strong> This represents the overall sum of your contributions, those from your employer and the interest that has accrued.</li>
          <li><strong>Accumulated Interest:</strong> This indicates the interest that has been added to your EPF account balance, which is updated monthly.</li>
          <li><strong>Withdrawal Information:</strong> Any withdrawals you have made from your EPF account will be documented in this section of the passbook.</li>
        </ul>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          Now that you know the EPF passbook download process, you can easily track your retirement savings, ensure transparency in contributions and stay informed about your account's status. By following the simple steps given above, you can easily access your passbook and keep your financial records up to date. Make sure to regularly check this passbook to manage your retirement savings effectively.
        </p>
      </section>
    </div>
  );
};

export default EPFPassbookDownloadPage; 