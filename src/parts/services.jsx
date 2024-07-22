import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import CardService from "../components/cardService";
import { AiFillApi } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className='flex-col text-center justify-around mt-10 mr-36 ml-36 mb-28'>
        <h3 className='text-primary font-semibold text-[15px] tracking-widest'>
          SERVIÇOS
        </h3>
        <div className='flex mt-3 gap-4 justify-center'>
          <CardService
            icon={<RiPagesLine style={{ fontSize: "25px", color: "#2FCCDB" }} />}
            content={"Paginas de vendas e captura de leads"}
          />
          <CardService
            icon={<AiFillApi style={{ fontSize: "25px", color: "#2FCCDB" }} />}
            content={"Sites institucionais"}
          />
          <CardService
            icon={<FaGoogle style={{ fontSize: "25px", color: "#2FCCDB" }} />}
            content={"Sistemas de Gestão"}
          />
          <CardService
            icon={<FaGoogle style={{ fontSize: "25px", color: "#2FCCDB" }} />}
            content={"Lojas virtuais"}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
