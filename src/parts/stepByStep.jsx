import CardStep from "../components/cardStep";

const StepByStep = () => {
  return (
    <>
      <div className='flex-col text-center justify-center'>
        <h3 className='text-primary font-semibold text-[15px] tracking-widest'>
          PASSO A PASSO
        </h3>
        <p className='text-[23px] font-bold'>
          Quais os passos para desenvolver um{" "}
          <span className='text-primary'>site?</span>
        </p>
        <div className='flex justify-center mt-3 mr-24 mb-5 ml-24 gap-10'>
          <CardStep
            step={1}
            content={`Faço uma análise detalhada da sua tarefa ou ideia com uma
            reunião de alinhamento, um breve questinário e um esboço da futura atumatização.`}
          />
          <CardStep
            step={2}
            content={`Após identificar as tarefas a serem automatizadas, seleciono as
            ferramentas e tecnologias mais adequadas para automatizá-las.`}
          />
          <CardStep
            step={3}
            content={`Após implementar a automação, é crucial monitorar o desempenho dos
            processos automatizados e fazer ajustes conforme necessário.`}
          />
        </div>
      </div>
    </>
  );
};

export default StepByStep;
