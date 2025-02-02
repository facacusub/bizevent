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
          playbackId="qAH2IWPDpY67fU2UshcbjGdNqGIDeCh02McKMrTu01yOs"
          metadataVideoTitle="Exclusive Workshop"
          metadata={{ viewer_user_id: "Placeholder" }}
          primaryColor="#51effb"
          secondaryColor="#000000"
          accentColor="#51effb"
          maxResolution="1080p"
          minBufferDuration={15}
          maxBufferDuration={45}
          targetBufferDuration={30}
          preload="auto"
          defaultHiddenCaptions={true}
          autoPlay
poster="https://image.mux.com/qAH2IWPDpY67fU2UshcbjGdNqGIDeCh02McKMrTu01yOs/thumbnail.webp?width=1080&height=1920&time=5"

          muted={false} />
      </div>
    </div>
  );
}

// streamType="on-demand"
// playbackId="qAH2IWPDpY67fU2UshcbjGdNqGIDeCh02McKMrTu01yOs"
// metadataVideoTitle="Placeholder (optional)"
// metadata-viewer-user-id="Placeholder (optional)"
// primary-color="#1cc0e9"
// secondary-color="#000000"
// accent-color="#51f8fb"


  

// autoPlay
// poster="https://image.mux.com/qAH2IWPDpY67fU2UshcbjGdNqGIDeCh02McKMrTu01yOs/thumbnail.png?width=214&height=121&time=241"
// loop