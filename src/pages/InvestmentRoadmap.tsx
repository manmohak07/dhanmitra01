import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import InvestmentRoadmapAI from '../components/InvestmentRoadmapAI';

const InvestmentRoadmap: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: '/investment-roadmap' } });
    }
  }, [user, navigate]);
  
  if (!user) {
    return null; // Will redirect to login
  }
  
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Investment Roadmap</h1>
      <InvestmentRoadmapAI />
    </div>
  );
};

export default InvestmentRoadmap; 