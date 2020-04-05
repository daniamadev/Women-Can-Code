import React from 'react';
import './App.css';

import Routes from './routes'
import Header from './components/header'


/**
 *  Use esse código na sua pagina de portfolio
 *         <div className="page">
          <div className="conteudo">
            <h1>Meu portfólio</h1>
            <div className="flex">
              <div className="portfolio-list">
                <img src="https://neilpatel.com/wp-content/uploads/2017/07/pagina-de-contato-no-layout-de-site.jpeg" alt="Portfolio 1" />
                <img src="https://www.webmaster.pt/wp-content/uploads/2015/10/thtml_salique-e1446032108574.jpg" alt="Portfolio 2" />
                <img src="https://gestaodeprojetosdigitais.sfo2.cdn.digitaloceanspaces.com/2017/02/como-apresentar-o-layout-do-site-ao-cliente.jpg" alt="Portfolio 4" />
                <img src="https://davisolucoes.com.br/sites/default/files/2019-06/angela-barroco-imoveis-mockup.jpg" alt="Portfolio 3" />
              </div>
            </div>
          </div>
        </div>
 * 
 */

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
