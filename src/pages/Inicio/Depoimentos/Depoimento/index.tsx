import IDepoimento from "@/interfaces/IDepoimento"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";

interface DepoimentoProps {
  depoimento: IDepoimento
}

export default function Depoimento({ depoimento }: DepoimentoProps) {
  const { imagem, nome, nota, review } = depoimento;

  return (
    <div>
      <div className="flex justify-center lg:justify-start md:mb-6">
        <div
          className="flex flex-row "
        >
          <img
            src={imagem}
            alt={`foto do ${nome}`}
            className="w-20 h-20 rounded-full"
          />
          <span className="ml-5 flex flex-col gap-2">
            <h3 className="text-3xl font-semibold">{nome}</h3>
            <span>
              <Rating nota={nota} />
            </span>
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-full mt-4 md:w-10/12 justify-center lg:w-full lg:justify-start lg:pr-20">
          <span className="w-fit text-6xl font-serif self-start font-bold text-primary"><FontAwesomeIcon icon={faQuoteLeft} /></span>
          <p className="text-base ml-4 md:ml-2 font-medium w-9/12 md:w-80 lg:w-full">
            {review}
          </p>
          <span className="w-fit text-6xl font-serif font-bold text-primary self-end"><FontAwesomeIcon icon={faQuoteRight} /></span>
        </div>
      </div>
    </div>
  )
}