import { ToastContainer } from "react-toastify";
import Content from "./layout/contents/Content";
import NavBars from "./layout/navBar/NavBars";
import SlideBar from "./layout/slideBar/SlideBar";
import RouterCofig from "./router/RouterCofig";

function App() {
  return (
    <div className="App">
      <SlideBar />
      <NavBars />
      <Content>
        <RouterCofig />
      </Content>
      <ToastContainer />
    </div>
  );
}

export default App;
