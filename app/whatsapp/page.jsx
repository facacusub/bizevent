"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaWhatsapp, FaArrowLeft, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

export default function WhatsAppPage() {
  const [joined, setJoined] = useState(false);
  const [userRegion, setUserRegion] = useState(null);
  const [loading, setLoading] = useState(true);

  // WhatsApp group links for different regions
  const whatsappGroups = {
    high: 'https://chat.whatsapp.com/I4j2xK9VcQl9T0mmMf2OeG', // West/High income
    medium: 'https://chat.whatsapp.com/JIegH5OUHaiEIlqCPTagki', // Asia + High income Africa
    low: 'https://chat.whatsapp.com/LCOUpa3GTLc7OWKKDCZuwt' // Low income countries (placeholder - you can add a third link)
  };

  // Country classification by income tier
  const countryTiers = {
    high: [
      // North America
      'US', 'CA',
      // Western Europe
      'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH', 'IE', 'DK', 'SE', 'NO', 'FI', 'IS',
      // Oceania
      'AU', 'NZ',
      // Other high income
      'LU', 'MC', 'LI'
    ],
    medium: [
      // Asia
      'JP', 'KR', 'SG', 'HK', 'TW', 'CN', 'IN', 'TH', 'MY', 'PH', 'ID', 'VN', 'BD', 'PK', 'LK',
      // High income Africa
      'ZA',
      // Middle East
      'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'IL', 'TR',
      // Eastern Europe
      'RU', 'PL', 'CZ', 'HU', 'SK', 'SI', 'HR', 'EE', 'LV', 'LT', 'BG', 'RO',
      // Latin America (medium income)
      'BR', 'MX', 'AR', 'CL', 'CO', 'PE', 'UY'
    ]
    // All other countries default to 'low' tier
  };

  const getCountryTier = (countryCode) => {
    if (countryTiers.high.includes(countryCode)) return 'high';
    if (countryTiers.medium.includes(countryCode)) return 'medium';
    return 'low';
  };

  const getRegionName = (tier) => {
    switch (tier) {
      case 'high': return 'Western Markets';
      case 'medium': return 'Asia & Premium Markets';
      case 'low': return 'Emerging Markets';
      default: return 'Global';
    }
  };

  useEffect(() => {
    const detectUserLocation = async () => {
      try {
        // Try to get user's country using a free IP geolocation service
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          const tier = getCountryTier(data.country_code);
          setUserRegion(tier);
        } else {
          // Fallback to medium tier if detection fails
          setUserRegion('medium');
        }
      } catch (error) {
        console.log('Location detection failed, using default region');
        // Fallback to medium tier if detection fails
        setUserRegion('medium');
      } finally {
        setLoading(false);
      }
    };

    detectUserLocation();
  }, []);
  
  const handleJoinClick = () => {
    if (userRegion && whatsappGroups[userRegion]) {
      window.open(whatsappGroups[userRegion], '_blank');
      setJoined(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#141d3b] relative overflow-hidden flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/bg.jpg" 
          unoptimized={true}  
          alt="Background" 
          fill 
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Navigation */}
      <div className="relative z-10 w-full px-4 sm:px-6 py-4">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-6">
        <div className="w-full max-w-xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our <span className="text-purple-400">WhatsApp Group</span>
          </h1>

          {loading ? (
            <div className="text-gray-300 mb-6 text-sm sm:text-base">
              <FaGlobe className="animate-spin inline mr-2" />
              Loading the Link...
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-2">
                <b>Important:</b> All event links and access details will be sent exclusively through this WhatsApp group. Make sure you join the group to get the event access.
              </p>
              {/* <p className="text-purple-400 text-sm">
                <FaGlobe className="inline mr-1" />
                Group for: {getRegionName(userRegion)}
              </p> */}
            </div>
          )}

          <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl border border-purple-500/20 p-4 sm:p-6 mb-6">
            <ul className="text-left text-gray-300 space-y-2 sm:space-y-3 mb-6 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 flex-shrink-0">✓</span>
                <span>Get access to event links and materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 flex-shrink-0">✓</span>
                <span>Receive timely reminders before sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 flex-shrink-0">✓</span>
                <span>Connect with hosts and other participants</span>
              </li>
            </ul>

            <Button 
              onClick={handleJoinClick}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg h-auto w-full flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg sm:text-xl flex-shrink-0" />
              <span className="whitespace-nowrap">
                {loading ? "Loading..." : joined ? "You've Joined" : "Join Now to Get Event Access"}
              </span>
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-gray-400">
            Your privacy is important to us. We will never share your information.
          </p>
        </div>
      </div>
    </div>
  );
} 