'use client'
import React from 'react';
import { FaLaptop, FaChartLine, FaUsers, FaDollarSign, FaRocket, FaGraduationCap, FaGlobe, FaBriefcase, FaCogs } from 'react-icons/fa';
import { content } from '../app/content/content';
import { Button } from './ui/button';
import Link from 'next/link';

const ReasonCard = ({ Icon, title, description }) => (
  <div className="bg-slate-800/40 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all">
    <Icon className="text-4xl text-purple-500 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const WhyAttendWorkshop = () => {
  const { benefits } = content;

  const benefitItems = [
    {
      Icon: FaDollarSign,
      title: "HIGH PROFIT MARGINS",
      description: "SMMA services typically command 30-70% profit margins with recurring revenue"
    },
    {
      Icon: FaLaptop,
      title: "LOW STARTUP COSTS",
      description: "Begin your agency with minimal investment and scale as you grow"
    },
    {
      Icon: FaGlobe,
      title: "LOCATION FREEDOM",
      description: "Work from anywhere while serving clients around the world"
    },
    {
      Icon: FaChartLine,
      title: "HIGH-DEMAND SKILL",
      description: "Every business needs social media marketing services in today's digital era"
    },
    {
      Icon: FaBriefcase,
      title: "BE YOUR OWN BOSS",
      description: "Create your own schedule and build a business on your terms"
    },
    {
      Icon: FaCogs,
      title: "SCALABLE BUSINESS MODEL",
      description: "Easily scale from solo freelancer to full-service agency with team members"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl text-center text-purple-300 mb-2 font-bold">{benefits.title}</h2>
        <p className="text-lg text-center max-w-5xl mx-auto mb-12 text-gray-300">
          Discover why thousands of entrepreneurs are starting Social Media Marketing Agencies
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
              className="bg-purple-400 hover:bg-purple-500 text-slate-900 font-bold py-4 px-8 text-sm md:text-xl h-auto"
            >
              JOIN THE FREE EVENT
            </Button>
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            Take the first step toward building your profitable SMMA business today
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendWorkshop;