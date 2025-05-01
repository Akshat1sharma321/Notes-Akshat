import React from 'react'
import leaf from '/assets/leaf.svg'
const Header = () => {
  return (
    <div className="p-4  shadow flex justify-center items-center space-x-4 bg-[#161a20]">
      <img src={leaf} alt="img" className='w-10 h-10' />
      <h1 className="text-2xl font-bold text-white">Notes</h1>
    </div>
  );
}

export default Header
