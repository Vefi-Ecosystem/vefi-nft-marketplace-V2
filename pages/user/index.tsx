import React from 'react';
import { FiMoreHorizontal, FiUpload } from 'react-icons/fi';

export default function user() {
  return (
    <>
      <div className="container mx-auto bg-[red] min-h-screen">
        <div className="profile__banner bg-[green] w-full h-[300px] relative rounded-[20px]">
          <div className="profile__avatar h-[100px] w-[100px] rounded bg-[purple] p-5 absolute bottom-[-40px] left-10"></div>
          <span className="absolute bottom-0 right-3 p-1 px-3 rounded border text-[#fff] text-[10px] mb-2 capitalize">dementorstorm</span>
        </div>
        <div className="flex container bg-[purple] my-[50px]">
          <div className="profile__left">
            <div className="profile__iner">
              <span>FYI Fan</span>
              <p>
                Art Collector since 1997.eth and $YFI collecting waifus and other rare didgital magic Yearn Collection:
                https://opensea.io/collection/yearn Banner by https://rarible.com/n0rmance0mics Profile by...Show more
              </p>
            </div>
            <div className="profile__bottom">
              <button className="bg-[#D9D9D9] rounded-md cursor-pointer">
                <span>+</span>
                Follow
              </button>
              <button className="bg-[#D9D9D9] rounded-md cursor-pointer">
                <span>+</span>
                Follow
              </button>
              <button className="bg-[#D9D9D9] rounded-md cursor-pointer">
                <FiUpload />
              </button>
              <button className="bg-[#D9D9D9] rounded-md cursor-pointer">
                <FiMoreHorizontal />
              </button>
            </div>
          </div>
          <div className="profile__right"></div>
        </div>
      </div>
    </>
  );
}
