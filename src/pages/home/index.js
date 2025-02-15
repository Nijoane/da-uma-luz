import ListPolutionCities from '../../services/api.js';
import { onNavigate } from '../../utils/history.js';

export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <main class='home-element'>
      <div class='rectangle'>
        <img class='img-logo' src="./assets/logo-branco.png">
        <h1 class='rectangle-text'>Descubra tudo sobre energia renovável e qual a melhor opção para seu negócio ser mais sustentável</h1>
      </div>

      <div class='container-explication'></div>
        <h1 class='title'>
          O que são energias renováveis?
        </h1>
        <div class='explication'>
          <h5 class='energy'>
            <br>Energias renováveis são aquelas que vêm de fontes naturais que se reabastecem e nunca acabam. 
            <br>Em 2020 aproximadamente 80% da energia consumida vinha de combustíveis fósseis.
          </h5>
          <h5 class='energy'>
            Vantagens:
            <ul>
              <li>Combate as alterações climáticas: não criam emissão de gases de efeito estufa. As únicas emissões produzidas são as indiretas (que são consequências das operações da empresa de fabricação e instalação das peças, mas que ocorrem em fontes de propriedade de ou controladas por outra empresa), mesmo assim são mínimas;</li>
              <li>Reduzem a poluição, o que resulta na diminuição de ameaças à saúde;</li>
              <li>Sistemas eólicos, solares e hidroelétricos não emitem NENHUM tipo de poluição ao ar;</li>
              <li>Sistemas gerotermais e de biomassa são menores que as fontes não renovaveis;</li>
              <li>São fontes de energias confiáveis, nunca acabam;</li>
              <li>Os preços são estáveis por mais tempo já que uma vez construídas, a manutenção das instalações são mais baratas e o combustível muitas vezes grátis;</li>
            </ul>
          </h5>
          <div class='about-air'>
            <p>Verifique aqui a qualidade do ar na sua cidade</p>
            <input id='input' placeholder='ex: Piracicaba'>
            <button id='submit'>Verificar</button>
            <p id='result'></p>
          </div>
        </div>
      </div>
      <div class="container" id="myGroup">
        <h2 class="title">Encontre tudo que você precisa saber sobre energias renováveis</h2>
        <p class="button-energy">
          <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample">
            <img class="icon-button" src="/assets/herbs-outline.gif" alt=bioenergia">
            Bioenergia
          </button>
          <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseExample">
            <img class="icon-button" src="/assets/arrow-rounded.gif" alt=bioenergia">
            Biogás
          </button>
          <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseExample">
            <img class="icon-button" src="/assets/commodity-outline.gif" alt=bioenergia">
            Biomassa
          </button>
          <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseExample">
          <img class="icon-button" src="/assets/solar-panel-outline.gif" alt=bioenergia">
            Energia Solar
          </button>
        </p>
        <div class="collapse" id="collapseOne" data-parent="myGroup">
          <div class="card card-body">
            <h6 class="">Bioenergia</h6>
            <p>A Raízen é a maior produtora de energia gerada a partir do bagaço da cana-de-açúcar, aproveitando os coprodutos da cana que são gerados a partir da produçãoo de açúcar e etanol, com capacidade atual para abastecer uma cidade como a do Rio de Janeiro por um ano, por meio de uma fonte constante e previsível, que tem seu pico de produção justamente no período mais seco do ano, quando a matriz hídrica fica mais pressionada.</p>
            <img class="icon-info" src="/assets/green-energy.svg" alt="bioenergia">
            <p>É uma energia limpa que reduz a emissão de CO2, um composto químico gasoso que provoca desequilíbrios no efeito estufa e a colheita da cana acontece em períodos que os reservatórios estão em baixa.</p>
          </div>
        </div>
        <div class="collapse" id="collapseTwo" data-parent="myGroup">
          <div class="card card-body">
            <h6 class="title">Biogás</h6>
            <p>O biogás é resultado de um complexo processo produtivo, em que biodigestores convertem a matéria orgânica proveniente dos processamentos da cana-de-açúcar, como a torta de filtro (resíduos restantes da purificação do caldo da cana) e a vinhaça (água restante do processo de destilação), em metano e CO2, o chamado biogás. Contribui para tornar a matriz energética brasileira mais limpa, aumentando o potencial de energia elétrica.</p>
            <img class="icon-info" src="/assets/renewable-energy.svg" alt="biogas">
            <p>Quando em motogeradores, esse biogás é transformado em energia elétrica limpa e é por isso que temos nossa planta de biogás em Guariba, em São Paulo, com 21 MW de capacidade instalada. Além de ser uma grande fonte de energia renovável, é um substituto do diesel na forma de biometano.</p>
            <p>São dois processos distintos:</p>
            <ul>
              <li>Nos biorreatores verticais (equipamento onde ocorre uma série de reações químicas), são realizadas as biodigestão anaeróbica de torta de filtro, na presença de bactérias, transformando a biomassa da torta em gás.
              Antes da combustão nos motogeradores esse gás passa por um outro processo, de dessufurização, onde ficará pronto para ser inserido em motores onde o gás será queimado e a energia gerada.</li>
              <li>Já a vinhaça, vinda do caldo de cana de açucar, alimenta lagoas de biodigestão. Bactérias presentes no local transformam a matéria orgânica em gás rico em metano. Esse gás precisa ser purificado, após isso ocorre a queima, onde se origina a eletricidade.
              No fim deste processo o subproduto é um adubo turbinado rico em potássio e nitrogênio (compostos orgânicos que dão energia as plantas), que volta a fertilizar o campo.</li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapseThree" data-parent="myGroup">
          <div class="card card-body">
            <h6 class="title">Biomassa</h6>
            <p>Biomassa é todo tipo de matéria orgânica que possibilita a produção de energia, sendo ela não fóssil. A energia de biomassa, que já responde por 6% da matriz energética nacional, é obtida pela queima de materiais orgânicos, como bagaço de cana, casca de arroz e cavaco de madeira. Em comparação com os combustíveis fósseis, esses resíduos geram menos emissões de gases causadores do efeito estufa.</p>
            <img class="icon-info" src="/assets/sugar-cane.svg" alt="biomassa">
          </div>
        </div>
        <div class="collapse" id="collapseFour" data-parent="myGroup">
          <div class="card card-body">
            <h6 class="title">Energia Solar</h6>
            <p>Em mais um passo para o futuro, desenvolvemos a maior planta de energia solar do estado de São Paulo, um projeto piloto em Piracicaba. Sua potência instalada é de 1,3 MWp, suficiente para abastecer um bairro da cidade por um ano. São 3.800 placas solares ocupando um espaço de 40 mil m², o equivalente a dois campos de futebol. Com a planta, alcançamos um novo nível de inovação, que representa a busca por uma gestão energética mais sustentável, baseada em energia limpa, perene e econômica.</p>
            <img class="icon-info" src="/assets/solar-energy.svg" alt="energia-solar">
          </div>
        </div>
      </div>

      <div class="text">
        <h3 id="why-raizen"class="title">Qual é a melhor opção para meu negógio?</h3>
        <img class="icon-info" src="/assets/sustainable.svg" alt="biogas">
        <ul>
          <li>Consumidores com gastos em energia a partir de R$500 e ABAIXO de R$40.000 mensais, têm a opção de utilizar a energia solar economizando até 20%, aderindo ao processo de <a href='https://energia.raizen.com.br/geracao-distribuida'>Geração Distribuída</a>.</li>
          <li>Consumidores com gastos em energia ACIMA de R$40.000 mensais, podem migrar para o <a href='https://energia.raizen.com.br/mercado-livre'>Mercado Livre</a> de energia. É uma forma livre de consumir energia em que você pode escolher seu fornecedor, preço, garantia, pagamento e prazo, podendo assim economizar até 30% dos gastos.</li>
        </ul>

        <h3 class="title">Por que escolher a Raízen?</h3>
        <p>Os processos na Raízen buscam atingir o ideal de que nada se perde, nada se cria e tudo se transforma. Com esses movimentos de criação de energias renováveis, a Raízen segue se consolidando como uma empresa integrada de energia, contribuindo para uma matriz energética mais limpa, assumindo uma posição de destaque ampliando seu portifólio de renováveis, liderando o processo de transição energética e descarbonização, acelerando o futuro.</p> 
        <img class="icon-info" src="/assets/sustainable (1).svg" alt="biomassa"></br>
        <h6 class="benefits">Operação Segura</h6>
        <p>Somos uma das principais distribuidoras de combustíveis do Brasil, posição conquistada e mantida graças ao trabalho de parceiros engajados, com os quais estabelecemos padrões de performance e desenvolvemos iniciativas para preservar a segurança dos profissionais envolvidos nessas operações. Algumas medidas são:</p>
        <img class="icon-info" src="/assets/save.svg" alt="save">
        <ul>
          <li>Monitoramento remoto dos motoristas por meio de sistema de telemetria;</li>
          <li>Realização de inspeções anuais nas transportadoras contratadas com foco em Saúde, Segurança e Meio Ambiente (SSMA);</li>
          <li>Somente transportadoras com desempenho superior a 85% podem operar.</li>
        </ul>
        <h6 class="benefits">Garantia de Qualidade</h6>
        <p>Detemos certificações e registros que atestam a qualidade dos nossos produtos e a excelência dos nossos processos.</p>
        <img class="icon-info" src="/assets/guarantee.svg" alt="save">
        <h6 class="benefits">Desenvolcimento do Entorno</h6>
        <p>Além de gerar empregos e movimentar economias, buscamos promover a transformação social nas localidades em que atuamos, ampliando oportunidades para jovens, adultos e crianças.</p>
        <img class="icon-info" src="/assets/responsibility.svg" alt="save">
        <h3 class="title">Vantagens de ser uma empresa com selo Raízen:</h3>
        <ul>
          <li>Reconhecimento por ter uma energia totalmente renovável;</li>
          <li>Fechando negócio com a Raízen, você consome energia limpa e ainda recebe desconto nas taxas;</li>
          <li>Ser consumidor de uma empresa que zela por um produto de qualidade, que traz confiança e acompanhamento personalizado ao cliente.</li>
        </ul>
      </div>
        <section class="body">
          <div class='logo'> 
            <img class='img-logo' src="./assets/logo-roxo.png">
          </div>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li class="button" data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li class="button" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li class="button" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel">
              <h5 class"benefits">
                DEPOIMENTOS
              </h5>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p class="depoiments">
                  “Para além dos selos e certificações de sustentabilidade, 
                  a minha microempresa reduziu consideravelmente os gastos com impostos, 
                  tendo em vista que as pequenas empresas sofrem com as altas tarifas na energia elétrica.
                  Agora eu tenho mais estabilidade no meu fluxo de caixa, pois consigo prever meus custos com energia, 
                  fora o retorno do meu investimento.”
                </p>
              </div>
              <div class="carousel-item">
                <p class="depoiments">
                  “Aqui em Goianésia, a companhia que fornece energia cobra um valor muito alto 
                  e não oferecia um serviço de qualidade. Quando soube sobre energias renováveis, 
                  pesquisei bastante, mas a Raízen, me fornece um produto de qualidade, com valor 
                  que estava dentro das minhas possibilidades e hoje posso dizer que o retorno 
                  financeiro que eu tive e tenho na minha empresa é imenso, em pensar que a minha 
                  maior necessidade era qualidade de fornecimento, hoje a minha empresa é considerada 
                  também eco-sustentável.”
                </p>
              </div>
              <div class="carousel-item">
                <p class="depoiments">
                  “Procurava um serviço que agregasse ainda mais valor à minha doceria vegana, 
                  pois para nós a questão ambiental é imprescindível. Quando um fornecedor comentou 
                  comigo dos beneficios que teve depois de fechar parceria com a Raízen, eu imediatamente 
                  fui atrás da minha parceria também, pois a minha empresa necessitava daquilo tudo. 
                  Hoje além de não consumirmos nenhum produto que prejudique animaizinhos, nós também estamos 
                  ajudando o meio ambiente utilizando energia renovável.”
                </p>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>
      <div class="button-form">
        <button id="botton-listener">Tenho interesse</button>
      </div>
    </main>
  `;

  const show = rootElement.querySelector('#result');
  const element = rootElement.querySelector('#submit');
  element.addEventListener('click', () => {
    const input = rootElement.querySelector('#input').value;
    const response = async () => {
      await ListPolutionCities(input).then((r) => {
        show.innerHTML = `
        <p id='results'>${r}</p>
        `;
      });
    };
    response();
  });
  ListPolutionCities('guarulhos');

  const goForm = rootElement.querySelector('#botton-listener');
  goForm.addEventListener('click', () => {
    onNavigate('/form');
  });
  return rootElement;
};
