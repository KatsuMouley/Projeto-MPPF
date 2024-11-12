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

import articleImage1 from '../../../assets/Articles Images/Article 1/Thumb/image.png'; // Imagem do artigo

import articleImage2 from '../../../assets/Articles Images/Article 2/image6.png'; // Imagem do artigo

const Article2 = () => {     
  const image1 = [
      articleImage1
    ];
  const image2 = [
      articleImage2
    ];

      return (
    <section className="flex justify-center">
      <div className="w-full md:w-3/4">
  <div className='flex flex-col items-center p-5 gap-2 mx-auto text-left'>
      <div className="flex flex-col md:flex-row p-10 gap-4 mx-auto">
            <div className="w-full">
            <GeneralDesc
            titulo="10 Crimes Digitais dos Quais Você Deve se Proteger"
            textocorpo="À medida que o mundo se torna cada vez mais digital, novas oportunidades surgem para melhorar nossas vidas. No entanto, também crescem os riscos e ameaças no ambiente virtual. Os crimes digitais, ou cibernéticos, são atividades ilegais que ocorrem online e afetam tanto indivíduos quanto organizações. A conscientização sobre essas ameaças é o primeiro passo para garantir que possamos navegar na internet de forma mais segura. Neste artigo, exploraremos 10 crimes digitais dos quais você deve se proteger, além de oferecer dicas para manter suas informações e dispositivos seguros."
            />
            </div>
            
            <div className="w-full">
            <Placeholder images={image1} />
            </div>
      </div>

      <Subtitle titulo="1. Phishing" 
      description="O phishing envolve tentativas de enganar usuários para que revelem informações confidenciais, como senhas e números de cartões de crédito, através de comunicações falsas, como e-mails ou mensagens de texto que parecem ser de fontes legítimas."/>
  <Subsubtitle titulo="Como se proteger?
" description="Sempre verifique a autenticidade de e-mails e mensagens antes de clicar em links ou fornecer informações. Desconfie de comunicações que pedem dados pessoais com urgência."/>


      <Subtitle titulo="2. Roubo de Identidade" 
      description="O roubo de identidade ocorre quando criminosos obtêm e utilizam informações pessoais de outra pessoa para realizar fraudes, como abrir contas bancárias ou solicitar cartões de crédito em nome da vítima.
"/>
  <Subsubtitle titulo="Como se proteger?
" description="Use senhas fortes e diferentes para cada conta. Habilite a autenticação em duas etapas e monitore regularmente suas contas bancárias e de crédito.
"/>


<Subtitle titulo="3. Ataques de Ransomware
" 
      description="Ransomware é um tipo de malware que criptografa os arquivos de um computador, bloqueando o acesso até que um resgate seja pago para desbloqueá-los. Esses ataques geralmente têm como alvo empresas, mas usuários comuns também são afetados."/>
  <Subsubtitle titulo="Como se proteger?
" description="Mantenha seus sistemas e programas atualizados e faça backups regulares de seus dados. Evite clicar em links suspeitos e não baixe arquivos de fontes desconhecidas.
"/>


<Subtitle titulo="4. Hacking" 
      description="O hacking é o acesso não autorizado a sistemas de computador com o objetivo de roubar informações, interromper serviços ou causar danos. Os hackers podem explorar vulnerabilidades em redes e sistemas para realizar essas atividades."/>
  <Subsubtitle titulo="Como se proteger?
" description="Use firewalls e antivírus confiáveis, mantenha seu software sempre atualizado e evite conectar-se a redes Wi-Fi públicas sem o uso de uma VPN (rede privada virtual)."/>


<Subtitle titulo="5. Venda de Dados Roubados" 
      description="Criminosos cibernéticos frequentemente roubam e comercializam informações pessoais, como credenciais de login, números de cartão de crédito e dados médicos, em mercados clandestinos da internet."/>
  <Subsubtitle titulo="Como se proteger?
" description="Monitore regularmente suas contas financeiras e tenha cuidado ao compartilhar informações pessoais online. Utilize soluções de proteção de identidade e evite fornecer dados sensíveis em sites de procedência duvidosa."/>


<Subtitle titulo="6. Disseminação de Malware" 
      description="O malware é um software malicioso projetado para prejudicar ou explorar computadores e dispositivos. Ele pode ser usado para roubar informações, monitorar atividades ou controlar sistemas remotamente."/>
  <Subsubtitle titulo="Como se proteger?
" description="Instale um antivírus atualizado e evite baixar arquivos ou clicar em links de e-mails não solicitados. Mantenha seu sistema operacional e programas de segurança sempre atualizados."/>


<Subtitle titulo="7. Fraudes em Compras Online" 
      description="Fraudes em compras online ocorrem quando sites ou vendedores falsos enganam consumidores, oferecendo produtos inexistentes ou serviços que nunca serão entregues."/>
  <Subsubtitle titulo="Como se proteger?
" description="Compre apenas em sites confiáveis e conhecidos. Verifique a reputação do vendedor e desconfie de ofertas que pareçam boas demais para ser verdade. Use métodos de pagamento seguros, como cartões de crédito, que oferecem proteção contra fraudes."/>


<Subtitle titulo="8. Ataques DDoS (Distributed Denial of Service)" 
      description="Os ataques DDoS visam sobrecarregar servidores ou redes com tráfego excessivo, resultando na interrupção de serviços online. Empresas e sites de grande tráfego são os alvos mais comuns, mas qualquer rede pode ser vulnerável."/>
  <Subsubtitle titulo="Como se proteger?
" description="Empresas devem investir em soluções de mitigação de DDoS, como serviços de proteção na nuvem. Usuários comuns podem evitar ser parte de botnets, mantendo dispositivos seguros e livres de malware."/>


<Subtitle titulo="9. Spyware" 
      description="Spyware é um software espião que se instala secretamente em dispositivos para monitorar as atividades do usuário e coletar informações, como senhas, dados bancários e hábitos de navegação."/>
  <Subsubtitle titulo="Como se proteger?
" description="Instale softwares de segurança que detectem e removam spyware. Tenha cuidado ao baixar aplicativos e sempre revise permissões de acesso solicitadas por programas."/>


<Subtitle titulo="10. Assédio e Cyberbullying" 
      description="Assédio e cyberbullying envolvem o uso de meios digitais, como redes sociais, para intimidar, ameaçar ou humilhar pessoas. Isso pode causar sérios danos emocionais e psicológicos às vítimas."/>
  <Subsubtitle titulo="Como se proteger?
" description="Configure suas redes sociais com níveis de privacidade elevados. Denuncie comportamentos abusivos nas plataformas e, se necessário, busque ajuda jurídica ou psicológica."/>

  </div>
  <Title/>
      <Subtitle titulo="Conclusão"/>
      <ArticleSection images={image2}/>
      <Subtitle description="A era digital trouxe inúmeros benefícios, mas também novos desafios, especialmente quando se trata de crimes cibernéticos. Cada um dos crimes listados representa uma ameaça significativa para indivíduos e organizações, mas com conscientização e medidas de segurança adequadas, podemos nos proteger contra esses perigos. A chave para a segurança digital é estar sempre informado e vigilante. Proteja seus dados, navegue com cautela e mantenha seus dispositivos atualizados. Ao tomar essas precauções, você estará mais seguro no mundo digital e contribuirá para um ambiente online mais saudável e seguro para todos."/>
      <Title/>
      <Footer/></div>
  </section>
  );
};

export default Article2;
