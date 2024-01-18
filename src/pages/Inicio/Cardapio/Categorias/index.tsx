import { CardapioContext } from "@/context/CardapioContext"
import { useContext } from "react"
import TagButton from "./TagButton";
import { faBacon, faBurger, faDrumstickBite, faIceCream, faMartiniGlassCitrus, faPizzaSlice, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import ITag from "@/interfaces/ITag";
import { useInView } from "react-intersection-observer";
import 'animate.css'

export default function Categorias() {
  const contexto = useContext(CardapioContext)

  if (!contexto) {
    throw new Error("contexto não está definido.")
  }

  const { categorias, setCategorias, setCategoriaSelecionada } = contexto;

  function alteraAtivo(categoria: ITag) {
    const categoriasAtualizados = categorias.map(item => ({
      categoria: item.categoria,
      ativo: false
    }));
    categoriasAtualizados.forEach(item => {
      if (item.categoria === categoria.categoria) {
        item.ativo = !item.ativo
      }
    });
    setCategorias(categoriasAtualizados)
    setCategoriaSelecionada(categoria.categoria)
  }

  function defineIcone(categoria: string) {
    switch (categoria) {
      case "churrasco":
        return faDrumstickBite;
      case "burguers":
        return faBurger;
      case "sobremesas":
        return faIceCream;
      case "bebidas":
        return faMartiniGlassCitrus;
      case "pizzas":
        return faPizzaSlice;
      case "steaks":
        return faBacon;
      default:
        return faQuestionCircle;
    }
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animacao = inView ? 'animate__animated animate__fadeInUp animate__delay-0.5s' : ''

  return (
      <nav ref={ref}  className={`flex gap-4 w-full py-4 md:px-10 overflow-x-auto lg:overflow-hidden lg:justify-center ${animacao}`}>
        {categorias.map(categoriaTag =>
          <TagButton
            texto={categoriaTag.categoria}
            icone={defineIcone(categoriaTag.categoria)}
            key={categoriaTag.categoria}
            ativo={categoriaTag.ativo}
            action={() => alteraAtivo(categoriaTag)}
          />
        )}
      </nav>
  )
}