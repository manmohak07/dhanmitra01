import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Info } from 'lucide-react';

const PFCalculationPage: React.FC = () => {
  // State for calculator inputs
  const [basicSalary, setBasicSalary] = useState<number>(15000);
  const [da, setDa] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(8.25);
  const [tenure, setTenure] = useState<number>(30);
  const [age, setAge] = useState<number>(30);
  
  // State for calculator results
  const [employeeContribution, setEmployeeContribution] = useState<number>(0);
  const [employerContribution, setEmployerContribution] = useState<number>(0);
  const [totalMonthlyContribution, setTotalMonthlyContribution] = useState<number>(0);
  const [maturityAmount, setMaturityAmount] = useState<number>(0);
  
  // Calculate PF contributions and maturity amount
  useEffect(() => {
    const totalSalary = basicSalary + da;
    
    // Employee contributes 12% of (basic + DA)
    const empContribution = totalSalary * 0.12;
    
    // Employer contributes 3.67% to EPF and 8.33% to EPS (capped at ₹15,000)
    const epfContribution = totalSalary * 0.0367;
    
    // Total monthly contribution
    const totalContribution = empContribution + epfContribution;
    
    setEmployeeContribution(empContribution);
    setEmployerContribution(epfContribution);
    setTotalMonthlyContribution(totalContribution);
    
    // Calculate maturity amount
    // Assuming monthly compounding
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalMonths = tenure * 12;
    
    // Using compound interest formula for regular monthly deposits
    // A = P * (((1 + r)^n - 1) / r) * (1 + r)
    // where A is final amount, P is monthly deposit, r is monthly interest rate, n is number of months
    const maturityAmt = totalContribution * (((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate));
    
    setMaturityAmount(maturityAmt);
  }, [basicSalary, da, interestRate, tenure, age]);
  
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/epf" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to EPF Resources
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">PF Calculation Formula for Financial Planning</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="text-gray-700">
          A Provident Fund (PF) is a part of an employee's salary dedicated to retirement savings, with both employees 
          and employers contributing to the account. This collective contribution helps build a post-retirement corpus 
          for the employee. Using a PF calculation formula can assist in estimating the contributions and interest 
          accumulated throughout the duration of employment.
        </p>
      </div>
      
      {/* Interactive Calculator */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Calculator className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold">EPF Calculator</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">Enter Your Details</h3>
            
            <div>
              <label htmlFor="basicSalary" className="block text-sm font-medium text-gray-700 mb-1">
                Basic Salary (₹)
              </label>
              <input
                type="number"
                id="basicSalary"
                value={basicSalary}
                onChange={(e) => setBasicSalary(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="da" className="block text-sm font-medium text-gray-700 mb-1">
                Dearness Allowance (₹)
              </label>
              <input
                type="number"
                id="da"
                value={da}
                onChange={(e) => setDa(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate (%)
              </label>
              <input
                type="number"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                step="0.01"
                min="0"
                max="20"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Current Age (years)
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                min="18"
                max="59"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-1">
                Tenure (years)
              </label>
              <input
                type="number"
                id="tenure"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                min="1"
                max="42"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Note: Maximum retirement age is 60 years
              </p>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Calculation Results</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Your Monthly Contribution (12%):</span>
                <span className="font-medium">{formatCurrency(employeeContribution)}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Employer's EPF Contribution (3.67%):</span>
                <span className="font-medium">{formatCurrency(employerContribution)}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Total Monthly Contribution:</span>
                <span className="font-medium">{formatCurrency(totalMonthlyContribution)}</span>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-800 font-semibold">Estimated Maturity Amount:</span>
                <span className="text-blue-600 font-bold text-xl">{formatCurrency(maturityAmount)}</span>
              </div>
              
              <div className="mt-4 bg-blue-50 p-3 rounded-md flex">
                <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  This is an estimate based on current interest rates and assumes consistent contributions throughout the tenure. 
                  Actual amounts may vary based on changes in salary, interest rates, and employment duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is an EPF Calculator?</h2>
        <p className="text-gray-700 mb-4">
          The EPF (Employee Provident Fund) calculator is an online tool that helps you estimate the provident fund 
          maturity amount after retirement. The maturity amount includes both employees' and employers' contributions, 
          followed by the interest credited.
        </p>
        <p className="text-gray-700 mb-4">
          You require the following data to calculate EPF contribution:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>PF contribution or investment amount</li>
          <li>Rate of PF interest</li>
          <li>Duration of contribution</li>
          <li>Frequency of EPF contribution</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">EPF Contribution Formula for Employees</h2>
        <p className="text-gray-700 mb-4">
          The factors you need to calculate EPF are basic salary, dearness allowance, employee's contribution rate 
          and employer's contribution rate. Employer's and employee's contributions are equal constituting 12% each 
          of the basic salary and dearness allowance. Notably, employers' shares in the PF calculation are segregated 
          into 8.33% of the employee pension scheme and 3.67% of the EPF.
        </p>
        <p className="text-gray-700 mb-4">
          You can use the following PF calculation formula to estimate the contributions manually:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-800 font-medium">
            Employee's Contribution (12% of (basic salary + dearness allowance)) + Employer's Contribution (3.67% of (basic salary + dearness allowance)) = Total PF Deposited
          </p>
        </div>
        <p className="text-gray-700">
          If the applicable interest rate is 8.25% per annum and the monthly interest rate is 0.679% (8.25%/12), 
          you will earn interest at this rate for the tenure of your service with your employer on the PF deposited.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">PF Calculation Example for Beginners</h2>
        <p className="text-gray-700 mb-4">
          Here is an example using the PF calculator formula for beginners:
        </p>
        <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
          <p className="text-gray-700 mb-3">
            Suppose Mr X joined ABC company in April 2019 with a basic salary + dearness allowance = ₹14,000.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Employee Contribution</strong> = 12% of ₹14,000 = ₹1,680</li>
            <li><strong>Employer Contribution</strong> = 3.67% of ₹14,000 = ₹514 (approximately)</li>
            <li><strong>Total EPF Contribution</strong> = Employee's Contribution + Employer's Contribution = ₹1,680 + ₹514 = ₹2,194</li>
            <li><strong>Applicable Interest Rate</strong> = 8.25% per annum or 0.679% per month</li>
          </ul>
          <p className="text-gray-700 mt-3">
            The EPF scheme will not pay interest for April, however, the interest that you earn as an employee for May is 
            ₹2,194 (April) + ₹2,194 (May) = ₹4,388 * 0.679% = ₹29.79
          </p>
          <p className="text-gray-700 mt-3">
            This calculation continues until the employee retires from his employment at 60 years to reach the final PF amount.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How Can PF Calculation Formula Help You?</h2>
        <p className="text-gray-700 mb-4">
          Here is how the PF calculation formula can help you:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Financial Planning</h3>
            <p className="text-gray-700">
              Using the formula or a PF calculator can help you estimate the funds receivable on retirement. 
              This enables you to plan your finances, presently monthly savings and future expenses.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Tracking Contributions</h3>
            <p className="text-gray-700">
              The PF calculation formula helps you track your monthly contributions, both from you and your employer. 
              This ensures you are aware of how much is being added to your account, giving you a clear picture of your 
              retirement savings progress.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Interest Estimation</h3>
            <p className="text-gray-700">
              The formula also helps estimate the interest earned on your PF balance over time, which allows you to 
              assess the growth of your savings.
            </p>
          </div>
        </div>
        
        <p className="text-gray-700">
          While EPF can help you earn 8.25% per annum, you can diversify your secured portfolio by investing in fixed 
          deposits (FD) with Stable Money-partnered banks offering up to 9.50%.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax Benefits for EPF Payments</h2>
        <p className="text-gray-700 mb-4">
          Both employees and employers can benefit from EPF payments as follows:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Tax Benefit for Employees</h3>
            <p className="text-gray-700">
              As an employee, you can claim tax deductions under Section 80C of the Income Tax Act of up to ₹1.5 lakh. 
              The interest that you earn on your EPF balance is tax-free. In case you withdraw EPF after 5 years of 
              continuous service, the entire amount including the interest is tax-exempt with no TDS (Tax Deducted at Source) deduction.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Tax Benefit for Employers</h3>
            <p className="text-gray-700">
              Employers can claim tax deductions under Section 36(1)(iv) of the Income Tax Act for their contributions towards EPS and EPF.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Know About PF Calculation with Basic Salary</h2>
        <p className="text-gray-700 mb-4">
          Here are the important things to know about PF calculation:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>EPF contributions from employees' salaries are followed by employers' contributions.</li>
          <li>Employees need to link their bank account and Aadhaar number with their UAN.</li>
          <li>8.33% of the employer's contribution up to a maximum of ₹1,250 is redirected to EPS.</li>
          <li>In case you exit your employment, you can withdraw PF partially valid reasons including unemployment, land purchase, retirement, house construction, home renovation, wedding, education, home loan repayment and medical reasons.</li>
          <li>If you are a retired person with preceding 10 years of continuous employment, you can withdraw 100% of your EPS.</li>
          <li>In case you have been unemployed for the past 10 years you can withdraw EPS as per applicable slabs.</li>
          <li>If you switch a job, you can seamlessly transfer your PF under the same UAN, however with a new PF number.</li>
        </ul>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Final Word</h2>
        <p className="text-gray-700">
          Using a PF calculation formula can help you estimate the PF amount receivable on retirement. It can further 
          help you calculate the remaining PF amount if you withdraw PF partially before retirement. Based on the 
          calculations you can plan your finances and retirement corpus to allocate a present budget for adequate 
          wealth accumulation.
        </p>
      </section>
    </div>
  );
};

export default PFCalculationPage; 