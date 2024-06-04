const CardStep = ({ content, step }) => {
  return (
    <>
      <div
        className='
          flex 
          w-[550px]
          h-[120px]
          border-2 
          p-3
          border-primary 
          rounded-lg 
          cursor-pointer
          text-left'>
        <span className='font-semibold mr-0.5'>{step}.</span>
        <p>{content}</p>
      </div>
    </>
  );
};

export default CardStep;
