export const chatActions = {
  FETCH_MESSAGE: "FETCH_MESSAGE",
  FETCH_MESSAGE_SUCCESS: "FETCH_MESSAGE_SUCCESS",
  FETCH_MESSAGE_FAILED: "FETCH_MESSAGE_FAILED",
};

export const fetchMessage = (msg) => ({
  type: chatActions.FETCH_MESSAGE,
  payload: msg,
});
