"use client"

import { useEffect, useRef, useState } from "react"
import MuxPlayer from "@mux/mux-player-react"

export default function VideoPlayer() {
  const playerRef = useRef(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.addEventListener("ended", () => {
        // Trigger CTA popup when video ends
        document.dispatchEvent(new Event("videoEnded"))
      })

      playerRef.current.addEventListener("error", (e) => {
        console.error("Video playback error:", e)
        setError("An error occurred during playback. Please refresh the page or try again later.")
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.removeEventListener("ended", () => {})
        playerRef.current.removeEventListener("error", () => {})
      }
    }
  }, [])

  if (error) {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg p-4 bg-red-50 text-red-600">
        {error}
      </div>
    )
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <MuxPlayer
          ref={playerRef}
          style={{
            height: "100%",
            maxWidth: "100%",
            objectFit: "cover",
          }}
          streamType="on-demand"
          playbackId="PqYG01g01dxwUap6pG5XqT1Wu4pHE01KUyuztUCMwUfI58"
          metadataVideoTitle="Exclusive Workshop"
          metadata={{ viewer_user_id: "Placeholder" }}
          primaryColor="#ffffff"
          secondaryColor="#000000"
          accentColor="#51effb"
          maxResolution="1080p"
          minBufferDuration={15}
          maxBufferDuration={45}
          targetBufferDuration={30}
          preload="auto"
          defaultHiddenCaptions={true}
          autoPlay
          muted={false} />
      </div>
    </div>
  );
}

