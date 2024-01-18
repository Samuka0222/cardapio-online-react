import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  style: string;
  type?: "button" | "submit" | "reset";
  text?: string;
  
  icon?: IconDefinition | null;
  action?: () => void;
}

export default function Button(
  {
    type = "button",
    style = "primary",
    text,
    icon,
    action
  }: ButtonProps) { 

  return (
    <button
      className={`rounded-3xl font-medium text-xl md:text-lg md:h-16 shadow-padrao px-6 py-3 text-center whitespace-nowrap ease-in-out duration-300 ${style === "primary" ? `bg-white hover:bg-primary` : `bg-primary `}`}
      onClick={action}
      type={type}
    >
      {text &&
        <span className={`${style === "primary" ? `text-black font-medium` : `text-white`}`}>
          {text}
        </span>
      }
      {icon &&
        <span className={`text-xl py-2 px-3 rounded-2xl ml-3 text-black bg-primary`}>
          <FontAwesomeIcon icon={icon} />
        </span>
      }
    </button>
  )
}