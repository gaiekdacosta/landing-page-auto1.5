import Form from "../components/form";

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
        '>
        <div className='flex justify-between mr-16 ml-16 items-center '>
          <div className='flex flex-col w-[40%]'>
            <p className='text-primary text-[19px] font-semibold tracking-widest'>
              BEM-VINDO
            </p>
            <h1 className='text-[40px] font-extrabold leading-10'>
              Maximize sua produtividade{" "}
              <span className='text-primary'>
                automatizando tarefas repetitivas
              </span>
            </h1>
            <h3 className='text-[18px] leading-4'>
              Esqueça tarefas diarias e relatórios que tiram <br /> o seu foco
              do negócio
            </h3>
          </div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Start;
