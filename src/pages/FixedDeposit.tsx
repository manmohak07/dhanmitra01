import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, Calculator, ChevronDown, ChevronUp, Clock, DollarSign, FileText, Shield, Users } from 'lucide-react';

const FixedDepositPage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['how-to-open']);
  
  const toggleSection = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const FDSection = ({ 
    id, 
    title, 
    children, 
    icon 
  }: { 
    id: string; 
    title: string; 
    children: React.ReactNode;
    icon: React.ReactNode;
  }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 text-left"
      >
        <div className="flex items-center">
          <div className="mr-4 text-blue-600">
            {icon}
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {expandedSections.includes(id) ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      {expandedSections.includes(id) && (
        <div className="p-5 bg-gray-50 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
  
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">Complete Guide to Fixed Deposits</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700">
          A Fixed Deposit (FD) is a financial instrument provided by banks that offers a higher rate of interest than a regular savings account, 
          until the given maturity date. It is a safer investment option when compared to stocks or mutual funds. Once the investment is made, 
          the money is deposited for a specific period, which could range from a few weeks to several years, during which the depositor receives interest. 
          At the end of the term, the original amount deposited is returned along with the accumulated interest.
        </p>
      </div>
      
      <FDSection 
        id="how-to-open" 
        title="How to Open a Fixed Deposit?" 
        icon={<FileText className="h-6 w-6" />}
      >
        <p className="mb-4">You can open an FD in two ways: online and offline:</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Online</h3>
            <p className="text-gray-700">
              To open an FD account online, it would be easiest to do so with the bank where you already have an account. All you must do is use the net banking facility, 
              fill up the online form for opening an FD, and submit it. In such cases, KYC will not be required as your bank will already have the details. 
              You can transfer the funds through your account using the internet banking facility.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Offline</h3>
            <p className="text-gray-700">
              Visit the nearest branch of your bank and fill up the application form for opening an FD account. Submit it to the concerned official with the required documents. 
              Deposit the required amount and you will receive the FD receipt.
            </p>
          </div>
        </div>
      </FDSection>
      
      <FDSection 
        id="types" 
        title="Types of Fixed Deposits" 
        icon={<Building className="h-6 w-6" />}
      >
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Normal Fixed Deposits</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Deposit money for a fixed tenure.</li>
              <li>Tenure can range from 7 days to 10 years.</li>
              <li>Interest rates higher than a normal savings account.</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Tax-Saving Fixed Deposits</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Tax exemption on the principal deposit amount of up to Rs.1.5 lakh in a calendar year.</li>
              <li>Lock-in period of 5 years within which you cannot withdraw the amount.</li>
              <li>Allows only one-time lumpsum deposit.</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Senior Citizen Fixed Deposits</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Applicable for individuals above 60 years of age.</li>
              <li>Senior citizens are eligible for special rates.</li>
              <li>Flexible tenures.</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Cumulative Fixed Deposits</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Interest is compounded every quarter or year and paid at the time of maturity.</li>
              <li>Helps substantially grow your savings.</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Non-Cumulative Fixed Deposits</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Interest is paid out monthly, quarterly, half-yearly, or annually, as per your choice.</li>
              <li>Better bet for pensioners looking for a regular source of income.</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">Flexi Fixed Deposits</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Fixed deposit linked to your bank account.</li>
              <li>Money shuttles between your FD and savings account.</li>
            </ul>
          </div>
        </div>
      </FDSection>
      
      <FDSection 
        id="features" 
        title="Features of a Fixed Deposit Account" 
        icon={<Shield className="h-6 w-6" />}
      >
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Safer than other investment vehicles.</li>
          <li>Lets you earn interest over a fixed period of time.</li>
          <li>Flexible tenures of up to 10 years.</li>
          <li>No cap on the maximum deposit.</li>
          <li>Additional rates for senior citizens.</li>
        </ul>
      </FDSection>
      
      <FDSection 
        id="eligibility" 
        title="Eligibility Criteria for FD Investment" 
        icon={<Users className="h-6 w-6" />}
      >
        <p className="mb-4">The following entities are eligible to open an FD account in India:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 grid md:grid-cols-2">
          <li>Indian resident</li>
          <li>NRI</li>
          <li>Minors</li>
          <li>Senior citizens</li>
          <li>Companies</li>
          <li>Partnership firms</li>
          <li>Individuals or joint investors</li>
          <li>Societies or clubs</li>
          <li>Sole proprietorship</li>
        </ul>
      </FDSection>
      
      <FDSection 
        id="documents" 
        title="Documents Required for Opening an FD Account" 
        icon={<FileText className="h-6 w-6" />}
      >
        <p className="mb-4">The documents required for opening an FD account are as given below:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Proof of identity:</strong> Voter ID, PAN card, Aadhaar card, driving license, photo ration card, senior citizen ID card, etc.</li>
          <li><strong>Proof of address:</strong> Utility bills, bank statement with cheque, Post-office issued identification card or certificate, etc.</li>
          <li><strong>Fixed Deposit Application Form</strong></li>
        </ul>
        
        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">You can obtain the application form to open a fixed deposit by:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Visiting the nearest branch of the bank that you wish to open your FD in.</li>
            <li>Download the application form from the official website of the bank that you wish to open an FD account in.</li>
          </ul>
        </div>
      </FDSection>
      
      <FDSection 
        id="nri" 
        title="Fixed Deposits for NRIs" 
        icon={<Building className="h-6 w-6" />}
      >
        <p className="mb-4">For Non-resident Indians, there are two types of accounts they can open with Indian banks—Non-resident External account (NRE) and Non-resident Ordinary account (NRO).</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">NRE Fixed Deposit</h3>
            <p className="text-gray-700 mb-4">
              NRE FDs are beneficial for those earning in foreign currency and who would like to get the amount converted to the value of Indian currency. 
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Interest earned is tax-free</li>
              <li>Both principal and interest amount are completely repatriable</li>
              <li>Money deposited can get affected due to currency rate fluctuations</li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-blue-700 mb-2">NRO Fixed Deposit</h3>
            <p className="text-gray-700 mb-4">
              Unlike NRE FDs, the interest earned through NRO FDs is taxable based on the income tax category.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Interest earned is taxable based on income tax category</li>
              <li>Wealth and gift tax are applicable</li>
              <li>Reduced tax benefit can be availed under DTAA</li>
              <li>Only interest earned can be completely repatriated</li>
              <li>Principal amount can be repatriated within a certain bracket</li>
              <li>No exchange rate fluctuation risks</li>
              <li>Can deposit money in foreign or Indian currency</li>
            </ul>
          </div>
        </div>
      </FDSection>
      
      <FDSection 
        id="choose" 
        title="How to Choose the Best Fixed Deposit for Your Needs?" 
        icon={<Calculator className="h-6 w-6" />}
      >
        <p className="mb-4">Here are the factors to look into when choosing a fixed deposit:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Compare the FD interest rates of different banks.</li>
          <li>Review the credibility of the lender by examining the fixed deposit's safety rating as given by ICRA or CRISIL.</li>
          <li>Choose whether you want a cumulative or non-cumulative fixed deposit.</li>
          <li>Choose a bank that offers good customer service and a hassle-free process for opening an FD.</li>
        </ul>
      </FDSection>
      
      <FDSection 
        id="advantages" 
        title="Advantages of Fixed Deposit" 
        icon={<Shield className="h-6 w-6" />}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-2">Low Risk</h3>
            <p className="text-gray-700">Market risks do not affect the returns on your fixed deposits.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-2">Insurance</h3>
            <p className="text-gray-700">Your deposits are insured for up to Rs.1 lakh by the RBI.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-2">Loan Against FD</h3>
            <p className="text-gray-700">You can avail loans of up to 90% of your deposit amount at very low interest rates (usually around 2% more than the FD interest rate).</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-2">Easy Liquidity</h3>
            <p className="text-gray-700">In the case of an emergency, you can easily liquidate your FD and release the funds.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-2">Regular Income</h3>
            <p className="text-gray-700">You can get the interest sum credited as per your requirements on a monthly, quarterly, or annual basis.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-2">Tax Benefits</h3>
            <p className="text-gray-700">Investing in tax-saving fixed deposits will fetch you tax deductions of up to Rs.1.5 lakh in a financial year.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-2">Senior Citizens</h3>
            <p className="text-gray-700">Senior citizens are offered a higher interest rate compared to regular customers.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-blue-700 mb-2">Flexible Tenures</h3>
            <p className="text-gray-700">Choose from a wide range of tenures to match your financial goals.</p>
          </div>
        </div>
      </FDSection>
      
      <FDSection 
        id="who-should-invest" 
        title="Who Should Invest in Fixed Deposits?" 
        icon={<Users className="h-6 w-6" />}
      >
        <p className="text-gray-700">
          Fixed deposits offer both protection of a fixed amount as well as a regular flow of income. This makes it is ideal for those who have a lump-sum amount that they do not need to use for some time. It is also the right financial product for those who are risk averse as the returns are not subject to market risks but offer a fixed rate of interest throughout.
        </p>
      </FDSection>
      
      <FDSection 
        id="how-it-works" 
        title="How Does a Fixed Deposit Account Work?" 
        icon={<Clock className="h-6 w-6" />}
      >
        <p className="text-gray-700 mb-4">
          When you put your money to work in fixed deposits, you basically lock the amount for a fixed period of time. You can earn interest on the principal sum throughout the tenure on a cumulative basis. The interest earned gets added to the principal amount after every specific interval.
        </p>
        <p className="text-gray-700 mb-4">
          Since the tenures are flexible, you have the option to manage multiple FD accounts spread across different tenures. That way, you will be able to earn more on your investments. Senior citizens are eligible for additional rates, usually 0.25% to 0.65% more than the existing rate.
        </p>
        <p className="text-gray-700 mb-4">
          Other than this, even NRIs (Non-resident Indians) can open FD accounts in India in the form of NRE (Non-resident External) and NRO (Non-resident Ordinary) FDs.
        </p>
        <p className="text-gray-700">
          You can open a term deposit account with a bank where you already have a savings account. There are banks that let you open an FD account even if you don't have a savings account with that bank. However, with such banks, you have to go through a KYC process where you have to present relevant documents, including ID proof, address proof, passport size photographs, among others.
        </p>
      </FDSection>
      
      <FDSection 
        id="premature-withdrawal" 
        title="Premature Withdrawal of Fixed Deposit" 
        icon={<ArrowLeft className="h-6 w-6" />}
      >
        <p className="text-gray-700 mb-4">
          The sum deposited in a fixed-rate account (FD) is locked and cannot be withdrawn when needed. Therefore, the investor has the option of making a premature withdrawal or terminating the fixed deposit if they really need the money right now.
        </p>
        <p className="text-gray-700 mb-4">
          The early removal of money from a fixed deposit account prior to the maturity date is referred to as premature withdrawal of fixed deposit. Penalties for this behaviour often range from 0.50% to 1% or lower interest rates.
        </p>
        <p className="text-gray-700 mb-4">
          This is a financial choice that must be thoroughly thought out to determine how it will affect your savings and financial objectives.
        </p>
        
        <h3 className="text-lg font-medium text-blue-700 mb-2">How to Break a Fixed Deposit Account Before Maturity</h3>
        <p className="text-gray-700 mb-4">
          Premature withdrawals from your fixed deposit are possible both online and offline. You must go to the closest branch of your bank to make an early offline withdrawal of an FD. You will need to turn in your FD receipt and complete out a form with accompanying documentation.
        </p>
        <p className="text-gray-700 mb-4">
          Please be aware that certain banks only allow online withdrawals for deposits that were made through their websites. Moreover, in order to make online withdrawals from fixed deposits, the internet banking feature needs to be activated.
        </p>
        
        <h3 className="text-lg font-medium text-blue-700 mb-2">Penalty Charges for Premature Withdrawal of FD</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Most banks charge for premature withdrawal of the fixed deposit. This is usually 0.5% - 1.00% of the interest rate.</li>
          <li>Some banks do not charge any penalty in case of an emergency or if you wish to invest the same amount in another investment option provided by the bank.</li>
          <li>In addition, the rate of interest is reduced from the fixed interest initially granted when an investor closes an account early.</li>
          <li>For example, if the interest earned was six percent annually for the first year, the interest paid to the investor will be 6% annually rather than 8% annually if the investment is withdrawn before the full year has passed.</li>
          <li>Hence, unless necessary, premature withdrawal of fixed deposit results in a great loss for the investor.</li>
          <li>Certain banks require deposits to be taken out within six months of the account opening date; if this is done, no interest is given.</li>
        </ul>
        
        <h3 className="text-lg font-medium text-blue-700 mt-4 mb-2">Does Every Bank Charge the Same Penalty for Premature Withdrawal of FD?</h3>
        <p className="text-gray-700 mb-4">
          According to the Reserve Bank of India, banks are permitted to impose their own penalty fees when customers prematurely withdraw their mutual funds. However, the majority of banks charge between 0.5% and 1% of the interest rate, and the investor must be made aware of this prior to opening an FD account. There are banks that don't charge penalty fees if you take your FD out.
        </p>
        <p className="text-gray-700 mb-4">
          Some major banks such as HDFC Bank charge 1% for premature withdrawal. On the other hand, ICICI Bank charges 0.5% to 1% and State Bank of India charges 0% to 0.50% of the interest rate.
        </p>
        
        <h3 className="text-lg font-medium text-blue-700 mb-2">Premature Withdrawal Charges of Top Banks</h3>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-blue-700 mb-2">HDFC Bank FD Premature Withdrawal</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>HDFC Bank allows its customers to withdraw their fixed deposits before maturity. There are two methods to use the premature withdrawal facility: offline and online.</li>
            <li>You can choose to withdraw your FD partially or fully.</li>
            <li>Premature withdrawal of a fixed deposit will result in an effective interest rate equal to the lesser of the following: either the base rate that was in effect for the whole investment period or the base rate for the first term for which the money was booked.</li>
            <li>For premature withdrawal of a fixed deposit (partial and sweep-in), HDFC Bank charges a penalty of 1% on the applicable rates.</li>
            <li>The interest will not be paid for the premature closure of an FD within seven days of booking.</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-blue-700 mb-2">SBI FD Premature Withdrawal</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>For fixed deposits up to Rs.5 lakh, State Bank of India (SBI) will levy a penalty of 0.50% on premature closure.</li>
            <li>For premature withdrawals of fixed deposits of more than Rs.5 lakh, a penalty of 1% will be applicable.</li>
            <li>The interest rate will be 0.50% or 1% less than the rate effective at the time of deposit for the duration the deposit was maintained with the bank, or 0.50% or 1% less than the contracted rate, whichever is less.</li>
            <li>Fixed deposits held for less than seven days will not be paid any interest.</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-blue-700 mb-2">Kotak Mahindra Bank FD Premature Withdrawal</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Kotak Mahindra Bank imposes a penalty of 0.50% on premature closure of fixed deposits of 181 days and above.</li>
            <li>The interest shall not be payable on a fixed deposit that was prematurely closed within 7 days of being booked.</li>
            <li>In this case, only the principal amount will be repaid.</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-blue-700 mb-2">ICICI Bank FD Premature Withdrawal</h4>
          <p className="text-gray-700 mb-2">In the event that a fixed deposit is closed early, interest will be calculated at the rate in force for the time the deposit was held with ICICI Bank, whichever is lower. A penalty as shown in the following table will also be applied.</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 text-left">Tenure</th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left">Below Rs.5 crore</th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left">Rs.5 crore & above</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">Less than 1 year</td>
                  <td className="py-2 px-4 border-b border-gray-200">0.50%</td>
                  <td className="py-2 px-4 border-b border-gray-200">0.50%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">1 year to less than 5 years</td>
                  <td className="py-2 px-4 border-b border-gray-200">1.00%</td>
                  <td className="py-2 px-4 border-b border-gray-200">1.00%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">5 years and above</td>
                  <td className="py-2 px-4 border-b border-gray-200">1.00%</td>
                  <td className="py-2 px-4 border-b border-gray-200">1.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <h3 className="text-lg font-medium text-blue-700 mt-4 mb-2">Disadvantages of FD Premature Withdrawal</h3>
        <p className="text-gray-700 mb-2">Some of the disadvantages associated with closing a fixed deposit before maturity are as follows:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Penalty</strong> - If you wish to take your FD out before it matures, you will have to pay a penalty. As a penalty, a bank typically levies 0.50% to 1.00% of the interest. The bank reserves the right to alter the applicable penalty.</li>
          <li><strong>Hinders Financial Growth</strong> - When the fixed deposit matures, interest will be paid, providing guaranteed returns. Your income flow will be interrupted if you choose to stop your FD before it matures, which may have an effect on your spending plan.</li>
          <li><strong>Time-consuming Process</strong> - The process involved in closing a fixed deposit prematurely is time-consuming and complicated. You will have to meet bank representatives, fill out various forms, submit documents, and more.</li>
          <li><strong>Interest is Lost</strong> - If you withdraw your fixed deposit prematurely, you will not receive the exact amount determined by the fixed deposit's interest rate and term. Therefore, you must consider the penalty charges to calculate the amount you will get after premature closure.</li>
        </ul>
        
        <h3 className="text-lg font-medium text-blue-700 mt-4 mb-2">How to Avoid the Penalty on Premature Withdrawal of FD</h3>
        <p className="text-gray-700 mb-4">
          Fixed Deposit (FD) is considered to be one of the most popular investment tools. You can invest in a fixed deposit scheme for up to 10 years and earn attractive interest which would help you take care of your long-term financial requirements.
        </p>
        <p className="text-gray-700 mb-4">
          However, due to immediate cash crunch, there might be times when you may have to prematurely withdraw from your fixed deposit account, which would attract a penalty. Hence, in order to avoid that, there are certain ways through which you can avoid penalty for premature withdrawal of FD.
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-blue-700 mb-2">FD Laddering</h4>
          <p className="text-gray-700">
            FD laddering is a process where you apply for various fixed deposit schemes with different maturity periods. You can take a lumpsum amount and divide them into smaller investments by opening multiple fixed deposit accounts. For example, if you have a lumpsum amount of Rs.5 lakh, you can invest it in five different smaller FDs with maturity periods ranging between one year and five years. In this way you will not only have long-term fixed deposit accounts, but also short-term accounts which will ensure you have enough liquidity.
          </p>
          <p className="text-gray-700 mt-2">
            The laddering method is beneficial since it may spare you from having to fulfil your immediate financial needs and avoid having to take any premature withdrawals. If you must take money out early, it will only be to the extent that you actually need it. For instance, you can prematurely withdraw Rs. 1 lakh from each of your two FD accounts if you require, say, Rs. 2 lakh. Even though there might be a penalty associated with those two accounts, the rest will still earn interest on your deposits. At maturity, you can then decide to reinvest in order to boost your cash flow.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-blue-700 mb-2">Loan against FD</h4>
          <p className="text-gray-700">
            You can borrow against the amount of your fixed deposit rather than taking early withdrawals from your FD account. The majority of lenders offer this service and tack on interest rates of 1% to 2% over the interest earned on the deposit. The interest rate charged will vary from bank to bank, thus before using this service, it is advised that you ask any questions of your bank. The majority of lenders permit borrowers to withdraw up to 90% of their initial deposit.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-blue-700 mb-2">Sweep-in facility</h4>
          <p className="text-gray-700">
            This facility allows the lender to credit any sum in excess of the amount you had stipulated from your savings account to a sweep-in account. On opening a sweep-in account, the tenure may range between one year and five years, and you are likely to earn a higher interest on the amount deposited to your account. However, in order to be eligible for this facility, you might be required to open an FD account with a minimum amount of Rs.25,000 in your savings account. This facility offers better corpus and ensures that your immediate cash requirements are met without you having to touch your regular investments. You can withdraw as per your convenience without having to pay any penalty whatsoever.
          </p>
        </div>
        
        <h3 className="text-lg font-medium text-blue-700 mt-4 mb-2">FAQs on Premature Withdrawal of Fixed Deposit</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">What is premature withdrawal of a fixed deposit?</h4>
            <p className="text-gray-700">Withdrawing money from a fixed deposit before the date of maturity is called premature withdrawal.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">What is the penalty for premature withdrawal of HDFC fixed deposit?</h4>
            <p className="text-gray-700">HDFC Bank imposes a penalty of 1% for premature withdrawals, sweep-in withdrawals, and partial withdrawals. However, no penalty will be levied on fixed deposits with a tenure of 7 days to 14 days.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">Can I withdraw money from a fixed deposit before maturity?</h4>
            <p className="text-gray-700">Yes. However, you will be charged a penalty for such premature withdrawals.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">Can I withdraw my fixed deposit before maturity online?</h4>
            <p className="text-gray-700">Yes. Premature withdrawal of a fixed deposit can be done online as well as offline.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">Do all banks charge the same penalty for premature withdrawal of a fixed deposit?</h4>
            <p className="text-gray-700">Most banks impose a penalty of 0.5% to 1% for premature withdrawal of a fixed deposit.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">Is premature closure facility applicable for tax saver fixed deposit?</h4>
            <p className="text-gray-700">No, premature withdrawal of a tax saver fixed deposit is not allowed.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">What is the penalty for premature withdrawal of Axis Bank fixed deposit?</h4>
            <p className="text-gray-700">Axis Bank charges a 1% penalty for early withdrawals from fixed deposits. Nevertheless, if you withdraw up to 25% of the principal amount for the first time, there won't be any penalties.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">What is the penalty charged by SBI on premature withdrawal of an FD up to Rs.5 lakh?</h4>
            <p className="text-gray-700">SBI imposes a penalty of 0.50% on premature closure of an FD up to Rs.5 lakh.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-1">Will I receive any interest if I close my HDFC FD within seven days of booking?</h4>
            <p className="text-gray-700">No, HDFC Bank does not pay any interest for fixed deposits closed within seven days of being booked.</p>
          </div>
        </div>
      </FDSection>
      
      <FDSection 
        id="tax-benefits" 
        title="Fixed Deposit Tax Benefits" 
        icon={<DollarSign className="h-6 w-6" />}
      >
        <p className="mb-4">There are many benefits to Tax Saving Fixed Deposits. These are as given below:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Individuals, Hindu Undivided Family (HUFs), and minors investing jointly with adults can invest.</li>
          <li>The investment qualifies for tax deduction under Section 80C of the Income Tax Act.</li>
          <li>Tax Deducted at Source (TDS) is applicable on the interest earned, according to the income tax bracket, but this can be avoided by submitting Form 15G (for senior citizens it is Form 15H).</li>
          <li>Senior citizens can claim deduction of up to Rs.50,000 on interest earned under Section 80TTB.</li>
          <li>Nomination facility can be availed except if it is held by or on behalf of minors.</li>
          <li>Higher interest rates are offered for senior citizens.</li>
          <li>Fixed deposits in post offices can be transferred from one post office to another.</li>
        </ul>
      </FDSection>
      
      <FDSection 
        id="calculator" 
        title="FD Calculator" 
        icon={<Calculator className="h-6 w-6" />}
      >
        <p className="text-gray-700">
          To find out how much interest your fixed deposit will yield for a specific tenure, you can use a free online compound interest calculator. Based on the rate of interest, the FD Calculator will determine how much your deposit will yield at maturity depending on the principal amount. This is calculated based on several factors including the interest compounding frequency which would depend on the bank. It can be on a monthly, quarterly, half-yearly, or annual basis.
        </p>
        <div className="mt-4 text-center">
          <Link 
            to="/compare-fd-rates" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Compare FD Rates
          </Link>
        </div>
      </FDSection>
      
      <FDSection 
        id="central-bank" 
        title="How Fixed Deposit Interest Rates Vary with Central Bank Policies?" 
        icon={<Building className="h-6 w-6" />}
      >
        <p className="text-gray-700">
          The Reserve Bank of India lends to banks at interest rates that can vary based on the prevailing economic conditions. When interest rates are revised by the RBI, banks too may change the interest rates offered on their fixed deposits. This can increase or decrease based on the repo rate (the rate of interest at which the RBI lends to banks).
        </p>
      </FDSection>
      
      <FDSection 
        id="faqs" 
        title="Frequently Asked Questions" 
        icon={<FileText className="h-6 w-6" />}
      >
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">What is the minimum amount required to open a fixed deposit?</h3>
            <p className="text-gray-700">The minimum amount required to open a fixed deposit can range from Rs.1,000 (in State Bank of India) to Rs.5,000 (in Axis Bank).</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">Can I withdraw an FD at any time?</h3>
            <p className="text-gray-700">Yes, you can withdraw your FD at any point in time unless the bank has a lock-in period.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">What's the maximum amount that can be deposited?</h3>
            <p className="text-gray-700">There's no upper cap for fixed deposits. However, you can check with your lender to see if there are any set limits.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">How many years FD will double?</h3>
            <p className="text-gray-700">The fixed deposit can be doubled depending on the rate of interest that is being offered.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">Is fixed deposit risk free?</h3>
            <p className="text-gray-700">Yes, it is risk free and provides returns that are guaranteed.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">Can I double my money in 5 years?</h3>
            <p className="text-gray-700">This will depend on the rate of interest being offered and if it remains consistent throughout the five years.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">Can I get monthly interest on FD?</h3>
            <p className="text-gray-700">Your FD interest can be compounded monthly, quarterly, half-yearly or annually as per your choice. However, frequent compounding can reduce the rates.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">Can a 5-year tax-saver FD be broken?</h3>
            <p className="text-gray-700">A 5-year FD cannot be broken before its tenure of 5 years is completed.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">What is the minimum period for a fixed deposit?</h3>
            <p className="text-gray-700">Your FD tenure can range from 7 days to 10 years depending on the term you choose.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">Is fixed deposit safe?</h3>
            <p className="text-gray-700">Yes, fixed deposits are safe because the returns are not affected by fluctuations in the stock markets. Also, the Reserve Bank of India provides insurance for up to Rs.1 lakh of your fixed deposit in the event of a banking crisis.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">Is FD tax free?</h3>
            <p className="text-gray-700">No, it's not tax free. However, you can get tax exemptions if you opt for tax-saving fixed deposits. Under such FDs, you can claim a deduction of up to Rs.1.5 lakh under section 80C of the Indian Income Tax Act, 1961.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">How does a fixed deposit work?</h3>
            <p className="text-gray-700">In a fixed deposit, your money is locked away for a fixed period of time in a bank. The principal amount that is deposited earns you interest on a cumulative basis.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">What happens if I break my fixed deposit before the maturity period is over?</h3>
            <p className="text-gray-700">If you break your fixed deposit before the maturity period is over, you will get a lower rate of interest and a penalty will be deducted from the amount before it is given back to you.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 mb-2">What happens to FD after maturity?</h3>
            <p className="text-gray-700">While opening an FD, you can mention that after maturity the amount can be transferred to your savings account. Or you can mention in the form that the amount to be renewed after maturity. If you choose the second option, after maturity, the amount will be reinvested as fixed deposit with the same tenure and rates as the previous one. If nothing is notified in the form, the concerned lender will notify you. In case you don't respond within 14 days after FD maturity, your account will be renewed automatically.</p>
          </div>
        </div>
      </FDSection>
      
      <div className="mt-8 text-center">
        <Link 
          to="/compare-fd-rates" 
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 text-lg font-medium"
        >
          Compare FD Rates Across Banks
        </Link>
      </div>
    </div>
  );
};

export default FixedDepositPage; 