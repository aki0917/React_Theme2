import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setConsultationContent } from './surveySlice';
import { RootState } from './store';
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const consultationContent = useSelector((state: RootState) => state.survey.consultationContent);

  const handleNext = () => {
    navigate("/confirmation");
  };

  const handleBack = () => {
    navigate("/survey");
  };

  return (
    <div>
      <h2>-ご相談内容-</h2>
        <textarea
          value={consultationContent}
          onChange={(e) => dispatch(setConsultationContent(e.target.value))}
          rows={10}
          cols={50}
          placeholder="こちらに相談内容を入力してください"
        />
      <div>
        <button onClick={ handleNext }>次に進む</button>
        <button onClick={ handleBack }>前に戻る</button>
      </div>
    </div>
  );
};

export default Consultation;
