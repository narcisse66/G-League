'use client';
import * as motion from 'motion/react-client';
import { useRef, useState, useEffect } from 'react';

export default function Highlight() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // play seulement au clic sur l'icône, pas sur la vidéo
  const handlePlayIconClick = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Day Highlight
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="text-xl text-muted-foreground text-center max-w-2xl mx-auto"
      >
        {"Today’s highlight: Sky Titans vs Wolves, opening matchday showdown."}
      </motion.p>

      <div className="mt-9 relative max-w-5xl mx-auto ">
        <video ref={videoRef} className=" rounded-lg mb-15" controls>
          <source
            src="https://res.cloudinary.com/dp7fm3nsj/video/upload/v1759750505/highlight2_w7rbsf.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Icône Play centrée */}
        {!isPlaying && (
          <div
            onClick={handlePlayIconClick}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <img
              src="/images/playicon.png"
              alt="Play"
              className="w-32 h-32 opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}
