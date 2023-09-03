import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SurveyState = {
  gender: string;
  year: string;
  month: string;
  day: string;
  answers: (string | null)[];
  consultationContent?: string;
};

const initialState: SurveyState = {
  gender: '',
  year: '',
  month: '',
  day: '',
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