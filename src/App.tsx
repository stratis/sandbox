import "./styles.css";
import PositionTitle from "./PositionTitle";

export default function App() {
  return (
    <div className="App">
      <PositionTitle
        underlying="ABNB"
        positionType="Iron Condor"
        expiry="43d"
        isOpen={true}
      />
    </div>
  );
}
