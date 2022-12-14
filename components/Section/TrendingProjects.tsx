import React from 'react';
import _ from 'lodash';
import { HiArrowNarrowRight } from 'react-icons/hi';

// Would be remove in staging/production
const mockData: Array<{ name: string; blockchain: string; image: string }> = [
  {
    name: 'Gatot Vipers',
    blockchain: 'Solana',
    image: '/placeholders/images/artwork5.png'
  },
  {
    name: 'Sneaker Faces',
    blockchain: 'Ethereum',
    image: '/placeholders/images/artwork4.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Sneaker Faces',
    blockchain: 'Ethereum',
    image: '/placeholders/images/artwork4.png'
  },
  {
    name: 'Gatot Vipers',
    blockchain: 'Solana',
    image: '/placeholders/images/artwork5.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  }
];

export default function TrendingProjects() {
  return (
    <div className="flex flex-nowrap flex-row justify-start items-center w-full overflow-scroll py-2 md:my-auto my-2 gap-2">
      {_.map(mockData, (data, index) => (
        <div key={index} className="h-[300px] md:h-[434.25px] md:w-[395.57px]">
          <div className="card shadow-xl image-full h-[inherit] w-[inherit] hover:scale-105 transition-transform ease-in-out delay-150 font-monumentExtended cursor-pointer">
            <figure>
              <img src={data.image} alt={data.name} />
            </figure>
            <div className="group justify-end card-body py-4 px-3 hover:translate-y-4 transition-transform ease-in-out delay-150">
              <div className="card-actions flex-col justify-between items-baseline">
                <div className="flex flex-col justify-start">
                  <h2 className="font-[800] text-[32px]">{data.name}</h2>
                  <p className="font-[400] text-[16px]">{data.blockchain}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex-1"></div>
                  <button className="hidden group-hover:block py-1 px-3 rounded-[10px] border-[1px] border-[#fff] text-[#fff] text-[20px]">
                    <HiArrowNarrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
