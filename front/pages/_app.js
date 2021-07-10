import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
//indexJS의 부모
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF=8" />
        <title>노드버드</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
