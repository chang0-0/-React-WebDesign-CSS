import "./App.scss";
import Body from "./components/Body";
import cn from "classnames";

function App() {
  return (
    <div className={cn("App")}>
      <div className={cn("App-body")}>
        <Body />
      </div>
    </div>
  );
}

export default App;
