import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const [content, setContent] = useState<string>(''); 
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/survey");
  };

  return (
    <div>
      <h2>-ご相談内容-</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          cols={50}
          placeholder="こちらに相談内容を入力してください"
        />
      <div>
        <button>次に進む</button>
        <button onClick={handleBack}>前に戻る</button>
      </div>
    </div>
  );
};

export default Consultation; 