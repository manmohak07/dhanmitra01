import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import RoadmapDisplay from '../components/roadmap/RoadmapDisplay';
import { Loader2 } from 'lucide-react';

const SavedRoadmaps: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [roadmaps, setRoadmaps] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRoadmap, setSelectedRoadmap] = useState<any>(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: '/saved-roadmaps' } });
    }
  }, [user, navigate]);

  // Fetch saved roadmaps
  useEffect(() => {
    const fetchRoadmaps = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        // This would be replaced with an actual API call in a real implementation
        // For now, we'll simulate with a timeout
        setTimeout(() => {
          // Mock data - in a real app, this would come from an API
          const mockRoadmaps = user.roadmaps || [];
          setRoadmaps(mockRoadmaps);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching roadmaps:', error);
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, [user]);

  const handleSelectRoadmap = (roadmap: any) => {
    setSelectedRoadmap(roadmap);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedRoadmap(null);
  };

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Saved Roadmaps</h1>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
          <span className="ml-3 text-lg">Loading your roadmaps...</span>
        </div>
      ) : selectedRoadmap ? (
        <>
          <button
            onClick={handleBackToList}
            className="text-blue-600 mb-6 hover:text-blue-800"
          >
            ← Back to all roadmaps
          </button>
          
          <RoadmapDisplay roadmap={selectedRoadmap} onSave={() => {}} />
        </>
      ) : roadmaps.length === 0 ? (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">No Saved Roadmaps</h2>
          <p className="text-gray-600 mb-6">
            You haven't saved any investment roadmaps yet. Generate a new roadmap to get started.
          </p>
          <button
            onClick={() => navigate('/investment-roadmap')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Generate New Roadmap
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {roadmaps.map((roadmap, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleSelectRoadmap(roadmap)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Roadmap {index + 1}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {roadmap.financialSituation?.substring(0, 150)}...
                  </p>
                  <div className="text-sm text-gray-500">
                    Created: {new Date(roadmap.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectRoadmap(roadmap);
                  }}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRoadmaps; 