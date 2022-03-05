import classes from "./MainArea.module.css";
import PriceCard from "./PriceCard";

const MainArea = (props) => {
  return (
    <div className={classes["main-area"]}>
      <PriceCard code="USD" />
      <PriceCard code="GBP" />
      <PriceCard code="EUR" />
    </div>
  );
};

export default MainArea;
