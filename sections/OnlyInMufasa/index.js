import React from 'react';
import OnlyMufasaContainer from '../../components/OnlyInMufasa';
import { differentials } from '../../constants';
import Differentials from '../../snnipets/OnlyInMufasa/Differentials';

function OnlyInMufasa() {
  return (
    <OnlyMufasaContainer>
      <h1>
        Diferenciais Mufasa
      </h1>
      <OnlyMufasaContainer.Content>
        {
          differentials.map((dif, index) => {
            const difId = `differential__${index}`;
            return (
              <Differentials
                title={dif.title}
                description={dif.description}
                img_src={dif.img_src}
                alt={dif.title}
                key={difId}
              />
            );
          })
        }
      </OnlyMufasaContainer.Content>
    </OnlyMufasaContainer>
  );
}

export default OnlyInMufasa;
