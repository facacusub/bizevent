// import RegistrationForm from "@/components/RegistrationForm";

// export default function Home() {
//   return (
//     (<div
//       className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">Webinar Registration</h1>
//         <RegistrationForm />
//       </div>
//     </div>)
//   );
// }

"use client"
import { useEffect } from 'react';
import { FaFileAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function SurveyPage() {
  useEffect(() => {
    const loadTally = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof window.Tally === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = loadTally;
      script.onerror = loadTally;
      document.body.appendChild(script);
    } else {
      loadTally();
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Hero Section */}
        <div className="md:hidden flex flex-col items-center pt-6 md:pt-8 pb-4 md:pb-6">
          <div className="text-center space-y-3 md:space-y-4">
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4">
              <FaFileAlt className="text-purple-400 mr-1.5 md:mr-2 text-sm" />
              <span className="text-purple-400 text-xs md:text-sm font-semibold">FREE GUIDE</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Get Your Free <span className="text-purple-400">7 Steps Guide</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 px-2">
              The complete framework to attract consistent clients and grow your service-based business
            </p>
          </div>
          
          <div className="text-left w-full mt-4 md:mt-6 space-y-2 md:space-y-3">
            <div className="flex items-center space-x-2 md:space-x-3 text-white text-xs md:text-sm">
              <span className="text-purple-400 flex-shrink-0">✓</span>
              <span>Refine your offer until it's irresistible</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 text-white text-xs md:text-sm">
              <span className="text-purple-400 flex-shrink-0">✓</span>
              <span>Build automated lead generation systems</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 text-white text-xs md:text-sm">
              <span className="text-purple-400 flex-shrink-0">✓</span>
              <span>Create a sales process that actually works</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 text-white text-xs md:text-sm">
              <FaWhatsapp className="text-green-400 flex-shrink-0 text-sm" />
              <span>Plus: Join our exclusive business community</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mt-4 md:mt-6 text-purple-200">
            <FaArrowRight className="animate-pulse text-xs md:text-sm" />
            <p className="text-xs md:text-sm font-medium text-center">Complete the quick survey below to get instant access</p>
          </div>
        </div>
        
        {/* Desktop Hero Section */}
        {/* <div className="hidden md:block pt-12 md:pt-16 pb-8 md:pb-12">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="text-white space-y-4 md:space-y-6">
              <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4">
                <FaFileAlt className="text-purple-400 mr-1.5 md:mr-2 text-sm md:text-base" />
                <span className="text-purple-400 text-xs md:text-sm font-semibold">FREE GUIDE</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                The <span className="text-purple-400">7 Steps</span> to<br />
                <span className="text-purple-400">Consistent Clients</span><br />
                and Sales
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                A practical guide for service-based business owners who want to stop chasing leads and start attracting the right clients consistently
              </p>
              
              <div className="grid grid-cols-1 gap-3 md:gap-4 mt-4 md:mt-6">
                <div className="flex items-center space-x-2 md:space-x-3 text-white text-sm md:text-base">
                  <span className="text-purple-400 flex-shrink-0">✓</span>
                  <span>7 proven steps you can implement immediately</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 text-white text-sm md:text-base">
                  <span className="text-purple-400 flex-shrink-0">✓</span>
                  <span>Real action tips for each step (no theory)</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 text-white text-sm md:text-base">
                  <span className="text-purple-400 flex-shrink-0">✓</span>
                  <span>Built specifically for service providers</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 text-white text-sm md:text-base">
                  <FaWhatsapp className="text-green-400 flex-shrink-0" />
                  <span>Exclusive WhatsApp business community access</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4 text-purple-200 mt-4 md:mt-6">
                <FaArrowRight className="animate-pulse text-sm md:text-base" />
                <p className="text-base md:text-lg font-medium">
                  Complete the quick survey below for instant access
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple-500/20">
                <div className="text-center space-y-3 md:space-y-4">
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4">📊</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">What You'll Get</h3>
                  <div className="space-y-2 md:space-y-3 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400 text-sm md:text-base">📖</span>
                      <span className="text-gray-300 text-sm md:text-base">Complete 7-step framework</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400 text-sm md:text-base">⚡</span>
                      <span className="text-gray-300 text-sm md:text-base">Action tips for each step</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400 text-sm md:text-base">💡</span>
                      <span className="text-gray-300 text-sm md:text-base">Real implementation examples</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaWhatsapp className="text-green-400 text-sm md:text-base" />
                      <span className="text-gray-300 text-sm md:text-base">Business community access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Form Section */}
        <div className="max-w-4xl mx-auto pt-4 md:pt-8 pb-12 md:pb-16">
          <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl border border-purple-500/20 relative p-3 md:p-4 lg:p-8">
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Quick Survey to Get Your Free Guide</h2>
              {/* <p className="text-gray-300 text-sm md:text-base">Takes 2 minutes • Helps us send you the most relevant content</p> */}
            </div>
            
            <iframe
              data-tally-src="https://tally.so/embed/mZLJDV?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Business Guide Survey"
              className="rounded-t-xl"
            ></iframe>

            {/* Cover for Tally powered-by */}
            <div className="absolute bottom-15 sm:bottom-[50px] right-0 w-[70px] min-[500px]:w-[220px] sm:w-[220px] h-[50px] sm:h-[65px] bg-slate-900 rounded-lg z-50" />

            {/* <div className="text-center p-4 md:p-6 border-t border-purple-500/20 relative">
              <p className="text-gray-400 text-xs md:text-sm">
                Join 500+ service providers who have downloaded this guide ✨
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
} 