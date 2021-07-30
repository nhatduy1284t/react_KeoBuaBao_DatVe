import logo from "./logo.svg";
import "./App.css";


import BaiTapOanTuTi from "./BaiTapRedux/BaiTapOanTuTi/BaiTapOanTuTi";
import BaiTapXucXac from "./BaiTapRedux/BaiTapXucXac/BaiTapXucXac";

function App() {
  return (
    <div>
      <div className="App">
        {/* <BaiTapXucXac/> */}
        <BaiTapOanTuTi />
      </div>
    </div>
  );
}

export default App;
