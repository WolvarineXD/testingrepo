import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, BarChart3, Trophy, Clock, Info, TrendingUp } from 'lucide-react';
import digitalInitiativesData from '@/data/digitalInitiativesData';

// Import default logo for fallback
import defaultLogo from '@/assets/images/ndl.png';

// Type definition for initiative data
interface DigitalInitiative {
  title: string;
  logo: string | any;
  overview: string;
  launchDate: string;
  userBase: string;
  transactions: string;
  statesCovered: number;
  impact: string;
  features: string[];
  implementation: string[];
  detailedInfo: string;
  economicImpact: string;
  leadership: {
    name: string;
    position: string;
    initials: string;
  }[];
  contact: {
    email: string;
    helpline: string;
    website: string;
  };
}

const DigitalGoodDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get data for the specific initiative with type safety
  const digitalGoodData: DigitalInitiative = digitalInitiativesData[id as keyof typeof digitalInitiativesData] || {
    title: id?.replace(/-/g, ' ') || 'Digital Initiative',
    overview: `${id?.replace(/-/g, ' ') || 'This initiative'} is a key component of India's digital public infrastructure.`,
    launchDate: "2018-01-01",
    userBase: "100M+",
    transactions: "₹500B+",
    statesCovered: 28,
    impact: "High",
    features: [
      "Secure digital document storage and access",
      "Paperless verification of documents",
      "Integration with multiple government services"
    ],
    implementation: [
      "Cloud-based infrastructure with robust security",
      "API-first approach for seamless integration"
    ],
    detailedInfo: "This initiative plays a critical role in driving transparency, efficiency, and inclusivity across various sectors in India by leveraging cutting-edge digital infrastructure.",
    economicImpact: "Has contributed over ₹1.2 trillion in economic value through reduced inefficiencies, increased financial inclusion, and improved public service delivery.",
    leadership: [
      {
        name: "Project Director",
        position: "Government of India",
        initials: "PD"
      }
    ],
    contact: {
      email: `contact@${id}.gov.in`,
      helpline: "1800-XXX-XXXX",
      website: `https://${id}.gov.in`
    },
    logo: defaultLogo
  };

  // Function to handle logo source
  const getLogoSource = () => {
    if (!digitalGoodData.logo) return defaultLogo;
    return typeof digitalGoodData.logo === 'string' ? digitalGoodData.logo : digitalGoodData.logo;
  };

  return (
    <div className="min-h-screen bg-theme-black">
      <Header />
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-4 mb-8">
            <h1 className="text-4xl font-bold text-white capitalize">{digitalGoodData.title}</h1>
            <span className="px-3 py-1 text-xs bg-theme-orange text-white rounded-full">Digital Public Good</span>
          </div>
          
          <div className="bg-theme-darkGray rounded-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Logo Container with robust fallback */}
              <div className="w-40 h-40 flex items-center justify-center bg-white/5 rounded-xl p-4 border border-white/10">
                <img 
                  src={getLogoSource()}
                  alt={`${digitalGoodData.title} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = defaultLogo;
                    e.currentTarget.alt = 'Default initiative logo';
                  }}
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-theme-orange mb-4">Overview</h2>
                <p className="text-white/80 mb-6">
                  {digitalGoodData.overview}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-theme-gray p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="text-theme-orange h-4 w-4" />
                      <span className="text-white/60 text-sm">Launch Date</span>
                    </div>
                    <span className="text-white font-medium">
                      {new Date(digitalGoodData.launchDate).toLocaleDateString("en-IN", {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  
                  <div className="bg-theme-gray p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="text-theme-orange h-4 w-4" />
                      <span className="text-white/60 text-sm">Users</span>
                    </div>
                    <span className="text-white font-medium">{digitalGoodData.userBase}</span>
                  </div>
                  
                  <div className="bg-theme-gray p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="text-theme-orange h-4 w-4" />
                      <span className="text-white/60 text-sm">Transaction Value</span>
                    </div>
                    <span className="text-white font-medium">{digitalGoodData.transactions}</span>
                  </div>
                  
                  <div className="bg-theme-gray p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="text-theme-orange h-4 w-4" />
                      <span className="text-white/60 text-sm">Impact</span>
                    </div>
                    <span className="text-white font-medium">{digitalGoodData.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEW: Detailed Information Section */}
          <div className="bg-theme-darkGray rounded-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <h2 className="text-2xl font-bold text-theme-orange mb-4 flex items-center">
              <Info className="mr-2 h-5 w-5" />  Information
            </h2>
            <p className="text-white/80 whitespace-pre-line">
              {digitalGoodData.detailedInfo}
            </p>
          </div>

          {/* NEW: Economic Impact Section */}
          <div className="bg-theme-darkGray rounded-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <h2 className="text-2xl font-bold text-theme-orange mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" /> Economic Impact
            </h2>
            <ul className="text-white/80 space-y-2 list-disc pl-5">
              {digitalGoodData.economicImpact.split('\n').map((point, index) => (
                point.trim() && (
                  <li key={index} className="whitespace-pre-line">
                    {point.replace('•', '').trim()}
                  </li>
                )
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-theme-darkGray rounded-lg p-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <h2 className="text-2xl font-bold text-theme-orange mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5" /> Key Features
              </h2>
              <ul className="list-none space-y-3 text-white/80">
                {digitalGoodData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-theme-orange mr-2 mt-1">•</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-theme-darkGray rounded-lg p-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <h2 className="text-2xl font-bold text-theme-orange mb-4">Implementation</h2>
              <ul className="list-none space-y-3 text-white/80">
                {digitalGoodData.implementation.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-theme-orange mr-2 mt-1">•</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
      
            </div>
          </div>
          
          <div className="bg-theme-darkGray rounded-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <h2 className="text-2xl font-bold text-theme-orange mb-4">Impact & Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-theme-gray p-5 rounded-lg text-center">
                <div className="text-3xl font-bold text-theme-orange mb-2">{digitalGoodData.userBase}</div>
                <p className="text-white/80">User Base</p>
              </div>
              <div className="bg-theme-gray p-5 rounded-lg text-center">
                <div className="text-3xl font-bold text-theme-orange mb-2">{digitalGoodData.transactions}</div>
                <p className="text-white/80">Transacted Value</p>
              </div>
              <div className="bg-theme-gray p-5 rounded-lg text-center">
                <div className="text-3xl font-bold text-theme-orange mb-2">{digitalGoodData.statesCovered}</div>
                <p className="text-white/80">States Covered</p>
              </div>
            </div>
          </div>
          
          <div className="bg-theme-darkGray rounded-lg p-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <h2 className="text-2xl font-bold text-theme-orange mb-4">Leadership & Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Leadership</h3>
                <div className="space-y-4">
                  {digitalGoodData.leadership.map((leader, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-theme-gray rounded-full flex items-center justify-center">
                        <span className="text-theme-orange text-xl font-bold">{leader.initials}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{leader.name}</p>
                        <p className="text-white/60">{leader.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Official Contact</h3>
                <div className="space-y-2 text-white/80">
                  <p>Email: {digitalGoodData.contact.email}</p>
                  <p>Helpline: {digitalGoodData.contact.helpline}</p>
                  <p>Website: {digitalGoodData.contact.website}</p>
                </div>
                
    
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalGoodDetail;