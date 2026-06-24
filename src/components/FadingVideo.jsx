import { useEffect, useRef } from "react";

export default function FadingVideo({ src, className, style }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fade in once when the video is ready to play
    video.style.opacity = "0";
    video.style.transition = "opacity 1s ease-in-out";

    function handleCanPlay() {
      video.style.opacity = "1";
    }

    video.addEventListener("canplay", handleCanPlay);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
    />
  );
}
