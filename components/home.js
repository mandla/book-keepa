import BasicChart from "./basicChart";

import Search from "./search";

export default function HomeComponent({ data }) {
  return (
    <div className="container">
      <aside className="container-aside">
        <div className="box burger">🍔</div>
        <div className="box panel">
          <div
            className="primary-box"
            onClick={() => (location.href = "/")}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-indent"></i>
          </div>
          <div className="box">
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
          </header>
          <div className="box box-split window">
            <h2>Market Leaders</h2>
            <div>
              {data.market.map((m) => (
                <div
                  className="primary-box box-split box-crypto"
                  onClick={() => {
                    location.href = `/token/${m.id}`;
                  }}
                  style={{ cursor: "pointer" }}
                  key={m.symbol}
                >
                  <div className="title">
                    {m.id}&nbsp;({m.symbol})
                  </div>
                  <BasicChart data={m} />
                  <div
                    className={m.price_change_24h > 0 ? "green" : "red"}
                    style={{ margin: "0 10px" }}
                  >
                    {Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(m.price_change_24h)}
                  </div>
                  <div className="title">
                    {Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(m.current_price)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="box box-split window">
            <h2>All Coins</h2>
            <div className="grid">
              {data.all.slice(0, 20).map((d) => (
                <div
                  key={d.id}
                  className="primary-box grid-box"
                  key={d.symbol}
                  onClick={() => {
                    location.href = `/token/${d.id}`;
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    {d.name} ({d.symbol})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>
        <aside className="main-aside">
          <div className="box">
            <div className="title">Events</div>
            {data.events.map((d) => (
              <div className="primary-box box-split" key={d.title}>
                <p>{String(d.description.substr(0, 200))}</p>
                <div style={{ textAlign: "right" }}>
                  <a
                    style={{
                      padding: "5px",
                      borderRadius: "10px",
                      backgroundColor: "var(--main-dark)",
                      color: "#2c64bc",
                      margin: "10px",
                    }}
                    href={d.website}
                    target="_blank"
                  >
                    <i className="fas fa-link"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
