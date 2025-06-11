"use client"
import { useEffect, useState } from 'react';
import { FaDownload, FaWhatsapp, FaCheckCircle, FaFileAlt, FaUsers } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    // Auto-start download after 2 seconds
    const timer = setTimeout(() => {
      handleDownload();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    setDownloadStarted(true);
    // In production, this would be a link to your actual PDF file
    // For now, we'll create a mock download experience
    const link = document.createElement('a');
    link.href = '/The 7 Steps to Consistent Clients and Sales.pdf'; // This would be your actual PDF URL
    link.download = '7-Steps-to-Consistent-Clients-and-Sales.pdf';
    link.click();
  };

  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/JVPPHAR4w2bI4OUj4jqSrI', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />

      {/* Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        {/* Success Message */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-500/20 rounded-full mb-4 md:mb-6">
            <FaCheckCircle className="text-3xl md:text-4xl text-green-400" />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Thank You! 🎉
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto px-2">
            Your guide is ready for download, and you're all set to join our exclusive business community!
          </p>
          
          {/* Webinar Date */}
          <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6 md:mb-8">
            <span className="text-purple-400 text-sm font-semibold">FREE WEBINAR: Friday, June 20th, 2025</span>
          </div>
        </div>

        {/* Download Section */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          
          {/* PDF Download */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
            <FaFileAlt className="text-3xl md:text-4xl text-purple-400 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Your Free Guide is Ready
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
              "The 7 Steps to Consistent Clients and Sales" - Your complete framework for growing a successful service-based business.
            </p>
            
            <Button 
              onClick={handleDownload}
              className="bg-purple-400 hover:bg-purple-500 text-slate-900 font-bold py-3 px-4 md:px-6 text-base md:text-lg h-auto w-full mb-3 md:mb-4"
            >
              <FaDownload className="mr-2 text-sm md:text-base" />
              {downloadStarted ? 'Download Started!' : 'Download Your Guide'}
            </Button>
            
            {downloadStarted && (
              <p className="text-green-400 text-xs md:text-sm">
                ✓ Download started! Check your downloads folder.
              </p>
            )}
          </div>

          {/* WhatsApp Community */}
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
            <FaWhatsapp className="text-3xl md:text-4xl text-green-400 mb-3 md:mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Join Our Business Community
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
              Connect with successful business owners. Get webinar reminders + live updates
            </p>
            
            <Button 
              onClick={handleWhatsAppJoin}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 md:px-6 text-base md:text-lg h-auto w-full mb-3 md:mb-4"
            >
              <FaWhatsapp className="mr-2 text-sm md:text-base" />
              Join WhatsApp Group
            </Button>
            
            <p className="text-gray-400 text-xs md:text-sm">
              Connect with like-minded entrepreneurs
            </p>
          </div>
        </div>

        {/* What's Next Section */}
        {/* <div className="bg-slate-800/40 border border-purple-500/20 rounded-xl md:rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            What's Next? 🚀
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <div className="bg-purple-500/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-purple-400 font-bold text-sm md:text-base">1</span>
              </div>
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">Read the Guide</h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Go through each of the 7 steps and start implementing the action tips immediately.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-purple-400 font-bold text-sm md:text-base">2</span>
              </div>
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">Join the Community</h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Introduce yourself in the WhatsApp group and start connecting with other business owners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-purple-400 font-bold text-sm md:text-base">3</span>
              </div>
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">Take Action</h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Pick one step from the guide and implement it this week. Share your progress in the group!
              </p>
            </div>
          </div>
        </div> */}

        {/* Miftah Systems Intro */}
        {/* <div className="mt-8 md:mt-12 text-center bg-gradient-to-r from-purple-500/5 to-blue-500/5 border border-purple-500/10 rounded-xl md:rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Want to Make This Whole System Easier?
          </h3>
          <p className="text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-2">
            You now have a proven roadmap to attract clients, grow sales, and retain great customers. You can implement this manually over time—or you can save yourself the guesswork and start using a platform that handles most of this for you.
          </p>
          
          <div className="bg-slate-800/40 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
            <h4 className="text-lg md:text-xl font-bold text-purple-400 mb-3 md:mb-4">Introducing Miftah Systems</h4>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
              Miftah Systems is an all-in-one tool built specifically for businesses like yours in East Africa and beyond.
            </p>
            
            <div className="grid md:grid-cols-2 gap-3 md:gap-4 text-left">
              <div className="space-y-1 md:space-y-2">
                <p className="text-gray-300 text-xs md:text-sm">✅ Landing pages & lead forms</p>
                <p className="text-gray-300 text-xs md:text-sm">✅ CRM for managing contacts</p>
                <p className="text-gray-300 text-xs md:text-sm">✅ Automated email, SMS & WhatsApp workflows</p>
                <p className="text-gray-300 text-xs md:text-sm">✅ Booking calendars</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-gray-300 text-xs md:text-sm">✅ Sales pipelines</p>
                <p className="text-gray-300 text-xs md:text-sm">✅ Review requests & follow-up</p>
                <p className="text-gray-300 text-xs md:text-sm">✅ Invoices to contracts</p>
                <p className="text-gray-300 text-xs md:text-sm">✅ And much more...</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 text-xs md:text-sm">
            Instead of juggling 7 different tools, get everything you need in one place—built for entrepreneurs who want results, not tech headaches.
          </p>
        </div> */}

        {/* Footer */}
        {/* <div className="mt-8 md:mt-12 text-center text-gray-400">
          <p className="text-xs md:text-sm">
            Questions? Need help? Ask in our WhatsApp group - we're here to support your success! 🚀
          </p>
        </div> */}
      </div>
    </div>
  );
} 