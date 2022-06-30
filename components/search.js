import { memo, useEffect, useState } from "react";

function Search({ list }) {
  const [display, setDisplay] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [currKey, setCurrKey] = useState("");
  // fuzzy search
  useEffect(() => {
    setKeywords(
      list
        .filter((l) => l.name.toLowerCase().includes(currKey.toLowerCase()))
        .slice(0, 20)
    );
  }, [currKey]);
  return (
    <div className="search">
      {display && (
        <div className="box floatSearch">
          <div className="contain">
            {keywords.map((k) => (
              <div
                style={{
                  padding: "5px 0px",
                  borderBottom: "1px solid rgba(255,255,255,.2)",
                  borderCollapse: "collapse",
                  cursor: "pointer",
                }}
                key={k.id + k.symbol}
                onClick={() => {
                  location.href = `/token/${k.id}`;
                }}
              >
                {k.name}
              </div>
            ))}
          </div>
        </div>
      )}
      <span>🔍</span>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        autoComplete="off"
        value={currKey}
        onChange={(e) => setCurrKey(e.target.value)}
        onFocus={() => setDisplay(true)}
        onBlur={(e) => {
          setTimeout(() => {
            setDisplay(false);
          }, 500);
        }}
      />
      <style jsx>
        {`
          .floatSearch {
            position: absolute;
            left: 0;
            right: 0;
            top: 50px;
            padding: 1rem;
            z-index: 2;
          }
          .contain {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
}
Search.defaultProps = {
  list: [],
};
export default memo(Search);
