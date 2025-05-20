"use client"
import dynamic from "next/dynamic"
import CTAPopup from "@/components/CTAPopup"

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false })

export default function VideoPage() {
  return (
    <div className="min-h-screen  from-purple-50 to-white p-4 bg-[url('/bg.jpg')] bg-cover bg-center">
      {/* inset overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-6 text-center">Your Exclusive Webinar</h1>
        <VideoPlayer />
        {/* <div className="mt-8 text-center">
          <a
            href="https://courses.facacusub.com/enroll/2987810?price_id=3843609"
            target="_blank"
            className="inline-block w-64 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Enroll Now
          </a>
        </div> */}
      </div>
      <CTAPopup />
    </div>
  );
}

