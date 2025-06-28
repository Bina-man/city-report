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
    area: 61.25,
    projects: 28,
    efficiency: 94
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
    area: 85.98,
    projects: 22,
    efficiency: 89
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
    area: 122.0,
    projects: 35,
    efficiency: 96
  },
  { 
    id: 4, 
    name: 'Lideta', 
    progress: 78, 
    reports: 11, 
    status: 'good', 
    mayor: 'Almaz Worku', 
    population: 210000,
    budget: 1800000,
    budgetUsed: 1350000,
    area: 35.4,
    projects: 18,
    efficiency: 82
  },
  { 
    id: 5, 
    name: 'Arada', 
    progress: 85, 
    reports: 14, 
    status: 'excellent', 
    mayor: 'Tesfaye Bekele', 
    population: 185000,
    budget: 1600000,
    budgetUsed: 1280000,
    area: 29.8,
    projects: 21,
    efficiency: 88
  },
  { 
    id: 6, 
    name: 'Nifassilk Lafto', 
    progress: 91, 
    reports: 16, 
    status: 'excellent', 
    mayor: 'Hanan Mohamed', 
    population: 420000,
    budget: 2900000,
    budgetUsed: 2465000,
    area: 68.7,
    projects: 32,
    efficiency: 93
  },
  { 
    id: 7, 
    name: 'Lemi Kura', 
    progress: 73, 
    reports: 9, 
    status: 'good', 
    mayor: 'Girma Haile', 
    population: 290000,
    budget: 2100000,
    budgetUsed: 1470000,
    area: 52.3,
    projects: 19,
    efficiency: 79
  },
  { 
    id: 8, 
    name: 'Gulele', 
    progress: 89, 
    reports: 12, 
    status: 'excellent', 
    mayor: 'Rahel Getachew', 
    population: 265000,
    budget: 1950000,
    budgetUsed: 1658000,
    area: 46.9,
    projects: 24,
    efficiency: 91
  },
  { 
    id: 9, 
    name: 'Addis Ketema', 
    progress: 69, 
    reports: 8, 
    status: 'needs-attention', 
    mayor: 'Solomon Desta', 
    population: 175000,
    budget: 1400000,
    budgetUsed: 924000,
    area: 22.1,
    projects: 15,
    efficiency: 74
  },
  { 
    id: 10, 
    name: 'Kirkos', 
    progress: 82, 
    reports: 10, 
    status: 'good', 
    mayor: 'Meron Kassaye', 
    population: 230000,
    budget: 1750000,
    budgetUsed: 1365000,
    area: 31.2,
    projects: 20,
    efficiency: 85
  },
  { 
    id: 11, 
    name: 'Akaki Kality', 
    progress: 76, 
    reports: 12, 
    status: 'good', 
    mayor: 'Getnet Mulugeta', 
    population: 350000,
    budget: 2400000,
    budgetUsed: 1800000,
    area: 58.6,
    projects: 26,
    efficiency: 81
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
  <div className="bg-white/98 backdrop-blur-xl shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
    <div className="px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="text-2xl sm:text-3xl">{user.avatar}</div>
          <div className="min-w-0">
            <h2 className="font-bold text-slate-800 text-lg sm:text-xl truncate">{user.name}</h2>
            <p className="text-xs sm:text-sm text-slate-600 truncate">{user.role}</p>
            <p className="text-xs text-slate-500 hidden sm:block">{user.department}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button className="p-2 sm:p-3 hover:bg-slate-100 rounded-xl transition-colors relative">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
          <button className="p-2 sm:p-3 hover:bg-slate-100 rounded-xl transition-colors hidden sm:block">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </button>
          <button
            onClick={onLogout}
            className="p-2 sm:p-3 hover:bg-red-50 text-red-600 rounded-xl transition-colors"
          >
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex space-x-1 bg-slate-100 rounded-xl p-1 overflow-x-auto">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'reports', label: 'Reports', icon: FileText },
          { id: 'gallery', label: 'Gallery', icon: Camera },
          { id: 'maps', label: 'Maps', icon: Map }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setCurrentView(tab.id)}
            className={`flex-shrink-0 flex items-center justify-center space-x-1 sm:space-x-2 py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all text-xs sm:text-sm font-medium ${
              currentView === tab.id 
                ? 'bg-white text-blue-600 shadow-sm border border-blue-100' 
                : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
            }`}
          >
            <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{tab.label}</span>
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

