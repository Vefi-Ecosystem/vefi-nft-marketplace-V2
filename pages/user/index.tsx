import React from 'react';

export default function user() {
  return (
    <>
      <div className="container mx-auto bg-[red] min-h-screen">
        <div className="profile__banner bg-[green] w-full h-[300px] relative rounded-[20px]">
          <div className="profile__avatar h-[100px] w-[100px] rounded bg-[purple] p-5 absolute bottom-[-40px] left-10"></div>
          <span className="absolute bottom-0 right-3 p-1 px-3 rounded border text-[#fff] text-[10px] mb-2 capitalize">dementorstorm</span>
        </div>
      </div>
    </>
  );
}
