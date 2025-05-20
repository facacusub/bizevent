"use client"

export default function VideoPlayer() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-xl md:text-3xl font-bold mb-6 text-purple-400">Day 1: Mindset & Business Models</h1>
            
            {/* Bunny Stream embed using the exact code provided */}
            <div style={{position:'relative',paddingTop:'56.25%',marginBottom:'2rem'}}>
              <iframe 
                src="https://iframe.mediadelivery.net/embed/328838/30a3525b-9f49-4df7-bdd0-53853c026221?autoplay=true&loop=true&muted=true&preload=true&responsive=true" 
                loading="lazy" 
                style={{border:0,position:'absolute',top:0,height:'100%',width:'100%'}} 
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                allowFullScreen={true}
              ></iframe>
            </div>
            
            
          </div>
          
          
        </div>
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