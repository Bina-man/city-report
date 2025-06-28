import React, { useState, useEffect } from 'react';
import { 
  Users, 
  FileText, 
  BarChart3, 
  Upload, 
  Calendar, 
  TreePine, 
  User, 
  LogOut, 
  ChevronRight, 
  TrendingUp, 
  Activity,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Download,
  Search,
  Bell,
  Settings,
  Home,
  PieChart,
  LineChart,
  Target,
  Award,
  Zap,
  Sparkles,
  Camera,
  Map,
  Send,
  Filter,
  Grid,
  Building,
  Shield
} from 'lucide-react';

const subcities = [
  { 
    id: 1, 
    name: 'Kolfe Keraniyo', 
    progress: 92, 
    reports: 15, 
    status: 'excellent', 
    mayor: 'Daniel Mesfin', 
    population: 450000,
    budget: 2800000,
    budgetUsed: 2380000,
    area: 61.25, // km²
    projects: 28,
    efficiency: 94,
    districts: ['Kolfe', 'Keraniyo', 'Sebategna', '18 Mazoria', 'Teklehaymanot'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Daniel Mesfin', submittedDate: '2025-01-28', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Daniel Mesfin', submittedDate: '2025-02-27', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Daniel Mesfin', submittedDate: '2025-03-29', status: 'approved' },
      '2025-04': { submitted: true, submittedBy: 'Daniel Mesfin', submittedDate: '2025-04-26', status: 'approved' },
      '2025-05': { submitted: true, submittedBy: 'Daniel Mesfin', submittedDate: '2025-05-30', status: 'approved' },
      '2025-06': { submitted: true, submittedBy: 'Daniel Mesfin', submittedDate: '2025-06-28', status: 'pending' }
    }
  },
  { 
    id: 2, 
    name: 'Yeka', 
    progress: 87, 
    reports: 13, 
    status: 'excellent', 
    mayor: 'Sarah Ahmed', 
    population: 380000,
    budget: 2200000,
    budgetUsed: 1870000,
    area: 85.98, // km²
    projects: 22,
    efficiency: 89,
    districts: ['Gerji', 'Ayat', 'Hana Mariam', 'Megenagna', 'Bole Michael'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Sarah Ahmed', submittedDate: '2025-01-30', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Sarah Ahmed', submittedDate: '2025-02-28', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Sarah Ahmed', submittedDate: '2025-03-27', status: 'approved' },
      '2025-04': { submitted: true, submittedBy: 'Sarah Ahmed', submittedDate: '2025-04-29', status: 'approved' },
      '2025-05': { submitted: true, submittedBy: 'Sarah Ahmed', submittedDate: '2025-05-31', status: 'approved' },
      '2025-06': { submitted: false, submittedBy: null, submittedDate: null, status: 'overdue' }
    }
  },
  { 
    id: 3, 
    name: 'Bole', 
    progress: 94, 
    reports: 18, 
    status: 'excellent', 
    mayor: 'Michael Tadesse', 
    population: 320000,
    budget: 3500000,
    budgetUsed: 3150000,
    area: 122.0, // km²
    projects: 35,
    efficiency: 96,
    districts: ['Bole Airport', 'CMC', 'Wollo Sefer', 'Mexico', 'Sarbet'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Michael Tadesse', submittedDate: '2025-01-27', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Michael Tadesse', submittedDate: '2025-02-26', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Michael Tadesse', submittedDate: '2025-03-28', status: 'approved' },
      '2025-04': { submitted: true, submittedBy: 'Michael Tadesse', submittedDate: '2025-04-27', status: 'approved' },
      '2025-05': { submitted: true, submittedBy: 'Michael Tadesse', submittedDate: '2025-05-29', status: 'approved' },
      '2025-06': { submitted: true, submittedBy: 'Michael Tadesse', submittedDate: '2025-06-27', status: 'approved' }
    }
  },
  { 
    id: 4, 
    name: 'Lideta', 
    progress: 88, 
    reports: 12, 
    status: 'good', 
    mayor: 'Alemayehu Worku', 
    population: 290000,
    budget: 2100000,
    budgetUsed: 1890000,
    area: 47.8, // km²
    projects: 19,
    efficiency: 91,
    districts: ['Lideta', 'Stadium', 'Red Terror Memorial', 'Haya Hulet', 'Tewodros Square'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Alemayehu Worku', submittedDate: '2025-01-29', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Alemayehu Worku', submittedDate: '2025-02-28', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Alemayehu Worku', submittedDate: '2025-03-30', status: 'under_review' },
      '2025-04': { submitted: true, submittedBy: 'Alemayehu Worku', submittedDate: '2025-04-28', status: 'approved' },
      '2025-05': { submitted: true, submittedBy: 'Alemayehu Worku', submittedDate: '2025-05-28', status: 'approved' },
      '2025-06': { submitted: true, submittedBy: 'Alemayehu Worku', submittedDate: '2025-06-30', status: 'pending' }
    }
  },
  { 
    id: 5, 
    name: 'Arada', 
    progress: 91, 
    reports: 16, 
    status: 'excellent', 
    mayor: 'Tigist Bekele', 
    population: 270000,
    budget: 2600000,
    budgetUsed: 2340000,
    area: 23.4, // km²
    projects: 24,
    efficiency: 93,
    districts: ['Piazza', 'Arat Kilo', 'Sidist Kilo', 'Unity Park', 'Merkato'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Tigist Bekele', submittedDate: '2025-01-31', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Tigist Bekele', submittedDate: '2025-02-27', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Tigist Bekele', submittedDate: '2025-03-26', status: 'approved' },
      '2025-04': { submitted: true, submittedBy: 'Tigist Bekele', submittedDate: '2025-04-25', status: 'approved' },
      '2025-05': { submitted: true, submittedBy: 'Tigist Bekele', submittedDate: '2025-05-27', status: 'approved' },
      '2025-06': { submitted: true, submittedBy: 'Tigist Bekele', submittedDate: '2025-06-29', status: 'approved' }
    }
  },
  { 
    id: 6, 
    name: 'Nifassilk Lafto', 
    progress: 85, 
    reports: 11, 
    status: 'good', 
    mayor: 'Mulugeta Assefa', 
    population: 410000,
    budget: 2400000,
    budgetUsed: 2050000,
    area: 68.3, // km²
    projects: 20,
    efficiency: 87,
    districts: ['Lafto', 'Cherkos', 'Gofa', 'Nifas Silk', 'CMC'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Mulugeta Assefa', submittedDate: '2025-02-02', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Mulugeta Assefa', submittedDate: '2025-03-01', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Mulugeta Assefa', submittedDate: '2025-03-31', status: 'approved' },
      '2025-04': { submitted: true, submittedBy: 'Mulugeta Assefa', submittedDate: '2025-04-30', status: 'under_review' },
      '2025-05': { submitted: false, submittedBy: null, submittedDate: null, status: 'overdue' },
      '2025-06': { submitted: false, submittedBy: null, submittedDate: null, status: 'not_due' }
    }
  },
  { 
    id: 7, 
    name: 'Lemi Kura', 
    progress: 79, 
    reports: 9, 
    status: 'needs_improvement', 
    mayor: 'Getachew Haile', 
    population: 220000,
    budget: 1800000,
    budgetUsed: 1420000,
    area: 52.7, // km²
    projects: 15,
    efficiency: 81,
    districts: ['Lemi Kura', 'Jemo', 'Summit', 'Tulu Dimtu', 'Bole Arabsa'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Getachew Haile', submittedDate: '2025-02-05', status: 'approved' },
      '2025-02': { submitted: false, submittedBy: null, submittedDate: null, status: 'overdue' },
      '2025-03': { submitted: true, submittedBy: 'Getachew Haile', submittedDate: '2025-04-02', status: 'under_review' },
      '2025-04': { submitted: true, submittedBy: 'Getachew Haile', submittedDate: '2025-05-01', status: 'approved' },
      '2025-05': { submitted: false, submittedBy: null, submittedDate: null, status: 'overdue' },
      '2025-06': { submitted: false, submittedBy: null, submittedDate: null, status: 'not_due' }
    }
  },
  { 
    id: 8, 
    name: 'Gulele', 
    progress: 89, 
    reports: 14, 
    status: 'good', 
    mayor: 'Rahel Tesfaye', 
    population: 340000,
    budget: 2500000,
    budgetUsed: 2200000,
    area: 95.6, // km²
    projects: 26,
    efficiency: 90,
    districts: ['Gulele', 'Entoto', 'Saris', 'Addisu Gebeya', 'Shola'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Rahel Tesfaye', submittedDate: '2025-01-30', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Rahel Tesfaye', submittedDate: '2025-02-28', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Rahel Tesfaye', submittedDate: '2025-03-29', status: 'approved' },
      '2025-04': { submitted: true, submittedBy: 'Rahel Tesfaye', submittedDate: '2025-04-28', status: 'approved' },
      '2025-05': { submitted: true, submittedBy: 'Rahel Tesfaye', submittedDate: '2025-05-30', status: 'approved' },
      '2025-06': { submitted: true, submittedBy: 'Rahel Tesfaye', submittedDate: '2025-06-28', status: 'pending' }
    }
  },
  { 
    id: 9, 
    name: 'Addis Ketema', 
    progress: 83, 
    reports: 10, 
    status: 'good', 
    mayor: 'Bekele Molla', 
    population: 310000,
    budget: 2200000,
    budgetUsed: 1830000,
    area: 33.2, // km²
    projects: 18,
    efficiency: 85,
    districts: ['Addis Ketema', 'Anwar Mosque', 'Tekle Haymanot', 'Autobus Tera', 'Shiromeda'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Bekele Molla', submittedDate: '2025-01-28', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Bekele Molla', submittedDate: '2025-02-26', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Bekele Molla', submittedDate: '2025-03-30', status: 'approved' },
      '2025-04': { submitted: true, submittedBy: 'Bekele Molla', submittedDate: '2025-04-29', status: 'under_review' },
      '2025-05': { submitted: true, submittedBy: 'Bekele Molla', submittedDate: '2025-05-29', status: 'approved' },
      '2025-06': { submitted: false, submittedBy: null, submittedDate: null, status: 'overdue' }
    }
  },
  { 
    id: 10, 
    name: 'Kirkos', 
    progress: 86, 
    reports: 13, 
    status: 'good', 
    mayor: 'Hanna Girma', 
    population: 280000,
    budget: 2300000,
    budgetUsed: 1980000,
    area: 42.1, // km²
    projects: 21,
    efficiency: 88,
    districts: ['Kirkos', 'Meskel Square', 'Tor Hailoch', 'Kality', 'Geja Sefer'],
    monthlyReportStatus: {
      '2025-01': { submitted: true, submittedBy: 'Hanna Girma', submittedDate: '2025-01-29', status: 'approved' },
      '2025-02': { submitted: true, submittedBy: 'Hanna Girma', submittedDate: '2025-02-27', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Hanna Girma', submittedDate: '2025-03-28', status: 'approved' },
      '2025-04': { submitted: true, submittedBy: 'Hanna Girma', submittedDate: '2025-04-26', status: 'approved' },
      '2025-05': { submitted: true, submittedBy: 'Hanna Girma', submittedDate: '2025-05-28', status: 'approved' },
      '2025-06': { submitted: true, submittedBy: 'Hanna Girma', submittedDate: '2025-06-26', status: 'approved' }
    }
  },
  { 
    id: 11, 
    name: 'Akaki Kality', 
    progress: 77, 
    reports: 8, 
    status: 'needs_improvement', 
    mayor: 'Solomon Kebede', 
    population: 195000,
    budget: 1900000,
    budgetUsed: 1460000,
    area: 118.4, // km²
    projects: 14,
    efficiency: 79,
    districts: ['Akaki', 'Kality', 'Dukem', 'Sebeta Road', 'Industrial Zone'],
    monthlyReportStatus: {
      '2025-01': { submitted: false, submittedBy: null, submittedDate: null, status: 'overdue' },
      '2025-02': { submitted: true, submittedBy: 'Solomon Kebede', submittedDate: '2025-03-05', status: 'approved' },
      '2025-03': { submitted: true, submittedBy: 'Solomon Kebede', submittedDate: '2025-04-03', status: 'under_review' },
      '2025-04': { submitted: false, submittedBy: null, submittedDate: null, status: 'overdue' },
      '2025-05': { submitted: true, submittedBy: 'Solomon Kebede', submittedDate: '2025-06-02', status: 'pending' },
      '2025-06': { submitted: false, submittedBy: null, submittedDate: null, status: 'not_due' }
    }
  }
];

const reportCategories = [
  { id: 'roadway', name: 'Roadway Greening', icon: '🛣️', color: 'bg-blue-500', description: 'Street tree planting and roadside beautification' },
  { id: 'parks', name: 'Parks & Recreation', icon: '🏞️', color: 'bg-green-500', description: 'Public parks development and maintenance' },
  { id: 'schools', name: 'School Grounds', icon: '🏫', color: 'bg-purple-500', description: 'Educational institution landscaping' },
  { id: 'residential', name: 'Residential Areas', icon: '🏘️', color: 'bg-orange-500', description: 'Community greening initiatives' }
];

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('Initializing system...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const texts = [
      'Initializing system...',
      'Connecting to databases...',
      'Loading user credentials...',
      'Preparing dashboard...',
      'Finalizing setup...'
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLoadingText(texts[currentIndex]);
      setProgress((currentIndex + 1) * 20);
      currentIndex++;
      if (currentIndex >= texts.length) clearInterval(interval);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-sm mx-auto">
        <div className="relative">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse shadow-2xl">
            <Building className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-bounce" />
          </div>
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin">
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Addis Ababa Smart City
          </h1>
          <h2 className="text-lg sm:text-2xl font-semibold text-white/90">Environmental Management System</h2>
          <p className="text-blue-200 animate-pulse text-sm sm:text-lg">{loadingText}</p>
        </div>

        <div className="w-full max-w-xs mx-auto">
          <div className="bg-white/10 rounded-full h-3 shadow-inner backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/70 mt-3 text-sm sm:text-lg font-medium">{progress}% Complete</p>
        </div>
      </div>
    </div>
  );
};

const AuthScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      if ((username === 'admin' && password === 'admin') || 
          (username === 'kalkidan' && password === '1234') ||
          (username === 'daniel' && password === '1234')) {
        const userType = username === 'daniel' ? 'subcity' : 'city';
        const userInfo = {
          username,
          type: userType,
          name: username === 'kalkidan' ? 'Dr. Kalkidan Teshome' : 
                username === 'daniel' ? 'Eng. Daniel Mesfin' : 'System Administrator',
          role: username === 'kalkidan' ? 'Mayor of Addis Ababa' : 
                username === 'daniel' ? 'Mayor - Kolfe Keraniyo Subcity' : 'System Administrator',
          avatar: username === 'kalkidan' ? '👩‍💼' : username === 'daniel' ? '👨‍💼' : '👨‍💻',
          subcity: username === 'daniel' ? 'Kolfe Keraniyo' : null,
          department: 'Environmental Management Division'
        };
        onLogin(userInfo);
      } else {
        setError('Invalid credentials. Please check your username and password.');
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-lg border border-white/20">
        <div className="text-center mb-8 sm:mb-10">
          <div className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
            <Building className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2 sm:mb-3">
            Smart City Portal
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-slate-700 mb-2">Environmental Management System</h2>
          <p className="text-slate-600 text-sm sm:text-base">Addis Ababa City Administration</p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 transition-all text-slate-700 placeholder-slate-400"
            />
          </div>
          <div className="relative">
            <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 transition-all text-slate-700 placeholder-slate-400"
            />
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 sm:p-4 rounded-xl flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
          
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 shadow-lg transform hover:scale-105"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Authenticating...</span>
              </div>
            ) : (
              'Sign In to Dashboard'
            )}
          </button>
          
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 text-xs text-slate-600 space-y-3">
            <p className="font-semibold text-center text-slate-700 mb-3">Demo Access Credentials</p>
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <p className="font-medium text-slate-700 text-sm">🏛️ City Mayor</p>
                <p className="font-mono text-slate-600">kalkidan / 1234</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <p className="font-medium text-slate-700 text-sm">🏘️ Subcity Mayor</p>
                <p className="font-mono text-slate-600">daniel / 1234</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <p className="font-medium text-slate-700 text-sm">⚙️ System Admin</p>
                <p className="font-mono text-slate-600">admin / admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardHeader = ({ user, onLogout, currentView, setCurrentView }) => (
  <div className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg">
            <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Smart City Environmental Dashboard
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">Addis Ababa City Administration</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-3 bg-slate-50 rounded-2xl p-3">
            <div className="text-2xl">{user.avatar}</div>
            <div className="text-right">
              <p className="font-semibold text-slate-800 text-sm">{user.name}</p>
              <p className="text-xs text-slate-600">{user.role}</p>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-xl transition-all text-sm font-medium shadow-md"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
          { id: 'analytics', label: 'Analytics', icon: PieChart },
          { id: 'reports', label: 'Reports', icon: FileText },
          { id: 'maps', label: 'Maps', icon: Map },
          { id: 'gallery', label: 'Gallery', icon: Camera }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl transition-all text-sm font-medium ${
              currentView === item.id
                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const SubcityCard = ({ subcity, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'good': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'needs-attention': return 'bg-amber-100 text-amber-800 border-amber-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div 
      onClick={() => onClick(subcity)}
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 group hover:bg-white"
    >
      <div className="flex items-start justify-between mb-4 sm:mb-5">
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-slate-800 text-lg sm:text-xl group-hover:text-blue-600 transition-colors truncate">
            {subcity.name}
          </h3>
          <p className="text-sm text-slate-700 font-medium truncate">Mayor: {subcity.mayor}</p>
          <p className="text-xs text-slate-600">{subcity.population.toLocaleString()} residents • {subcity.area} km²</p>
        </div>
        <div className="flex-shrink-0 text-right ml-2">
          <div className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs font-bold border-2 ${getStatusColor(subcity.status)} mb-2`}>
            {subcity.status.replace('-', ' ').toUpperCase()}
          </div>
          <p className="text-xs text-slate-600 font-medium">Efficiency: {subcity.efficiency}%</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-700 font-medium">Overall Progress</span>
            <span className="font-bold text-emerald-600">{subcity.progress}%</span>
          </div>
          <div className="bg-slate-300 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full shadow-sm transition-all duration-500"
              style={{ width: `${subcity.progress}%` }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div className="bg-slate-50 rounded-lg p-2 sm:p-3">
            <p className="text-lg font-bold text-slate-800">{subcity.reports}</p>
            <p className="text-xs text-slate-600">Reports</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 sm:p-3">
            <p className="text-lg font-bold text-slate-800">{subcity.projects}</p>
            <p className="text-xs text-slate-600">Projects</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 sm:p-3">
            <p className="text-lg font-bold text-slate-800">{Math.round(subcity.budgetUsed / 1000000 * 10) / 10}M</p>
            <p className="text-xs text-slate-600">Budget Used</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-slate-200">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700 font-medium">View Details</span>
          </div>
          <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
            <ChevronRight className="w-4 h-4 text-blue-600 group-hover:text-blue-700 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricsCard = ({ icon: Icon, title, value, subtitle, trend, color = 'blue' }) => {
  // Define strong, high-contrast color schemes
  const colorSchemes = {
    emerald: {
      bg: 'bg-white',
      border: 'border-emerald-200',
      iconBg: 'bg-emerald-500',
      iconColor: 'text-white',
      titleColor: 'text-emerald-700',
      valueColor: 'text-emerald-600',
      subtitleColor: 'text-slate-600',
      trendBg: 'bg-emerald-50',
      trendColor: 'text-emerald-700'
    },
    blue: {
      bg: 'bg-white',
      border: 'border-blue-200',
      iconBg: 'bg-blue-500',
      iconColor: 'text-white',
      titleColor: 'text-blue-700',
      valueColor: 'text-blue-600',
      subtitleColor: 'text-slate-600',
      trendBg: 'bg-blue-50',
      trendColor: 'text-blue-700'
    },
    purple: {
      bg: 'bg-white',
      border: 'border-purple-200',
      iconBg: 'bg-purple-500',
      iconColor: 'text-white',
      titleColor: 'text-purple-700',
      valueColor: 'text-purple-600',
      subtitleColor: 'text-slate-600',
      trendBg: 'bg-purple-50',
      trendColor: 'text-purple-700'
    },
    amber: {
      bg: 'bg-white',
      border: 'border-amber-200',
      iconBg: 'bg-amber-500',
      iconColor: 'text-white',
      titleColor: 'text-amber-700',
      valueColor: 'text-amber-600',
      subtitleColor: 'text-slate-600',
      trendBg: 'bg-amber-50',
      trendColor: 'text-amber-700'
    }
  };

  const scheme = colorSchemes[color] || colorSchemes.blue;

  return (
    <div className={`${scheme.bg} rounded-2xl p-6 shadow-lg border-2 ${scheme.border} hover:shadow-xl transition-all duration-300 group hover:scale-105`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`${scheme.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
          <Icon className={`w-8 h-8 ${scheme.iconColor}`} />
        </div>
        {trend && (
          <div className={`${scheme.trendBg} px-3 py-1 rounded-lg flex items-center space-x-1`}>
            <TrendingUp className={`w-4 h-4 ${scheme.trendColor}`} />
            <span className={`text-sm font-bold ${scheme.trendColor}`}>+{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      
      <div>
        <p className={`${scheme.titleColor} text-sm font-bold mb-2 uppercase tracking-wide`}>{title}</p>
        <p className={`${scheme.valueColor} text-4xl font-bold mb-2`}>{value}</p>
        <p className={`${scheme.subtitleColor} text-sm font-medium`}>{subtitle}</p>
      </div>
    </div>
  );
};

const CityMayorDashboard = ({ user, onSelectSubcity }) => (
  <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 min-h-screen">
    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Addis Ababa Environmental Overview</h2>
            <p className="text-slate-300 text-sm sm:text-lg">Comprehensive city-wide environmental management dashboard</p>
          </div>
          <div className="hidden sm:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Building className="w-12 h-12 text-white mb-2" />
              <p className="text-xs text-slate-300">Smart City Portal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <MetricsCard 
          icon={TreePine} 
          title="Total Trees Planted" 
          value="24,850" 
          subtitle="↗ +12% this month" 
          trend={12}
          color="emerald"
        />
        <MetricsCard 
          icon={MapPin} 
          title="Parks Created" 
          value="127" 
          subtitle="↗ +8% this month" 
          trend={8}
          color="blue"
        />
        <MetricsCard 
          icon={Target} 
          title="Active Projects" 
          value="283" 
          subtitle="Across all subcities" 
          color="purple"
        />
        <MetricsCard 
          icon={Award} 
          title="Budget Utilization" 
          value="67%" 
          subtitle="22.4M ETB of 33.5M" 
          color="amber"
        />
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Subcity Administration</h3>
            <p className="text-slate-600 text-sm sm:text-base">Monitor and manage environmental initiatives across all subcities</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search subcities..."
                className="w-full sm:w-auto pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-sm"
              />
            </div>
            <button className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm border border-slate-300 rounded-xl hover:bg-white transition-colors shadow-sm">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {subcities.map(subcity => (
            <SubcityCard
              key={subcity.id}
              subcity={subcity}
              onClick={onSelectSubcity}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SubcityMayorDashboard = ({ user }) => {
  const mySubcity = subcities.find(s => s.name === user.subcity);
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{user.subcity}</h2>
              <p className="text-blue-100 text-sm sm:text-lg">Population: {mySubcity?.population.toLocaleString()} • Area: {mySubcity?.area} km²</p>
            </div>
            <div className="text-center sm:text-right">
              <div className="bg-white/20 px-3 sm:px-4 py-2 rounded-xl inline-block">
                <p className="text-xl sm:text-2xl font-bold">{mySubcity?.progress}%</p>
                <p className="text-blue-100 text-xs sm:text-sm">Overall Progress</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold">{mySubcity?.reports}</p>
              <p className="text-blue-100 text-xs sm:text-sm">Reports Submitted</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold">{mySubcity?.projects}</p>
              <p className="text-blue-100 text-xs sm:text-sm">Active Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold">{Math.round(mySubcity?.budgetUsed / 1000000 * 10) / 10}M</p>
              <p className="text-blue-100 text-xs sm:text-sm">Budget Used (ETB)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold">#{subcities.findIndex(s => s.id === mySubcity?.id) + 1}</p>
              <p className="text-blue-100 text-xs sm:text-sm">City Ranking</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Current Month Progress</h3>
          <div className="space-y-3 sm:space-y-4">
            {reportCategories.map(category => {
              const progress = Math.floor(Math.random() * 30) + 70;
              return (
                <div key={category.id} className="flex items-center justify-between p-4 sm:p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 ${category.color} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                      {category.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-lg truncate">{category.name}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 truncate">{category.description}</p>
                      <p className="text-xs text-slate-500 mt-1">June 2025 Report</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <p className="text-lg sm:text-2xl font-bold text-slate-800">{progress}%</p>
                    <div className="w-16 sm:w-24 bg-slate-200 rounded-full h-2 sm:h-3 mt-1 sm:mt-2">
                      <div 
                        className={`h-2 sm:h-3 rounded-full ${category.color} transition-all duration-500`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Complete</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedSubcity, setSelectedSubcity] = useState('Kolfe Keraniyo');
  const [activeView, setActiveView] = useState('overview'); // 'overview', 'plants', 'temporal', 'projections'

  // Subcity-specific plant species data 
  const subcityPlantData = {
    'Kolfe Keraniyo': {
      plantSpecies: [
        { name: 'ሰደር (Seder)', scientificName: 'Juniperus procera', type: 'Indigenous', unitCost: 1500, plantedCount: 850, survivalRate: 94, icon: '🌲', category: 'forest' },
        { name: 'ባህር ዛፍ (Eucalyptus)', scientificName: 'Eucalyptus globulus', type: 'Fast Growing', unitCost: 800, plantedCount: 1200, survivalRate: 96, icon: '🌳', category: 'utility' },
        { name: 'አካሽያ (Acacia)', scientificName: 'Acacia melanoxylon', type: 'Nitrogen Fixing', unitCost: 950, plantedCount: 680, survivalRate: 93, icon: '🌿', category: 'soil' },
        { name: 'ጃካራንዳ (Jacaranda)', scientificName: 'Jacaranda mimosifolia', type: 'Ornamental', unitCost: 2200, plantedCount: 320, survivalRate: 91, icon: '🌸', category: 'ornamental' }
      ],
      yearlyData: {
        '2023': { treesPlanted: 2800, investment: 3200000, areasCompleted: 12, survivalRate: 89 },
        '2024': { treesPlanted: 2950, investment: 3450000, areasCompleted: 15, survivalRate: 92 },
        '2025': { treesPlanted: 3050, investment: 3650000, areasCompleted: 18, survivalRate: 94 }
      },
      matureAreas: [
        { name: 'Kolfe Industrial Zone Green Belt', maturityLevel: 88, nextAction: 'Selective planting', savings: 850000 },
        { name: 'Kolfe Community Forest', maturityLevel: 92, nextAction: 'Maintenance only', savings: 1200000 }
      ],
      projections: {
        '2026': { target: 3200, expected: 3150, confidence: 91 },
        '2027': { target: 3400, expected: 3300, confidence: 89 },
        '2028': { target: 3600, expected: 3480, confidence: 87 },
        '2029': { target: 3800, expected: 3650, confidence: 85 },
        '2030': { target: 4000, expected: 3820, confidence: 83 }
      }
    },
    'Yeka': {
      plantSpecies: [
        { name: 'ዘይቶን (Olive)', scientificName: 'Olea europaea', type: 'Fruit Tree', unitCost: 1200, plantedCount: 750, survivalRate: 89, icon: '🫒', category: 'fruit' },
        { name: 'ማንጎ (Mango)', scientificName: 'Mangifera indica', type: 'Fruit Tree', unitCost: 1800, plantedCount: 480, survivalRate: 87, icon: '🥭', category: 'fruit' },
        { name: 'ሰደር (Seder)', scientificName: 'Juniperus procera', type: 'Indigenous', unitCost: 1500, plantedCount: 920, survivalRate: 95, icon: '🌲', category: 'forest' },
        { name: 'ጃካራንዳ (Jacaranda)', scientificName: 'Jacaranda mimosifolia', type: 'Ornamental', unitCost: 2200, plantedCount: 650, survivalRate: 90, icon: '🌸', category: 'ornamental' }
      ],
      yearlyData: {
        '2023': { treesPlanted: 2650, investment: 4100000, areasCompleted: 14, survivalRate: 87 },
        '2024': { treesPlanted: 2750, investment: 4350000, areasCompleted: 16, survivalRate: 89 },
        '2025': { treesPlanted: 2800, investment: 4580000, areasCompleted: 19, survivalRate: 90 }
      },
      matureAreas: [
        { name: 'Friendship Park Extension', maturityLevel: 85, nextAction: 'Gap filling only', savings: 950000 },
        { name: 'Yeka Forest Reserve', maturityLevel: 90, nextAction: 'Species diversification', savings: 1350000 }
      ],
      projections: {
        '2026': { target: 3000, expected: 2950, confidence: 89 },
        '2027': { target: 3200, expected: 3100, confidence: 87 },
        '2028': { target: 3400, expected: 3250, confidence: 85 },
        '2029': { target: 3600, expected: 3400, confidence: 82 },
        '2030': { target: 3800, expected: 3550, confidence: 80 }
      }
    },
    'Bole': {
      plantSpecies: [
        { name: 'ጃካራንዳ (Jacaranda)', scientificName: 'Jacaranda mimosifolia', type: 'Ornamental', unitCost: 2200, plantedCount: 1250, survivalRate: 92, icon: '🌸', category: 'ornamental' },
        { name: 'ሰደር (Seder)', scientificName: 'Juniperus procera', type: 'Indigenous', unitCost: 1500, plantedCount: 890, survivalRate: 94, icon: '🌲', category: 'forest' },
        { name: 'ባህር ዛፍ (Eucalyptus)', scientificName: 'Eucalyptus globulus', type: 'Fast Growing', unitCost: 800, plantedCount: 1450, survivalRate: 97, icon: '🌳', category: 'utility' },
        { name: 'ነብር (Fig)', scientificName: 'Ficus sycomorus', type: 'Indigenous', unitCost: 1400, plantedCount: 420, survivalRate: 93, icon: '🌳', category: 'cultural' }
      ],
      yearlyData: {
        '2023': { treesPlanted: 3800, investment: 5200000, areasCompleted: 16, survivalRate: 91 },
        '2024': { treesPlanted: 3950, investment: 5650000, areasCompleted: 18, survivalRate: 93 },
        '2025': { treesPlanted: 4010, investment: 5850000, areasCompleted: 21, survivalRate: 94 }
      },
      matureAreas: [
        { name: 'Bole Airport Green Corridor', maturityLevel: 94, nextAction: 'Maintenance focus', savings: 1850000 },
        { name: 'Sheger Park Extension', maturityLevel: 92, nextAction: 'Species diversification', savings: 2200000 },
        { name: 'Bole Business District Trees', maturityLevel: 87, nextAction: 'Selective replacement', savings: 1650000 }
      ],
      projections: {
        '2026': { target: 4300, expected: 4200, confidence: 92 },
        '2027': { target: 4600, expected: 4450, confidence: 90 },
        '2028': { target: 4900, expected: 4700, confidence: 88 },
        '2029': { target: 5200, expected: 4950, confidence: 86 },
        '2030': { target: 5500, expected: 5200, confidence: 84 }
      }
    },
    'Lideta': {
      plantSpecies: [
        { name: 'አካሽያ (Acacia)', scientificName: 'Acacia melanoxylon', type: 'Nitrogen Fixing', unitCost: 950, plantedCount: 780, survivalRate: 95, icon: '🌿', category: 'soil' },
        { name: 'ባህር ዛፍ (Eucalyptus)', scientificName: 'Eucalyptus globulus', type: 'Fast Growing', unitCost: 800, plantedCount: 1100, survivalRate: 96, icon: '🌳', category: 'utility' },
        { name: 'ሰደር (Seder)', scientificName: 'Juniperus procera', type: 'Indigenous', unitCost: 1500, plantedCount: 650, survivalRate: 93, icon: '🌲', category: 'forest' },
        { name: 'ዘይቶን (Olive)', scientificName: 'Olea europaea', type: 'Fruit Tree', unitCost: 1200, plantedCount: 480, survivalRate: 88, icon: '🫒', category: 'fruit' }
      ],
      yearlyData: {
        '2023': { treesPlanted: 2850, investment: 3100000, areasCompleted: 11, survivalRate: 90 },
        '2024': { treesPlanted: 2950, investment: 3350000, areasCompleted: 13, survivalRate: 92 },
        '2025': { treesPlanted: 3010, investment: 3500000, areasCompleted: 15, survivalRate: 93 }
      },
      matureAreas: [
        { name: 'Lideta Market Area Trees', maturityLevel: 86, nextAction: 'Gap filling', savings: 750000 },
        { name: 'Red Terror Memorial Trees', maturityLevel: 91, nextAction: 'Maintenance only', savings: 1100000 }
      ],
      projections: {
        '2026': { target: 3200, expected: 3100, confidence: 90 },
        '2027': { target: 3400, expected: 3250, confidence: 88 },
        '2028': { target: 3600, expected: 3400, confidence: 86 },
        '2029': { target: 3800, expected: 3550, confidence: 84 },
        '2030': { target: 4000, expected: 3700, confidence: 82 }
      }
    },
    'Arada': {
      plantSpecies: [
        { name: 'ጃካራንዳ (Jacaranda)', scientificName: 'Jacaranda mimosifolia', type: 'Ornamental', unitCost: 2200, plantedCount: 950, survivalRate: 91, icon: '🌸', category: 'ornamental' },
        { name: 'ነብር (Fig)', scientificName: 'Ficus sycomorus', type: 'Indigenous', unitCost: 1400, plantedCount: 680, survivalRate: 94, icon: '🌳', category: 'cultural' },
        { name: 'ሰደር (Seder)', scientificName: 'Juniperus procera', type: 'Indigenous', unitCost: 1500, plantedCount: 720, survivalRate: 92, icon: '🌲', category: 'forest' },
        { name: 'ማንጎ (Mango)', scientificName: 'Mangifera indica', type: 'Fruit Tree', unitCost: 1800, plantedCount: 380, survivalRate: 86, icon: '🥭', category: 'fruit' }
      ],
      yearlyData: {
        '2023': { treesPlanted: 2600, investment: 4200000, areasCompleted: 13, survivalRate: 88 },
        '2024': { treesPlanted: 2700, investment: 4450000, areasCompleted: 15, survivalRate: 90 },
        '2025': { treesPlanted: 2730, investment: 4600000, areasCompleted: 17, survivalRate: 91 }
      },
      matureAreas: [
        { name: 'Unity Park Surroundings', maturityLevel: 95, nextAction: 'Maintenance only', savings: 2500000 },
        { name: 'Piazza Historic Trees', maturityLevel: 89, nextAction: 'Heritage preservation', savings: 1400000 }
      ],
      projections: {
        '2026': { target: 2950, expected: 2850, confidence: 89 },
        '2027': { target: 3150, expected: 3000, confidence: 87 },
        '2028': { target: 3350, expected: 3150, confidence: 85 },
        '2029': { target: 3550, expected: 3300, confidence: 83 },
        '2030': { target: 3750, expected: 3450, confidence: 81 }
      }
    }
  };

  // Add similar data for other subcities
  const addOtherSubcitiesData = () => {
    const otherSubcities = ['Nifassilk Lafto', 'Lemi Kura', 'Gulele', 'Addis Ketema', 'Kirkos', 'Akaki Kality'];
    
    otherSubcities.forEach(subcity => {
      if (!subcityPlantData[subcity]) {
        subcityPlantData[subcity] = {
          plantSpecies: [
            { name: 'ሰደር (Seder)', scientificName: 'Juniperus procera', type: 'Indigenous', unitCost: 1500, plantedCount: Math.floor(Math.random() * 800) + 400, survivalRate: Math.floor(Math.random() * 10) + 88, icon: '🌲', category: 'forest' },
            { name: 'ባህር ዛፍ (Eucalyptus)', scientificName: 'Eucalyptus globulus', type: 'Fast Growing', unitCost: 800, plantedCount: Math.floor(Math.random() * 1000) + 600, survivalRate: Math.floor(Math.random() * 8) + 90, icon: '🌳', category: 'utility' },
            { name: 'አካሽያ (Acacia)', scientificName: 'Acacia melanoxylon', type: 'Nitrogen Fixing', unitCost: 950, plantedCount: Math.floor(Math.random() * 600) + 300, survivalRate: Math.floor(Math.random() * 12) + 85, icon: '🌿', category: 'soil' },
            { name: 'ጃካራንዳ (Jacaranda)', scientificName: 'Jacaranda mimosifolia', type: 'Ornamental', unitCost: 2200, plantedCount: Math.floor(Math.random() * 400) + 200, survivalRate: Math.floor(Math.random() * 15) + 82, icon: '🌸', category: 'ornamental' }
          ],
          yearlyData: {
            '2023': { treesPlanted: Math.floor(Math.random() * 1000) + 2000, investment: Math.floor(Math.random() * 2000000) + 3000000, areasCompleted: Math.floor(Math.random() * 8) + 8, survivalRate: Math.floor(Math.random() * 12) + 85 },
            '2024': { treesPlanted: Math.floor(Math.random() * 1000) + 2200, investment: Math.floor(Math.random() * 2000000) + 3500000, areasCompleted: Math.floor(Math.random() * 8) + 10, survivalRate: Math.floor(Math.random() * 12) + 87 },
            '2025': { treesPlanted: Math.floor(Math.random() * 1000) + 2400, investment: Math.floor(Math.random() * 2000000) + 4000000, areasCompleted: Math.floor(Math.random() * 8) + 12, survivalRate: Math.floor(Math.random() * 12) + 89 }
          },
          matureAreas: [
            { name: `${subcity} Main Boulevard`, maturityLevel: Math.floor(Math.random() * 15) + 80, nextAction: 'Maintenance focus', savings: Math.floor(Math.random() * 1000000) + 800000 },
            { name: `${subcity} Community Park`, maturityLevel: Math.floor(Math.random() * 20) + 75, nextAction: 'Selective planting', savings: Math.floor(Math.random() * 800000) + 600000 }
          ],
          projections: {
            '2026': { target: Math.floor(Math.random() * 800) + 2800, expected: Math.floor(Math.random() * 700) + 2700, confidence: Math.floor(Math.random() * 15) + 80 },
            '2027': { target: Math.floor(Math.random() * 800) + 3000, expected: Math.floor(Math.random() * 700) + 2900, confidence: Math.floor(Math.random() * 15) + 78 },
            '2028': { target: Math.floor(Math.random() * 800) + 3200, expected: Math.floor(Math.random() * 700) + 3100, confidence: Math.floor(Math.random() * 15) + 76 },
            '2029': { target: Math.floor(Math.random() * 800) + 3400, expected: Math.floor(Math.random() * 700) + 3300, confidence: Math.floor(Math.random() * 15) + 74 },
            '2030': { target: Math.floor(Math.random() * 800) + 3600, expected: Math.floor(Math.random() * 700) + 3500, confidence: Math.floor(Math.random() * 15) + 72 }
          }
        };
      }
    });
  };

  addOtherSubcitiesData();

  // Get current subcity data
  const getCurrentSubcityData = () => {
    return subcityPlantData[selectedSubcity] || subcityPlantData['Kolfe Keraniyo'];
  };

  const currentData = getCurrentSubcityData();
  // Plant species data based on Ethiopian vegetation (inspired by the document)
  const plantSpecies = [
    {
      id: 1,
      name: 'ሰደር (Seder)',
      scientificName: 'Juniperus procera',
      type: 'Indigenous Tree',
      unitCost: 1500,
      plantedCount: 4250,
      survivalRate: 94,
      maturityPeriod: '8-12 years',
      benefits: ['Soil conservation', 'Timber', 'Traditional medicine'],
      icon: '🌲',
      category: 'forest'
    },
    {
      id: 2,
      name: 'ዘይቶን (Zeitoun)', 
      scientificName: 'Olea europaea',
      type: 'Fruit Tree',
      unitCost: 1200,
      plantedCount: 2800,
      survivalRate: 89,
      maturityPeriod: '4-6 years',
      benefits: ['Fruit production', 'Oil extraction', 'Erosion control'],
      icon: '🫒',
      category: 'fruit'
    },
    {
      id: 3,
      name: 'ባህር ዛፍ (Bahir Zaf)',
      scientificName: 'Eucalyptus globulus',
      type: 'Fast Growing',
      unitCost: 800,
      plantedCount: 8900,
      survivalRate: 96,
      maturityPeriod: '3-5 years',
      benefits: ['Quick growth', 'Windbreak', 'Construction material'],
      icon: '🌳',
      category: 'utility'
    },
    {
      id: 4,
      name: 'ጃካራንዳ (Jakaranda)',
      scientificName: 'Jacaranda mimosifolia',
      type: 'Ornamental',
      unitCost: 2200,
      plantedCount: 1850,
      survivalRate: 91,
      maturityPeriod: '5-8 years',
      benefits: ['Aesthetic value', 'Shade', 'Urban beautification'],
      icon: '🌸',
      category: 'ornamental'
    },
    {
      id: 5,
      name: 'አካሽያ (Akashiya)',
      scientificName: 'Acacia melanoxylon',
      type: 'Nitrogen Fixing',
      unitCost: 950,
      plantedCount: 3400,
      survivalRate: 93,
      maturityPeriod: '3-4 years',
      benefits: ['Soil enrichment', 'Fodder', 'Honey production'],
      icon: '🌿',
      category: 'soil'
    },
    {
      id: 6,
      name: 'ማንጎ (Mango)',
      scientificName: 'Mangifera indica',
      type: 'Fruit Tree',
      unitCost: 1800,
      plantedCount: 2100,
      survivalRate: 87,
      maturityPeriod: '5-7 years',
      benefits: ['Fruit production', 'Shade', 'Income generation'],
      icon: '🥭',
      category: 'fruit'
    },
    {
      id: 7,
      name: 'ነብር (Nebri)',
      scientificName: 'Ficus sycomorus',
      type: 'Indigenous Tree',
      unitCost: 1400,
      plantedCount: 1600,
      survivalRate: 92,
      maturityPeriod: '6-10 years',
      benefits: ['Cultural significance', 'Large shade', 'Wildlife habitat'],
      icon: '🌳',
      category: 'cultural'
    }
  ];

  // Yearly development data per subcity
  const yearlyData = {
    '2023': {
      totalTrees: 18500,
      totalCost: 28750000,
      completedAreas: 145,
      developedAreas: ['Megenagna', 'Piassa', 'Mexico'],
      avgSurvivalRate: 89
    },
    '2024': {
      totalTrees: 22300,
      totalCost: 34820000,
      completedAreas: 198,
      developedAreas: ['Bole Airport', 'CMC', 'Kazanchis', 'Gerji'],
      avgSurvivalRate: 91
    },
    '2025': {
      totalTrees: 24850,
      totalCost: 39575000,
      completedAreas: 267,
      developedAreas: ['Tulu Dimtu', 'Sarbet', '22 Mazoria', 'Entoto'],
      avgSurvivalRate: 93
    }
  };

  // Generate subcity-specific yearly data
  const getSubcityYearlyData = (subcityName, year) => {
    const baseData = yearlyData[year];
    const multiplier = subcities.find(s => s.name === subcityName)?.efficiency / 100 || 0.8;
    
    return {
      treesPlanted: Math.round((baseData.totalTrees / subcities.length) * multiplier),
      investment: Math.round((baseData.totalCost / subcities.length) * multiplier),
      areasCompleted: Math.round((baseData.completedAreas / subcities.length) * multiplier),
      survivalRate: Math.round(baseData.avgSurvivalRate * multiplier)
    };
  };

  // Areas that have reached maturity and need minimal new trees
  const matureAreas = [
    { name: 'Unity Park', subcity: 'Arada', maturityLevel: 95, nextAction: 'Maintenance only', savings: 2500000 },
    { name: 'Entoto Natural Park', subcity: 'Gulele', maturityLevel: 88, nextAction: 'Selective planting', savings: 1800000 },
    { name: 'Sheger Park', subcity: 'Bole', maturityLevel: 92, nextAction: 'Species diversification', savings: 2200000 },
    { name: 'Friendship Park', subcity: 'Yeka', maturityLevel: 85, nextAction: 'Gap filling only', savings: 1500000 },
    { name: 'Meskel Square Green Belt', subcity: 'Kirkos', maturityLevel: 90, nextAction: 'Maintenance focus', savings: 1900000 }
  ];

  // Projections and targets
  const projections = {
    '2026': { target: 28000, expected: 26500, confidence: 89 },
    '2027': { target: 32000, expected: 30800, confidence: 85 },
    '2028': { target: 35000, expected: 34200, confidence: 82 },
    '2029': { target: 38000, expected: 37100, confidence: 78 },
    '2030': { target: 42000, expected: 40500, confidence: 75 }
  };

  const getTotalPlantCost = () => {
    return currentData.plantSpecies.reduce((total, plant) => total + (plant.unitCost * plant.plantedCount), 0);
  };

  const getTotalTreesPlanted = () => {
    return currentData.plantSpecies.reduce((total, plant) => total + plant.plantedCount, 0);
  };

  const getAverageSurvivalRate = () => {
    return Math.round(currentData.plantSpecies.reduce((total, plant) => total + plant.survivalRate, 0) / currentData.plantSpecies.length);
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 min-h-screen">
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Advanced Environmental Analytics</h2>
              <p className="text-emerald-100 text-sm sm:text-lg">Comprehensive analysis of tree planting initiatives across Addis Ababa</p>
            </div>
            <div className="hidden sm:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <BarChart3 className="w-10 h-10 text-white mb-2" />
                <p className="text-xs text-emerald-200">Data Analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: PieChart },
                { id: 'plants', label: 'Plant Species', icon: TreePine },
                { id: 'temporal', label: 'Yearly Analysis', icon: Calendar },
                { id: 'projections', label: 'Projections', icon: TrendingUp }
              ].map(view => (
              <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                    activeView === view.id 
                      ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <view.icon className="w-4 h-4" />
                  <span>{view.label}</span>
              </button>
            ))}
              </div>
              
              <div className="flex items-center space-x-3">
                <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500"
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                </select>

              <select
                value={selectedSubcity}
                onChange={(e) => setSelectedSubcity(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Subcities</option>
                {subcities.map(subcity => (
                  <option key={subcity.id} value={subcity.name}>{subcity.name}</option>
                ))}
              </select>
                </div>
              </div>
            </div>

        {/* Overview Section */}
        {activeView === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200">
                          <div className="text-center">
                  <TreePine className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-emerald-600">{getTotalTreesPlanted().toLocaleString()}</p>
                  <p className="text-slate-600 font-medium">Total Trees Planted</p>
                  <p className="text-xs text-slate-500 mt-1">{selectedYear} Data</p>
                          </div>
                        </div>
                        
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
                <div className="text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-blue-600">{(getTotalPlantCost() / 1000000).toFixed(1)}M</p>
                  <p className="text-slate-600 font-medium">Total Investment</p>
                  <p className="text-xs text-slate-500 mt-1">ETB Currency</p>
          </div>
        </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200">
                  <div className="text-center">
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-purple-600">{getAverageSurvivalRate()}%</p>
                  <p className="text-slate-600 font-medium">Avg Survival Rate</p>
                  <p className="text-xs text-slate-500 mt-1">Across all species</p>
                  </div>
                  </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
            <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-orange-600">{matureAreas.length}</p>
                  <p className="text-slate-600 font-medium">Mature Areas</p>
                  <p className="text-xs text-slate-500 mt-1">Reduced planting needed</p>
            </div>
          </div>
        </div>

            {/* Mature Areas - Money Saving Opportunities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <Zap className="w-6 h-6 text-green-600 mr-2" />
                Mature Areas - Reduced Investment Needed
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {matureAreas.map((area, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800">{area.name}</h4>
                        <span className="text-sm font-medium text-green-600">{area.maturityLevel}% Mature</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>📍 {area.subcity}</span>
                        <span>💰 {(area.savings / 1000000).toFixed(1)}M ETB Saved</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Next Action: {area.nextAction}</p>
                      <div className="mt-2 bg-green-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${area.maturityLevel}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">Total Savings Impact</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-green-600">
                        {(matureAreas.reduce((sum, area) => sum + area.savings, 0) / 1000000).toFixed(1)}M
                      </p>
                      <p className="text-slate-600 font-medium">ETB Annual Savings</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Areas at 85%+ maturity:</span>
                        <span className="font-medium">{matureAreas.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maintenance-only areas:</span>
                        <span className="font-medium">{matureAreas.filter(a => a.nextAction.includes('Maintenance')).length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Budget reallocation potential:</span>
                        <span className="font-medium text-green-600">High</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/60 rounded-lg p-3 mt-4">
                      <p className="text-xs text-slate-600">
                        💡 <strong>Recommendation:</strong> Redirect saved funds to new development areas and species diversification programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plant Species Analysis */}
        {activeView === 'plants' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Plant Species Analysis - {selectedYear}</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                {plantSpecies.map(plant => (
                  <div key={plant.id} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{plant.icon}</div>
                      <h4 className="font-bold text-slate-800 text-lg">{plant.name}</h4>
                      <p className="text-xs text-slate-500 italic">{plant.scientificName}</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {plant.type}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Unit Cost:</span>
                        <span className="font-bold text-green-600">{plant.unitCost.toLocaleString()} ETB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Planted:</span>
                        <span className="font-bold">{plant.plantedCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Total Cost:</span>
                        <span className="font-bold text-blue-600">{((plant.unitCost * plant.plantedCount) / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Survival Rate:</span>
                        <span className={`font-bold ${plant.survivalRate > 90 ? 'text-green-600' : plant.survivalRate > 85 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {plant.survivalRate}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Maturity:</span>
                        <span className="font-medium">{plant.maturityPeriod}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-xs text-slate-600 font-medium mb-2">Key Benefits:</p>
                      <div className="space-y-1">
                        {plant.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Survival Rate Visual */}
                    <div className="mt-4">
                      <div className="bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            plant.survivalRate > 90 ? 'bg-green-500' : 
                            plant.survivalRate > 85 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${plant.survivalRate}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Analysis Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Cost Distribution by Species</h4>
                <div className="space-y-3">
                  {plantSpecies
                    .sort((a, b) => (b.unitCost * b.plantedCount) - (a.unitCost * a.plantedCount))
                    .map(plant => {
                      const totalCost = plant.unitCost * plant.plantedCount;
                      const percentage = (totalCost / getTotalPlantCost()) * 100;
                      return (
                        <div key={plant.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{plant.icon}</span>
                            <span className="text-sm font-medium text-slate-700">{plant.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-slate-800">{(totalCost / 1000000).toFixed(1)}M ETB</div>
                            <div className="text-xs text-slate-500">{percentage.toFixed(1)}%</div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Performance Metrics</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-700 font-medium">Best Performing Species</span>
                      <span className="text-lg">{plantSpecies.sort((a, b) => b.survivalRate - a.survivalRate)[0].icon}</span>
                    </div>
                    <p className="text-lg font-bold text-green-600">{plantSpecies.sort((a, b) => b.survivalRate - a.survivalRate)[0].name}</p>
                    <p className="text-sm text-green-600">{plantSpecies.sort((a, b) => b.survivalRate - a.survivalRate)[0].survivalRate}% survival rate</p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-blue-700 font-medium">Most Cost Effective</span>
                      <span className="text-lg">{plantSpecies.sort((a, b) => a.unitCost - b.unitCost)[0].icon}</span>
                    </div>
                    <p className="text-lg font-bold text-blue-600">{plantSpecies.sort((a, b) => a.unitCost - b.unitCost)[0].name}</p>
                    <p className="text-sm text-blue-600">{plantSpecies.sort((a, b) => a.unitCost - b.unitCost)[0].unitCost.toLocaleString()} ETB per tree</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-700 font-medium">Most Planted</span>
                      <span className="text-lg">{plantSpecies.sort((a, b) => b.plantedCount - a.plantedCount)[0].icon}</span>
                    </div>
                    <p className="text-lg font-bold text-purple-600">{plantSpecies.sort((a, b) => b.plantedCount - a.plantedCount)[0].name}</p>
                    <p className="text-sm text-purple-600">{plantSpecies.sort((a, b) => b.plantedCount - a.plantedCount)[0].plantedCount.toLocaleString()} trees planted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Temporal Analysis */}
        {activeView === 'temporal' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Yearly Development Progress</h3>
              
              {/* Overall Progress */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {Object.entries(yearlyData).map(([year, data]) => (
                  <div key={year} className={`p-6 rounded-xl border-2 ${selectedYear === year ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`}>
                    <h4 className="text-2xl font-bold text-slate-800 mb-4">{year}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Trees Planted:</span>
                        <span className="font-bold text-emerald-600">{data.totalTrees.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Investment:</span>
                        <span className="font-bold text-blue-600">{(data.totalCost / 1000000).toFixed(1)}M ETB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Areas Completed:</span>
                        <span className="font-bold text-purple-600">{data.completedAreas}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Avg Survival:</span>
                        <span className="font-bold text-orange-600">{data.avgSurvivalRate}%</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm font-medium text-slate-700 mb-2">Key Development Areas:</p>
                      <div className="space-y-1">
                        {data.developedAreas.map((area, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subcity Breakdown */}
              {selectedSubcity !== 'all' && (
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">{selectedSubcity} - Detailed Analysis</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {Object.keys(yearlyData).map(year => {
                      const data = getSubcityYearlyData(selectedSubcity, year);
                      return (
                        <div key={year} className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold text-slate-700 mb-3">{year}</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Trees:</span>
                              <span className="font-medium">{data.treesPlanted.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Investment:</span>
                              <span className="font-medium">{(data.investment / 1000000).toFixed(1)}M ETB</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Areas:</span>
                              <span className="font-medium">{data.areasCompleted}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Survival:</span>
                              <span className="font-medium">{data.survivalRate}%</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projections */}
        {activeView === 'projections' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Future Projections & Targets (2026-2030)</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Projections Chart */}
                <div>
                  <h4 className="text-lg font-bold text-slate-700 mb-4">Expected vs Target Trees</h4>
                  <div className="space-y-4">
                    {Object.entries(projections).map(([year, data]) => (
                      <div key={year} className="p-4 bg-slate-50 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-slate-800">{year}</span>
                          <span className="text-sm font-medium text-slate-600">Confidence: {data.confidence}%</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Target:</span>
                            <span className="font-bold text-blue-600">{data.target.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Expected:</span>
                            <span className="font-bold text-emerald-600">{data.expected.toLocaleString()}</span>
                          </div>
                          
                          {/* Progress bars */}
                          <div className="space-y-1 mt-3">
                            <div className="bg-blue-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: '100%' }}
                              />
                            </div>
                            <div className="bg-emerald-200 rounded-full h-2">
                              <div 
                                className="bg-emerald-500 h-2 rounded-full"
                                style={{ width: `${(data.expected / data.target) * 100}%` }}
                              />
                            </div>
                          </div>
                          
                          <div className="text-xs text-slate-500 mt-2">
                            Gap: {(data.target - data.expected).toLocaleString()} trees ({((data.target - data.expected) / data.target * 100).toFixed(1)}%)
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Recommendations */}
                <div>
                  <h4 className="text-lg font-bold text-slate-700 mb-4">Strategic Recommendations</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <h5 className="font-bold text-green-800 mb-2">🎯 Priority Actions</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Focus on fast-growing, high-survival species</li>
                        <li>• Increase investment in soil preparation</li>
                        <li>• Implement community engagement programs</li>
                        <li>• Develop specialized maintenance teams</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <h5 className="font-bold text-blue-800 mb-2">💰 Budget Optimization</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Redirect funds from mature areas</li>
                        <li>• Bulk purchasing for better rates</li>
                        <li>• Partner with international organizations</li>
                        <li>• Implement performance-based incentives</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                      <h5 className="font-bold text-purple-800 mb-2">🔬 Innovation Opportunities</h5>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Use AI for optimal planting locations</li>
                        <li>• Implement IoT monitoring systems</li>
                        <li>• Develop drought-resistant varieties</li>
                        <li>• Create mobile monitoring apps</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                      <h5 className="font-bold text-orange-800 mb-2">⚠️ Risk Mitigation</h5>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Climate change adaptation strategies</li>
                        <li>• Disease outbreak prevention plans</li>
                        <li>• Water scarcity contingency measures</li>
                        <li>• Political stability considerations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Powered Insights */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-2" />
                AI-Powered Insights
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold mb-2">🤖 Predictive Analysis</h4>
                  <p className="text-sm text-purple-100">
                    Based on current trends, Bole and Yeka subcities are likely to exceed their 2026 targets by 15% if current efficiency is maintained.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold mb-2">📊 Data Correlation</h4>
                  <p className="text-sm text-purple-100">
                    Higher survival rates correlate with pre-planting soil analysis and community involvement programs (+23% success rate).
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold mb-2">🎯 Optimization Suggestion</h4>
                  <p className="text-sm text-purple-100">
                    Redirecting 30% of budget from mature areas to new developments could increase overall tree count by 8,500 annually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedSubcity, setSelectedSubcity] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('2025-06');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Generate available months (last 6 months)
  const getAvailableMonths = () => {
    const months = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const monthStr = date.toISOString().slice(0, 7); // YYYY-MM format
      const monthName = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
      months.push({ value: monthStr, label: monthName });
    }
    return months;
  };

  // Simulate photo structure based on public/assets/{subcity}/{month}/ organization
  const getPhotosForSubcityMonth = (subcityName, month) => {
    if (!subcityName || !month) return [];
    
    // Simulate different number of photos per subcity/month
    const photoCount = Math.floor(Math.random() * 8) + 4; // 4-12 photos
    const photos = [];
    
    for (let i = 1; i <= photoCount; i++) {
      // Create realistic photo metadata
      const categories = ['tree-planting', 'park-development', 'roadside-greening', 'community-garden'];
      const category = categories[Math.floor(Math.random() * categories.length)];
      
      photos.push({
        id: `${subcityName}-${month}-${i}`,
        filename: `photo_${i}.jpg`,
        path: `/assets/${subcityName}/${month}/photo_${i}.jpg`,
        title: `${category.replace('-', ' ')} Project ${i}`,
        category: category,
        date: `${month}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        description: `Environmental project documentation in ${subcityName}`,
        photographer: 'Environmental Team',
        size: `${(Math.random() * 2 + 1).toFixed(1)}MB`,
        tags: ['environmental', 'trees', subcityName.toLowerCase().replace(' ', '-')],
        likes: Math.floor(Math.random() * 50) + 10,
        downloads: Math.floor(Math.random() * 20) + 5
      });
    }
    
    return photos;
  };

  const availableMonths = getAvailableMonths();
  const photos = selectedSubcity ? getPhotosForSubcityMonth(selectedSubcity.name, selectedMonth) : [];

  const getCategoryColor = (category) => {
    const colors = {
      'tree-planting': 'bg-green-100 text-green-800',
      'park-development': 'bg-blue-100 text-blue-800',
      'roadside-greening': 'bg-yellow-100 text-yellow-800',
      'community-garden': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-slate-100 text-slate-800';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'tree-planting': '🌳',
      'park-development': '🏞️',
      'roadside-greening': '🛣️',
      'community-garden': '🌸'
    };
    return icons[category] || '📷';
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Environmental Project Gallery</h2>
              <p className="text-purple-100 text-sm sm:text-lg">Organized photo documentation by subcity and month</p>
            </div>
            <div className="hidden sm:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Camera className="w-8 h-8 text-white mb-2" />
                <p className="text-xs text-purple-200">Photo Archive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subcity Selection */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Select Subcity</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {subcities.map(subcity => (
              <button
                key={subcity.id}
                onClick={() => setSelectedSubcity(subcity)}
                className={`p-4 rounded-xl border-2 transition-all text-left hover:shadow-lg ${
                  selectedSubcity?.id === subcity.id
                    ? 'border-purple-500 bg-purple-50 shadow-lg'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${
                    subcity.progress > 85 ? 'bg-green-500' :
                    subcity.progress > 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-800 text-sm truncate">{subcity.name}</h4>
                    <p className="text-xs text-slate-600">Mayor: {subcity.mayor}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Month and View Controls */}
        {selectedSubcity && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{selectedSubcity.name} Photo Gallery</h3>
                <p className="text-slate-600">Browse environmental project photos by month</p>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Month Selector */}
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                >
                  {availableMonths.map(month => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-all ${
                      viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-all ${
                      viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                </div>

                {/* Upload Button */}
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 text-sm">
                  <Upload className="w-4 h-4" />
                  <span className="hidden sm:inline">Upload Photos</span>
                </button>
              </div>
            </div>

            {/* Photo Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <p className="text-2xl font-bold text-green-600">{photos.length}</p>
                <p className="text-sm text-green-700">Photos This Month</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                <p className="text-2xl font-bold text-blue-600">{photos.reduce((sum, p) => sum + p.likes, 0)}</p>
                <p className="text-sm text-blue-700">Total Likes</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                <p className="text-2xl font-bold text-purple-600">{photos.reduce((sum, p) => sum + p.downloads, 0)}</p>
                <p className="text-sm text-purple-700">Downloads</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                <p className="text-2xl font-bold text-orange-600">{new Set(photos.map(p => p.category)).size}</p>
                <p className="text-sm text-orange-700">Categories</p>
              </div>
            </div>

            {/* Photo Grid/List */}
            {photos.length > 0 ? (
              viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {photos.map(photo => (
                    <div key={photo.id} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
                      {/* Photo Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 relative overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">{getCategoryIcon(photo.category)}</div>
                            <p className="text-xs text-slate-600 px-2">{photo.title}</p>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(photo.category)}`}>
                            {photo.category.replace('-', ' ')}
                          </div>
                        </div>

                        {/* Actions Overlay */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex space-x-1">
                            <button className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors">
                              <Eye className="w-4 h-4 text-slate-600" />
                            </button>
                            <button className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors">
                              <Download className="w-4 h-4 text-slate-600" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Photo Info */}
                      <div className="p-4">
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">{photo.title}</h4>
                        <div className="space-y-2 text-xs text-slate-600">
                          <div className="flex justify-between">
                            <span>Date:</span>
                            <span>{photo.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Size:</span>
                            <span>{photo.size}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Likes:</span>
                            <span>{photo.likes}</span>
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mt-3">
                          {photo.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // List View
                <div className="space-y-4">
                  {photos.map(photo => (
                    <div key={photo.id} className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        {/* Thumbnail */}
                        <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">{getCategoryIcon(photo.category)}</span>
                        </div>
                        
                        {/* Photo Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-800 truncate">{photo.title}</h4>
                          <p className="text-sm text-slate-600 truncate">{photo.description}</p>
                          <div className="flex items-center space-x-4 mt-1 text-xs text-slate-500">
                            <span>{photo.date}</span>
                            <span>{photo.size}</span>
                            <span>{photo.likes} likes</span>
                            <span>{photo.downloads} downloads</span>
                          </div>
                        </div>

                        {/* Category & Actions */}
                        <div className="flex items-center space-x-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(photo.category)}`}>
                            {photo.category.replace('-', ' ')}
                          </div>
                          <div className="flex space-x-1">
                            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                              <Eye className="w-4 h-4 text-slate-600" />
                            </button>
                            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                              <Download className="w-4 h-4 text-slate-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              // Empty State
              <div className="text-center py-12">
                <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-600 mb-2">No Photos Found</h3>
                <p className="text-slate-500 mb-4">No photos have been uploaded for {selectedSubcity.name} in {availableMonths.find(m => m.value === selectedMonth)?.label}</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 mx-auto">
                  <Upload className="w-4 h-4" />
                  <span>Upload First Photos</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Instructions when no subcity selected */}
        {!selectedSubcity && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
            <div className="max-w-md mx-auto">
              <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-700 mb-3">Select a Subcity</h3>
              <p className="text-slate-600 mb-6">
                Choose a subcity above to browse their environmental project photos organized by month.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 text-left">
                <h4 className="font-semibold text-slate-700 mb-2">Photo Organization:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>📁 <code>/assets/{"{subcity}"}/{"{YYYY-MM}"}/</code></li>
                  <li>🗂️ Organized by subcity and month</li>
                  <li>🏷️ Tagged by project category</li>
                  <li>📊 Track views and downloads</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ReportsManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [reportData, setReportData] = useState({
    treesPlanted: '',
    budget: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Report submitted successfully to City Administration!');
      setReportData({ treesPlanted: '', budget: '', description: '' });
      setSelectedCategory('');
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-green-50 min-h-screen">
      <div className="p-4 sm:p-6 space-y-6">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Reports Management</h2>
          <p className="text-emerald-100 text-sm sm:text-lg">Submit and manage environmental progress reports</p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Select Report Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reportCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 sm:p-6 rounded-2xl border-2 transition-all group ${
                  selectedCategory === category.id
                    ? 'border-emerald-500 bg-emerald-50 shadow-lg'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{category.icon}</div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-lg mb-1 sm:mb-2">{category.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600">{category.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedCategory && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Report Details</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 sm:mb-3">Number of Trees Planted</label>
                  <input
                    type="number"
                    value={reportData.treesPlanted}
                    onChange={(e) => setReportData({...reportData, treesPlanted: e.target.value})}
                    placeholder="Enter quantity"
                    className="w-full px-4 py-3 sm:py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 sm:mb-3">Budget Utilized (ETB)</label>
                  <input
                    type="number"
                    value={reportData.budget}
                    onChange={(e) => setReportData({...reportData, budget: e.target.value})}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 sm:py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 sm:mb-3">Project Description</label>
                <textarea
                  value={reportData.description}
                  onChange={(e) => setReportData({...reportData, description: e.target.value})}
                  placeholder="Describe the work completed, challenges faced, outcomes achieved..."
                  rows={4}
                  className="w-full px-4 py-3 sm:py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 sm:p-10 text-center hover:border-emerald-400 transition-colors">
                <Upload className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-base sm:text-lg font-bold text-slate-700 mb-2">Upload Documentation</h4>
                <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">Photos, progress reports, and supporting documents</p>
                <button className="bg-emerald-100 text-emerald-700 px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:bg-emerald-200 transition-colors font-bold text-sm sm:text-base">
                  Choose Files
                </button>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !selectedCategory || !reportData.treesPlanted}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 sm:py-4 rounded-xl font-bold hover:from-emerald-600 hover:to-green-600 transition-all disabled:opacity-50 shadow-lg transform hover:scale-105 text-sm sm:text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting to City Administration...</span>
                  </div>
                ) : (
                  'Submit Report to City Administration'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InteractiveMaps = () => {
  const [selectedSubcity, setSelectedSubcity] = useState(null);
  const [mapView, setMapView] = useState('google'); // 'google' or 'static'

  // Real geographical positions for Addis Ababa subcities (approximate percentages based on actual locations)
  const subcityPositions = {
    'Kolfe Keraniyo': { left: '25%', top: '45%' },
    'Yeka': { left: '75%', top: '25%' },
    'Bole': { left: '70%', top: '60%' },
    'Lideta': { left: '45%', top: '50%' },
    'Arada': { left: '50%', top: '45%' },
    'Nifassilk Lafto': { left: '65%', top: '75%' },
    'Lemi Kura': { left: '80%', top: '45%' },
    'Gulele': { left: '40%', top: '35%' },
    'Addis Ketema': { left: '48%', top: '48%' },
    'Kirkos': { left: '52%', top: '52%' },
    'Akaki Kality': { left: '35%', top: '70%' }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="p-4 sm:p-6 space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Interactive City Maps</h2>
              <p className="text-blue-100 text-sm sm:text-lg">Geographic visualization of environmental projects in Addis Ababa</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setMapView('google')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mapView === 'google' 
                    ? 'bg-white text-blue-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                🗺️ Satellite
              </button>
              <button
                onClick={() => setMapView('static')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mapView === 'static' 
                    ? 'bg-white text-blue-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                📍 Overview
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="relative h-96 sm:h-[600px]">
            {mapView === 'google' ? (
              // Google Maps Embed
              <div className="w-full h-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328!3d8.9806034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1635959543150!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-2xl"
                  title="Addis Ababa Environmental Projects Map"
                ></iframe>
                
                {/* Overlay controls */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <h5 className="font-bold text-slate-800 mb-2 text-sm">Environmental Projects</h5>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Excellent Progress (85%+)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Good Progress (70-85%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Needs Attention (&lt;70%)</span>
                    </div>
                  </div>
                </div>

                {/* Project statistics overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">24,850</p>
                    <p className="text-xs text-slate-600">Trees Planted</p>
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-xl font-bold text-blue-600">11</p>
                    <p className="text-xs text-slate-600">Active Subcities</p>
                  </div>
                </div>
              </div>
            ) : (
              // Static Map View with Interactive Elements
              <div 
                className="w-full h-full relative bg-gradient-to-br from-green-200 via-emerald-100 to-blue-200"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                {/* City boundary outline */}
                <div className="absolute inset-8 border-4 border-dashed border-slate-400/50 rounded-3xl"></div>
                
                {/* Central area indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/40">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>

                {/* Subcity markers with real positions */}
                {subcities.map((subcity) => {
                  const position = subcityPositions[subcity.name] || { left: '50%', top: '50%' };
                  return (
                    <button
                      key={subcity.id}
                      onClick={() => setSelectedSubcity(subcity)}
                      className={`absolute w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-150 shadow-lg border-2 border-white z-10 ${
                        subcity.progress > 85 ? 'bg-green-500 hover:bg-green-600' :
                        subcity.progress > 70 ? 'bg-yellow-500 hover:bg-yellow-600' : 
                        'bg-red-500 hover:bg-red-600'
                      }`}
                      style={position}
                      title={`${subcity.name} - ${subcity.progress}% progress`}
                    >
                      <span className="sr-only">{subcity.name}</span>
                    </button>
                  );
                })}

                {/* Rivers/geographical features */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1 bg-blue-400/60 rounded-full transform rotate-12"></div>
                <div className="absolute top-3/4 left-1/3 w-1/3 h-1 bg-blue-400/60 rounded-full transform -rotate-6"></div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <h5 className="font-bold text-slate-800 mb-3 text-sm">Subcity Progress</h5>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full border border-white shadow"></div>
                      <span className="text-slate-600">Excellent (85%+)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full border border-white shadow"></div>
                      <span className="text-slate-600">Good (70-85%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full border border-white shadow"></div>
                      <span className="text-slate-600">Needs Attention (&lt;70%)</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="text-xs text-slate-500">Click markers for details</p>
                  </div>
                </div>

                {/* City label */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl">
                  <h4 className="font-bold text-lg">Addis Ababa</h4>
                  <p className="text-xs text-slate-300">Capital City of Ethiopia</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedSubcity && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">{selectedSubcity.name} Subcity</h3>
              <button 
                onClick={() => setSelectedSubcity(null)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <span className="text-slate-500 text-lg">✕</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">{selectedSubcity.progress}%</p>
                <p className="text-xs sm:text-sm text-slate-600">Progress</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold text-green-600">{selectedSubcity.projects}</p>
                <p className="text-xs sm:text-sm text-slate-600">Projects</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold text-purple-600">{selectedSubcity.area}</p>
                <p className="text-xs sm:text-sm text-slate-600">Area (km²)</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold text-orange-600">{Math.round(selectedSubcity.budgetUsed / 1000000)}M</p>
                <p className="text-xs sm:text-sm text-slate-600">Budget (ETB)</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl">
              <h4 className="font-semibold text-slate-800 mb-2">Location Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-600">Mayor:</span>
                  <span className="ml-2 font-medium">{selectedSubcity.mayor}</span>
                </div>
                <div>
                  <span className="text-slate-600">Population:</span>
                  <span className="ml-2 font-medium">{selectedSubcity.population.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-slate-600">Efficiency:</span>
                  <span className="ml-2 font-medium">{selectedSubcity.efficiency}%</span>
                </div>
                <div>
                  <span className="text-slate-600">Status:</span>
                  <span className={`ml-2 font-medium ${
                    selectedSubcity.status === 'excellent' ? 'text-green-600' :
                    selectedSubcity.status === 'good' ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    {selectedSubcity.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SubcityDetailedView = ({ subcity, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Generate some sample recent reports
  const recentReports = [
    {
      id: 1,
      category: 'roadway',
      title: 'Main Street Tree Planting',
      date: '2025-06-15',
      treesPlanted: 45,
      budget: 125000,
      status: 'completed',
      description: 'Successfully planted 45 indigenous trees along Main Street corridor'
    },
    {
      id: 2,
      category: 'parks',
      title: 'Community Park Development',
      date: '2025-06-10',
      treesPlanted: 120,
      budget: 350000,
      status: 'in-progress',
      description: 'Ongoing development of new community park with native vegetation'
    },
    {
      id: 3,
      category: 'schools',
      title: 'Elementary School Grounds',
      date: '2025-06-08',
      treesPlanted: 30,
      budget: 85000,
      status: 'completed',
      description: 'Landscaping and tree planting at local elementary school'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getCategoryIcon = (categoryId) => {
    const category = reportCategories.find(c => c.id === categoryId);
    return category ? category.icon : '📊';
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header with back button */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 transform rotate-180" />
              <span>Back to Dashboard</span>
            </button>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Detailed Report View</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{subcity.name} Subcity</h2>
          <p className="text-blue-100 text-sm sm:text-lg">
            Mayor: {subcity.mayor} • Population: {subcity.population.toLocaleString()} • Area: {subcity.area} km²
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-600">{subcity.progress}%</p>
              <p className="text-slate-600 text-sm sm:text-base">Overall Progress</p>
              <div className="mt-2 bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${subcity.progress}%` }}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">{subcity.reports}</p>
              <p className="text-slate-600 text-sm sm:text-base">Reports Submitted</p>
              <p className="text-xs text-slate-500 mt-1">This month</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-purple-600">{subcity.projects}</p>
              <p className="text-slate-600 text-sm sm:text-base">Active Projects</p>
              <p className="text-xs text-slate-500 mt-1">Environmental</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-orange-600">{Math.round(subcity.budgetUsed / 1000000)}M</p>
              <p className="text-slate-600 text-sm sm:text-base">Budget (ETB)</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
          <div className="border-b border-slate-200">
            <div className="flex space-x-1 p-1">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'reports', label: 'Recent Reports', icon: FileText },
                { id: 'budget', label: 'Budget Analysis', icon: PieChart }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-all text-sm font-medium ${
                    activeTab === tab.id 
                      ? 'bg-blue-50 text-blue-600 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Project Categories Progress</h3>
                <div className="space-y-4">
                  {reportCategories.map(category => {
                    const progress = Math.floor(Math.random() * 30) + 70;
                    return (
                      <div key={category.id} className="p-4 bg-slate-50 rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{category.icon}</div>
                            <div>
                              <h4 className="font-bold text-slate-800">{category.name}</h4>
                              <p className="text-xs sm:text-sm text-slate-600">{category.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-slate-800">{progress}%</p>
                          </div>
                        </div>
                        <div className="bg-slate-200 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full ${category.color} transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800">Recent Environmental Reports</h3>
                  <span className="text-sm text-slate-500">Last 30 days</span>
                </div>
                <div className="space-y-4">
                  {recentReports.map(report => (
                    <div key={report.id} className="p-4 sm:p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="text-2xl flex-shrink-0">{getCategoryIcon(report.category)}</div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-slate-800 mb-1">{report.title}</h4>
                            <p className="text-sm text-slate-600 mb-2">{report.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-slate-500">
                              <span>📅 {report.date}</span>
                              <span>🌳 {report.treesPlanted} trees</span>
                              <span>💰 {report.budget.toLocaleString()} ETB</span>
                            </div>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(report.status)} ml-4 flex-shrink-0`}>
                          {report.status.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'budget' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Budget Utilization Analysis</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-4">Budget Overview</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Total Budget:</span>
                        <span className="font-semibold">{(subcity.budget / 1000000).toFixed(1)}M ETB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Amount Used:</span>
                        <span className="font-semibold text-blue-600">{(subcity.budgetUsed / 1000000).toFixed(1)}M ETB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Remaining:</span>
                        <span className="font-semibold text-green-600">{((subcity.budget - subcity.budgetUsed) / 1000000).toFixed(1)}M ETB</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Utilization Rate:</span>
                          <span className="font-bold text-purple-600">{Math.round((subcity.budgetUsed / subcity.budget) * 100)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-4">Monthly Spending Trend</h4>
                    <div className="text-center py-8">
                      <LineChart className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-600">Budget visualization chart</p>
                      <p className="text-xs text-slate-500 mt-2">Showing steady progress toward goals</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReportingStatusDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('2025-06');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportDetail, setShowReportDetail] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);

  // Generate sample report data with attachments and content
  const generateReportData = (subcity, month) => {
    const reportStatus = getStatusForMonth(subcity, month);
    if (!reportStatus.submitted) return null;

    return {
      id: `${subcity.id}-${month}`,
      subcity: subcity.name,
      month: month,
      submittedDate: reportStatus.submittedDate,
      submittedBy: reportStatus.submittedBy,
      status: reportStatus.status,
      
      // Report content data
      data: {
        treesPlanted: Math.floor(Math.random() * 500) + 200,
        budgetUsed: Math.floor(Math.random() * 1000000) + 500000,
        areasCompleted: Math.floor(Math.random() * 10) + 5,
        maintenanceActivities: Math.floor(Math.random() * 20) + 10,
        communityEngagement: Math.floor(Math.random() * 100) + 50
      },
      
      // File attachments
      attachments: [
        { 
          id: 1, 
          name: 'progress_photos.pdf', 
          type: 'pdf', 
          size: '2.3MB',
          uploadDate: reportStatus.submittedDate,
          description: 'Progress photos and documentation'
        },
        { 
          id: 2, 
          name: 'budget_breakdown.xlsx', 
          type: 'excel', 
          size: '0.8MB',
          uploadDate: reportStatus.submittedDate,
          description: 'Detailed budget utilization breakdown'
        },
        { 
          id: 3, 
          name: 'before_after_photos.zip', 
          type: 'images', 
          size: '15.2MB',
          uploadDate: reportStatus.submittedDate,
          description: 'Before and after project photos'
        }
      ],
      
      // Similarity analysis compared to previous reports
      similarityAnalysis: {
        overallSimilarity: Math.floor(Math.random() * 40) + 60, // 60-100%
        dataConsistency: Math.floor(Math.random() * 30) + 70,
        photoSimilarity: Math.floor(Math.random() * 50) + 50,
        descriptionSimilarity: Math.floor(Math.random() * 60) + 40,
        flaggedItems: Math.random() > 0.7 ? [
          'Budget figures match exactly with previous month',
          'Photo metadata suggests same capture date',
          'Description text has 85% similarity to previous report'
        ] : []
      },
      
      // Rejection history if applicable
      rejectionHistory: reportStatus.status === 'under_review' && Math.random() > 0.5 ? [
        {
          date: '2025-06-25',
          reason: 'Insufficient documentation - missing budget breakdown',
          reviewer: 'Dr. Kalkidan Teshome',
          resolved: true
        }
      ] : [],
      
      description: `Environmental progress report for ${subcity.name} covering tree planting initiatives, budget utilization, and community engagement activities for ${month}.`
    };
  };

  // Generate available months (last 6 months)
  const getAvailableMonths = () => {
    const months = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const monthStr = date.toISOString().slice(0, 7);
      const monthName = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
      months.push({ value: monthStr, label: monthName });
    }
    return months;
  };

  const availableMonths = getAvailableMonths();

  // Get status for a specific month
  const getStatusForMonth = (subcity, month) => {
    return subcity.monthlyReportStatus[month] || { submitted: false, status: 'not_due' };
  };

  // Status colors and labels
  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800 border-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'under_review': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-300';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-300';
      case 'not_due': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'under_review': return <Eye className="w-4 h-4" />;
      case 'overdue': return <AlertCircle className="w-4 h-4" />;
      case 'rejected': return <AlertCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'excel': return '📊';
      case 'images': return '🖼️';
      case 'word': return '📝';
      default: return '📎';
    }
  };

  const getSimilarityColor = (percentage) => {
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 80) return 'text-orange-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-green-600';
  };

  // Handle report approval/rejection
  const handleApproveReport = async () => {
    if (!selectedReport) return;
    
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setShowReportDetail(false);
      setSelectedReport(null);
      // In real implementation, would update the report status
      alert(`Report from ${selectedReport.subcity} has been approved!`);
    }, 2000);
  };

  const handleRejectReport = async (reason) => {
    if (!selectedReport) return;
    
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setShowReportDetail(false);
      setSelectedReport(null);
      // In real implementation, would update the report status with rejection reason
      alert(`Report from ${selectedReport.subcity} has been rejected. Reason: ${reason}`);
    }, 2000);
  };

  const openReportDetail = (subcity, month) => {
    const reportData = generateReportData(subcity, month);
    if (reportData) {
      setSelectedReport(reportData);
      setShowReportDetail(true);
    }
  };

  // Filter subcities based on status
  const filteredSubcities = subcities.filter(subcity => {
    if (filterStatus === 'all') return true;
    const status = getStatusForMonth(subcity, selectedMonth);
    return status.status === filterStatus;
  });

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Reports Management Dashboard</h2>
          <p className="text-blue-100 text-sm sm:text-lg">Monitor and approve environmental reports from all subcities</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                {availableMonths.map(month => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="under_review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSubcities.map(subcity => {
            const reportStatus = getStatusForMonth(subcity, selectedMonth);
            return (
              <div key={subcity.id} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">{subcity.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(reportStatus.status)}`}>
                    {getStatusIcon(reportStatus.status)}
                    <span className="ml-1">{reportStatus.status.replace('_', ' ').toUpperCase()}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div>Mayor: {subcity.mayor}</div>
                  {reportStatus.submitted && (
                    <>
                      <div>Submitted: {reportStatus.submittedDate}</div>
                      <div>By: {reportStatus.submittedBy}</div>
                    </>
                  )}
                </div>

                {reportStatus.submitted && (
                  <button
                    onClick={() => openReportDetail(subcity, selectedMonth)}
                    className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Report Details</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Report View Modal */}
        {showReportDetail && selectedReport && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedReport.subcity} Environmental Report</h3>
                    <p className="text-blue-100">{availableMonths.find(m => m.value === selectedReport.month)?.label}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowReportDetail(false);
                      setSelectedReport(null);
                    }}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <span className="text-2xl">✕</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-xl font-bold">{selectedReport.data.treesPlanted}</p>
                    <p className="text-xs text-blue-200">Trees Planted</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-xl font-bold">{(selectedReport.data.budgetUsed / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-blue-200">Budget Used (ETB)</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-xl font-bold">{selectedReport.data.areasCompleted}</p>
                    <p className="text-xs text-blue-200">Areas Completed</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-xl font-bold">{selectedReport.data.communityEngagement}</p>
                    <p className="text-xs text-blue-200">Community Events</p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Left Column - Report Content & Attachments */}
                  <div className="space-y-6">
                    
                    {/* Report Description */}
                    <div className="bg-slate-50 rounded-xl p-4">
                      <h4 className="font-bold text-slate-800 mb-3">Report Description</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{selectedReport.description}</p>
                    </div>

                    {/* File Attachments */}
                    <div className="bg-slate-50 rounded-xl p-4">
                      <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Attachments ({selectedReport.attachments.length})
                      </h4>
                      <div className="space-y-3">
                        {selectedReport.attachments.map(file => (
                          <div key={file.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">{getFileIcon(file.type)}</div>
                              <div>
                                <p className="font-medium text-slate-800 text-sm">{file.name}</p>
                                <p className="text-xs text-slate-500">{file.description}</p>
                                <p className="text-xs text-slate-500">{file.size} • {file.uploadDate}</p>
                              </div>
                            </div>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Previous Rejection History */}
                    {selectedReport.rejectionHistory && selectedReport.rejectionHistory.length > 0 && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <h4 className="font-bold text-red-800 mb-3 flex items-center">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          Previous Rejection History
                        </h4>
                        <div className="space-y-2">
                          {selectedReport.rejectionHistory.map((rejection, index) => (
                            <div key={index} className="bg-white rounded-lg p-3 border border-red-200">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-red-700">{rejection.date}</span>
                                <span className="text-xs text-red-600">Reviewed by: {rejection.reviewer}</span>
                              </div>
                              <p className="text-sm text-red-700">{rejection.reason}</p>
                              {rejection.resolved && (
                                <div className="mt-2 text-xs text-green-600 font-medium">✓ Issues resolved in current submission</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Similarity Analysis */}
                  <div className="space-y-6">
                    
                    {/* Similarity Analysis Visualizer */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4">
                      <h4 className="font-bold text-orange-800 mb-4 flex items-center">
                        <Activity className="w-5 h-5 mr-2" />
                        Similarity Analysis
                      </h4>
                      
                      {/* Overall Similarity Score */}
                      <div className="mb-6 text-center">
                        <div className="relative w-32 h-32 mx-auto mb-3">
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="2"
                            />
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke={selectedReport.similarityAnalysis.overallSimilarity >= 90 ? "#dc2626" : 
                                     selectedReport.similarityAnalysis.overallSimilarity >= 80 ? "#ea580c" :
                                     selectedReport.similarityAnalysis.overallSimilarity >= 70 ? "#d97706" : "#059669"}
                              strokeWidth="2"
                              strokeDasharray={`${selectedReport.similarityAnalysis.overallSimilarity}, 100`}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className={`text-2xl font-bold ${getSimilarityColor(selectedReport.similarityAnalysis.overallSimilarity)}`}>
                                {selectedReport.similarityAnalysis.overallSimilarity}%
                              </div>
                              <div className="text-xs text-slate-600">Overall</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-slate-600">
                          {selectedReport.similarityAnalysis.overallSimilarity >= 90 ? "🚨 Very High Similarity" :
                           selectedReport.similarityAnalysis.overallSimilarity >= 80 ? "⚠️ High Similarity" :
                           selectedReport.similarityAnalysis.overallSimilarity >= 70 ? "⚡ Moderate Similarity" : "✅ Acceptable Similarity"}
                        </div>
                      </div>

                      {/* Detailed Similarity Breakdown */}
                      <div className="space-y-4">
                        <h5 className="font-semibold text-slate-700">Detailed Analysis:</h5>
                        
                        {[
                          { label: "Data Consistency", value: selectedReport.similarityAnalysis.dataConsistency, icon: "📊" },
                          { label: "Photo Similarity", value: selectedReport.similarityAnalysis.photoSimilarity, icon: "📷" },
                          { label: "Description Similarity", value: selectedReport.similarityAnalysis.descriptionSimilarity, icon: "📝" }
                        ].map((item, index) => (
                          <div key={index} className="bg-white rounded-lg p-3 border border-orange-200">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-sm font-medium text-slate-700">{item.label}</span>
                              </div>
                              <span className={`text-sm font-bold ${getSimilarityColor(item.value)}`}>
                                {item.value}%
                              </span>
                            </div>
                            <div className="bg-slate-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  item.value >= 90 ? 'bg-red-500' :
                                  item.value >= 80 ? 'bg-orange-500' :
                                  item.value >= 70 ? 'bg-yellow-500' : 'bg-green-500'
                                }`}
                                style={{ width: `${item.value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Flagged Items */}
                      {selectedReport.similarityAnalysis.flaggedItems.length > 0 && (
                        <div className="mt-6 bg-red-100 border border-red-300 rounded-lg p-3">
                          <h5 className="font-semibold text-red-800 mb-2 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            Flagged Issues ({selectedReport.similarityAnalysis.flaggedItems.length})
                          </h5>
                          <ul className="space-y-1">
                            {selectedReport.similarityAnalysis.flaggedItems.map((item, index) => (
                              <li key={index} className="text-sm text-red-700 flex items-start space-x-2">
                                <span className="text-red-500 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* AI Recommendation */}
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                      <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2" />
                        AI Recommendation
                      </h4>
                      <div className="text-sm text-purple-700">
                        {selectedReport.similarityAnalysis.overallSimilarity >= 90 ? (
                          <div className="space-y-2">
                            <p className="font-medium">⚠️ <strong>High Risk:</strong> This report shows very high similarity to previous submissions.</p>
                            <p><strong>Recommended Action:</strong> Request clarification and additional documentation before approval.</p>
                          </div>
                        ) : selectedReport.similarityAnalysis.overallSimilarity >= 80 ? (
                          <div className="space-y-2">
                            <p className="font-medium">🔍 <strong>Review Required:</strong> Some elements appear similar to previous reports.</p>
                            <p><strong>Recommended Action:</strong> Verify the flagged items and consider requesting additional evidence.</p>
                          </div>
                        ) : selectedReport.similarityAnalysis.overallSimilarity >= 70 ? (
                          <div className="space-y-2">
                            <p className="font-medium">✅ <strong>Acceptable:</strong> Report shows reasonable variation from previous submissions.</p>
                            <p><strong>Recommended Action:</strong> Standard review process can proceed.</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <p className="font-medium">🎯 <strong>Excellent:</strong> Report demonstrates good originality and unique content.</p>
                            <p><strong>Recommended Action:</strong> Fast-track approval recommended.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer - Action Buttons */}
              <div className="border-t border-slate-200 p-6 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-600">
                    <span className="font-medium">Status:</span> {selectedReport.status.replace('_', ' ').toUpperCase()}
                  </div>
                  
                  <div className="flex space-x-3">
                    {(selectedReport.status === 'pending' || selectedReport.status === 'under_review') && (
                      <>
                        <button
                          onClick={() => setShowRejectModal(true)}
                          disabled={isProcessing}
                          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center space-x-2"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>Reject</span>
                        </button>
                        
                        <button
                          onClick={handleApproveReport}
                          disabled={isProcessing}
                          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>{isProcessing ? 'Processing...' : 'Approve'}</span>
                        </button>
                      </>
                    )}
                    
                    <button
                      onClick={() => {
                        setShowReportDetail(false);
                        setSelectedReport(null);
                      }}
                      className="px-6 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rejection Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Reject Report</h3>
                <p className="text-slate-600 mb-4">Please provide a reason for rejecting this report:</p>
                
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Enter rejection reason..."
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
                
                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={() => {
                      setShowRejectModal(false);
                      setRejectionReason('');
                    }}
                    className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (rejectionReason.trim()) {
                        handleRejectReport(rejectionReason);
                        setShowRejectModal(false);
                        setRejectionReason('');
                      }
                    }}
                    disabled={!rejectionReason.trim() || isProcessing}
                    className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Reject Report'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedSubcity, setSelectedSubcity] = useState(null);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleLogin = (userInfo) => {
    setTimeout(() => {
      setUser(userInfo);
      setIsLoading(false);
    }, 3000);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('dashboard');
    setSelectedSubcity(null);
  };

  const handleSelectSubcity = (subcity) => {
    setSelectedSubcity(subcity);
    setCurrentView('detailed');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return user.type === 'city' 
          ? <CityMayorDashboard user={user} onSelectSubcity={handleSelectSubcity} />
          : <SubcityMayorDashboard user={user} />;
      case 'analytics':
        return <Analytics />;
      case 'reports':
        return <ReportingStatusDashboard />;
      case 'maps':
        return <InteractiveMaps />;
      case 'gallery':
        return <Gallery />;
      case 'detailed':
        return selectedSubcity ? 
          <SubcityDetailedView subcity={selectedSubcity} onBack={() => setCurrentView('dashboard')} /> :
          <CityMayorDashboard user={user} onSelectSubcity={handleSelectSubcity} />;
      default:
        return user.type === 'city' 
          ? <CityMayorDashboard user={user} onSelectSubcity={handleSelectSubcity} />
          : <SubcityMayorDashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader 
        user={user} 
        onLogout={handleLogout} 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      
      {renderContent()}
    </div>
  );
};

export default App;