import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes.tsx'
import "./index.css"
import { CardapioProvider } from './context/CardapioContext.tsx'
import { CarrinhoProvider } from './context/contextoPedido/CarrinhoContext.tsx'
import { EnderecoProvider } from './context/contextoPedido/EnderecoContext.tsx'
import { MensagemProvider } from './context/MensagemContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <CardapioProvider>
        <EnderecoProvider>
          <MensagemProvider>
            <AppRouter />
          </MensagemProvider>
        </EnderecoProvider>
      </CardapioProvider>
    </CarrinhoProvider>
  </React.StrictMode>,
)
