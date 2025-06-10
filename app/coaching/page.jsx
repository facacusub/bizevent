"use client"
import { useState } from 'react';
import { FaPlay, FaDownload, FaVideo, FaCheckCircle, FaArrowRight, FaCreditCard, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CoachingPage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  // WhatsApp message for manual payment
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in booking a 1-on-1 Strategy Call with Warsame for $49. I'd like to pay manually. Can you help me with the payment process?"
  );
  const whatsappUrl = `https://wa.me/252905616363?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />

      {/* Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <FaCheckCircle className="text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-semibold">SURVEY COMPLETED</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Before You Get Your Free Guide...
          </h1>
          <p className="text-md text-gray-300 max-w-3xl mx-auto">
            Watch this personal message from Warsame about a special opportunity to accelerate your results
          </p>
        </div>

        {/* Flex Column Layout */}
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          
          {/* Must Watch CTA */}
          {/* <div className="text-center mb-4">
            <div className="inline-flex items-center bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2">
              <FaPlay className="text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wide">MUST WATCH - Personal Message from Warsame</span>
            </div>
          </div> */}

          {/* Video Section */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              {/* Auto-playing Video */}
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden aspect-video border border-purple-500/20">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D5NoYXe-xNI?autoplay=1&rel=0"
                  title="Warsame Coaching Offer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
              
              {/* Video Badge */}
              <div className="absolute -top-4 -right-4 bg-red-500 rounded-full px-3 py-1">
                <span className="text-white text-sm font-semibold">● LIVE</span>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="w-full max-w-5xl">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 md:p-8 text-center">
              
              {/* Offer Headline */}
              {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                1-on-1 Strategy Call with Warsame
              </h2>
              <p className="text-gray-300 mb-6">
                Get personalized guidance to implement the 7 steps in your specific business
              </p>
               */}
              {/* Price */}
              <div className="mb-6">
                <div className="text-gray-400 line-through text-lg">$99</div>
                <div className="text-4xl font-bold text-purple-400">$49</div>
                <div className="text-sm text-gray-400">Limited time offer</div>
              </div>

              {/* What's Included - Minimal */}
              {/* <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">60-minute strategy session</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Personalized action plan</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Custom marketing strategy</span>
                </div>
              </div> */}

              {/* What You Get */}
              {/* <div className="mb-6">
                <p className="text-gray-300 text-sm mb-2">After purchase, you'll get:</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <span>• 1-on-1 Strategy Call</span>
                  <span>• WhatsApp Group Access</span>
                  <span>• Free Guide</span>
                </div>
              </div> */}

              {/* Payment Options Split */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Choose Your Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Card Payment */}
                  <div className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-4">
                    <div className="mb-3">
                      <FaCreditCard className="text-purple-400 text-2xl mx-auto mb-2" />
                      <h4 className="text-white font-semibold">Pay with Card</h4>
                      <p className="text-gray-400 text-sm">Instant access via card payment</p>
                    </div>
                    <Link href="https://buy.stripe.com/7sYcN61oA2zHa6m9Lae7m1c" target="_blank">
                      <Button className="border-purple-500/30 bg-purple-600 hover:bg-purple-700 font-semibold py-3 px-6 text-base h-auto w-full">
                        <FaVideo className="mr-2" />
                        Book Now - $49
                      </Button>
                    </Link>
                  </div>

                  {/* WhatsApp Payment */}
                  <div className="bg-slate-800/50 border border-green-500/30 rounded-xl p-4">
                    <div className="mb-3">
                      <FaWhatsapp className="text-green-400 text-2xl mx-auto mb-2" />
                      <h4 className="text-white font-semibold">Pay Manually</h4>
                      <p className="text-gray-400 text-sm">Contact our team via WhatsApp. Click the button</p>
                    </div>
                    <Link href={whatsappUrl} target="_blank">
                      <Button className="border-green-500/30 bg-green-600 hover:bg-green-700 font-semibold py-3 px-6 text-base h-auto w-full">
                        <FaWhatsapp className="mr-2" />
                        Contact +252 905 616 363
                      </Button>
                    </Link>
                  </div>

                </div>
              </div>

              {/* Continue to Free Guide - Below Split */}
              <div className="border-t border-purple-500/20 pt-6">
                <p className="text-gray-400 text-sm mb-4">Not ready to book?</p>
                <Link href="/thank-you">
                  <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-white font-semibold py-3 px-6 text-base h-auto w-full max-w-xs mx-auto">
                    <FaDownload className="mr-2" />
                    Continue to Free Guide
                  </Button>
                </Link>
              </div>

              {/* Guarantee */}
              {/* <div className="text-center mt-4">
                <p className="text-xs text-gray-400">
                  30-day money-back guarantee
                </p>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 