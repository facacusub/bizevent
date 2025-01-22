"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CTAPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleVideoEnded = () => setIsVisible(true)
    document.addEventListener("videoEnded", handleVideoEnded)
    return () => document.removeEventListener("videoEnded", handleVideoEnded);
  }, [])

  if (!isVisible) return null

  return (
    (<div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-2 sm:p-4 z-50">
      <div
        className="bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-900 rounded-xl w-full max-w-4xl overflow-hidden relative">
        {/* Wave Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px auto",
          }} />

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 relative max-h-[90vh] overflow-y-auto">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center relative">
              <Image
                src="/warsame.png"
                alt="Course Preview"
                width={300}
                height={400}
                priority
                className="object-contain w-48 md:w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[400px]" />
              <div
                className="absolute top-2 right-2 bg-cyan-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                SPECIAL OFFER
              </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center text-white">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-lg md:text-2xl font-bold leading-tight">
                Get Instant Access to Warsame's successful personal branding framework
              </h2>
              <div className="space-y-3 md:space-y-4">
                <p className="text-cyan-100 text-base md:text-lg">Limited slots: 100 members only</p>
               
                <Button
                  onClick={() => (window.location.href = "https://your-stripe-checkout-url.com")}
                  className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white font-bold py-4 md:py-6 px-4 md:px-8 rounded-xl text-base md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Enroll Now 
                </Button>
                <p className="text-cyan-200 text-xs md:text-sm text-center">
                  🔒 Secure Payment • Instant Access 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="h-16 relative overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{
              background:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E\")",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
        </div>

        {/* Close Button */}
        {/* <button
          onClick={() => setIsVisible(false)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cyan-200 hover:text-white text-sm font-medium transition-colors">
          No thanks, I'll pass
        </button> */}
      </div>
    </div>)
  );
}

