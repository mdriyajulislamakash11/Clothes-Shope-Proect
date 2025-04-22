import React from 'react';

const Card = ({ cloth }) => {
  const {
    name,
    image,
    category,
    price,
    sizes,
    colors,
    origin,
    material,
    description,
    care_instructions,
    rating,
  } = cloth;

  return (
    <div className=" rounded-2xl overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl transition duration-300">
      <img className="w-full h-60 object-cover rounded-xl" src={image} alt={name} />
      <div className="py-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">{description.slice(0, 70)}...</p>

        <div className="text-sm text-gray-600">
          <p><span className="font-semibold">Category:</span> {category}</p>
          <p><span className="font-semibold">Price:</span> ৳{price}</p>
          <p><span className="font-semibold">Sizes:</span> {sizes.join(', ')}</p>
          <p><span className="font-semibold">Colors:</span> {colors.join(', ')}</p>
          <p><span className="font-semibold">Material:</span> {material}</p>
          <p><span className="font-semibold">Origin:</span> {origin}</p>
          <p><span className="font-semibold">Care:</span> {care_instructions}</p>
          <p><span className="font-semibold">Rating:</span> ⭐ {rating}</p>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
