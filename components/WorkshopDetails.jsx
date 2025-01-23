import React from 'react';
import { FaCalendar, FaClock, FaVideo } from 'react-icons/fa';
import { content } from '../app/content/content';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const WorkshopDetails = () => {
  const { WorkshopContent } = content;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          {WorkshopContent.title}
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Join us for a power-packed session that will transform your approach to audience monetization
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto place-items-center justify-center items-center">
          {WorkshopContent.episodes.map((episode) => (
            <div 
              key={episode.number} 
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={`/webinar/webinar${episode.number}.jpg`}
                  alt={`Episode ${episode.number} Cover`}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex items-center mb-4 space-x-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500">
                    <FaVideo className="text-xl" />
                  </span>
                  <div>
                    {/* <p className="text-purple-500 text-sm font-semibold">EPISODE {episode.number}</p> */}
                    <h3 className="text-xl font-bold text-white">
                      {episode.title}
                    </h3>
                  </div>
                </div>

                {/* Episode Details */}
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                  <span className="flex items-center">
                    <FaCalendar className="mr-2 text-cyan-500" />
                    Dec {24 + episode.number}, 2024
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-2 text-cyan-500" />
                    7:00 PM EST
                  </span>
                </div>

                {/* Topics List */}
                <ul className="space-y-3">
                  {episode.topics.map((topic, index) => (
                    <li key={index} className="flex items-start text-gray-300 group-hover:text-white transition-colors">
                      <span className="text-cyan-500 mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-6">
                  <Link href="/survey">
                    <Button 
                      className="w-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20"
                    >
                      Reserve Your Spot
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails; 