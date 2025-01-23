import React from 'react';
import { content } from '../app/content/content';
import { Button } from './ui/button';
import { FaCalendar, FaClock, FaVideo } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const StatCard = ({ number, label }) => (
  <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg text-center">
    <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{number}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);

const Hero = () => {
  const { hero } = content;

  return (
    <section className="relative min-h-screen w-full   flex flex-col items-center justify-center">
       {/* Grid Background Effect */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] md:h-[60vh]  flex items-center justify-center">
        <Image
          // src="/webinar/bade.png"
          src="/webinar/bade.png"
          alt="Hero Background"
          width={800}
          height={1000}
          className="object-cover w-full h-full md:h-[60vh] md:w-[90vh] object-center"
          priority
        />
        {/* Bottom Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </div>

      {/* Content Section */}
      <div className="relative bg-gradient-to-b from-slate-950 to-slate-950/95 px-4 pb-16">
        <div className="container w-full   md:max-w-4xl -mt-20 flex flex-col text-center items-center justify-center">
          {/* Main Content */}
          <div className="text-white space-y-6 mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight">
              Turn Your <span className="text-cyan-400">Expertise</span> into <span className="text-cyan-400">Profit</span>
            </h1>
            <h2 className="text-sm md:text-xl lg:text-2xl text-gray-300 w-full md:max-w-4xl">
              Join My exclusive workshop and discover how I generated $150,000 through personal branding and community-driven monetization
            </h2>
          </div>

          {/* workshop Details */}
          {/* <div className="flex flex-col md:flex-row justify-start md:items-center font-medium space-y-4 md:space-y-0 md:space-x-8 mb-8 text-sm lg:text-lg text-white">
            <div className="flex items-center">
              <FaCalendar className="mr-2 text-cyan-400" />
              <span>December 25, 2024</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-cyan-400" />
              <span>7:00 PM EST</span>
            </div>
            <div className="flex items-center">
              <FaVideo className="mr-2 text-cyan-400" />
              <span>Live Online workshop</span>
            </div>
          </div> */}

          {/* Stats Grid
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <StatCard number="$200K+" label="Revenue Generated" />
            <StatCard number="300K+" label="Social Following" />
            <StatCard number="1000+" label="Students Taught" />
          </div> */}

          {/* CTA Button */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="/survey">
              <Button 
                className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold py-4 px-8 text-sm md:text-xl h-auto" 
              >
                JOIN THE WORKSHOP
              </Button>
            </Link>
            {/* <p className="text-sm text-gray-400">
              Limited spots available. Reserve your seat now!
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;