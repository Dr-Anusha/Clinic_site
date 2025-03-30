import React from 'react';

const Ourservices = () => {
  return (
    <div className="bg-[#1D1B38] min-h-screen flex flex-col items-center justify-center text-white px-4 py-10">
      <button className="bg-white text-[#1D1B38] px-6 py-2 rounded-full font-semibold mb-4">
        Need Attention
      </button>
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        <span className="text-green-300">Our</span> Services
      </h1>
      <p className="text-base md:text-lg text-gray-300 text-center mt-2 mb-6 max-w-2xl">
        Where do you need attention in your body to lead a quality life without challenges?
      </p>
      
      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {[
          { label: 'Neck Pain', icon: '🧑‍⚕️' },
          { label: 'Shoulder Pain', icon: '💪' },
          { label: 'Hip Pain', icon: '🦵' },
          { label: 'Knee Pain', icon: '🦿' },
          { label: 'Elbow Pain', icon: '💂' },
          { label: 'Tricep Pain', icon: '🏋️' },
          { label: 'Hand Pain', icon: '🤲' },
          { label: 'Foot Pain', icon: '🦶' },
          { label: 'Ankle Pain', icon: '🏃' },
          { label: 'Pre and Post Surgical Rehab', icon: '🏥' },
          { label: 'Weight Loss & Fitness Classes', icon: '⚖️' },
          { label: 'Postural Conditions', icon: '🧘' },
          { label: 'Cerebral Palsy', icon: '🧠' },
          { label: 'Paralysis', icon: '♿' },
          { label: 'Post Pregnancy Rehabilitation', icon: '🤰' },
          { label: 'Pregnancy Classes', icon: '👶' },
          { label: 'Urinary Incontinence for Women', icon: '🚺' },
          { label: 'Pelvic Floor Rehabilitation', icon: '🦴' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 bg-[#29274C] p-4 rounded-lg w-full hover:bg-[#3A3762] hover:scale-105 transition-all duration-200"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm md:text-lg font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
