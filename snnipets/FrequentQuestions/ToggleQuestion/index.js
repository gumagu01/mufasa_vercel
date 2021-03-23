import React, {
  useEffect, useState, useRef, useLayoutEffect,
} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const transition = 'ease-out 0.5s';

const Content = styled.div`
  border: 3px solid #fff;
  transition: ${transition};
  max-height: 70px;  

  h6{
    padding: 15px 30px;
    position: relative;
    background: #fff;
    transition: ${transition};
    margin-bottom: 0;
    height: 66px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 768px){
      padding: 15px 35px 15px 15px;
      text-align: left;
    }

    i{
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translate(-100%, -50%);
      transition: ${transition};

      @media(max-width: 768px){
        right: 0px;
      }

      .fa-minus{
        opacity: 0;
        color: ##fff;
      }

      .fa-plus{
        opacity: 1;
        color: #000;
      }
    }
  }

  p{
    margin: 0;
    cursor: auto;
    padding: 30px 30px;
    text-align: left;
    white-space: pre-line;
  }
`;

const ToggleContain = styled.div`

  overflow: hidden;
  background: #fff;
  margin-bottom: 25px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;
  position: relative;

  a{
    color: inherit;
    text-decoration: none;
  }

  ${Content}.open{

    border: 3px solid ${({ theme }) => theme.colors.mufasaOrange};

    max-height: 1100px;

    @media(min-width: 768px){
      max-height: 700px;
    }


    h6{
      background: ${({ theme }) => theme.colors.mufasaOrange};
      color: #fff;

      .fa-minus{
        opacity: 1;
        color: #fff;
      }

      .fa-plus{
        opacity: 0;
        color: #000;
      }
    }
  }
`;

const Position = styled.div`
  ${'' /* display: none; */}
  opacity: 0;
  width: 100%;
  height: 1px;
  left: 0;
  position: fixed;
  ${'' /* top: calc(-${({ theme }) => theme.measuresPatterns.header.height.general} - 40px);

  @media(min-width: 1024px){
    top: calc(-${({ theme }) => theme.measuresPatterns.header.height.minWidth1024} - 40px);
  } */}
`;

function ToggleQuestion({
  title, response, queryQuest,
}) {
  const router = useRouter();
  const { query, pathname } = router;
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    setPosition(ref.current.offsetTop);
  }, []);

  useEffect(() => {
    if (open) {
      window.scrollTo(0, position - 100);
    }
  }, [open]);

  /* const handleOnClick = () => {
    if (query.pergunta === queryQuest) {
      setOpen(!open);
    }
    alert('ok')
    if (open === false) {
      router.push(`?pergunta=${queryQuest}#${queryQuest}`);
    } else {
      router.push(`?pergunta#${queryQuest}`);
    }
  }; */

  useEffect(() => {
    if (!query.pergunta) {
      setOpen(false);
    } else if (query.pergunta === queryQuest) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [query]);

  return (
    <ToggleContain
      ref={ref}
    >
      <Position
        id={queryQuest}
        style={{
          top: `${position - 100}px`,
        }}
      />
      <Content className={open ? 'open' : ''}>
        <a onClick={() => {
          if (!open) {
            router.push(`${pathname}?pergunta=${queryQuest}`);
          } else {
            router.push(`${pathname}?pergunta#${queryQuest}`);
          }
        }}
        >
          <h6>
            <span>
              {title}
            </span>
            <i className="fas fa-minus" />
            <i className="fas fa-plus" />
          </h6>
        </a>
        <p>
          {response}
        </p>
      </Content>
    </ToggleContain>
  );
}

ToggleQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  queryQuest: PropTypes.string.isRequired,
};

export default ToggleQuestion;
