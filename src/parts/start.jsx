import React from 'react';
import Form from '../components/form';
import { IoMdSend } from 'react-icons/io';

const Start = () => {
  return (
    <>
      <div
        className='
          flex
          justify-center
          items-center
          h-[100vh]
          bg-background-start
          bg-cover
          bg-center
          bg-no-repeat
        '
      >
        <div className='flex justify-between mr-16 ml-16 items-center w-full'>
          <div className='flex flex-col w-[40%]'>
            <p className='text-primary text-[19px] font-semibold tracking-widest'>
              BEM-VINDO
            </p>
            <h1 className='text-[40px] font-extrabold leading-10'>
              Desde paginas de vendas 
              até sistemas de gestão completos eu
              tenho a solução{' '}
              <span className='text-primary'>
                ideal para o seu negócio.
              </span>
            </h1>
            <h3 className='text-[18px] leading-5 mt-2'>
              Descubra como eu posso facilitar as coisas na sua empresa.
            </h3>
          </div>
          <div className='flex w-[40%] justify-center items-center'>
            <div className='w-full max-w-[500px]'>
              <video
                className='w-full h-auto rounded-lg shadow-lg'
                controls
              >
                <source src='seu-video.mp4' type='video/mp4' />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <button
                className='
                  flex 
                  items-center 
                  justify-center
                  bg-primary 
                  w-[100%] 
                  mt-2
                  rounded-lg
                  p-2 
                  text-black 
                  font-bold '>
                <IoMdSend style={{ fontSize: "19px" }} />
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
