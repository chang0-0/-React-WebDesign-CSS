import "./App.css";
import Body from "./components/Body";
import cn from "classnames";

function App() {
  return (
    <div className={cn("App")}>
      <div className={cn("body")}>
        <Body />
      </div>
    </div>
  );
}

export default App;
