import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EPFPaymentOnlinePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">How to Make EPF Payment Online</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          Managing your Employee Provident Fund (EPF) payments does not have to be complicated. With the convenience of online processes, 
          you can easily contribute to your EPF account from anywhere. Whether you are an employer or an employee, understanding how to 
          make EPF payment online is essential for seamless transactions. This detailed guide will walk you through the steps to ensure 
          your payments are quick, accurate and hassle-free.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is an EPF Payment?</h2>
        <p className="text-gray-700">
          An EPF payment refers to the contribution made towards an individual's Employee Provident Fund (EPF) account. Both the employee 
          and employer contribute a fixed percentage of the employee's salary to this fund every month. The employer is responsible for 
          transferring these contributions to the EPF account through an online payment process. This ensures the funds are deposited for 
          future retirement benefits.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Pay EPF Online?</h2>
        <p className="text-gray-700 mb-4">
          Here are the steps you need to follow to perform the online payment of EPF contribution:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Sign in to the official EPF payment portal using your ECR (Electronic Challan cum Return) credentials.</li>
          <li>Provide the required details of your PF account, such as name, address, establishment ID and exemption status.</li>
          <li>Tap on the 'Payment' button, and from the dropdown list, choose 'ECR upload'.</li>
          <li>Choose the relevant options for 'Salary Disbursal Date,' 'Wage Month' and 'Rate of Contribution.'</li>
          <li>Upload your ECR file in the designated column.</li>
          <li>After successful validation of the ECR file, the next screen will show a confirmation message. If validation fails, an error message will appear and you will need to upload the correct ECR file in the proper format.</li>
          <li>On the following screen, you will find the TRRN for the uploaded file.</li>
          <li>Tap the 'Verify' button and then select 'Prepare Challan' to generate the ECR summary sheet.</li>
          <li>Mention the 'Admin/Inspection charges' and hit the 'Challan' button.</li>
          <li>Carefully review your challan details, then click on 'Finalise.'</li>
          <li>For the relevant TRRN, select the 'Pay' option.</li>
          <li>Choose the 'Online' payment method and pick your preferred bank from the available list.</li>
          <li>Tap the 'Continue' button and log in to your bank's internet banking portal to complete the payment.</li>
          <li>After successful completion of payment, a transaction or payment ID will be generated and an e-receipt will be given to you.</li>
        </ol>
        
        <p className="text-gray-700 mt-4">
          You will see your transactions in your EPF passbook and the EPFO will provide a confirmation link to the TRRN.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is the Penalty for Late EPF Payment?</h2>
        <p className="text-gray-700 mb-4">
          If there is a delay in EPF challan payment, the employer will face two types of penalties:
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-3">Interest for Late Payment (Section 7Q)</h3>
          <p className="text-gray-700">
            Employers who fail to deposit the EPF contribution on time are charged an interest of 12% per annum, calculated daily.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-3">Penalty for Late Payment (Section 14B)</h3>
          <p className="text-gray-700 mb-3">
            In the case of non-payment or delayed PF Challan, the following penalties apply:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>5% per annum for delays up to 2 months</li>
            <li>10% per annum for delays between 2 to 4 months</li>
            <li>15% per annum for delays between 4 to 6 months</li>
            <li>25% per annum for delays exceeding 6 months</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Are the Benefits of EPF Payment?</h2>
        <p className="text-gray-700 mb-4">
          Here are some key advantages of contributing to the EPF:
        </p>
        
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Tax Benefit:</strong> Employee contributions to an EPF are eligible for tax deductions under Section 80C, and the interest earned is exempt from taxes.</li>
          <li><strong>Guaranteed Lifetime Pension:</strong> A portion (8.33%) of an employer's contribution is allocated to the Employees' Pension Scheme (EPS). After contributing for 10 years, employees are guaranteed a pension for life.</li>
          <li><strong>Insurance Coverage:</strong> The EPFO's Employees Deposit Linked Insurance (EDLI) scheme provides a lump-sum benefit to the nominee in case of the employee's death during their service period.</li>
          <li><strong>Partial Withdrawal:</strong> EPFO permits partial withdrawals after 5-10 years to address specific needs like medical emergencies, unemployment or home loans.</li>
          <li><strong>Attractive Returns:</strong> The EPF typically offers higher interest rates than other savings and investment options. For FY 2023-24, the EPF interest rate is 8.25%, ensuring higher returns than other schemes.</li>
          <li><strong>Death Benefits:</strong> In the unfortunate event of the employee's death, the full EPF balance is given to the designated nominee, ensuring financial assistance for the family.</li>
          <li><strong>Convenient Access:</strong> Employees can manage their EPF accounts easily online using their Universal Account Number (UAN). Additionally, transferring the EPF account is hassle-free when switching jobs.</li>
        </ul>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          Making an EPF payment online is a simple and efficient process that ensures timely contributions to an employee's retirement fund. 
          By following the steps outlined in this guide, both employers and employees can ensure smooth and hassle-free payments. 
          Timely payments are essential to avoid penalties and interest charges, ensuring long-term financial security for employees.
        </p>
      </section>
    </div>
  );
};

export default EPFPaymentOnlinePage; 