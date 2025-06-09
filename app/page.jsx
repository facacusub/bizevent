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
import LeadMagnetHero from '@/components/LeadMagnetHero';
import GuideDetails from '@/components/GuideDetails';
import WhyDownloadGuide from '@/components/WhyDownloadGuide';

export default function Home() {
  return (
    <main className="bg-slate-950">
      <LeadMagnetHero />
      <GuideDetails />
      <WhyDownloadGuide />
    </main>
  );
} 