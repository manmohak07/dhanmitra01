import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const EPFDocumentationPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Acts and Schemes',
      documents: [
        {
          name: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPFAct1952.pdf"
        },
        {
          name: "Employees' Provident Funds Scheme, 1952",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPFScheme.pdf"
        },
        {
          name: "Employees' Deposit Linked Insurance Scheme, 1976",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EDLI_1976.pdf"
        },
        {
          name: "Employees' Pension Scheme, 1995 (replacing the Employees' Family Pension Scheme, 1971)",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPS95_update102008.pdf"
        }
      ]
    },
    {
      title: 'Administration',
      documents: [
        {
          name: "Schedule of Administrative and Financial Powers",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Delegation_AdmnFinPowers.pdf"
        },
        {
          name: "The Employees' Provident Fund, Central Board Employees (Allotment of Residences) Rules, 1972",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Quarter_Allotment_Rules_English.pdf"
        },
        {
          name: "Manual for Procurement of Goods",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Manual_for_Procurement_of_Goods.pdf"
        },
        {
          name: "Manual for Procurement of Consultancy & Other Services",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Manual_for_Procurement_of_Consultancy_&_Other_Services.pdf"
        },
        {
          name: "Manual for Procurement of Works",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Manual_for_Procurement_of_Works.pdf"
        }
      ]
    },
    {
      title: 'Establishment',
      documents: [
        {
          name: "Recruitment Rules",
          url: "https://www.epfindia.gov.in/site_en/RecruitmentRules.php"
        },
        {
          name: "Employees' Provident Fund (Staff & Conditions of Service) Regulations, 1962",
          url: "https://www.epfindia.gov.in/site_en/Downloads_extn.php?link=Employees%27+Provident+Fund+%28Staff+%26+Conditions+of+Service%29+Regulations%2C+1962+%28As+amended+upto+April%2C+1972%29"
        },
        {
          name: "Employees' Provident Fund (Officers & Employees' Conditions of Service) Regulations, 2008",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPF_StaffServiceRegulations2008.pdf"
        },
        {
          name: "Employees' Provident Fund Staff (Fixation of Seniority) Regulations, 1989",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPF_SeniorityFixationRegulations1989.pdf"
        },
        {
          name: "The EPF Staff (Classification, Control & Appeal) Rules, 1971",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPF_CCARules.pdf"
        },
        {
          name: "Model APAR Formats",
          url: "https://www.epfindia.gov.in/site_en/APARformats.php"
        },
        {
          name: "Employees' Provident Fund Services Manual, 1972",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPFServicesManual1972.pdf"
        }
      ]
    },
    {
      title: 'Manuals',
      documents: [
        {
          name: "Manual of Accounting Procedure",
          url: "https://www.epfindia.gov.in/site_en/Downloads_extn.php?link=Manual+of+Accounting+Procedure"
        },
        {
          name: "Manual for Inspector cum-Facilitator",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Manual_for_Inspector_cum_Facilitator.pdf"
        },
        {
          name: "Recovery Manual",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Recovery_Manual.pdf"
        },
        {
          name: "Standard Operating Procedure (SOP) for settlement of claims",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Manual_SOP_ClaimSettlement.pdf"
        },
        {
          name: "Communication Framework Document",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Communication_Framework_Document_08122023.pdf"
        },
        {
          name: "Audit Manual",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Audit_Manual_08122023.pdf"
        },
        {
          name: "Exemption Manual",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Exemption_Manual_08122023.pdf"
        },
        {
          name: "Compliance Manual",
          url: "https://www.epfindia.gov.in/site_en/Downloads_extn.php?link=Compliance+Manual"
        },
        {
          name: "Pension Manual",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/Pension_Manual.pdf"
        },
        {
          name: "EDLI Manual",
          url: "https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EDLI_Manual.pdf"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/epf"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to EPF Resources
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">EPF Official Documentation</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Access official EPF documentation, including acts, schemes, manuals, and administrative guidelines.
              All documents are provided by the Employees' Provident Fund Organization (EPFO).
            </p>

            {documentationSections.map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-2">
                  {section.documents.map((doc) => (
                    <a
                      key={doc.name}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{doc.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-600">
                Note: All documents are provided by the official EPFO website. For the most up-to-date information,
                please visit the EPFO website directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPFDocumentationPage; 