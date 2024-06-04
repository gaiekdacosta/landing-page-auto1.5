import { FaWhatsapp } from "react-icons/fa";
import pcPhoto from "../assets/pc-photo.webp";

const AboutMe = () => {
  const whatsappLink = () => {
    window.open(
      "https://wa.me/5585991752876?text=Ol%C3%A1%2C+estou+em+busca+de+um+automatiza%C3%A7%C3%A3o%21",
      "_blank"
    );
  };

  return (
    <>
      <div className='flex justify-center gap-44 mb-28'>
        <img
          className='rounded-full cursor-pointer border-2 border-primary w-[400px] h-[400px]'
          alt='pc foto'
          src={pcPhoto}
        />
        <div className='w-[450px]'>
          <h3 className='text-primary font-semibold text-[15px] tracking-widest'>
            SOBRE MIM
          </h3>
          <p className='font-semibold text-[22px] leading-6'>
            Evite erros, execute atividades rotineiras de forma eficiente
          </p>
          <p>
            Olá! Sou Gaiek da costa, um freelancer apaixonado por simplificar
            processos e otimizar as coisas. Com mais de 3 anos de experiência em
            desenvolvimento de scripts.
            <br />
            <br />
            Meu objetivo é oferecer soluções personalizadas de automação que
            permitam a você trabalhar da melhor forma.
            <br />
            <br />
            Desde a criação de fluxos de trabalho eficientes até o
            desenvolvimento de scripts e integrações personalizadas, estou aqui
            para simplificar sua vida.
          </p>
          <button
            onClick={whatsappLink}
            className='
                flex 
                items-center 
                justify-center
                bg-primary 
                w-[100%] 
                mt-2 
                rounded-md 
                p-2 
                text-black 
                font-bold 
                '>
            <FaWhatsapp style={{ fontSize: "18px" }} /> Enviar mensagem agora
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
