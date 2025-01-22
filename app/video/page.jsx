"use client"
import CTAPopup from "@/components/CTAPopup"
import VideoPlayer from "@/components/VideoPlayer"

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-800 mb-6 text-center">Your Exclusive Webinar</h1>
        <VideoPlayer />
        <div className="mt-8 text-center">
          <a
            href="/login"
            className="inline-block w-64 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Enroll Now
          </a>
        </div>
      </div>
      <CTAPopup />
    </div>
  );
}

