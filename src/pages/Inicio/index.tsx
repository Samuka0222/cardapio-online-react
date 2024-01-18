import Banner from "./Banner";
import Servicos from "./Servicos";
import Cardapio from "./Cardapio";
import Depoimentos from "./Depoimentos";
import Reserva from "./Reserva";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import BtnCarrinho from "./BtnCarrinho";

export default function Inicio() {
  return <>
    <BtnCarrinho />
    <Header />
    <Container>
      <Banner />
      <Servicos />
      <Cardapio />
      <Depoimentos />
      <Reserva />
    </Container>
    <Footer />
  </>
}