import { useEffect, useState } from "react";
import { DeleteOutlined, DownOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, List, Space, Typography } from "antd";
import styles from "./style";
import { useSelector } from "react-redux";
const { Text } = Typography;

const ChatHistory = () => {
  const [list, setList] = useState([]);

  const { channels } = useSelector((state) => state.chat);

  useEffect(() => {
    if (channels) {
      setList(channels);
    }
  }, [channels]);

  const dropdownMenuItems = [
    {
      label: (
        <Space>
          <EditOutlined />
          <Text>Edit Title</Text>
        </Space>
      ),
      key: "edit",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Space>
          <DeleteOutlined style={styles.dangerStyle} />
          <Text type="danger">Delete Chat</Text>
        </Space>
      ),
      key: "delete",
    },
  ];
  return (
    <List
      header={<div style={styles.headerStyle}>Recent Chats</div>}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          style={styles.activedItemStyle}
          actions={[
            <div key="menu">
              <Dropdown trigger={["click"]} menu={{ items: dropdownMenuItems }}>
                <a onClick={(e) => e.preventDefault()} style={styles.dropdownStyle}>
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>,
          ]}
        >
          <span>{item.description}</span>
        </List.Item>
      )}
    />
  );
};

export default ChatHistory;
