import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [
      // {
      //   id: 0,
      //   text: "Hello",
      //   type: "q", // q: question, a: answer
      //   time: "Sun Feb 12 2023 03:45:49 GMT-0800 (Pacific Standard Time)",
      //   channelId: 0,
      // },
    ],
    history: [
      {
        id: 0,
        description: "Clause for renters best interest for a rental property.",
      },
      {
        id: 1,
        description: "Clause for renters best interest for a rental property.",
      },
      {
        id: 2,
        description: "Clause for renters best interest for a rental property.",
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMessage: (state, action) => {
      return {
        ...state,
        error: null,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            text: action.payload,
            type: "q", // q: question, a: answer
            // time: new Date(),
            channelId: 0,
          },
        ],
        loading: true,
      };
    },
    fetchMessageSuccess: (state, action) => {
      return {
        ...state,
        error: null,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            text: action.payload,
            type: "a", // q: question, a: answer
            // time: new Date(),
            channelId: 0,
          },
        ],
        loading: false,
      };
    },
    fetchMessageFailed: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
  },
});

export const { fetchMessage, fetchMessageSuccess, fetchMessageFailed } = chatSlice.actions;
