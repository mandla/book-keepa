import { useEffect, useState } from "react";
import DateRanger from "./dateRange";
import MainChart from "./mainChart";
import api from "./../utils/api";
import Search from "./search";
import Link from "next/link";

export default function TokenScreen({ data }) {
  const [state, setState] = useState({ start: null, end: null });
  const [chartData, setChartData] = useState();

  const ticker = data.primary.tickers.find((t) => t.target === "USD");

  useEffect(() => {
    if (state?.start && state?.end) {
      api(
        `https://api.coingecko.com/api/v3/coins/${
          data.primary.id
        }/market_chart/range?vs_currency=usd&from=${
          new Date(state.start).getTime() / 1000
        }&to=${new Date(state.end).getTime() / 1000}`
      )
        .then((d) => setChartData(d))
        .catch(console.log);
    }
  }, [state]);
  return (
    <div className="container">
      <aside className="container-aside">
        <div className="box burger">🍔</div>
        <div className="box panel">
          <div
            className="box"
            onClick={() => (location.href = "/")}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-indent"></i>
          </div>
          <div className="primary-box">
            <span>
              <i className="far fa-chart-bar"></i>
            </span>
          </div>
        </div>
      </aside>
      <main className="container-main">
        <article className="main-article">
          <header className="header" style={{ position: "relative" }}>
            <Search list={data.all} />
            <div className="date">
              <DateRanger setState={setState} />
            </div>
          </header>
          <div className="box box-split">
            <div className="message">
              <h2>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data.primary.market_data.current_price.usd)}
              </h2>
              <h3
                className={
                  data.primary.market_data.ath_change_percentage.usd > 0
                    ? "green"
                    : "red"
                }
                style={{ marginLeft: "1.5rem" }}
              >
                {data.primary.market_data.ath_change_percentage.usd}
              </h3>
            </div>
            {chartData && <MainChart data={chartData} />}
          </div>
          <div className="side">
            <div className="box box-split" style={{}}>
              <h3>Exchange</h3>
              <div className="content">
                <p>Sell </p>
                <p>{ticker?.converted_last.usd}</p>
                <p>USD</p>
              </div>
              <div className="content">
                <p>Buy </p>
                <p>{ticker?.converted_last.btc}</p>
                <p>BTC</p>
              </div>
              <div className="content">
                <div>
                  <p>
                    1{data.primary.name.toUpperCase()} ={" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data.primary.market_data.current_price.usd)}
                  </p>
                </div>
                <div className="primary-box">
                  <a href={`${ticker?.trade_url}`} target="_blank">
                    <span
                      style={{ display: "inline-block", marginRight: "2rem" }}
                    >
                      Exchange
                    </span>
                  </a>
                  <span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="box box-split "
              style={{
                padding: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                justifySelf: "flex-end",
              }}
            >
              <h4>Alexa Rank</h4>
              <p>{data.primary.public_interest_stats.alexa_rank}</p>
            </div>
          </div>
        </article>
        <aside className="main-aside">
          <div className="box imgContainer">
            <div className="info content" style={{ marginTop: "3rem" }}>
              <p>Info Card</p>
              <div className="img">
                <img
                  src={data.primary.image.small}
                  alt="thumbnail"
                  className="image"
                />
              </div>
            </div>

            <div className="primary-box">
              <p>{String(data.primary.description.en.substr(0, 200))}</p>
            </div>
            <div className="box-split" style={{ fontSize: ".7rem" }}>
              <p>Facts </p>
              <div className="content">
                <p>Hashing Algorithm</p>
                <p>{data.primary.hashing_algorithm || "Unknown"}</p>
              </div>
              <div className="content">
                <p>Country Origin </p>
                <p>{data.primary.country_origin || "Unknown"}</p>
              </div>
              <div className="content">
                <p>Category</p>
                <p>{data.primary.categories[0]}</p>
              </div>
            </div>
            <div
              className="primary-box box-split"
              style={{ fontSize: ".8rem" }}
            >
              <div className="content">
                <p>Total Supply</p>
                <p>{data.primary.market_data.total_supply || "Unknown"}</p>
              </div>
              <div className="content">
                <p>Max Supply</p>
                <p>{data.primary.market_data.max_supply || "Unknown"}</p>
              </div>
              <div className="content">
                <p>Circulating </p>
                <p>
                  {data.primary.market_data.circulating_supply || "Unknown"}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </main>
      <style jsx>
        {`
          .message {
            display: flex;
            align-items: center;
          }
          .content {
            display: flex;
            align-items: center;
            margin: 1rem 0px;
            padding: 0px 10px;
            justify-content: space-between;
          }

          .img {
            margin-top: -100px;
            justify-self: flex-end;
            margin-right: 1rem;
          }
          .image {
            border-radius: 10px;
            width: 60px;
            height: 60px;
            display: block;
          }
        `}
      </style>
    </div>
  );
}
