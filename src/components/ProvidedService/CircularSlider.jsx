import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const positions = [
  {
    height: 420,
    z: 120,
    rotateY: 30,
    y: 0,
    clip: "polygon(0 0, 100% 8%, 100% 92%, 0 100%)", // Left
  },
  {
    height: 355,
    z: 0,
    rotateY: 30,
    y: 0,
    clip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Center
  },
  {
    height: 420,
    z: 120,
    rotateY: -30,
    y: 0,
    clip: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)", // Right
  },
];

export default function CircularSlider({ descriptionText, cardsData }) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

  

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const pos = positions[index];
    

      gsap.to(card, {
      height: pos.height,
      clipPath: pos.clip,
      transform: `translateZ(${pos.z}px) rotateY(${pos.rotateY}deg) translateY(${pos.y}px)`,
     
      });
    });
  }, [ currentIndex]);

  const visibleCards = cardsData.slice(currentIndex, currentIndex + 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    startAutoSlide();
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, cardsData.length - 3)
    );
    startAutoSlide();
  };


const startAutoSlide = () => {
  intervalRef.current = setInterval(() => {
    setCurrentIndex((prev) => {
      if (prev < cardsData.length - 3) { 
        return prev + 1;
      } else {
        clearInterval(intervalRef.current); 
        return prev;
      }
    });
  }, 9000); 
};
  useEffect(() => {
    startAutoSlide();
    
  }, []);


  return (
    <div className="flex flex-col items-center justify-center h-[600px] bg-[#EAF3FF] pb-[150px] font-Ovo">
      <div className="relative w-full max-w-[1400px] overflow-hidden">
        

       
        <div className="flex gap-1 justify-center items-center preserve-3d">
          <div className="h-[400px] w-[600px] font-Ovo text-black text-[0.8rem] ml-5 hidden md:block">
            {descriptionText}
          </div>
           <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 bg-white ml-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
         
          {visibleCards.map((card, index) => (
            
            <div
              key={currentIndex + index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative rounded-lg bg-[#EAF3FF] w-[520px] lg:mt-0 sm:mt-[100px]  overflow-hidden cursor-pointer"
       
            onClick={() => window.open(card.link)}
              
            >
              <motion.img
             initial={{ opacity: 0, x: 100, scale: 0.95 }}
             animate={{ opacity: 1, x: 0, scale: 1 }}
             exit={{ opacity: 0, x: -50, scale: 0.95 }}
             transition={{ duration: 0.5, ease: "easeOut" }}

                src={card.img}
                alt={`Card ${index + 1}`}
                className="w-full bg-cover lg:h-[420px] md:h-[420px] sm:h-[420px] xs:h-[220px]  z-[1] rounded-lg"
              />

              <div className="absolute inset-0 backdrop-blur-[1px] bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-[2] rounded-lg">
                <span className="text-black text-xs font-bold uppercase bg-white rounded-full px-2 z-[1002] ">🔗 Click to see our sites
                </span>
              </div>
             

              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -100, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 right-0 mt-[280px]  backdrop-blur-md pb-[150px] p-6 max-w-[400px] hidden md:block min-w-[100px] z-[1001] text-center"
              >
                <h2 className="text-3xl font-black text-[#0a0a0a] mb-9">
                  {card.title}
                </h2>
                <p className="text-lg text-[#080808] leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -30, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 right-0 mt-[120px] backdrop-blur-md   max-w-[400px] block md:hidden min-w-[100px] z-[1001] text-center"
              >
                <h2 className="text-sm font-black text-[#0a0a0a] mb-1">
                  {card.title}
                </h2>
                <p className="text-xs text-[#080808] leading-tight">
                  {card.desc}
                </p>
              </motion.div>
               
            </div>
          ))}
            <button
            onClick={handleNext}
            disabled={currentIndex >= cardsData.length - 3}
            className="p-2 mr-2 bg-white/90 rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}