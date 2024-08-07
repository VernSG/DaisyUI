// src/components/cards/CardGlass.jsx
import React from 'react';

function Card() {
  return (
    <div className="card-body glass w-full sm:w-96 max-w-xs mx-auto">
      <figure>
        <img
          src="https://res.cloudinary.com/djsdnb4td/image/upload/v1718190192/anime_brqpf9.jpg"
          alt="car!"
          className="w-full h-auto" // Ensure the image scales correctly
        />
      </figure>
      <div className="card-compact p-4">
        <h2 className="card-title text-lg sm:text-xl">Daisy</h2>
        <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio consequatur culpa facere voluptates, eos soluta architecto non, vitae velit repellat. Deserunt maiores cumque corrupti fugit voluptate eaque mollitia exercitationem?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary mt-5">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
