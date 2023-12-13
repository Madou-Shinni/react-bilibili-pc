import MainBody from "./MainBody.jsx";
import MainNavbar from "./MainNavbar.jsx";

const Main = () => {
    return <div className={'max-width main-pd margin-auto md:w-[1180px]'}>
        <MainNavbar/>
        <MainBody/>
    </div>
}

export default Main