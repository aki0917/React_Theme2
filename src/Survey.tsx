import React,{useState} from 'react';
import { useDispatch } from 'react-redux'; 
import { setAnswer } from './surveySlice'; 
import { QUESTIONS } from './constants';
import { Navigate, useNavigate } from 'react-router-dom';

const Survey = () => {
  const dispatch = useDispatch();

  const [maxDisplayedQuestionIndex, setMaxDisplayedQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(new Array(QUESTIONS.length).fill(null));
  const navigate = useNavigate();

  const handleAnswer = (index: number, answer: string) => {
    dispatch(setAnswer({ index, answer }));
    
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);

    if (maxDisplayedQuestionIndex < QUESTIONS.length - 1) {
      setMaxDisplayedQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleNext = () => {
    navigate('/consultation'); 
  };  

  const handleBack = () => {
    navigate('/basic-info'); 
  };

  return (
    <div>
      {QUESTIONS.slice(0, maxDisplayedQuestionIndex + 1).map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <label>
            <input 
              type="radio"
              name={`question-${index}`}
              value="はい"
              checked={answers[index] === 'はい'}
              onChange={() => handleAnswer(index, 'はい')}
            />
             はい
          </label>
          <label>
            <input 
              type="radio" 
              name={`question-${index}`} 
              value="いいえ" 
              checked={answers[index] === "いいえ"}
              onChange={() => handleAnswer(index, "いいえ")}
            />
            いいえ
          </label>
        </div>
      ))}
       {<button onClick={handleNext}>次に進む</button>}
       {<button onClick={handleBack}>前に戻る</button>}
    </div>
  )
};

export default Survey;