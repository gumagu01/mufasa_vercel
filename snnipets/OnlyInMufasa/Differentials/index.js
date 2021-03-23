import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DifCont = styled.div`
  
transform: scale(1);
transition: all 0.2s;

.img-div{
  margin-bottom: 15px;
}

@media(min-width: 768px){
  display: flex;

  .img-div{
    display:flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 0;
  }

  .text-div{
    text-align: left;
  }

  img{
    margin-right: 15px;
  }
}

&:hover{
  transform: scale(1.07);

  h3{
    color: #cecdcd;
  }

  img{
    border-color: #cecdcd;
  }
}



h3{
  font-weight: 500;
}
p{
  font-weight: regular;
}

img {
  height: 70px;
  width: 70px;
  border: 2px solid #707070;
  border-radius: 100%;
  padding: 5px;
}
`;

function Differentials({
  title, description, img_src, alt,
}) {
  return (
    <DifCont>
      <div className="img-div">
        <img src={img_src} alt={alt} />
      </div>

      <div className="text-div">
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
      </div>

    </DifCont>
  );
}

Differentials.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img_src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Differentials.defaultProps = {
  alt: undefined,
};

export default Differentials;
