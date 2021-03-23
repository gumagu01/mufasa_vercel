import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TaxRectangle from '../../components/TaxRectangle';

function TaxRect({ data, setTaxHeight }) {
  const TaxLineWidth = `${data.sale / 200 > 100 ? '100' : data.sale / 200}%`;
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    setTaxHeight(ref.current ? ref.current.offsetHeight : 0);
  }, [ref.current]);
  return (

    <TaxRectangle ref={ref}>
      <TaxRectangle.Title>
        <span>
          {`R$ ${data.total.toString().replace('.', ',')}`}
        </span>
        <span>Imposto Total</span>
      </TaxRectangle.Title>
      <TaxRectangle.Content>
        <h5>
          Imposto
        </h5>

        <div>
          <span>
            Swing Trade
          </span>
          <span>
            {`R$ ${data.tax.swing.toString().replace('.', ',')}`}
          </span>
        </div>

        <div>
          <span>
            Day Trade
          </span>
          <span>
            {`R$ ${data.tax.dayTrade.toString().replace('.', ',')}`}
          </span>
        </div>

        <div>
          <span>
            FII
          </span>
          <span>
            {`R$ ${data.tax.fii.toString().replace('.', ',')}`}
          </span>
        </div>
      </TaxRectangle.Content>

      <TaxRectangle.Content>
        <h5>
          Compensação de Prejuízo
        </h5>

        <div>
          <span>
            Swing Trade
          </span>
          <span>
            {`R$ ${data.compensation.swing.toString().replace('.', ',')}`}
          </span>
        </div>

        <div>
          <span>
            Day Trade
          </span>
          <span>
            {`R$ ${data.compensation.dayTrade.toString().replace('.', ',')}`}
          </span>
        </div>

        <div>
          <span>
            FII
          </span>
          <span>
            {`R$ ${data.compensation.fii.toString().replace('.', ',')}`}
          </span>
        </div>
      </TaxRectangle.Content>

      <div
        className="separate-line"
      />

      <TaxRectangle.Content>
        <TaxRectangle.TaxBottomInfo>
          <div
            className="d-flex-alig-justify-center"
          >
            <h6>Total de Vendas</h6>
            <span>Swing Trade | Ações</span>
          </div>
          <span style={{ whiteSpace: 'pre-line', minWidth: '150px', fontSize: '1.4rem' }}>
            {`R$ ${data.sale.toString().replace('.', ',')}`}
          </span>
        </TaxRectangle.TaxBottomInfo>

        <TaxRectangle.LineTax>
          <div>
            <div
              className="first-line-tax"
            >
              <div>
                <div>
                  <span>R$ 0,00</span>
                  <span>R$ 20.000,00</span>
                </div>
                <div>
                  <div
                    style={{
                      width: TaxLineWidth,
                      height: '100%',
                    }}
                    className="blue-bg"
                  />
                </div>
              </div>
            </div>
            <div
              className="final-line-tax"
            >
              <div />
            </div>
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '0.875rem', marginTop: '7px' }}>
            SUJEITO À ISENÇÃO
          </div>
        </TaxRectangle.LineTax>
      </TaxRectangle.Content>

    </TaxRectangle>
  );
}

TaxRect.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  setTaxHeight: PropTypes.func.isRequired,
};

export default TaxRect;
