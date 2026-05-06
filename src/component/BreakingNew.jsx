import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNew = () => {
  const marqueeNews = [
  {
    "_id": "m1",
    "title": "✨ New Arrivals: Premium Ceramic Blue Glaze Tiles now in stock!"
  },
  {
    "_id": "m2",
    "title": "🔥 Limited Offer: Get 20% flat discount on all Marble Finish Collections!"
  },
  {
    "_id": "m3",
    "title": "🏆 Best Seller: Modern Geometric Monochrome - Perfect for your Dream Kitchen."
  },
  {
    "_id": "m4",
    "title": "🏠 Transform your living room with our Italian Porcelain Series."
  },
  {
    "_id": "m5",
    "title": "🌿 Eco-Friendly Range: Sustainable Terracotta Tiles for a natural look."
  },
  {
    "_id": "m6",
    "title": "💎 Luxury redefined with our Golden Vein White Marble series."
  },
  {
    "_id": "m7",
    "title": "🚿 Waterproof & Anti-Skid: Checkout our latest Bathroom Tile collection."
  },
  {
    "_id": "m8",
    "title": "🎨 Vintage Vibes: Victorian Floral patterns are back in trend!"
  },
  {
    "_id": "m9",
    "title": "🏢 Heavy-duty Industrial Tiles available for office and outdoor spaces."
  },
  {
    "_id": "m10",
    "title": "📍 Visit our showroom today to experience the premium textures."
  },
  {
    "_id": "m11",
    "title": "🛠️ Expert Installation Guide: Join our community for DIY design ideas."
  },
  {
    "_id": "m12",
    "title": "⭐ Featured: High-Gloss Reflective Series for a spacious room feel."
  }
];
   return (
    <div className="bg-blue-200 text-white py-2">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {marqueeNews.map((news) => (
          <span key={news._id} className="mx-10 text-gray-700 font-medium">
            {news.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNew;
