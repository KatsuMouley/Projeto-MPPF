import React from 'react';
import Navbar from '../Navbar/Navbar';
import AboutSect from '../Article/AboutSection';
import ArticleSection from '../Article/ArticleSection';
import Footer from '../Navbar/Footer';
import Title from '../Article/Title';
import Subtitle from '../Article/Subtitle'; 
import SubSubtitle from '../Article/Subsubtitle'; // Substituímos Subtitle por SubSubtitle
import Middleimage from '../Article/Middleimage';
import RowImage from '../Article/RowImage';
import Images4 from '../Article/Images4';
import GeneralDesc from '../Hero/GeneralDesc';
import Placeholder from '../Hero/Placeholder';

import articleImage1 from '../../assets/Articles Images/Article 2/image4.png'; // Imagem do artigo
import articleImage2 from '../../assets/Articles Images/Article 2/image15.png'; // Imagem do artigo

const FrequentQuestions = () => {
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
              titulo="Perguntas Frequentes sobre Crimes Digitais e Segurança Online"
              textocorpo="Nos dias de hoje, a segurança digital se tornou um tema essencial para indivíduos e organizações de todos os tipos. Com o crescimento acelerado da tecnologia e o aumento da nossa presença online, os riscos também aumentaram, trazendo consigo novas ameaças, como roubo de dados, invasão de privacidade e até fraudes financeiras. A internet, embora ofereça muitas oportunidades, também abre portas para crimes que podem afetar gravemente a vida e a segurança das pessoas."
            />
          </div>

          <div className="w-full">
            <Placeholder images={image1} />
          </div>
        </div>
            <Title description="Para ajudar nossos leitores a entenderem melhor esse tema crucial, reunimos algumas das perguntas mais frequentes sobre crimes digitais e segurança online, com respostas detalhadas para esclarecer dúvidas, explicar as principais ameaças e orientar na prevenção contra essas atividades ilícitas. É essencial estar bem-informado e preparado para identificar potenciais riscos e adotar práticas que garantam a segurança nas interações digitais."/>
        <SubSubtitle 
          titulo="1. O que são crimes digitais e como eles acontecem?" 
          description="Crimes digitais, também conhecidos como crimes cibernéticos, são atividades ilegais realizadas no ambiente virtual que visam roubar, manipular ou destruir dados, além de prejudicar a privacidade de pessoas e empresas. Eles podem ocorrer de diversas formas, como ataques de phishing, malware, hacking e roubo de identidade. Com o aumento do uso de dispositivos conectados, os criminosos cibernéticos encontram novas formas de explorar vulnerabilidades em redes e sistemas."
        />

        <SubSubtitle 
          titulo="2. Como posso me proteger contra ataques de phishing?" 
          description="Para se proteger contra o phishing, siga estas recomendações:
            Verifique o remetente e o conteúdo: Suspeite de e-mails ou mensagens que pedem dados pessoais ou financeiros com urgência.
            Evite clicar em links suspeitos: Passe o cursor sobre os links para ver o endereço completo antes de clicar. Verifique se ele leva ao site correto.
            Use autenticação em dois fatores: Adicione uma camada extra de proteção às suas contas, dificultando o acesso não autorizado mesmo que suas credenciais sejam comprometidas."
        />

        <SubSubtitle 
          titulo="3. Qual a importância das senhas e como posso criar uma senha segura?" 
          description="Senhas são a primeira linha de defesa para proteger suas contas. Para criar senhas seguras:
            Use combinações de letras (maiúsculas e minúsculas), números e símbolos.
            Evite palavras óbvias ou informações pessoais.
            Prefira senhas longas e, se possível, utilize um gerenciador de senhas para facilitar o armazenamento e a criação de senhas fortes e únicas para cada conta."
        />

        <SubSubtitle 
          titulo="4. O que é ransomware e como evitar esse tipo de ataque?" 
          description="Ransomware é um tipo de malware que bloqueia o acesso aos dados ou sistemas do usuário, exigindo um pagamento (resgate) para restaurar o acesso. Para evitar ransomware:
            Mantenha seu software atualizado: Atualizações de segurança frequentemente corrigem vulnerabilidades que o ransomware pode explorar.
            Faça backups regulares: Mantenha uma cópia de segurança de seus dados em um local seguro, como um dispositivo externo ou uma nuvem.
            Evite downloads de fontes desconhecidas: Não clique em links ou baixe arquivos suspeitos, principalmente de remetentes desconhecidos."
        />

        <SubSubtitle 
          titulo="5. Como denunciar crimes digitais?" 
          description="Crimes digitais podem ser denunciados por meio de:
            Delegacias especializadas: Muitas cidades possuem delegacias de crimes cibernéticos.
            Plataformas online: O Ministério Público e outras autoridades oferecem canais para denúncias de crimes online.
            Redes sociais: Muitas plataformas possuem um sistema de denúncia para assédio, roubo de identidade e conteúdo abusivo."
        />
      </div>

      <div className='flex flex-col items-center p-5 gap-2 mx-auto text-left'>
        <SubSubtitle 
          titulo="6. Quais são os principais sinais de que um dispositivo foi infectado por malware?" 
          description="Alguns sinais de que seu dispositivo pode estar infectado incluem:
            Desempenho lento: Aplicativos e o sistema operacional podem se tornar lentos.
            Pop-ups inesperados: Janelas de publicidade ou alertas constantes podem indicar adware ou spyware.
            Consumo excessivo de dados: Malware pode estar enviando dados sem o seu conhecimento.
            Comportamento incomum: Abertura de aplicativos ou links automaticamente e o uso inesperado de funções do sistema."
        />

        <SubSubtitle 
          titulo="7. O que é um ataque DDoS e como ele afeta os usuários?" 
          description="Um ataque DDoS (Distributed Denial of Service) ocorre quando um grande número de dispositivos acessa um servidor ou site simultaneamente para sobrecarregar o sistema e causar indisponibilidade. Para empresas, pode significar perda de acesso aos serviços online. Embora usuários comuns não sejam diretamente afetados, podem contribuir involuntariamente com o ataque ao terem seus dispositivos comprometidos e controlados por botnets (redes de dispositivos infectados)."
        />

        <SubSubtitle 
          titulo="8. Devo usar uma VPN? Quando e por quê?" 
          description="Sim, uma VPN (Rede Privada Virtual) pode melhorar sua segurança em várias situações, especialmente:
            Ao acessar redes Wi-Fi públicas, como em cafés ou aeroportos, para evitar que hackers interceptem seus dados.
            Ao navegar em sites que solicitam informações pessoais.
            Ao se conectar a sites ou redes de outras regiões, ajudando a proteger sua localização e informações sensíveis."
        />

        <SubSubtitle 
          titulo="9. O que devo fazer se for vítima de um crime digital?" 
          description="Caso seja vítima de um crime digital, aqui estão alguns passos iniciais:
            Entre em contato com as autoridades: Denuncie o crime a uma delegacia especializada em crimes cibernéticos ou faça uma denúncia online.
            Notifique instituições financeiras: Em caso de fraude financeira, informe imediatamente seu banco ou instituição de crédito para interromper transações fraudulentas.
            Altere senhas: Se suspeitar que uma conta foi comprometida, altere imediatamente sua senha e verifique se há outras contas ligadas a ela.
            Verifique e monitore: Mantenha-se atento a atividades suspeitas em suas contas."
        />

        <SubSubtitle 
          titulo="10. Como posso ajudar na conscientização e prevenção de crimes digitais?" 
          description="A conscientização é essencial para reduzir os crimes cibernéticos. Algumas formas de contribuir incluem:
            Educação: Informe familiares, amigos e colegas sobre os riscos e melhores práticas de segurança.
            Campanhas online: Compartilhe conteúdo informativo nas redes sociais, ajude a divulgar campanhas de conscientização e eventos sobre o tema.
            Participação em treinamentos: Incentive empresas e escolas a realizarem treinamentos de segurança digital, aumentando o conhecimento da comunidade."
        />
        </div>
        <Middleimage images={image2} />
      
        <div>
        <Subtitle description="A segurança digital é um aspecto fundamental da vida moderna, exigindo atenção e cautela constantes de todos os usuários de tecnologia. Com o avanço das ameaças cibernéticas e o aumento da sofisticação dos ataques, é essencial que cada indivíduo tome medidas para se proteger e fique atento às melhores práticas de segurança. A conscientização sobre o que são crimes digitais e como eles podem nos afetar é o primeiro passo para evitar que se tornem uma realidade em nossa vida. Assim, ao conhecer os riscos e entender como agir diante das ameaças, estamos mais preparados para navegar no ambiente online de forma segura e para contribuir na criação de uma internet mais protegida para todos. Afinal, a proteção digital depende de todos nós, e pequenas ações de prevenção podem fazer uma grande diferença no combate aos crimes cibernéticos."/>
        <Title/>
        </div>
      <Footer />
    </div>
    </section>
  );
};

export default FrequentQuestions;
