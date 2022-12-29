import { Transition } from '@headlessui/react';
import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { FiCheck, FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp, FiRefreshCw, FiSearch } from 'react-icons/fi';
import chains from '../../assets/chains.json';
import Image from 'next/image'

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

const mockData2 = [
  {
    banner: '/placeholders/images/goated.png',
    image: '/placeholders/images/hobo.png',
    totalVolume: 4000,
    floorPrice: 200,
    name: 'Excelsior',
    owners: 200
  },
  {
    banner: '/placeholders/images/goated.png',
    image: '/placeholders/images/hobo.png',
    totalVolume: 4000,
    floorPrice: 200,
    name: 'Excelsior',
    owners: 200
  },
  {
    banner: '/placeholders/images/goated.png',
    image: '/placeholders/images/hobo.png',
    totalVolume: 4000,
    floorPrice: 200,
    name: 'Excelsior',
    owners: 200
  },
  {
    banner: '/placeholders/images/goated.png',
    image: '/placeholders/images/hobo.png',
    totalVolume: 4000,
    floorPrice: 200,
    name: 'Excelsior',
    owners: 200
  },
  {
    banner: '/placeholders/images/goated.png',
    image: '/placeholders/images/hobo.png',
    totalVolume: 4000,
    floorPrice: 200,
    name: 'Excelsior',
    owners: 200
  },
  {
    banner: '/placeholders/images/goated.png',
    image: '/placeholders/images/hobo.png',
    totalVolume: 4000,
    floorPrice: 200,
    name: 'Excelsior',
    owners: 200
  },
  {
    banner: '/placeholders/images/goated.png',
    image: '/placeholders/images/hobo.png',
    totalVolume: 4000,
    floorPrice: 200,
    name: 'Excelsior',
    owners: 200
  }
];

export enum Tabs {
  NFTS = 'nfts',
  COLLECTIONS = 'collections',
  USERS = 'users'
}

