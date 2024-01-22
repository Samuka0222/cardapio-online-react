import logo from "/img/logo.png"
import Sociais from "../Sociais"

export default function Footer() {
  return (
    <footer className="bg-secondary w-full mt-12 md:h-32 md:flex md:justify-center md:items-center">
      <div className="w-full flex flex-col pb-8 md:pb-0 md:flex-row md:w-10/12 lg:w-4/6 md:justify-between md:self-center">
        <div className="flex items-center justify-center">
          <img
            className="w-40 md:w-32"
            src={logo}
            alt="logo do Menu On-line"
          />
        </div>
        <div className="text-center flex items-center justify-center">
          <h4 className="text-base font-medium text-text">Menu On-line Todos os direitos reservados</h4>
        </div>
        <div className="md:pr-6 flex ">
          <Sociais />
        </div>
      </div>
    </footer>
  )
}