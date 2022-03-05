import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <div className={classes["main-header"]}>
      <h1 className={classes["main-title"]}>Bitcoin watch</h1>
    </div>
  );
};

export default MainHeader;
