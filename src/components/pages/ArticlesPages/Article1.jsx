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

import articleImage1 from '../../../assets/Articles Images/Article 2/image14.png'; // Imagem do artigo
import articleImage2 from '../../../assets/Articles Images/Article 2/image13.png'; // Imagem do artigo

const Article1 = () => {     
  const image1 = [
      articleImage2
    ];
    const image2 = [
        articleImage1
      ];

      return (
    
        <section className="flex justify-center">
        <div className="w-full md:w-3/4">
  <div className='flex flex-col items-center p-5 gap-2 mx-auto text-left'>
      <div className="flex flex-col md:flex-row p-10 gap-4 mx-auto">
            <div className="w-full">
            <GeneralDesc
            titulo="A importância de se conscientizar a respeito de crimes digitais"
            textocorpo="Vivemos em um mundo cada vez mais conectado, onde a internet e as tecnologias digitais fazem parte do nosso cotidiano. Com o aumento da dependência de dispositivos conectados e a crescente utilização de serviços online, como redes sociais, bancos digitais, compras online e plataformas de comunicação, também surgem novas ameaças. Os crimes digitais estão se tornando uma das maiores preocupações da atualidade, afetando tanto pessoas físicas quanto organizações e governos. Nesse cenário, a conscientização sobre os perigos e a prevenção de crimes cibernéticos é fundamental para garantir um ambiente digital mais seguro."
            />
            </div>
            
            <div className="w-full">
            <Placeholder images={image1} />
            </div>
      </div>
      <Title description="Com o avanço das tecnologias, os criminosos se adaptaram e desenvolveram métodos cada vez mais sofisticados para explorar vulnerabilidades nos sistemas digitais. Isso faz com que qualquer pessoa ou organização que utilize a internet se torne um alvo em potencial, aumentando a necessidade de conscientização e medidas de proteção."/>
      
      <Subtitle titulo="Por que a conscientização é importante?
" description="A conscientização sobre crimes digitais é o primeiro passo para a proteção eficaz no mundo digital. Muitas vezes, o que torna uma pessoa ou empresa vulnerável a esses crimes é a falta de informação sobre como eles acontecem e quais precauções devem ser tomadas. Aqui estão alguns motivos pelos quais a conscientização é crucial:"/>
  <Subsubtitle titulo="1. Prevenção de ataques
" description="Uma pessoa bem informada tem mais chances de identificar e evitar comportamentos e situações suspeitas. Compreender como os criminosos atuam no ambiente digital – seja por meio de golpes de phishing, malwares ou engenharia social – permite que os usuários se protejam e adotem boas práticas de segurança, como evitar clicar em links suspeitos, verificar a autenticidade de e-mails e configurar senhas fortes.
"/>
<Subsubtitle titulo="2. Proteção de dados pessoais e financeiros" description="Dados pessoais, como números de documentos, informações bancárias e senhas, estão entre os alvos mais visados por criminosos digitais. Quando esses dados caem nas mãos erradas, as consequências podem ser devastadoras, incluindo roubo de identidade e prejuízos financeiros. Ao conscientizar-se sobre a importância da privacidade digital, os usuários podem adotar medidas como a criptografia de dados e a utilização de autenticação em dois fatores, dificultando o acesso não autorizado às suas informações."/>
<Subsubtitle titulo="3. Redução de fraudes online" description="Muitas fraudes digitais dependem da ingenuidade ou falta de atenção dos usuários. Golpes que envolvem ofertas falsas, pedidos de doações fraudulentas e esquemas de pirâmide são comuns. A conscientização ajuda a reconhecer esses golpes e a evitar que as vítimas sejam enganadas, diminuindo a ocorrência de fraudes e prejudicando as ações dos criminosos."/>
<Subsubtitle titulo="4. Segurança nas redes sociais" description="O uso das redes sociais explodiu nos últimos anos, mas, ao mesmo tempo, aumentaram os casos de roubo de identidade, assédio e manipulação de informações nessas plataformas. Conscientizar-se sobre os perigos associados ao compartilhamento excessivo de dados pessoais e sobre as configurações de privacidade permite que os usuários protejam sua presença digital e evitem ser alvo de fraudes e ataques cibernéticos."/>
<Subsubtitle titulo="5. Apoio à ação das autoridades" description="Quando mais pessoas estão cientes dos crimes digitais e sabem como identificá-los, há um aumento na denúncia desses crimes, facilitando o trabalho das autoridades competentes, como o Ministério Público. A conscientização não apenas ajuda os indivíduos a se protegerem, mas também fortalece os esforços das instituições responsáveis por investigar e combater esses crimes."/>
<Title/>
<Subtitle titulo="Como promover a conscientização?" 
description="A conscientização sobre crimes digitais deve começar cedo e envolver diferentes setores da sociedade. Aqui estão algumas maneiras de promover a educação e o conhecimento sobre a segurança cibernética:"/>
<Subsubtitle description="- Educação nas escolas: Incluir noções de segurança digital nos currículos escolares para que crianças e jovens cresçam compreendendo os riscos e sabendo como se proteger online."/>
<Subsubtitle description="- Campanhas públicas: O governo e instituições como o Ministério Público podem realizar campanhas de conscientização que informem a população sobre os crimes digitais mais comuns e como denunciá-los."/>
<Subsubtitle description="- Treinamentos para empresas: Organizações devem educar seus funcionários sobre segurança cibernética, protegendo suas redes e sistemas de possíveis invasões e fraudes."/>
<Subsubtitle description="- Iniciativas comunitárias: Palestras, workshops e conteúdo educativo em redes sociais podem atingir um público mais amplo, disseminando práticas de segurança entre a população em geral."/>
  </div>
  <Title/>
      <Subtitle titulo="Conclusão"/>
      <ArticleSection images={image2}/>
      <Subtitle description="A conscientização sobre crimes digitais é essencial em uma sociedade cada vez mais dependente da internet. Compreender os riscos e adotar medidas preventivas pode fazer toda a diferença na proteção contra fraudes, invasões e outras ameaças cibernéticas. Seja um usuário individual ou uma grande organização, o conhecimento é a principal ferramenta para garantir um ambiente digital seguro e saudável. Quanto mais informados estivermos, mais difícil será para os criminosos digitais agirem, e mais eficaz será a atuação das autoridades no combate a esses crimes."/>
      <Title/>
      <Footer/>
  </div>
  </section>
  );
};

export default Article1;
