import React from 'react';
import { FaLightbulb, FaMagnet, FaRobot, FaCalendarAlt, FaHandshake, FaStar, FaHeart } from 'react-icons/fa';
import { Button } from './ui/button';
import Link from 'next/link';

const StepCard = ({ number, icon: Icon, title, description }) => (
  <div className="bg-slate-800/40 border border-purple-500/20 rounded-xl p-4 md:p-6 hover:border-purple-500/40 transition-all duration-300">
    <div className="flex items-center mb-3 md:mb-4">
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-purple-500/10 rounded-full mr-3 md:mr-4 flex-shrink-0">
        <Icon className="text-purple-400 text-lg md:text-xl" />
      </div>
      <div>
        <span className="text-purple-400 text-xs md:text-sm font-semibold">STEP {number}</span>
        <h3 className="text-white font-bold text-base md:text-lg leading-tight">{title}</h3>
      </div>
    </div>
    
    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

const GuideDetails = () => {
  const steps = [
    {
      number: 1,
      icon: FaLightbulb,
      title: "Refine Your Offer Until It's Obvious",
      description: "Create a crystal-clear offer that clients immediately understand and want to buy. No more confusing prospects."
    },
    {
      number: 2,
      icon: FaMagnet,
      title: "Consistently Attract the Right Leads",
      description: "Build a lead generation engine that brings qualified prospects automatically. Stop relying on referrals."
    },
    {
      number: 3,
      icon: FaRobot,
      title: "Automate Follow-Up Before You Burn Out",
      description: "Set up automated sequences that nurture leads without manual work. Work smarter, not harder."
    },
    {
      number: 4,
      icon: FaCalendarAlt,
      title: "Make Booking Seamless and Simple",
      description: "Remove all friction from your booking process. Let prospects schedule 24/7, even when you're sleeping."
    },
    {
      number: 5,
      icon: FaHandshake,
      title: "Create a Simple, Repeatable Sales Flow",
      description: "Develop a clean sales process that helps the right people say yes. No high-pressure tactics needed."
    },
    {
      number: 6,
      icon: FaStar,
      title: "Deliver World-Class Onboarding",
      description: "Create an onboarding process that makes clients feel supported from day one. Build loyalty and referrals."
    },
    {
      number: 7,
      icon: FaHeart,
      title: "Turn Clients into Fans and Referrers",
      description: "Transform satisfied clients into active promoters. Learn when and how to ask for reviews and referrals."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 px-2">
            What's Inside the Guide
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Each step addresses a core part of your client journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-8 md:mb-12">
          {steps.map((step) => (
            <StepCard 
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <Link href="/survey">
            <Button className="bg-purple-400 hover:bg-purple-500 text-slate-900 font-bold py-3 md:py-3 px-6 md:px-8 text-base md:text-lg h-auto w-full md:w-auto">
              Get Your Free Guide Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuideDetails; 