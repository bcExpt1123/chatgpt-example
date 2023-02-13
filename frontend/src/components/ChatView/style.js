import COLORS from "../../utils/colors";

const styles = {
  chatViewStyle: {
    height: "100%",
    padding: "0px 50px",
    overflowY: "auto",
  },
  sentMsgContainerStyle: {
    textAlign: "right",
  },
  sentMsgStyle: {
    background: COLORS.primary,
    color: "white",
    padding: "10px",
    maxWidth: "80%",
    borderRadius: "10px 0px 10px 10px",
  },
  receivedMsgStyle: {
    background: "white",
    padding: "10px",
    maxWidth: "80%",
    borderRadius: "0px 10px 10px 10px",
  },
  timeStyle: {
    fontSize: "10px",
    color: "#828387",
  },
  topMsgWrapperStyle: {
    textAlign: "center",
    padding: "20px 0px",
    color: COLORS.grey2,
  },
  topMsgStyle: {
    display: "inline-blick",
    background: COLORS.dark3,
    padding: "2px 10px",
    borderRadius: 8,
  },
  msgTextStyle: {
    textAlign: "left",
  },
};

export default styles;
