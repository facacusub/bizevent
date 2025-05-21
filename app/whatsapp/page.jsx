"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function WhatsAppPage() {
  const [joined, setJoined] = useState(false);
  
  const handleJoinClick = () => {
    // Open the WhatsApp group link in a new tab
    window.open('https://chat.whatsapp.com/yourGroupLinkHere', '_blank');
    setJoined(true);
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
        <div className="w-full max-w-md mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our <span className="text-purple-400">WhatsApp Group</span>
          </h1>

          <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg">
            <b>Important:</b> All event links and access details will be sent exclusively through this WhatsApp group.
          </p>

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
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg h-auto w-full flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg sm:text-xl flex-shrink-0" />
              <span className="whitespace-nowrap">{joined ? "You've Joined" : "Join Now to Get Event Access"}</span>
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