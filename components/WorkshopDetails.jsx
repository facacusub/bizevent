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
        <h2 className="text-2xl md:text-4xl text-center text-purple-300 mb-2 font-bold">
          {WorkshopContent.title}
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A step-by-step roadmap to launching your profitable SMMA and earning your first $1,000
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center justify-center items-center">
          {WorkshopContent.episodes.map((episode) => (
            <div 
              key={episode.number} 
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={`/webinar/webinar${episode.number}.jpg`}
                  alt={`Day ${episode.number} Cover`}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex items-center mb-4 space-x-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 text-purple-500">
                    <FaCalendar className="text-xl" />
                  </span>
                  <div>
                    <p className="text-purple-500 text-sm font-semibold">DAY {episode.number}</p>
                    <h3 className="font-bold text-white">
                      {episode.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{episode.date}</p>
                  </div>
                </div>

                {/* Topics List */}
                <ul className="space-y-3">
                  {episode.topics.map((topic, index) => (
                    <li key={index} className="flex text-sm items-start text-gray-300 group-hover:text-white transition-colors">
                      <span className="text-purple-500 mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-6">
                  <Link href="/survey">
                    <Button 
                      className="w-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/20"
                    >
                      Join Day {episode.number}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/survey">
            <Button 
              className="bg-purple-400 hover:bg-purple-500 text-slate-900 font-bold py-4 px-8 text-lg h-auto"
            >
              SECURE YOUR SPOT NOW
            </Button>
          </Link>
          <p className="mt-4 text-gray-400 text-sm">Complete a quick survey to join the free 3-day event</p>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails; 