"use client"
import { useEffect } from 'react';
import { FaCheckCircle, FaWhatsapp, FaDownload, FaCalendar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SuccessPage() {
  // Auto-download PDF on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/The 7 Steps to Consistent Clients and Sales.pdf'; // Adjust path to your PDF file
      link.download = '7-Steps-to-Consistent-Clients-and-Sales.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000); // 2 second delay to let page load

    return () => clearTimeout(timer);
  }, []);

  const handleManualDownload = () => {
    const link = document.createElement('a');
    link.href = '/The 7 Steps to Consistent Clients and Sales.pdf'; // Adjust path to your PDF file
    link.download = '7-Steps-to-Consistent-Clients-and-Sales.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />

      {/* Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        {/* Success Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 mb-6">
            <FaCheckCircle className="text-green-400 mr-3 text-xl" />
            <span className="text-green-400 text-lg font-semibold">PAYMENT SUCCESSFUL!</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Welcome to the Miftah Business Coaching Community!
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your strategy call has been booked successfully. Follow the steps below to get started.
          </p>
        </div>

        {/* Next Steps */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          
          {/* Step 1 - WhatsApp Group */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="text-white text-2xl" />
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Step 1: Join Our WhatsApp Group
            </h2>
            <p className="text-gray-300 mb-6">
              Get instant access to our exclusive community of business owners and daily tips from Warsame.
            </p>
            
            <Link href="https://chat.whatsapp.com/HyRjlxlMsEE01MmqclHOyr" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 text-base h-auto w-full">
                <FaWhatsapp className="mr-2" />
                Join WhatsApp Group
              </Button>
            </Link>
          </div>

          {/* Step 2 - Download Guide */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaDownload className="text-white text-2xl" />
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Step 2: Download Your Free Guide
            </h2>
            <p className="text-gray-300 mb-4">
              Get immediate access to "The 7 Steps to Consistent Clients and Sales" guide.
            </p>
            <p className="text-green-400 text-sm mb-6">
              📥 Download starting automatically...
            </p>
            
            <Button 
              onClick={handleManualDownload}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 text-base h-auto w-full"
            >
              <FaDownload className="mr-2" />
              Download Guide Again
            </Button>
          </div>
        </div>

        {/* Next Steps Info */}
        {/* <div className="bg-slate-800/40 border border-purple-500/20 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            What Happens Next?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Email Confirmation</h4>
              <p className="text-gray-400 text-sm">You'll receive an email with your purchase receipt and next steps.</p>
            </div>
            
            <div>
              <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Calendar Link</h4>
              <p className="text-gray-400 text-sm">Warsame will send you a calendar link to book your 60-minute strategy call.</p>
            </div>
            
            <div>
              <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Strategy Session</h4>
              <p className="text-gray-400 text-sm">Get personalized guidance to transform your business.</p>
            </div>
          </div>
        </div> */}

        {/* Footer */}
        {/* <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Questions? Message us in the WhatsApp group or email support@miftahcoaching.com
          </p>
        </div> */}
      </div>
    </div>
  );
} 