const Analytics = () => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
    <div className="p-4 sm:p-6 space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Advanced Analytics</h2>
        <p className="text-purple-100 text-sm sm:text-lg">AI-powered insights and performance analysis</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Performance Overview</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 sm:p-6 bg-emerald-50 rounded-xl">
            <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600 mx-auto mb-3 sm:mb-4" />
            <p className="text-2xl sm:text-3xl font-bold text-emerald-600">94%</p>
            <p className="text-slate-600 text-sm sm:text-base">Overall Efficiency</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
            <Target className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">87%</p>
            <p className="text-slate-600 text-sm sm:text-base">Goal Achievement</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-purple-50 rounded-xl">
            <Activity className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
            <p className="text-2xl sm:text-3xl font-bold text-purple-600">12.5k</p>
            <p className="text-slate-600 text-sm sm:text-base">Trees/Month Avg</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-xl">
            <Award className="w-8 h-8 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-3 sm:mb-4" />
            <p className="text-2xl sm:text-3xl font-bold text-orange-600">A+</p>
            <p className="text-slate-600 text-sm sm:text-base">City Rating</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Gallery = () => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
    <div className="p-4 sm:p-6 space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Project Gallery</h2>
        <p className="text-purple-100 text-sm sm:text-lg">Visual documentation of environmental initiatives</p>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800">Photo Library</h3>
          <div className="flex items-center space-x-3">
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button className="p-2 rounded bg-white shadow-sm">
                <Grid className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-sm sm:text-base">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Upload Photos</span>
              <span className="sm:hidden">Upload</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map(id => (
            <div key={id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-48 sm:h-64 bg-slate-200 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
                  <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400" />
                </div>
                <div className="absolute top-3 right-3">
                  <div className="px-2 py-1 rounded-full text-xs font-medium text-white bg-green-500">
                    🌳
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Project Photo {id}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-3">2025-06-{10 + id}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Environmental Project</span>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Download className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="p-4 sm:p-6 space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Interactive City Maps</h2>
          <p className="text-blue-100 text-sm sm:text-lg">Geographic visualization of environmental projects</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="h-64 sm:h-96 bg-gradient-to-br from-green-100 to-blue-100 relative">
            <div className="absolute inset-4 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="text-center p-4">
                <Map className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-slate-700 mb-2">Interactive Map View</h4>
                <p className="text-slate-600 text-sm sm:text-base">Addis Ababa Environmental Projects Map</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">Click on subcities to view detailed information</p>
              </div>
            </div>
            
            {subcities.map((subcity, index) => (
              <button
                key={subcity.id}
                onClick={() => setSelectedSubcity(subcity)}
                className={`absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-150 ${
                  subcity.progress > 85 ? 'bg-green-500' :
                  subcity.progress > 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{
                  left: `${20 + index * 15}%`,
                  top: `${30 + (index % 3) * 20}%`
                }}
              />
            ))}
            
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <h5 className="font-bold text-slate-800 mb-2 text-sm sm:text-base">Legend</h5>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">Excellent (85%+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-600">Good (70-85%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <span className="text-slate-600">Needs Attention (&lt;70%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {selectedSubcity && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">{selectedSubcity.name}</h3>
              <button 
                onClick={() => setSelectedSubcity(null)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <span className="text-slate-500 text-lg">✕</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">{selectedSubcity.progress}%</p>
                <p className="text-xs sm:text-sm text-slate-600">Progress</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-green-600">{selectedSubcity.projects}</p>
                <p className="text-xs sm:text-sm text-slate-600">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-purple-600">{selectedSubcity.area}</p>
                <p className="text-xs sm:text-sm text-slate-600">Area (km²)</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-orange-600">{Math.round(selectedSubcity.budgetUsed / 1000000)}M</p>
                <p className="text-xs sm:text-sm text-slate-600">Budget (ETB)</p>
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
              <p className="text-2xl sm:text-3xl font-bold text-orange-600">{subcity.efficiency}%</p>
              <p className="text-slate-600 text-sm sm:text-base">Efficiency Rating</p>
              <p className="text-xs text-slate-500 mt-1">City average: 89%</p>
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
                              <h4 className="font-semibold text-slate-800">{category.name}</h4>
                              <p className="text-sm text-slate-600">{category.description}</p>
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

const App = () => {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedSubcity, setSelectedSubcity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (userInfo) => {
    setIsLoading(true);
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
        return user.type === 'city' ? (
          <CityMayorDashboard user={user} onSelectSubcity={handleSelectSubcity} />
        ) : (
          <SubcityMayorDashboard user={user} />
        );
      case 'detailed':
        return <SubcityDetailedView 
          subcity={selectedSubcity} 
          onBack={() => setCurrentView('dashboard')} 
        />;
      case 'analytics':
        return <Analytics />;
      case 'reports':
        return <ReportsManagement />;
      case 'gallery':
        return <Gallery />;
      case 'maps':
        return <InteractiveMaps />;
      default:
        return user.type === 'city' ? (
          <CityMayorDashboard user={user} onSelectSubcity={handleSelectSubcity} />
        ) : (
          <SubcityMayorDashboard user={user} />
        );
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