// import RegistrationForm from "@/components/RegistrationForm";

// export default function Home() {
//   return (
//     (<div
//       className="min-h-screen bg-gradient-to-br from-cyan-50 to-white flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <h1 className="text-3xl font-bold text-cyan-800 mb-6 text-center">Webinar Registration</h1>
//         <RegistrationForm />
//       </div>
//     </div>)
//   );
// }

"use client"
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-900 relative">
      {/* Wave Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "100px auto",
        }} />

      {/* Content Container */}
      <div className="relative">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto px-4 pt-8 sm:pt-12 pb-12 sm:pb-24">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center">
            {/* Left Column - Content */}
            <div className="text-white space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Transform Your <span className="text-cyan-200">Professional</span> Journey
              </h1>
              <p className="text-lg sm:text-xl text-cyan-100 leading-relaxed">
                Ready to stand out in your career and make a lasting impact?
                We're here to help you build an authentic, powerful personal brand.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4 text-cyan-200">
                <FaArrowRight className="animate-pulse text-sm sm:text-base" />
                <p className="text-base sm:text-lg font-medium">
                  Less than 30 seconds to your transformation
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex items-center justify-center relative mb-6 md:mb-0 order-1 md:order-2">
              <Image
                src="/warsame.png"
                alt="Personal Branding Expert"
                width={300}
                height={400}
                priority
                className="object-contain w-72 sm:w-48 md:w-full h-auto  sm:max-h-[250px] md:max-h-[400px]"
              />
              <div className="absolute top-2 left-2 bg-cyan-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                LIMITED TIME
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-slate-200 px-4 backdrop-blur-sm rounded-xl border border-white/20 relative">
            <iframe
              data-tally-src="https://tally.so/embed/wLvRv2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Personal Branding Program"
              className="rounded-t-xl"
            ></iframe>

            {/* Cover for Tally powered-by */}
            <div className="absolute bottom-24 sm:bottom-20 right-0 w-[50px] min-[550px]:w-[220px] sm:w-[220px] h-[65px] sm:h-[55px] bg-slate-200  z-50" />

            <div className="text-center p-6 border-t border-white/20 relative">
              <p className="text-gray-600 text-sm">
                Join hundreds of professionals who have already transformed their careers with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 