import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { gender, year, month, day, question1, answers, consultationContent } = useSelector((state: RootState) => state.survey);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/consultation");
  };

  const handleSubmit = () => {
    alert('送信しました');
  };

  return (
    <div>
      <h2>確認画面</h2>
      
      <div>
        <strong>性別:</strong> {gender === 'male' ? '男性' : '女性'}
      </div>
      <div>
        <strong>生年月日:</strong> {year}年{month}月{day}日
      </div>
      <div>
        {question1.map((question: string, index: number) => (
          <div key={index}>
            <strong>{question}:</strong> {answers[index] === 'はい' ? 'はい' : 'いいえ'}
          </div>
        ))}
      </div>
      <div>
        <strong>ご相談内容:</strong>
        <p>{consultationContent}</p>
      </div>
      <button onClick={handleBack}>前に戻る</button>
      <button onClick={handleSubmit}>送信</button>
    </div>
  );
};

export default Confirmation;
