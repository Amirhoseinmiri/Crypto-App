import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };
  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLocaleLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypto Marketplace
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          distinctio voluptates saepe perferendis quam officiis?
        </p>
        <form onSubmit={searchHandler}>
          <input
            value={input}
            list="coinlist"
            onChange={inputHandler}
            required
            type="text"
            placeholder="Search crypto..."
          />

          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((coin, i) => (
          <Link to={`/coin/${coin.id}`} key={i} className="table-layout">
            <p>{coin.market_cap_rank}</p>
            <div>
              <img src={coin.image} alt="coin image" />
              <p>{coin.name + "-" + coin.symbol}</p>
            </div>
            <p>
              {currency.symbol} {coin.current_price.toLocaleString()}
            </p>
            <p
              className={`${
                coin.price_change_percentage_24h > 0
                  ? "positive-num"
                  : "negative-num"
              }`}
            >
              {Math.floor(coin.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {currency.symbol} {coin.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
