import React from 'react';

const reviews = [
  {
    name: 'Annu',
    role: 'Professional Athlete',
    image: '../public/lg2.png',
    text: 'We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt relief and expert care.',
  },
  {
    name: 'Sandhiya',
    role: 'Retired Teacher',
    image: '../public/lg2.png',
    text: 'Thanks to their guidance, I’ve regained mobility and confidence in my daily activities. Highly recommended for anyone in need of physiotherapy.',
  },
  {
    name: 'Preethi',
    role: 'Construction Worker',
    image: '../public/lg2.png',
    text: 'Their dedication and personalized approach to treatment have significantly improved my strength and flexibility. The sessions were structured well, and the therapist ensured I was comfortable throughout.',
  },
];

const Review = () => {
  return (
    <div className="bg-[#1D1B38] min-h-screen flex flex-col items-center justify-center text-white p-6">
      <button className="bg-white text-[#1D1B38] px-4 py-2 rounded-full font-semibold mb-4">Review</button>
      <h1 className="text-4xl font-bold text-center">
        <span className="text-green-300">What</span> Our Clients Say
      </h1>
      <div className="w-full mt-6 overflow-hidden relative">
        <div className="flex space-x-8 w-max animate-scroll no-scrollbar">
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-lg min-w-[400px] max-w-[400px] min-h-[220px] flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-xl">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base whitespace-normal break-words">{review.text}</p>
              <div className="flex mt-4 text-yellow-500 text-lg">{'★★★★★'}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Review;
