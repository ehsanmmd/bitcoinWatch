import classes from "./PriceCard.module.css";

const PriceCard = (props) => {
  return (
    <div className={classes["price-card"]}>
      <header className={classes.header}>
        <h1>BTC/{props.code}</h1>
      </header>
      <p></p>
    </div>
  );
};

export default PriceCard;
