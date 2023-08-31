import React,{useState} from 'react';
import { useDispatch } from 'react-redux'; 
import { setAnswer } from './surveySlice'; 
import { Navigate, useNavigate } from 'react-router-dom';

const questions = [
  {id: 1,text: '質問1: 現在、生命保険に加入していますか？'},
  {id: 2,text: '質問2: 現在、入院中ですか。また、最近3ヶ月以内に医師の診療・診断の結果、入院・手術をすすめられたことはありますか？'},
  {id: 3,text: '過去、5年以内に、病気やケガで入院したことはありますか？'},
];

const Survey = () => {
  const dispatch = useDispatch();

  const [maxDisplayedQuestionIndex, setMaxDisplayedQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleAnswer = (index: number, answer: string) => {
    dispatch(setAnswer({ index, answer }));
    
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);

    if (maxDisplayedQuestionIndex < questions.length - 1) {
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
      {questions.slice(0, maxDisplayedQuestionIndex + 1).map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
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