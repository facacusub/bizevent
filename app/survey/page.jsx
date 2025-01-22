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
          <h1 className="text-3xl font-bold text-cyan-800 mb-6 text-center">Help Us Serve You Better!</h1>
          <p className="text-gray-600 mb-6 text-center">
            Take a quick 1-minute survey to help us customize your learning experience. 
            Your feedback is invaluable in shaping our program to better meet your needs.
          </p>
          <iframe
            data-tally-src="https://tally.so/embed/wLvRv2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="403"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Personal Branding Program"
            className="mb-4"
          ></iframe>
        </div>
      </div>
    </div>
  );
} 