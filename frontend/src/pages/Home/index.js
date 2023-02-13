import { Layout, Space, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import ChatForm from "../../components/ChatForm";
import ChatHistory from "../../components/ChatHistory";
import ChatView from "../../components/ChatView";
import styles from "./style";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

const CGTLayout = () => (
  <Layout style={styles.layoutStyle}>
    <Layout>
      <Header style={styles.headerStyle}>
        <Space size={20} style={styles.headerContentStyle}>
          <MenuOutlined style={styles.iconStyle} />
          <div style={styles.titleStyle}>
            <Title style={styles.titleStyle} level={4}>
              Real Assist AI
            </Title>
            <Text type="secondary">This is private message, between you and assistant</Text>
          </div>
        </Space>
      </Header>
      <Content style={styles.contentStyle}>
        <ChatView />
      </Content>
      <Footer style={styles.footerStyle}>
        <ChatForm />
      </Footer>
    </Layout>
    <Sider width={300} style={styles.siderStyle}>
      <ChatHistory />
    </Sider>
  </Layout>
);
export default CGTLayout;
