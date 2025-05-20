import React from 'react';
import { content } from '../app/content/content';
import { Button } from './ui/button';
import { FaCalendar, FaClock, FaVideo } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const StatCard = ({ number, label }) => (
  <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg text-center">
    <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">{number}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);

const Hero = () => {
  const { hero } = content;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center md:bg-cover bg-contain" style={{ backgroundImage: 'url(/bg.jpg)' }}>
       {/* Grid Background Effect */}
       {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" /> */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] md:h-[60vh]  flex items-center justify-center">
        <Image
          // src="/webinar/bade.png"
          src="/webinar/bade.png"
          alt="Hero Background"
          width={800}
          height={1000}
          className="object-cover w-full h-full md:h-[70vh] md:w-[98vh] object-center"
          priority
        />
        {/* Bottom Gradient Fade */}
      </div>

      {/* Content Section */}
      <div className="relative bg-gradient-to-b -mt-20 from-slate-950 to-slate-950/95 px-4 pb-16 h-full  flex flex-col items-center justify-center rounded-3xl">
        <div className="container w-full   md:max-w-4xl  flex flex-col text-center items-center justify-center gap-2">
          {/* Main Content */}
          <div className="text-white space-y-6 mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight">
              Make Your <span className="text-purple-400">First $1K</span> With <span className="text-purple-400">SMMA</span>
            </h1>
            <h2 className="text-sm md:text-xl lg:text-2xl text-gray-400 w-full md:max-w-4xl">
              Join our FREE 3-day event and learn how to start a profitable Social Media Marketing Agency from scratch
            </h2>
            <p className="text-sm md:text-lg text-purple-400">
              May 31st - June 2nd, 2025
            </p>
          </div>

        

          {/* CTA Button */}
          <div className="flex flex-col items-center space-y-4 mt-2">
            <Link href="/survey">
              <Button 
                className="bg-purple-400 hover:bg-purple-500 text-slate-900 font-bold py-4 px-8 text-sm md:text-xl h-auto" 
              >
                JOIN THE FREE EVENT
              </Button>
            </Link>
            <p className="text-sm text-gray-400">
              Limited spots available. Complete the survey to secure your place!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;