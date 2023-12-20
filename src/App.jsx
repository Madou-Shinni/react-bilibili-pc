import Header from "./components/Header.jsx";
import {BrowserRouter} from "react-router-dom";
import Router from "./routers/index.jsx";

function App() {

  return (
    <div className={'relative'}>
        <Header className={'h-[10vw]'}/>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </div>
  )
}

export default App
