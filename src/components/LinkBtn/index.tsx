import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CarrinhoIndicador from "../CarrinhoIndicador";

interface ButtonProps {
  style: string;
  rota: string;
  type?: "button" | "submit" | "reset";
  text?: string;
  qtdIndicador?: boolean;
  icon?: IconDefinition | null;
  action?: () => void;
}

export default function LinkBtn(
  {
    style = "primary",
    rota,
    type = "button",
    text,
    qtdIndicador = false,
    icon,
    action
  }: ButtonProps) {

  return (
    <Link
      className={`rounded-3xl font-medium md:text-lg md:h-16 shadow-padrao px-4 py-3 text-center flex items-center justify-center relative whitespace-nowrap ease-in-out duration-300 ${style === "primary" ? `bg-white hover:bg-primary` : `bg-primary `}`}
      onClick={action}
      type={type}
      to={rota}
    >
      {text &&
        <span className={`${style === "primary" ? `text-black font-medium` : `text-white`}`}>
          {text}
        </span>
      }
      {icon &&
        <span className={`text-xl py-2 px-3 rounded-2xl relative ml-3 text-black bg-primary`}>
          <FontAwesomeIcon icon={icon} />
          {
            qtdIndicador &&
            <CarrinhoIndicador />
          }
        </span>
      }
    </Link>
  )
}