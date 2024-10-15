'use client'

import { useState } from "react";
import Image from 'next/image';


import Guitar from '../guitar.jpg';
import Piano from '../piano.jpg';
import Bass from '../bass.jpg';
import Eguitar from '../eguitar.jpg';
import Drum from '../drum.jpg';
import Violin from '../violin.jpg';
import Trumpet from '../trumpet.jpg';
import Flute from '../flute.jpg';
import Default from '../guitar.jpg';


const Instruments = [
  { name: "Guitar ", price: 300, likes: 20, img: Guitar, is_new: true },
  { name: "Piano", price: 1200, likes: 50, img: Piano, is_new: false },
  { name: "Bass", price: 600, likes: 15, img: Bass, is_new: true },
  { name: "Electric Guitar", price: 250, likes: 20, img: Eguitar, is_new: true },
  { name: "Drum Set", price: 750, likes: 150, img: Drum, is_new: false },
  { name: "Violin", price: 600, likes: 15, img: Violin, is_new: true },
  { name: "Trumpet", price: 600, likes: 15, img: Trumpet, is_new: true },
  { name: "Flute", price: 600, likes: 15, img: Flute, is_new: false },
];

export default function InstrumentStore() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [likes, setLikes] = useState(0);
  const [isNew, setIsNew] = useState(true);
  const [img, setImg] = useState(Default); 


  const [instruments, setInstruments] = useState(Instruments);


  function addInstrument() {
    const newInstrument = {
      name: name,
      price: price,
      likes: likes,
      img: img,
      is_new: isNew,
    };

    setInstruments([...instruments, newInstrument]);


    setName('');
    setPrice(0);
    setLikes(0);
    setIsNew(true);
    setImg(Default);
  }

  return (
    <div className="min-h-screen bg-gray-500">
      <div className="container mx-auto p-1">

        <h2 className="text-center text-3xl font-semibold mb-8 mt-6 text-black">Our Instruments</h2>
        

        <div className="grid grid-cols-4 gap-8">
          {instruments.map((instrument, index) => (
            <div key={index} className="bg-white p-5 text-center relative flex flex-col">
              <div className="flex-grow flex justify-center">
                <Image
                  src={instrument.img || '/default.jpg'}
                  alt={instrument.name}
                  width={200}
                  height={200}
                  className="object-contain w-200 h-200"
                />
              </div>
              <div className="bg-gray-100 text-center relative">
                <p className="text-xl font-semibold text-gray-700">{instrument.name}</p>
                <p className="text-gray-700">Price: ${instrument.price}</p>
                <p className="text-gray-700">Likes: {instrument.likes}</p>
                {instrument.is_new ? (
                  <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm">New</span>
                ) : (
                  <span className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Used</span>
                )}
              </div>
            </div>
          ))}
        </div>


        <hr className="my-8" />


        <h1 className="text-2xl font-bold mb-4">Add New Instrument</h1>
        <div className="space-y-4">
          <div>
            <h1 className="block">Name:</h1>
            <input
              className="border-2 border-black p-2 w-full text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <h1 className="block">Price:</h1>
            <input
              className="border-2 border-black p-2 w-full text-black"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
              type="number"
            />
          </div>
          <div>
            <h1 className="block">Likes:</h1>
            <input
              className="border-2 border-black p-2 w-full text-black"
              value={likes}
              onChange={(e) => setLikes(+e.target.value)}
              type="number"
            />
          </div>
          <div>
            <h1 className="block">Is New:</h1>
            <input
              type="checkbox"
              checked={isNew}
              onChange={(e) => setIsNew(!isNew)}
            />
            {isNew ? ' New' : ' Used'}
          </div>
          <div>
            <h1 className="block">Image URL:</h1>
            <input
              className="border-2 border-black p-2 w-full text-black"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="text"
              placeholder="Enter Image URL"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={addInstrument}
          >
            Add Instrument
          </button>
        </div>
      </div>
    </div>
  );
}
