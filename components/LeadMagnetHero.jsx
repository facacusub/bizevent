import React from 'react';
import { Button } from './ui/button';
import { FaDownload, FaFileAlt, FaUsers, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const LeadMagnetHero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-12">
          
          {/* Title Section */}
          <div className="space-y-4 md:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1.5 md:px-4 md:py-2">
              <FaFileAlt className="text-purple-400 mr-1.5 md:mr-2 text-sm md:text-base" />
              <span className="text-purple-400 text-xs md:text-sm font-semibold">FREE GUIDE</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                The <span className="text-purple-400">7 Steps</span> to
                Consistent Clients
              </h1>
              <p className="text-lg md:text-xl text-gray-300  mx-auto">
                Stop chasing leads. Start attracting the right clients with this proven framework.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-w-5xl w-full">
            {/* Main Thumbnail */}
            <div className="relative">
              <Image
                src="/guide.png"
                alt="The 7 Steps to Consistent Clients - Free Business Guide by Warsame Bade"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl border border-purple-500/20"
                priority
                unoptimized
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-500/10 rounded-2xl blur-xl -z-10 scale-105"></div>
              
              {/* Download Indicator */}
              <div className="absolute -bottom-4 -right-4 bg-purple-400 rounded-full p-3 shadow-lg animate-pulse">
                <FaDownload className="text-slate-900 text-lg" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 animate-pulse bg-purple-500/50 backdrop-blur-sm rounded-full px-3 py-1 border border-purple-500/30">
              <span className="text-purple-300 text-sm font-semibold">FREE</span>
            </div>
            
            <div className="absolute top-4 -right-6 bg-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-purple-500/30">
              <span className="text-purple-400 text-sm font-semibold">PDF GUIDE</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <Link href="/survey">
              <Button className="bg-purple-400 hover:bg-purple-500 text-slate-900 font-bold py-3 md:py-4 px-6 md:px-8 text-base md:text-lg h-auto inline-flex items-center">
                <FaDownload className="mr-2 text-sm md:text-base" />
                Get Free Guide + Community Access
              </Button>
            </Link>
            
            <p className="text-xs md:text-sm text-gray-400">
              2-minute survey • Direct downloads • No spam
            </p>
          </div>

          {/* Other Stuff - Benefits & Stats */}
          <div className="space-y-6 md:space-y-8 w-full">
            
            {/* Quick Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
              <div className="flex items-center space-x-2 text-white text-sm md:text-base">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>7 proven steps to consistent clients</span>
              </div>
              <div className="flex items-center space-x-2 text-white text-sm md:text-base">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>Real action tips (no theory)</span>
              </div>
              <div className="flex items-center space-x-2 text-white text-sm md:text-base">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>Built for service providers</span>
              </div>
              <div className="flex items-center space-x-2 text-white text-sm md:text-base">
                <span className="text-green-500 flex-shrink-0"><FaWhatsapp /></span>
                <span>WhatsApp community access</span>
              </div>
            </div>

            {/* Stats Row */}
            {/* <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-slate-800/40 rounded-lg p-3 text-center border border-purple-500/20">
                <div className="text-purple-400 font-bold text-lg md:text-xl">500+</div>
                <div className="text-gray-300 text-xs">Downloads</div>
              </div>
              <div className="bg-slate-800/40 rounded-lg p-3 text-center border border-purple-500/20">
                <div className="text-purple-400 font-bold text-lg md:text-xl">15</div>
                <div className="text-gray-300 text-xs">Min Read</div>
              </div>
              <div className="bg-slate-800/40 rounded-lg p-3 text-center border border-purple-500/20">
                <div className="text-purple-400 font-bold text-lg md:text-xl">7</div>
                <div className="text-gray-300 text-xs">Action Steps</div>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadMagnetHero; 