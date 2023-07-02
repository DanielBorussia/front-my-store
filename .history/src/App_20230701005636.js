import { routes } from "./routes/App";
import Router from "router/Router";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
        <Router routes={routes} />
    </div>
  )
}

export default App;
