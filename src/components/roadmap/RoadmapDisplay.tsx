import React from 'react';
import { roadmapAPI } from '../../api';

interface RoadmapDisplayProps {
  roadmap: any;
  onSave: () => void;
}

const RoadmapDisplay: React.FC<RoadmapDisplayProps> = ({ roadmap, onSave }) => {
  // Handle case where roadmap is not properly structured
  if (!roadmap || roadmap.rawResponse) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Investment Roadmap</h2>
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          The AI generated response could not be properly structured. Here is the raw response:
        </div>
        <div className="whitespace-pre-wrap bg-gray-50 p-4 rounded">
          {roadmap?.rawResponse || 'No response received'}
        </div>
      </div>
    );
  }

  // Handle saving the roadmap
  const handleSave = async () => {
    try {
      await roadmapAPI.saveRoadmap(roadmap);
      onSave();
    } catch (error) {
      console.error('Error saving roadmap:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Investment Roadmap</h2>
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Roadmap
        </button>
      </div>

      {/* Summary Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">Financial Situation Summary</h3>
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-gray-800">{roadmap.financialSituation || roadmap.summary}</p>
        </div>
      </div>

      {/* Short-term Recommendations */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">Short-term Recommendations (0-2 years)</h3>
        <div className="bg-gray-50 p-4 rounded">
          {typeof roadmap.shortTermRecommendations === 'string' ? (
            <p className="text-gray-800">{roadmap.shortTermRecommendations}</p>
          ) : (
            <ul className="list-disc pl-5">
              {Array.isArray(roadmap.shortTermRecommendations) ? (
                roadmap.shortTermRecommendations.map((item: string, index: number) => (
                  <li key={index} className="mb-2">{item}</li>
                ))
              ) : (
                <li>No short-term recommendations provided</li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Medium-term Recommendations */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">Medium-term Recommendations (2-5 years)</h3>
        <div className="bg-gray-50 p-4 rounded">
          {typeof roadmap.mediumTermRecommendations === 'string' ? (
            <p className="text-gray-800">{roadmap.mediumTermRecommendations}</p>
          ) : (
            <ul className="list-disc pl-5">
              {Array.isArray(roadmap.mediumTermRecommendations) ? (
                roadmap.mediumTermRecommendations.map((item: string, index: number) => (
                  <li key={index} className="mb-2">{item}</li>
                ))
              ) : (
                <li>No medium-term recommendations provided</li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Long-term Recommendations */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">Long-term Recommendations (5+ years)</h3>
        <div className="bg-gray-50 p-4 rounded">
          {typeof roadmap.longTermRecommendations === 'string' ? (
            <p className="text-gray-800">{roadmap.longTermRecommendations}</p>
          ) : (
            <ul className="list-disc pl-5">
              {Array.isArray(roadmap.longTermRecommendations) ? (
                roadmap.longTermRecommendations.map((item: string, index: number) => (
                  <li key={index} className="mb-2">{item}</li>
                ))
              ) : (
                <li>No long-term recommendations provided</li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Asset Allocation */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">Recommended Asset Allocation</h3>
        <div className="bg-gray-50 p-4 rounded">
          {roadmap.assetAllocation && typeof roadmap.assetAllocation === 'object' ? (
            <div>
              {roadmap.assetAllocation.description && (
                <p className="mb-3">{roadmap.assetAllocation.description}</p>
              )}
              
              {roadmap.assetAllocation.allocation && Array.isArray(roadmap.assetAllocation.allocation) ? (
                <ul className="list-disc pl-5">
                  {roadmap.assetAllocation.allocation.map((item: any, index: number) => (
                    <li key={index} className="mb-3">
                      <div className="font-medium">{item.name}: {item.percentage}%</div>
                      {item.rationale && (
                        <div className="text-sm text-gray-600 ml-2 mt-1">{item.rationale}</div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No detailed asset allocation provided</p>
              )}
            </div>
          ) : (
            <p>No asset allocation information available</p>
          )}
        </div>
      </div>

      {/* Investment Vehicles */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">Recommended Investment Vehicles</h3>
        <div className="bg-gray-50 p-4 rounded">
          {roadmap.investmentVehicles && typeof roadmap.investmentVehicles === 'object' ? (
            <div>
              {roadmap.investmentVehicles.description && (
                <p className="mb-3">{roadmap.investmentVehicles.description}</p>
              )}
              
              {roadmap.investmentVehicles.vehicles && Array.isArray(roadmap.investmentVehicles.vehicles) ? (
                <ul className="list-disc pl-5">
                  {roadmap.investmentVehicles.vehicles.map((item: any, index: number) => (
                    <li key={index} className="mb-3">
                      <div className="font-medium">
                        {item.name} 
                        {item.suitability && <span className="ml-2 text-sm">- Suitability: {item.suitability}</span>}
                      </div>
                      {item.description && (
                        <div className="text-sm text-gray-600 ml-2 mt-1">{item.description}</div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No detailed investment vehicles provided</p>
              )}
            </div>
          ) : (
            <p>No investment vehicles information available</p>
          )}
        </div>
      </div>

      {/* Risk Management */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">Risk Management Strategies</h3>
        <div className="bg-gray-50 p-4 rounded">
          {roadmap.riskManagement && typeof roadmap.riskManagement === 'object' ? (
            <div>
              {roadmap.riskManagement.description && (
                <p className="mb-3">{roadmap.riskManagement.description}</p>
              )}
              
              {roadmap.riskManagement.strategies && Array.isArray(roadmap.riskManagement.strategies) ? (
                <ul className="list-disc pl-5">
                  {roadmap.riskManagement.strategies.map((item: string, index: number) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              ) : (
                <p>No detailed risk management strategies provided</p>
              )}
            </div>
          ) : (
            <p>No risk management information available</p>
          )}
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Note: This roadmap is generated by AI and should be considered as general advice only. Please consult with a financial advisor before making investment decisions.</p>
      </div>
    </div>
  );
};

export default RoadmapDisplay; 