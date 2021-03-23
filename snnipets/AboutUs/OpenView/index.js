import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`

color: ${({ theme }) => theme.colors.lightMufasaOrange};
margin-bottom: 20px;
display: flex;
align-items: center;

&:before{
  content: '';
  border-left: 4px solid ${({ theme }) => theme.colors.mufasaOrange};
  width: 1px;
  display: block;
  height: 30px;
  margin-right: 20px;
}
`;
const Text = styled.p`
  display: contents;
  color: #fff;
`;

function ContentArticle({ title, children }) {
  return (
    <div>
      <Title>
        {title}
      </Title>
      <Text>
        {children}
      </Text>
    </div>
  );
}

ContentArticle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentArticle;
