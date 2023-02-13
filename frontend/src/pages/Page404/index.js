import { Typography, Result } from "antd";
const { Link } = Typography;

const Page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link type="primary" href="/">
          Back Home
        </Link>
      }
    />
  );
};

export default Page404;
