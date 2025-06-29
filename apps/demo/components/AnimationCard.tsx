import React from 'react';

interface AnimationCardProps {
  animationName: string;
}

const AnimationCard: React.FC<AnimationCardProps> = ({ animationName }) => {
  const animationClass = `animate-${animationName}-infinite-1500ms`;

  return (
    <div className="tooltip" data-tip={animationClass}>
      <h2 className="font-bold text-center mb-2">{animationName}</h2>
      <div className="card bg-[#eff6ff] w-80 aspect-[3/2] shadow-xl mx-auto">
        <div className="card-body flex items-center justify-center text-center text-[#1e40af]">
          <div className={`${animationClass} text-red font-20 font-bold text-6xl`}>⚫︎</div>
        </div>
      </div>
    </div>
  );
};

export default AnimationCard;
