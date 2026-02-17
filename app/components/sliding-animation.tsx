'use client';

export default function SlidingAnimation() {
  const images = [
    '/images/slide.png',
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png',
    '/images/slide4.png',
    '/images/slide5.png',
  ];

  // Duplicate elements for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-4" style={{ maskImage: 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 10%, black 90%, transparent 100%)' }}>
      <div className="flex animate-slide" style={{ gap: '80px' }}>
        {duplicatedImages.map((image, index) => (
          <div
            key={`img-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ width: '175px', height: '30px' }}
          >
            <img 
              src={image} 
              alt={`Logo ${(index % 6) + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
