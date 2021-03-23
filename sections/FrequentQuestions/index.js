import React from 'react';
import ToggleQuestion from '../../snnipets/FrequentQuestions/ToggleQuestion';
import { questions } from '../../constants';

function FrequentQuestions() {
  return (
    <div>
      {
        questions.map((quest, index) => {
          const questId = `question__${index}`;
          return (
            <ToggleQuestion
              key={questId}
              title={quest.title}
              response={quest.response}
              queryQuest={quest.queryQuest}
            />
          );
        })
      }
    </div>
  );
}

export default FrequentQuestions;
