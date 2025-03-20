import React from 'react';
import CommunityCard from '../CommunityCard/CommunityCard';

const communityData = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b75ada61e08cb778402e1cf8edb5ac2ea6a5837498aae0f24a93c848abce8b98?placeholderIfAbsent=true&apiKey=e0b52dfd2a1049e5985cb2330012a48a",
    title: "General",
    description: "The General Fund supports worship services, ministry programs, and facility needs. Your gift fuels everything we do to share God's love and grow together in faith.",
    buttonLabel: "Button Label",
    buttonImageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd9cc5f3aa60ea28145a059044e3a153ac51ddda9b4297dc31e21dd71f89a483?placeholderIfAbsent=true&apiKey=e0b52dfd2a1049e5985cb2330012a48a"
  }
];

const CommunityCardList = () => {
  return (
    <div>
      {communityData.map((card, index) => (
        <CommunityCard
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          buttonLabel={card.buttonLabel}
          buttonImageUrl={card.buttonImageUrl}
        />
      ))}
    </div>
  );
};

export default CommunityCardList;