import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRobot, FaWhatsapp } from "react-icons/fa";
import CardService from "../components/cardService";

const Services = () => {
  return (
    <>
      <div className='flex-col text-center justify-around mt-10 mr-36 ml-36 mb-28'>
        <h3 className='text-primary font-semibold text-[15px] tracking-widest'>
          SERVIÇOS
        </h3>
        <div className='flex mt-3 gap-4 justify-center'>
          <CardService
            icon={
              <HiOutlineDocumentReport
                style={{ fontSize: "25px", color: "#2FCCDB" }}
              />
            }
            content={"Criação e envio de relatórios automatizados"}
          />
          <CardService
            icon={<FaWhatsapp style={{ fontSize: "25px", color: "#2FCCDB" }} />}
            content={"Robô de atendimento e vendas para redes sociais e sites"}
          />
          <CardService
            icon={<FaRobot style={{ fontSize: "25px", color: "#2FCCDB" }} />}
            content={"Automatização de processos manuais em sistemas"}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
