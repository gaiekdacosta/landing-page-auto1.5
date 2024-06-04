import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className='flex items-center justify-between p-3 text-black bg-primary w-full fixed top-0 z-50'>
        <div className='flex gap-1 items-center'>
          <FaCode style={{ fontSize: "20px" }} />
          <p className='font-semibold'>Gaiek Solutions</p>
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className='relative cursor-pointer z-50'>
          <IoIosMenu style={{ fontSize: "28px" }} />
        </button>
      </div>
      {openMenu && (
        <div
          className='
                fixed 
                top-[70px] 
                right-4 
                p-2 
                w-[210px] 
                bg-black 
                text-white 
                font-medium 
                border 
                border-primary 
                rounded-md
                z-50'>
          <ul className='mb-2'>Inicio</ul>
          <ul className='mb-2'>Serviços</ul>
          <ul className='mb-2'>Sobre mim</ul>
          <ul className='mb-2'>Passo a passo</ul>
        </div>
      )}
    </>
  );
};

export default Header;
