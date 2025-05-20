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
// import { FaCalendar, FaArrowRight } from 'react-icons/fa';
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
    <div className="min-h-screen bg-[#141d3b] relative overflow-hidden">
      {/* Background dots/particles effect */}
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

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero sections commented out to focus on the survey
        
        <!-- Mobile Hero Section -->
        <div className="md:hidden flex flex-col items-center pt-8 pb-6">
          <div className="relative">
            <div className="absolute -top-4 -right-3">
              <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                FREE EVENT
              </span>
            </div>
            <Image
              src="/webinar/bade.png"
              unoptimized={true}
              alt="SMMA Expert"
              width={280}
              height={360}
              className="object-contain h-[220px]"
              priority
            />
          </div>
          
          <div className="text-center mt-6 space-y-4">
            <h1 className="text-3xl font-bold text-white">
              Make Your <span className="text-purple-400">First $1K</span> With <span className="text-purple-400">SMMA</span>
            </h1>
            <p className="text-base text-gray-300">
              Join our FREE 3-day event and learn exactly how to start a profitable Social Media Marketing Agency from scratch
            </p>
          </div>
          
          <div className="text-left w-full mt-6 space-y-3">
            <div className="flex items-center space-x-3 text-white text-sm">
              <FaCalendar className="text-purple-400 flex-shrink-0" />
              <span>Day 1: Mindset & Business Models (May 31st, 2025)</span>
            </div>
            <div className="flex items-center space-x-3 text-white text-sm">
              <FaCalendar className="text-purple-400 flex-shrink-0" />
              <span>Day 2: Essential Tools & Software (June 1st, 2025)</span>
            </div>
            <div className="flex items-center space-x-3 text-white text-sm">
              <FaCalendar className="text-purple-400 flex-shrink-0" />
              <span>Day 3: Landing Your First Client (June 2nd, 2025)</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mt-6 text-purple-200">
            <FaArrowRight className="animate-pulse text-sm" />
            <p className="text-sm font-medium">Complete the survey below to secure your spot</p>
          </div>
        </div>
        
        <!-- Desktop Hero Section -->
        <div className="hidden md:block pt-16 pb-12">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Make Your <span className="text-purple-400">First $1K</span> With <span className="text-purple-400">SMMA</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Join our FREE 3-day event and learn exactly how to start a profitable Social Media Marketing Agency from scratch
              </p>
              
              <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="flex items-center space-x-3 text-white">
                  <FaCalendar className="text-purple-400 flex-shrink-0" />
                  <span>Day 1: Mindset & Business Models (May 31st, 2025)</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <FaCalendar className="text-purple-400 flex-shrink-0" />
                  <span>Day 2: Essential Tools & Software (June 1st, 2025)</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <FaCalendar className="text-purple-400 flex-shrink-0" />
                  <span>Day 3: Landing Your First Client (June 2nd, 2025)</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-purple-200 mt-6">
                <FaArrowRight className="animate-pulse text-base" />
                <p className="text-lg font-medium">
                  Complete the survey below to secure your spot
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center relative">
              <div className="absolute top-4 right-8 md:right-12 lg:right-16">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  FREE EVENT
                </span>
              </div>
              <div className="relative w-full max-w-sm lg:max-w-md">
                <Image
                  src="/webinar/bade.png"
                  unoptimized={true}
                  alt="SMMA Expert"
                  width={500}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        -->

        {/* Form Section */}
        <div className="max-w-4xl mx-auto pt-8 pb-16">
          <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl border border-purple-500/20 relative p-4 md:p-8">
            <iframe
              data-tally-src="https://tally.so/embed/wLvRv2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="SMMA Event Registration"
              className="rounded-t-xl"
            ></iframe>

            {/* Cover for Tally powered-by */}
            <div className="absolute bottom-28 sm:bottom-28 right-0 w-[70px] min-[500px]:w-[220px] sm:w-[220px] h-[65px] sm:h-[55px] bg-slate-900 rounded-lg z-50" />

            <div className="text-center p-6 border-t border-purple-500/20 relative">
              <p className="text-transparent text-sm">
                Join hundreds of entrepreneurs who have already launched successful SMMA businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 