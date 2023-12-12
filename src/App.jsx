import Header from "./components/Header.jsx";
import MainNavbar from "./components/MainNavbar.jsx";
import MainBody from "./components/MainBody.jsx";

function App() {

  return (
    <div className={'relative'}>
        <Header className={'h-[10vw]'}/>
        <MainNavbar/>
        <MainBody/>
    </div>
  )
}

export default App
