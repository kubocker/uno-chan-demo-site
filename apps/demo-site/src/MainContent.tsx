import React from 'react';

interface CardProps {
  name: string;
  duration: string;
  count: string;
}

const Card: React.FC<CardProps> = ({ name, duration, count }) => {
  const animationClass = `animation-${name}-${duration}ms-${count}`;
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* ラベル */}
      <span className="absolute top-2 left-2 text-xs text-gray-500 bg-black/5 backdrop-blur rounded px-2 py-0.5">
        {animationClass}
      </span>

      {/* アニメーション対象 */}
      <div className={`${animationClass} flex items-center justify-center h-48`}>
        <p className="text-gray-600 text-2xl">●</p>
      </div>
    </div>
  );
};


const MainContent: React.FC = () => {
  const supportedAnimations = [
    'fadeIn', 'fadeOut', 'slideIn', 'slideOut', 'zoomIn', 'zoomOut',
    'bounce', 'shake', 'rotate', 'flip', 'spin', 'pulse', 'flash', 'wiggle',
    'fadeInDown', 'fadeInUp', 'fadeOutDown', 'fadeOutUp',
    'zoomOutUp', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight',
    'zoomInDown', 'zoomInUp', 'zoomInLeft', 'zoomInRight',
  ]
  const cardsData = supportedAnimations.map((name) => ({ name, duration: '1500', count: 'infinite' }));

  return (
    <div className="container mx-auto max-w-screen-lg p-6">
      <div className="grid grid-cols-3 gap-3">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            duration={card.duration}
            count={card.count}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