const NFTs = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      <div className="flex justify-center md:justify-start items-center w-full gap-5 px-1">
        <button
          onClick={() => setShowFilters((show) => !show)}
          className="bg-[#7d7d7d]/30 text-white font-bold p-3 font-outfit flex items-center rounded-md backdrop-blur-[30.7px] justify-center gap-1"
        >
          <div className="hidden md:block">{!showFilters ? <FiChevronRight /> : <FiChevronLeft />}</div>
          <div className="md:hidden">{!showFilters ? <FiChevronDown /> : <FiChevronUp />}</div>
          <span>Filters</span>
        </button>
        <button className="bg-[#7d7d7d]/30 text-white font-bold p-3 flex items-center rounded-md backdrop-blur-[30.7px]">
          <FiRefreshCw />
        </button>
        <div className="bg-[#7d7d7d]/30  flex-1 flex items-center rounded-[10px] mr-2 text-white backdrop-blur-[30.7px]">
          <span className="text-white p-3">
            <FiSearch />
          </span>
          <input
            className="bg-transparent w-full text-white font-outfit text-sm font-medium p-2 outline-none"
            type="text"
            placeholder="Search NFTs"
          />
        </div>
      </div>
      <div className="w-full flex justify-start items-start gap-5 px-3 py-2 flex-col md:flex-row">
        <Transition
          show={showFilters}
          className="w-full md:w-1/3"
          enter="transform transition ease-in-out duration-[500ms]"
          enterFrom="opacity-0 translate-y-0 md:translate-x-0"
          enterTo="opacity-100 translate-y-4 md:translate-x-4"
          leave="transform transition ease-in-out duration-[500ms]"
          leaveFrom="opacity-100 translate-y-4 md:translate-x-4"
          leaveTo="opacity-0 translate-y-0 md:translate-x-0"
        >
          <div className="flex flex-col gap-2 justify-center items-center w-full px-2">
            <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-monumentExtended flex space-x-6">
                  <div>
                      <Image src='/explore.png' width={40} height={40} alt='yo'/>

                  </div>
                <div>
                  <p className='text-white'>Explore</p>
                  <span className="text-white">Blockchain</span>
                </div>

              </div>
              <div className="collapse-content">Something</div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-monumentExtended">
                <span className="text-white">Status</span>
              </div>
              <div className="collapse-content">Something</div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-monumentExtended">
                <span className="text-white">Price</span>
              </div>
              <div className="collapse-content">Something</div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-monumentExtended">
                <span className="text-white">Collections</span>
              </div>
              <div className="collapse-content">Something</div>
            </div>
              <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title font-monumentExtended">
                      <span className="text-white">Type</span>
                  </div>
                  <div className="collapse-content">Something</div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title font-monumentExtended">
                      <span className="text-white">Options</span>
                  </div>
                  <div className="collapse-content">Something</div>
              </div>

          </div>
        </Transition>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center w-full flex-1 overflow-auto px-2 py-2 md:my-auto my-2 gap-2 transition-all ease-in-out duration-[500ms]">
          {_.map(mockData, (data, index) => (
            <div key={index} className="md:w-[296.78px] w-full transition-all ease-in-out duration-[500ms]">
              <div className="card card-bordered shadow-xl h-full w-[inherit] bg-transparent overflow-auto">
                <figure className="w-[inherit]">
                  <img src={data.image} alt={data.name} className="w-[inherit] h-[200.56px] rounded-[10px]" />
                </figure>
                <div className="card-body w-full">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[#afafaf] font-[700] text-[10px]">{data.collectionName}</span>
                    <span className="text-[#afafaf] font-[700] text-[10px]">{data.blockChain}</span>
                  </div>
                  <span className="text-[#fff] font-[800] text-[10px] md:text-[16px]">{data.name}</span>
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
      </div>
    </div>
  );
};

const Collections = () => {
  const [selectedChainId, setSelectedChainId] = useState<number>(56);
  const chain = useMemo(() => chains[selectedChainId as unknown as keyof typeof chains], [selectedChainId]);
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      <div className="flex justify-center md:justify-start items-center w-full gap-5 px-1">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="bg-[#7d7d7d]/30 text-white font-bold p-3 flex items-center justify-between rounded-md backdrop-blur-[30.7px] gap-2 cursor-pointer md:text-[16px] text-[12px]"
          >
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src={chain?.logoURI || '/images/all_chains.svg'} alt={chain?.symbol || 'All'} />
              </div>
            </div>
            <span className="hidden md:block">{chain?.name || 'All Blockchains'}</span>
            <FiChevronDown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-[#000] border border-[#fff] rounded-[12px] md:w-[300px] w-[200px] backdrop-blur-[30.7px] text-white"
          >
            <li>
              <a className="gap-2 flex justify-between items-center w-full" onClick={() => setSelectedChainId(0)}>
                <div className="flex justify-start items-center gap-1">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src="/images/all_chains.svg" alt="All" />
                    </div>
                  </div>
                  All Blockchains
                </div>
                {selectedChainId === 0 && <FiCheck />}
              </a>
            </li>
            {_.map(Object.keys(chains), (key, index) => (
              <li key={index}>
                <a className="gap-2 flex justify-between items-center w-full" onClick={() => setSelectedChainId(parseInt(key))}>
                  <div className="flex justify-start items-center gap-1">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={chains[key as keyof typeof chains].logoURI} alt={chains[key as keyof typeof chains].symbol} />
                      </div>
                    </div>
                    {chains[key as keyof typeof chains].name}
                  </div>
                  {selectedChainId === parseInt(key) && <FiCheck />}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-[#7d7d7d]/30 text-white font-bold p-3 flex items-center rounded-md backdrop-blur-[30.7px]">
          <FiRefreshCw />
        </button>
        <div className="bg-[#7d7d7d]/30  flex-1 flex items-center rounded-[10px] mr-2 text-white backdrop-blur-[30.7px]">
          <span className="text-white p-3">
            <FiSearch />
          </span>
          <input
            className="bg-transparent w-full text-white font-outfit text-sm font-medium p-2 outline-none"
            type="text"
            placeholder="Search Collections"
          />
        </div>
      </div>
      <div className="flex md:justify-evenly justify-center items-center gap-6 w-full flex-wrap flex-col md:flex-row px-2">
        {_.map(mockData2, (data, index) => (
          <div key={index} className="w-full md:w-1/4">
            <div className="w-full rounded-[20px] px-0 py-0 border border-[#fff] flex flex-col justify-center items-center gap-6">
              <div
                style={{ backgroundImage: `url(${data.banner})` }}
                className="rounded-[20px] h-[197px] w-full bg-cover flex justify-start items-end px-2"
              >
                <div className="avatar relative bottom-[-20px]">
                  <div className="w-14 rounded-xl">
                    <img src={data.image} alt={data.name} />
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly items-center w-full gap-2 px-1">
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-ellipsis text-[#fff] font-monumentExtended">{data.name}</span>
                  <span className="text-[#afafaf] font-monumentExtended md:text-[10px]">{data.owners} Owners</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-ellipsis text-[#afafaf] font-monumentExtended md:text-[10px]">Total Volume</span>
                  <span className="text-[#fff] font-monumentExtended md:text-[10px]">{data.totalVolume} ETH</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-ellipsis text-[#afafaf] font-monumentExtended md:text-[10px]">Floor Price</span>
                  <span className="text-[#fff] font-monumentExtended md:text-[10px]">{data.floorPrice} ETH</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Users = () => {
  return <div>Users</div>;
};

export const useExplorerComponent = (tab: Tabs) => {
  const [component, setComponent] = useState<React.ComponentType<any>>(() => NFTs);

  useEffect(() => {
    if (tab === Tabs.NFTS) setComponent(() => NFTs);
    else if (tab === Tabs.COLLECTIONS) setComponent(() => Collections);
    else if (tab === Tabs.USERS) setComponent(() => Users);
    else setComponent(() => NFTs);
  }, [tab]);

  return component;
};
