import { AudioOutlined, PaperClipOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../../actions/chatActions";
import styles from "./style";

const ChatForm = () => {
  const [chatForm] = Form.useForm();
  const messageInputRef = useRef(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.chat);
  const onSubmit = (event) => {
    if (!event.target.value) {
      return;
    }
    dispatch(fetchMessage(event.target.value));
    chatForm.resetFields();
  };
  useEffect(() => {
    if (!loading) {
      // To run in next cycle.
      setTimeout(() => {
        messageInputRef.current.focus();
      }, 0);
    }
  }, [loading]);
  return (
    <Form layout="inline" form={chatForm} name="message-form" style={styles.formStyle}>
      <Form.Item style={styles.inputStyle} name="message">
        <Input
          size="large"
          suffix={<PaperClipOutlined />}
          placeholder="Message"
          disabled={loading}
          onPressEnter={onSubmit}
          ref={messageInputRef}
        />
      </Form.Item>
      <Form.Item style={styles.btnStyle} name="sendMsg">
        <Button type="primary" size="large" shape="circle">
          <AudioOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ChatForm;
