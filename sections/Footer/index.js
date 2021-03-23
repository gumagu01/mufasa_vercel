import Link from 'next/link';
import React from 'react';
import FooterContainer from '../../components/Footer';
import ListNav from '../../snnipets/Footer/ListNav';
import ListNavSocialIcon from '../../snnipets/Footer/ListNavSocialIcon';

function Footer() {
  return (
    <FooterContainer>
      <FooterContainer.FootColumn>
        <FooterContainer.FootColumn.Title>Sobre Nós</FooterContainer.FootColumn.Title>
        <ul>
          <ListNav text="Nossa Empresa" href="/sobre-nos" />
          <ListNav text="Conteúdo" href="/newsletter" />
        </ul>
      </FooterContainer.FootColumn>

      <FooterContainer.FootColumn>
        <FooterContainer.FootColumn.Title>Suporte</FooterContainer.FootColumn.Title>
        <ul>
          <ListNav text="Dúvidas" href="/duvidas" />
          <ListNav text="Fale Conosco" href="/contato" />
        </ul>
      </FooterContainer.FootColumn>

      <FooterContainer.FootColumn>
        <FooterContainer.FootColumn.Title>Perguntas Frequentes</FooterContainer.FootColumn.Title>
        <ul>
          <ListNav text="Como Funciona?" href="/duvidas?pergunta=como-funciona" />
          <ListNav text="Como Começar?" href="/duvidas?pergunta=como-comecar" />
          <ListNav text="Como crio minha conta?" href="/duvidas?pergunta=como-criar-conta" />
          <ListNav text="Não tem nenhuma taxa?" href="/duvidas?pergunta=taxa" />
        </ul>
      </FooterContainer.FootColumn>

      <FooterContainer.FootColumn>
        <FooterContainer.FootColumn.Title style={{ marginBottom: '0' }}>Siga o Mufasa</FooterContainer.FootColumn.Title>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          <ListNavSocialIcon href="/" socialMedia="face" />
          <ListNavSocialIcon href="/" socialMedia="insta" />
          <ListNavSocialIcon href="/" socialMedia="youtube" />
          <ListNavSocialIcon href="/" socialMedia="twitter" />
        </ul>
      </FooterContainer.FootColumn>

      <FooterContainer.Info>
        <div>
          <small>
            mufasa.irpf.temp@gmail.com | Endereço: Praça General Tibúrcio, 80,
            Urca - Rio De Janeiro - RJ - CEP: 22.290-270
          </small>
        </div>
        <div>
          <small>
            <Link href="/termos-de-uso">
              <a>
                Termos de Uso
              </a>
            </Link>
            {' | '}
            <Link href="/politicas-de-privacidade">
              <a>
                Políticas de Privacidade
              </a>
            </Link>
          </small>
        </div>
      </FooterContainer.Info>
    </FooterContainer>
  );
}

export default Footer;
