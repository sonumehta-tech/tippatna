'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <div className="w-full mx-auto mt-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        swipeable
        emulateTouch
      >
        {/* Slide 1 */}
        <div className="relative md:h-[80vh] h-[40vh]">
          <Image
            src="/images/carosel1.jpg"
            alt="Slide 1"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Slide 2 */}
        <div className="relative md:h-[80vh] h-[40vh]">
          <Image
            src="/images/carosel3.jpg"
            alt="Slide 2"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Slide 3 */}
        <div className="relative md:h-[80vh] h-[40vh]">
          <Image
            src="/images/caurosel3.jpg"
            alt="Slide 3"
            fill
            className="object-cover rounded-md"
            unoptimized
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
