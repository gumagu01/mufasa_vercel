import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.div`
padding: 50px 10vw;
background: linear-gradient(120deg, rgba(228,101,18,1) 0%, rgba(201,82,6,1) 52%, rgba(187,76,4,1) 100%);
color: #fff;
font-size: 2rem;
font-weight: 400;
width: 100%;
`;

function SectionTitle({ children }) {
  return (
    <Title>
      {children}
    </Title>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default SectionTitle;
