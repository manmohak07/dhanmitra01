import React, { useState } from 'react';
import { roadmapAPI, RoadmapInput } from '../../api';

interface RoadmapFormProps {
  onRoadmapGenerated: (roadmap: any) => void;
  setLoading: (loading: boolean) => void;
}

const RoadmapForm: React.FC<RoadmapFormProps> = ({ onRoadmapGenerated, setLoading }) => {
  const [formData, setFormData] = useState<RoadmapInput>({
    age: 30,
    monthlyIncome: 50000,
    currentSavings: 100000,
    riskTolerance: 'Medium',
    financialGoals: ['Retirement', 'Home Purchase'],
    timeframe: '10 years'
  });

  const [goals, setGoals] = useState<string>('Retirement, Home Purchase');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'financialGoals') {
      setGoals(value);
      setFormData({
        ...formData,
        financialGoals: value.split(',').map(goal => goal.trim()).filter(goal => goal !== '')
      });
    } else {
      setFormData({
        ...formData,
        [name]: name === 'age' || name === 'monthlyIncome' || name === 'currentSavings' 
          ? Number(value) 
          : value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    console.log('Submitting form data:', formData);

    try {
      // Try direct fetch first with more detailed error handling
      console.log('Trying direct fetch to API...');
      const directResponse = await fetch('https://dhanmitra.onrender.com/api/roadmap/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });
      
      if (!directResponse.ok) {
        const errorData = await directResponse.json();
        throw new Error(errorData.message || `Server responded with status: ${directResponse.status}`);
      }
      
      const directData = await directResponse.json();
      console.log('Direct API response:', directData);
      
      if (directData) {
        onRoadmapGenerated(directData);
        return; // Exit early if successful
      } else {
        throw new Error('Received empty response from server');
      }
    } catch (directErr) {
      console.error('Direct fetch error:', directErr);
      
      try {
        // Fall back to using the API client
        console.log('Falling back to API client...');
        const response = await roadmapAPI.generateRoadmap(formData);
        console.log('API client response:', response);
        
        if (response) {
          onRoadmapGenerated(response);
        } else {
          throw new Error('Received empty response from API client');
        }
      } catch (err) {
        console.error('API client error:', err);
        setError(err instanceof Error ? err.message : 'Failed to generate roadmap');
        
        // Try one more approach - using XMLHttpRequest
        try {
          console.log('Trying XMLHttpRequest as last resort...');
          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://dhanmitra.onrender.com/api/roadmap/generate', true);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
              const response = JSON.parse(xhr.responseText);
              console.log('XMLHttpRequest response:', response);
              onRoadmapGenerated(response);
              setLoading(false);
            } else {
              console.error('XMLHttpRequest failed:', xhr.statusText);
              setError(`XMLHttpRequest failed: ${xhr.statusText}`);
              setLoading(false);
            }
          };
          xhr.onerror = function() {
            console.error('XMLHttpRequest network error');
            setError('Network error - please check your connection');
            setLoading(false);
          };
          xhr.send(JSON.stringify(formData));
          return; // Exit early to prevent setLoading(false) from being called twice
        } catch (xhrErr) {
          console.error('XMLHttpRequest error:', xhrErr);
          setError(xhrErr instanceof Error ? xhrErr.message : 'All attempts to generate roadmap failed');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Generate Your Investment Roadmap</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Monthly Income (₹)</label>
            <input
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Current Savings (₹)</label>
            <input
              type="number"
              name="currentSavings"
              value={formData.currentSavings}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Risk Tolerance</label>
            <select
              name="riskTolerance"
              value={formData.riskTolerance}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Financial Goals (comma-separated)</label>
            <input
              type="text"
              name="financialGoals"
              value={goals}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Retirement, Home Purchase, Children's Education, etc."
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Investment Timeframe</label>
            <input
              type="text"
              name="timeframe"
              value={formData.timeframe}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="e.g., 5 years, 10 years, 20+ years"
              required
            />
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Generate Roadmap
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoadmapForm; 