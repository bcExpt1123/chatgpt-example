import { createRef, useEffect, useRef, useState } from "react";
import { CopyOutlined } from "@ant-design/icons";
import { Space, message, Spin } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import moment from "moment";
import styles from "./style";
import { useSelector } from "react-redux";
const ChatView = () => {
  const [copied, setCopied] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const messageRefs = useRef([]);
  const { messages, loading, error } = useSelector((state) => state.chat);
  messageRefs.current = [...Array(messages.length).keys()].map(
    (_, i) => messageRefs.current[i] ?? createRef()
  );
  useEffect(() => {
    if (copied) {
      messageApi
        .open({
          type: "success",
          content: "Copied successfully!",
        })
        .then(() => {
          setCopied(false);
        });
    }
  }, [copied]);
  useEffect(() => {
    if (messages.length) {
      // change scroll in next cycle
      setTimeout(() => {
        messageRefs.current[messages.length - 1].current.scrollIntoView({
          behavior: "smooth",
        });
      }, 1);
    }
    if (error && !loading) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }, [messages, error, loading]);
  return (
    <div style={styles.chatViewStyle}>
      {contextHolder}
      <div style={styles.topMsgWrapperStyle}>
        <span style={styles.topMsgStyle}>This chat is end to end encrypted</span>
      </div>
      {messages.map((msg, idx) => (
        <div
          key={msg.id}
          ref={messageRefs.current[idx]}
          style={msg.type === "a" ? null : styles.sentMsgContainerStyle}
        >
          <Space
            style={msg.type === "a" ? styles.receivedMsgStyle : styles.sentMsgStyle}
            align="start"
          >
            <div
              style={styles.msgTextStyle}
              dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, "<br />") }}
            ></div>
            {msg.type === "a" ? (
              <CopyToClipboard onCopy={() => setCopied(true)} text={msg.text}>
                <CopyOutlined />
              </CopyToClipboard>
            ) : (
              <></>
            )}
          </Space>
          <div style={styles.timeStyle}>{moment(msg.time).format("h:mm a")}</div>
        </div>
      ))}
      {loading ? <Spin /> : <></>}
    </div>
  );
};

export default ChatView;
