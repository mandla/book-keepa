import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Crypto App</title>
        <style>
          {`
              *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  user-select: none;
}
:root {
  --main-dark: #17151d;
  --light-dark: #241f2a;
  --blue: #2c64bc;
  --green: #3ba11e;
}
input,
button,
select {
  font: inherit;
}
img {
  max-width : 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
input[type="search"] {
  border: none;
  outline: none;
  background-color: inherit;
  padding-left: 1rem;
  width: 100%;
  color: #eee;
}
input[type="search"]::placeholder {
  color: #eee;
}

.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: minmax(100vh, auto);
  align-items: flex-start;
  padding: 1rem;
  background-color: var(--main-dark);
  color: #fff;
  grid-template-rows: minmax(100vh,auto);
    align-content: flex-start;
    grid-template-rows: minmax(100vh,auto);
  margin: "0px";
}
.box {
  background-color: var(--light-dark);
  border-radius: 1rem;
  padding: 0.5rem;
  color: #fff;
}
.primary-box {
  background-color: var(--blue);
  color: #fff;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
}
.constrain {
  inline-size: 150px;
  overflow-wrap: break-word;
}
.info {
  padding: 1rem;
}
.panel {
  margin-top: 2rem;
  align-items : center;
  display : flex;
  flex-direction : column;
  flex-grow : 1;
}
.container-main {
  margin: 0px 1rem;
  display: flex;
  flex-wrap: wrap;
  grid-column: 2 / span 15;
}
.main-article {
  flex-basis: 70%;
  flex-shrink: 1;
  flex-grow: 1;
  margin: 0 1rem;
}
.main-aside {
  flex-basis: 20%;
  flex-shrink: 0;
  flex-grow: 1;
}
.container-aside{
  display :flex;
  max-width : 50px;
  flex-direction : column;
  height : 100%;
}
.date {
  flex-grow : 1;
  margin-left : 1rem;
  flex-basis : 300px;
}
.grid{
  display : grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows : minmax(50px,auto);
  grid-gap : 10px;
  padding : 1rem 5px;
}
.grid-box{
  
  display : flex;
  align-items : center;
  justify-content : center;
  font-size : 1.3rem;
}
@media only screen and (max-width: 960px) {
  
  .side>div{
  flex-grow : 1;
}
  .date {
    margin-top : 1rem;
    margin-left : 0px;
  }
  :root {
    font-size : 12px;
  }
  
  .main-aside .box {
    width: 100%;
  }
  .container {
    grid-template-rows : auto;
  }
  .container-aside {
    grid-column: 1 / -1;
    align-items : center;
    flex-direction : row;
    max-width : 100%;
    height : auto;
  }
  .panel {
    margin-top : 0;
    margin-left : 1rem;
    display : flex;
    flex-grow : 1;
    flex-direction : row;
  }
  .container-main {
    grid-row: 2/ -1;
    grid-column: 1 / -1;
    margin: 1rem 0;
  }
}
.search {
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.349);
  padding: 0.5rem;
  border-radius: 5px;
}

.box-split {
  margin: 1rem 0px;
}
.burger {
  text-align: center;
  cursor: pointer;
}
.window::-webkit-scrollbar {
  width: 10px;
}

.window::-webkit-scrollbar-track {
  background: var(--main-dark);
}

.window::-webkit-scrollbar-thumb {
  background: var(--light-dark);
  border-radius: 20px;
}

.window::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.main-article .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.main-article .header .search {
  flex-grow: 1;
  flex-basis : 500px;
}
.window {
  overflow-y: scroll;
  height: 50vh;
}
.box-crypto {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.title {
  text-transform: uppercase;
  font-weight: bold;
}
.grow-crypto {
  flex-grow: 1;
  padding: 0 10px;
}
.dateRange {
  background: var(--light-dark);
  cursor: pointer;
  width: 100%;
  color: #fff;
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  text-align : center;
}
.green {
  color: var(--green);
}
.red {
  color : tomato;
}
.side{
  display : grid;
  grid-template-columns : repeat(auto-fit,minmax(300px,1fr));
  grid-auto-rows : auto;
  align-items : flex-end;
  justify-content : space-between;
}


.division {
  display : flex;
  justify-content : space-between;
  padding : 5px 10px;
}
            `}
        </style>
        {/* embedding css here because of a weird Next.js bug */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"
          defer
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />

        <script src="https://cdn.plot.ly/plotly-latest.min.js" defer></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
