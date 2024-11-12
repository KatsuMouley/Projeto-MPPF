import React from 'react';

import AboutSect from '../../Article/AboutSection';
import ArticleSection from '../../Article/ArticleSection';
import Footer from '../../Navbar/Footer';
import Title from '../../Article/Title';
import Subtitle from '../../Article/Subtitle';
import Subsubtitle from '../../Article/Subsubtitle';
import Middleimage from '../../Article/Middleimage';
import RowImage from '../../Article/RowImage';
import Images4 from '../../Article/Images4';
import GeneralDesc from '../../Hero/GeneralDesc';
import Placeholder from '../../Hero/Placeholder';

import articleImage1 from '../../../assets/Articles Images/Article 2/image12.png'; // Imagem do artigo
import articleImage2 from '../../../assets/Articles Images/Article 2/image11.png'; // Imagem do artigo

const Article3 = () => {     
  const image1 = [
      articleImage1,
    ];
  const image2 = [
      articleImage2,
    ];

      return (
    
        <section className="flex justify-center">
        <div className="w-full md:w-3/4">
  <div className='flex flex-col items-center p-5 gap-2 mx-auto text-left'>
      <div className="flex flex-col md:flex-row p-10 gap-4 mx-auto">
            <div className="w-full">
            <GeneralDesc
            titulo="A Convenção de Budapeste: Um Marco Internacional na Luta Contra Crimes Cibernéticos"
            textocorpo="Com o avanço da tecnologia e o aumento das atividades online, também surgiram novas formas de criminalidade. A Convenção de Budapeste, conhecida como a primeira iniciativa internacional no combate aos crimes cibernéticos, foi estabelecida para enfrentar esses desafios e estabelecer diretrizes comuns entre os países. Neste artigo, vamos explorar o que é essa convenção, seus objetivos, como ela funciona, e o impacto que teve e continua a ter na luta contra crimes digitais ao redor do mundo."/>
            </div>
            
            <div className="w-full">
            <Placeholder images={image1} />
            </div>
      </div>
      <Title/>
      <Subtitle titulo="O que é a Convenção de Budapeste?
" description="A Convenção de Budapeste, oficialmente chamada de Convenção sobre o Cibercrime, foi adotada em 23 de novembro de 2001, em Budapeste, Hungria. Ela é promovida pelo Conselho da Europa, com o objetivo de criar uma estrutura legal padronizada para o combate aos crimes cibernéticos, facilitando a cooperação entre diferentes países para a investigação e a punição desses crimes.
A convenção é considerada um marco global, pois foi a primeira iniciativa a fornecer diretrizes específicas e uniformes para os países signatários enfrentarem delitos cometidos por meio da internet e outros sistemas digitais. Embora tenha sido criada inicialmente por países europeus, é aberta para adesão de nações de todo o mundo, incluindo países da América Latina, Ásia, e outras regiões.
"/>
      <Subtitle titulo="Objetivos da Convenção de Budapeste" description="A Convenção de Budapeste visa, essencialmente, a:"/>
      <Subsubtitle description="1. Harmonização das leis penais sobre crimes cibernéticos em todos os países signatários, garantindo que haja uma base jurídica comum."/>
      <Subsubtitle description="2. Facilitação da cooperação internacional, possibilitando que países troquem informações e auxiliem em investigações transfronteiriças."/>
      <Subsubtitle description="3. Promoção de medidas de investigação eficientes para coleta de provas eletrônicas e outros dados necessários em processos criminais."/>
      <Subsubtitle description="4. Proteção das liberdades civis e direitos fundamentais, garantindo que a aplicação da convenção respeite os direitos humanos e as leis locais."/>

      <Subtitle titulo="Principais Áreas de Abrangência" description="A convenção abrange diversas áreas do cibercrime e define várias categorias de crimes digitais e suas implicações jurídicas. Algumas dessas áreas incluem:"/>
      <Subsubtitle description="1. Infrações contra a integridade dos sistemas e dados informáticos: como hacking, acesso não autorizado a sistemas, ataques DDoS (Distributed Denial of Service), entre outros."/>
      <Subsubtitle description="2. Infrações relacionadas a conteúdo ilegal: como a criação, distribuição e acesso a conteúdos ilegais, incluindo pornografia infantil e materiais que violam direitos de autor."/>
      <Subsubtitle description="3. Infrações relacionadas à fraude e falsificação digital: que incluem o uso de meios eletrônicos para fraudes financeiras, roubo de identidade, e falsificação de documentos e informações digitais."/>
      <Subsubtitle description="4. Medidas processuais e coleta de provas: a convenção estabelece diretrizes sobre métodos e técnicas para investigação, preservação e apreensão de dados eletrônicos e informações armazenadas digitalmente."/>
      <Subsubtitle description="5. Cooperação internacional: a convenção formaliza mecanismos de cooperação para extradição, troca de informações, assistência mútua em investigações e fornecimento de provas entre os países signatários."/>
      <Subtitle titulo="Impacto e Importância Global" description="A Convenção de Budapeste tem se mostrado fundamental na luta contra crimes cibernéticos. Algumas das principais contribuições incluem:"/>
      <Subsubtitle description="1. Harmonização legal: Ao adotar diretrizes comuns, a convenção facilita que os países alinhem suas legislações e práticas de combate ao cibercrime, tornando a justiça mais eficiente e menos burocrática."/>
      <Subsubtitle description="2. Cooperação transfronteiriça: Com a natureza global da internet, muitos crimes cibernéticos envolvem vítimas e criminosos em diferentes países. A convenção ajuda na superação de barreiras legais e facilita a troca rápida e eficaz de informações entre as autoridades de diferentes nações."/>
      <Subsubtitle description="3. Fortalecimento das capacidades de investigação: A convenção também fornece orientações sobre as melhores práticas para a coleta e preservação de provas digitais, ajudando os países a se adaptarem e responderem rapidamente a novos tipos de crimes cibernéticos."/>
      <Subsubtitle description="4. Exemplo para outras iniciativas: A Convenção de Budapeste inspirou e continua a inspirar outras regiões e organizações a criarem suas próprias estratégias contra crimes digitais. Inclusive, a União Europeia e a União Africana basearam várias de suas legislações e iniciativas em moldes semelhantes aos da convenção."/>
      <Subtitle titulo="Desafios e Limitações" description="Apesar de sua importância, a Convenção de Budapeste enfrenta alguns desafios:"/>
      <Subsubtitle description="1. Divergências culturais e legais: Nem todos os países aderem aos mesmos conceitos legais e culturais em relação ao cibercrime e à proteção de dados. Isso pode dificultar a implementação e a cooperação plena em investigações e processos."/>
      <Subsubtitle description="2. Necessidade de atualização constante: Com a rápida evolução da tecnologia, os crimes cibernéticos também se diversificam e avançam. A convenção, portanto, precisa ser constantemente atualizada para abordar novos tipos de ameaças e métodos criminosos, como crimes relacionados a criptomoedas e ataques de ransomware mais complexos."/>
      <Subsubtitle description="3. Aderência limitada: Embora vários países tenham adotado a convenção, algumas nações importantes em termos de cibersegurança e crimes digitais, como a China e a Rússia, não são signatárias. Isso limita o alcance da cooperação internacional."/>
      <Subtitle titulo="O Futuro da Convenção de Budapeste" description="A Convenção de Budapeste continua a ser um pilar na luta contra os crimes cibernéticos. No entanto, o Conselho da Europa e outras organizações estão constantemente revisando e considerando novas emendas para abordar os desafios emergentes. Em 2022, foi discutido um novo protocolo de emenda para facilitar o acesso direto a informações eletrônicas em investigações, promovendo uma resposta ainda mais ágil e eficaz para a complexidade dos crimes digitais."/>
</div>
  <Title/>
      <Subtitle titulo="Conclusão"/>
      <ArticleSection images={image2}/>
      <Subtitle description="A Convenção de Budapeste é uma ferramenta essencial na cooperação global contra crimes cibernéticos. Ela trouxe padronização, facilitou a investigação e promoveu a colaboração entre países para enfrentar delitos no espaço digital. No entanto, para continuar relevante e eficaz, precisa se adaptar constantemente às mudanças tecnológicas e aos novos tipos de ameaças, reforçando o compromisso internacional em criar um ambiente online mais seguro."/>
      <Title/>
      <Footer/>
  </div>
  </section>
  );
};

export default Article3;
