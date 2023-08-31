import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SurveyState = {
  gender: string;
  year: string;
  month: string;
  day: string;
  question1: string[];
  answers: (string | null)[];
  consultationContent?: string;
};

const initialState: SurveyState = {
  gender: '',
  year: '',
  month: '',
  day: '',
  question1: [
    '質問1: 現在、生命保険に加入していますか？',
    '質問2: 現在、入院中ですか。また、最近3ヶ月以内に医師の診療・診断の結果、入院・手術をすすめられたことはありますか？',
    '過去、5年以内に、病気やケガで入院したことはありますか？'
  ],
  answers: [null, null, null],
  consultationContent: '',
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: { 
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    setMonth: (state, action: PayloadAction<string>) => {
      state.month = action.payload;
    },
    setDay: (state, action: PayloadAction<string>) => {
      state.day = action.payload;
    },
    setAnswer: (state, action: PayloadAction<{ index: number, answer: string }>) => {
      state.answers[action.payload.index] = action.payload.answer;
    },
    setConsultationContent: (state, action: PayloadAction<string>) => {
      state.consultationContent = action.payload;
    },
  },
});

export const { setGender, setYear, setMonth, setDay, setAnswer, setConsultationContent } = surveySlice.actions;

export default surveySlice.reducer;