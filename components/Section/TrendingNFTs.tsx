import React from 'react';
import _ from 'lodash';

const mockData = [
  {
    collectionName: 'Planet Girls',
    name: 'Planet Girl #1',
    image: '/placeholders/images/NFT2.png',
    blockChain: 'Ethereum',
    price: '150 wETH',
    highestBid: '200 wETH'
  },
  {
    collectionName: 'Planet Girls',
    name: 'Planet Girl #1',
    image: '/placeholders/images/NFT2.png',
    blockChain: 'Ethereum',
    price: '150 wETH',
    highestBid: '200 wETH'
  },
  {
    collectionName: 'Depraved Generals',
    name: 'General Walstein',
    image: '/placeholders/images/NFT1.png',
    blockChain: 'Polygon',
    price: '50 wMATIC',
    highestBid: '120 wMATIC'
  },
  {
    collectionName: 'Super Egos',
    name: 'Super Ego #1',
    image: '/placeholders/images/NFT3.png',
    blockChain: 'Bitgert',
    price: '5000000 wBRISE',
    highestBid: '12000000 wBRISE'
  },
  {
    collectionName: 'Planet Girls',
    name: 'Planet Girl #1',
    image: '/placeholders/images/NFT2.png',
    blockChain: 'Ethereum',
    price: '150 wETH',
    highestBid: '200 wETH'
  },
  {
    collectionName: 'Depraved Generals',
    name: 'General Walstein',
    image: '/placeholders/images/NFT1.png',
    blockChain: 'Aurora',
    price: '500 wAUR',
    highestBid: '1200 wAUR'
  },
  {
    collectionName: 'Super Ego',
    name: 'Super Ego #1',
    image: '/placeholders/images/NFT3.png',
    blockChain: 'Neon',
    price: '500 wNEON',
    highestBid: '1200 wNEON'
  }
];
export default function TrendingNFTs() {
  return (
    <div className="flex flex-nowrap flex-row justify-start items-center w-full overflow-scroll py-2 md:my-auto my-2 gap-2">
      {_.map(mockData, (data, index) => (
        <div key={index} className="w-[296.78px]">
          <div className="card card-bordered shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
            <figure className="w-[inherit]">
              <img src={data.image} alt={data.name} className="w-[inherit] h-[200.56px] rounded-[10px]" />
            </figure>
            <div className="card-body w-full">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#afafaf] font-[700] text-[10px]">{data.collectionName}</span>
                <span className="text-[#afafaf] font-[700] text-[10px]">{data.blockChain}</span>
              </div>
              <span className="text-[#fff] font-[800] text-[16px]">{data.name}</span>
              <div className="bg-[#d9d9d9]/[.17] flex justify-between w-full rounded-[10px] py-[7.52px] px-[14px]">
                <div className="flex flex-col gap-2 justify-between items-center">
                  <span className="text-[#afafaf] font-[700] text-[10px]">Price</span>
                  <span className="text-[#fff] font-[700] text-[10px]">{data.price}</span>
                </div>
                <div className="flex flex-col gap-2 justify-between items-center">
                  <span className="text-[#afafaf] font-[700] text-[10px]">Highest Bid</span>
                  <span className="text-[#fff] font-[700] text-[10px]">{data.highestBid}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
