import "./Home.css";
const Home = () => {
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
        <form>
          <input type="text" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;