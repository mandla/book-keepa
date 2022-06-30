import api from "./../../utils/api";
import TokenScreen from "../../components/tokenScreen";

export default function Token(props) {
  return <TokenScreen data={props.data} />;
}

export async function getServerSideProps(ctx) {
  let data = {};
  const {
    params: { token },
  } = ctx;
  try {
    data.primary = await api(
      `https://api.coingecko.com/api/v3/coins/${token}?tickers=true&market_data=true&community_data=true&developer_data=true`
    );

    data.all = await api(`https://api.coingecko.com/api/v3/coins/list`);
  } catch (error) {
    console.log(error);
  } finally {
    return { props: { data } };
  }
}
