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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-cyan-800 mb-6 text-center">Transform Your Professional Journey!</h1>
          
          <div className="space-y-6 mb-8">
            <p className="text-gray-700 text-lg text-center">
              Ready to stand out in your career and make a lasting impact?
              We're here to help you build an authentic, powerful personal brand.
            </p>
            
          

            <p className="text-gray-600 text-center font-medium">
              Just 30 seconds of your time can unlock a transformative personal branding journey!
            </p>
          </div>

          <iframe
            data-tally-src="https://tally.so/embed/wLvRv2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="403"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Personal Branding Program"
            className="mb-6"
          ></iframe>

          <div className="text-center text-sm text-gray-500">
            Your responses help us create the most valuable experience for you. 
            Join hundreds of professionals who have already transformed their careers with us!
          </div>
        </div>
      </div>
    </div>
  );
} 