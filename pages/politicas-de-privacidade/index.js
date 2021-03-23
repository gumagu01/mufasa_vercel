import Link from 'next/link';
import React from 'react';
import FormContainer from '../../components/SupportForm';

function Polices() {
  return (
    <FormContainer className="translate-header">
      <FormContainer.Bg className="info-container">
        <div>
          <h2>
            Políticas de Privacidade
          </h2>

          <p>
            Data de publicação: 13/03/2021
          </p>
        </div>

        <div>
          <h4>
            Que informações a Mufasa coleta e por quê?
          </h4>
          <p>
            {`Ao entrar em contato conosco, através do Serviço ao Consumidor ou Formulário de Contato no site, as seguintes informações podem solicitadas: nome, endereço com CEP, CPF, número de telefone e endereço de e-mail. Esses dados são coletados para:

•  Personalizar seu atendimento;

•  Responder a questionamentos e solicitações, como: dúvidas, críticas, sugestões e reclamações (serviço ao consumidor);

•  Enviar periodicamente e-mails com comunicação sobre novos produtos, informativos, receitas (newsletters) e outros conteúdos promocionais;

•  Atender outras finalidades conforme autorizado ou exigido por lei.`}
          </p>
        </div>

        <div>
          <h4>
            Informações coletadas automaticamente
          </h4>
          <p>
            {`Ao acessar o nosso site, podem ser coletadas automaticamente algumas informações não pessoais, como o endereço IP, tipo de dispositivo, tipo de navegador, localização geográfica ampla (por exemplo, localização em nível de país ou cidade) e outras informações técnicas. Também podem ser coletadas informações sobre as páginas que você acessou e os links em que clicou.

Usamos essas informações para entender melhor o comportamento dos visitantes do site da Mufasa, que caminho fizeram até o site e quais conteúdos são mais interessantes para eles. Dessa forma, podemos melhorar a qualidade e a relevância do site para cada pessoa que o acessa.

Para a coleta e uso dessas informações não pessoais, o site da Mufasa utiliza cookies, também usados para veicular publicidade. Saiba mais sobre os cookies, acessando os `}

            <Link href="/termos-de-uso">
              <a>
                Termos e Condições de Uso.
              </a>
            </Link>
          </p>
        </div>

        <div>
          <h4>
            Como a Mufasa armazena as informações e com quem elas podem ser compartilhadas?
          </h4>
          <p>
            {`As informações, coletadas através do contato com o nosso Serviço ao Consumidor ou Formulário de Contato, são armazenadas em servidor no Brasil. O servidor é gerenciado pelo time de TI da Mufasa.


Estas informações podem ser compartilhadas com:

•  Funcionários e pessoas a serviço da Mufasa com as devidas autorizações;

•  Qualquer agência governamental ou regulamentar, tribunal de justiça, quando necessário.`}

          </p>
        </div>

        <div>
          <h4>
            Por quanto tempo a Mufasa retém dados?
          </h4>
          <p>
            Os dados pessoais fornecidos à Mufasa podem ser retidos por tempo indeterminado.
          </p>
        </div>

        <div>
          <h4>
            Quais são os seus direitos?
          </h4>
          <p>
            {'•  Caso deseje acessar, corrigir, atualizar, limitar o uso ou solicitar exclusão das suas informações, basta entrar em contato com a Mufasa através do e-mail '}

            <Link href="">
              <a>
                XXXXXXXXX@XXXXXXX.com.br.
              </a>
            </Link>

            {`
            
            •  É seu direito cancelar as comunicações de marketing (newsletter) que enviamos a você. Para cancelar sua inscrição, basta clicar `}
            <Link href="">
              <a>
                neste link
              </a>
            </Link>
            {` ou acessar o link disponível no final da newsletter.

•  É também possível retirar seu consentimento à coleta de dados, a qualquer momento. Porém, a retirada do seu consentimento não afeta a legalidade de qualquer processamento que a Mufasa tenha realizado anteriormente.

•  Você tem o direito de fazer uma reclamação para a autoridade de proteção de dados sobre a coleta e o uso de suas informações.

•  Em circunstâncias amparadas pela Lei, a Mufasa manterá seus dados, mesmo após o pedido de exclusão. No entanto, os dados pessoais terão utilização restrita às necessidades legais.`}

          </p>
        </div>

        <div>
          <h4>
            Atualizações desta Política
          </h4>
          <p>
            {`A Mufasa pode atualizar este documento periodicamente em resposta às mudanças decorrentes de evoluções legais, técnicas ou comerciais.

É possível ver quando foi atualizado pela última vez através da data da “última atualização” exibida na parte superior deste documento.

Por favor, acesse-o frequentemente para ver quaisquer atualizações ou mudanças.`}

          </p>
        </div>

        <div>
          <h4>
            Como entrar em contato com a Mufasa
          </h4>
          <p>
            {'Caso tenha dúvidas sobre a Política de Privacidade, a coleta e o processamento de suas informações, envie um e-mail para '}

            <Link href="">
              <a>
                aaaaaaaaa@aaaaaaaaa.com.br.
              </a>
            </Link>

            {`
            
            Caso deseje acessar, corrigir, atualizar, limitar o uso ou solicitar a exclusão de suas informações pessoais, entre em contato através do e-mail `}

            <Link href="">
              <a>
                bbbbbbb@bbbbbbb.com.br.
              </a>
            </Link>

            {`
            
            Caso queira cancelar as comunicações de marketing (newsletter) que enviamos a você, basta clicar neste link.


Conheça os `}

            <Link href="/termos-de-uso">
              <a>
                Termos e Condições de Uso.
              </a>
            </Link>

          </p>
        </div>
      </FormContainer.Bg>
    </FormContainer>
  );
}

export default Polices;
