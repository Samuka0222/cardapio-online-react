import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Inicio from "./pages/Inicio"
import Carrinho from "./pages/Carrinho"
import { CarrinhoEtapaProvider } from "./context/CarrinhoEtapas"
import Mensagem from "./components/Mensagem"

export default function AppRouter() {
  return (
    <Router>
      <CarrinhoEtapaProvider>
        <Mensagem />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </CarrinhoEtapaProvider>
    </Router>
  )
}

