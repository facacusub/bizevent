import React from 'react';
import { FaClock, FaRocket, FaUsers, FaWhatsapp } from 'react-icons/fa';
import { Button } from './ui/button';
import Link from 'next/link';

const BenefitCard = ({ Icon, title, description }) => (
  <div className="bg-slate-800/40 p-4 md:p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
    <Icon className="text-2xl md:text-3xl text-purple-400 mb-3 md:mb-4" />
    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white leading-tight">{title}</h3>
    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

const WhyDownloadGuide = () => {
  const benefits = [
    {
      Icon: FaClock,
      title: "Quick Implementation",
      description: "Each step can be implemented immediately. Start seeing results within days, not months."
    },
    {
      Icon: FaRocket,
      title: "Proven Framework",
      description: "Battle-tested system used by successful service providers across East Africa and beyond."
    },
    {
      Icon: FaUsers,
      title: "Built for Service Businesses",
      description: "Specifically designed for coaches, consultants, and agencies who want consistent clients."
    },
    {
      Icon: FaWhatsapp,
      title: "Business Community Access",
      description: "Join our exclusive WhatsApp group with successful business owners sharing tips and strategies."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-300 mb-3 md:mb-4 px-2">
            Why Download This Guide?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Get the proven roadmap that actually works for service-based businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              Icon={benefit.Icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Ready to Get Started?
            </h3>
            
            <Link href="/survey">
              <Button className="bg-purple-400 hover:bg-purple-500 text-slate-900 font-bold py-3 md:py-4 px-6 md:px-8 text-base md:text-lg h-auto mb-3 md:mb-4 w-full md:w-auto">
                Get Your Free Guide Now
              </Button>
            </Link>
            
            <div className="text-xs md:text-sm text-gray-400 space-y-1">
              <p>✓ Instant download • ✓ Community access • ✓ No spam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDownloadGuide; 