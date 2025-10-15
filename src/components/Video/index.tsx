"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-8">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Providing the support, guidance, and solutions you need whenever you need them."
          center
          mb="10px"
        />
      </div>

      <div className="relative flex justify-center">
        <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-2xl dark:border-gray-700">
          {!isPlaying ? (
            <>
              <Image
                src="/images/video/image.png"
                alt="video image"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  aria-label="video play button"
                  onClick={() => setIsPlaying(true)}
                  className="text-primary flex h-20 w-20 items-center justify-center rounded-full bg-white/70 shadow-lg transition hover:bg-white"
                >
                  <svg
                    width="28"
                    height="32"
                    viewBox="0 0 16 18"
                    className="fill-current"
                  >
                    <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/L61p2uyiMSo?autoplay=1&rel=0"
              title="Video player"
              allow="autoplay; fullscreen; picture-in-picture"
              className="h-full w-full"
            />
          )}
        </div>
      </div>

      {/* Decorative shape background */}
      <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
}
