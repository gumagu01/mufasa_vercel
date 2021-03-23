import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MonthSale({ sales, maxHeight }) {
  return (
    <MonthSales>
      <MonthSales.FadeIn />
      <MonthSales.SalesContain style={{ maxHeight: `${maxHeight}px` }}>
        {sales.map((sale, index) => {
          const saleId = `sale__${index}`;
          return (
            <div key={saleId}>
              <i className="fas fa-circle" />
              <div>
                <p>
                  {sale.date}
                </p>
                <p>
                  Venda de
                  {' '}
                  <span>
                    {sale.ticker}
                  </span>
                </p>
              </div>
              <p>
                {`R$ ${sale.value.toString().replace('.', ',')}`}
              </p>
            </div>
          );
        })}
      </MonthSales.SalesContain>
      <MonthSales.FadeOut />
    </MonthSales>
  );
}
const MonthSales = styled.div`
  width: 100%;
  position: relative;

  @media(min-width: 768px){
    width: 50%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

MonthSales.SalesContain = styled.div`
  align-self: flex-start;
  width: 100%;
  position: relative;
  padding: 20px 10px 30px 10px;
  overflow-y: auto;

  @media(max-width: 767px){
    max-height: initial !important;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.textGray}50;
    position: relative;

    @media(max-width: 767px){
      align-items: flex-end;
    }

    i{
      font-size: 10px;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.colors.textGray};
      position: absolute;
      top: 50%;
      left: 0;
    }

    &:before{
      content: '';
      width: 3px;
      height: 50%;
      background: ${({ theme }) => theme.colors.textGray};
      transform: translate(-50%, -1px);
      position: absolute;
      left: 0;
      top: 0;
    }

    &:after{
      content: '';
      width: 3px;
      height: 50%;
      background: ${({ theme }) => theme.colors.textGray};
      transform: translate(-50%, 1px);
      position: absolute;
      left: 0;
      top: 50%;
    }

    div{
      display: flex;
      justify-content: inherit;
      align-items: center;
      padding: 10px;    
      padding-left: 20px;  

      @media(max-width: 767px){
        justify-content: flex-start;
        flex-direction: column;
      }

      p:first-child{
        color: ${({ theme }) => theme.colors.textGray};
        margin-right: 50px;
        font-weight: 600;
        display: flex;
        align-items: center;

        @media(max-width: 767px){
          margin-right: 0;
        }
      }
    }

    p{
      margin: 0;  

      @media(max-width: 767px){
        align-self: flex-start;
      }

      span{
        color: ${({ theme }) => theme.colors.mufasaOrange};
      }
    }

    & > p:last-child{
      @media(max-width: 767px){
        align-self: flex-end;
        padding-bottom: 10px;
      }
    }

    & > p{
      font-weight: 600;
    }
  }

  & > div:last-child{
    border-bottom: none;

    &:after{
      content: '';
      height: 0;
    }
  }

  & > div:first-child{
    &:before{
      content: '';
      height: 0;
    }
  }
`;

MonthSales.FadeIn = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(236,236,236,1) 0%, rgba(255,255,255,0) 100%);
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 30px;
  z-index: 2;
`;

MonthSales.FadeOut = styled.div`
  width: 100%;
  background: linear-gradient(0deg, rgba(236,236,236,1) 0%, rgba(236,236,236,1) 20%, rgba(255,255,255,0) 100%);
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 2;
`;

MonthSale.propTypes = {
  sales: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
  maxHeight: PropTypes.number.isRequired,
};

export default MonthSale;
