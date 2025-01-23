'use client'
import React from 'react';
import { FaLaptop, FaChartLine, FaUsers, FaDollarSign, FaRocket, FaGraduationCap } from 'react-icons/fa';
import { content } from '../app/content/content';
import { Button } from './ui/button';
import Link from 'next/link';

const ReasonCard = ({ Icon, title, description }) => (
  <div className="bg-slate-800/40 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
    <Icon className="text-4xl text-cyan-500 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const WhyAttendWorkshop = () => {
  const { benefits } = content;

  const benefitItems = [
    {
      Icon: FaDollarSign,
      title: "BUILD PASSIVE INCOME",
      description: "Create sustainable revenue streams from your expertise and knowledge"
    },
    {
      Icon: FaUsers,
      title: "GROW YOUR AUDIENCE",
      description: "Learn proven strategies to build and engage a loyal following"
    },
    {
      Icon: FaChartLine,
      title: "SCALE YOUR IMPACT",
      description: "Reach more people while maintaining quality and personal touch"
    },
    {
      Icon: FaLaptop,
      title: "WORK FROM ANYWHERE",
      description: "Build a location-independent business around your expertise"
    },
    {
      Icon: FaGraduationCap,
      title: "LEVERAGE YOUR KNOWLEDGE",
      description: "Transform your expertise into profitable digital products"
    },
    {
      Icon: FaRocket,
      title: "ACCELERATE YOUR GROWTH",
      description: "Fast-track your journey with proven monetization strategies"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-center text-cyan-300 mb-2">{benefits.title}</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-300">
          Learn how to transform your knowledge into a profitable online business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {benefitItems.map((item, index) => (
            <ReasonCard 
              key={index}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link href="/survey">
            <Button 
              className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold py-4 px-8 text-sm md:text-xl h-auto"
            >
              JOIN THE WORKSHOP NOW
            </Button>
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            Don't miss this opportunity to transform your expertise into a thriving business
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendWorkshop;