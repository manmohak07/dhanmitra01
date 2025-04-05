// API client for communicating with the backend
const API_URL = 'https://dhanmitra.onrender.com/api';

// Helper function for making API requests
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  // Get token from localStorage
  const token = localStorage.getItem('token');
  
  // Set default headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };
  
  try {
    console.log(`Making API request to ${API_URL}${endpoint}`);
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
      credentials: 'include',
    });
    
    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || data.message || 'Something went wrong');
      }
      
      return data;
    } else {
      const text = await response.text();
      
      if (!response.ok) {
        throw new Error(text || 'Something went wrong');
      }
      
      // Try to parse as JSON anyway
      try {
        return JSON.parse(text);
      } catch (e) {
        return { message: text };
      }
    }
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Auth API
export const authAPI = {
  register: (email: string, password: string) => 
    apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
    
  login: (email: string, password: string) => 
    apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
    
  getMe: () => apiRequest('/auth/me'),
  
  logout: () => {
    localStorage.removeItem('token');
    return apiRequest('/auth/logout');
  },
};

// User API
export const userAPI = {
  getProfile: () => apiRequest('/users/profile'),
  
  updateProfile: (data: { name: string }) => 
    apiRequest('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    
  getPortfolio: () => apiRequest('/users/portfolio'),
  
  addInvestment: (investment: any) => 
    apiRequest('/users/portfolio', {
      method: 'POST',
      body: JSON.stringify(investment),
    }),
    
  updateInvestment: (investmentId: string, data: any) => 
    apiRequest(`/users/portfolio/${investmentId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    
  deleteInvestment: (investmentId: string) => 
    apiRequest(`/users/portfolio/${investmentId}`, {
      method: 'DELETE',
    }),
};

// Banks API
export const banksAPI = {
  getBanks: () => apiRequest('/banks'),
  
  getBank: (id: string) => apiRequest(`/banks/${id}`),
};

// Investments API
export const investmentsAPI = {
  getInvestments: (params = {}) => {
    const queryString = new URLSearchParams(params as Record<string, string>).toString();
    return apiRequest(`/investments${queryString ? `?${queryString}` : ''}`);
  },
  
  getInvestment: (id: string) => apiRequest(`/investments/${id}`),
};

// Roadmap API
export interface RoadmapInput {
  age: number;
  monthlyIncome: number;
  currentSavings: number;
  riskTolerance: 'Low' | 'Medium' | 'High';
  financialGoals: string[];
  timeframe: string;
}

export const roadmapAPI = {
  generateRoadmap: (data: RoadmapInput) => {
    console.log('Generating roadmap with data:', data);
    return apiRequest('/roadmap/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
    
  saveRoadmap: (roadmapData: any) => 
    apiRequest('/roadmap/save', {
      method: 'POST',
      body: JSON.stringify({ roadmap: roadmapData }),
    }),
}; 