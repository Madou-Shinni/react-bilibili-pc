import Logo from "../assets/bilibili.svg?react";
import SearchIcon from "../assets/search.svg?react";
import Avatar from "../assets/avatar.avif";
import {headerleft, headerright} from "../contants/data.js";
import styles from "../style.js";
import DynamicHeroIcon from "./Icon.jsx";

const Header = (props) => {
    return <div className={`flex relative
    items-center leading-[64px] md:h-[85px] md:w-[1399px]
    box-border shadow w-full ${props.className}`}>
        <div className={'absolute top-0 flex justify-between items-center px-[24px] w-full'}>
            {/* 左侧导航栏 */}
            <ul className={'flex items-center shrink-[0]'}>
                {headerleft.map((item,index) => (
                    <li key={item.id} className={'text-[14px] leading-normal'}>
                        <a className={`${index === 0 ? 'flex items-center' : 'inline-block'} 
                    mr-[15px] h-[64px] leading-[64px]
                    `} href="#">
                            <LeftMenus length={headerleft.length} index={index} icon={item.icon} width={20} height={21} title={item.title}/>
                        </a>
                    </li>
                ))}
            </ul>
            {/* 搜索输入框 */}
            <div className={'flex-1 max-w-[500px] min-w[181px]'}>
                <form className={'flex items-center relative overflow-hidden leading-[38px] default-border rounded-[8px] px-[8px] bg-[#f1f2f3] hover:bg-white'}>
                    <div className={'flex items-center justify-between w-full h-[32px] z-10 border-transparent focus:bg-[#e3e5e7] border-[2px] border-solid rounded-[6px]'}>
                        <input type="text" placeholder={'搜索'} className={'flex-1 border-none outline-none bg-transparent'}/>
                    </div>
                    <div className={`${styles.flexCenter} right-[7px] absolute cursor-pointer w-[32px] h-[32px] border-none`} onClick={()=>{}}>
                        <SearchIcon width={17} height={17}/>
                    </div>
                </form>
            </div>
            {/* 右侧导航栏 */}
            <ul className={`${styles.flexCenter} ml-[10px]`}>
                {headerright.map((item,index) => (
                    <li key={item.id} className={`flex items-center text-[14px] ${index === 0 && 'box-content w-[50px] h-[50px]'} md:w-[25px] md:mx-[5px] cursor-pointer`}>
                        <a className={`${index === 0 ? 'block pr-[10px]' : 'flex flex-col items-center'} min-w-[50px] text-center mr-[10px] leading-normal`} href="#">
                            <RightMenus length={headerright.length} index={index} icon={item.icon} width={20} height={21} title={item.title}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

const LeftMenus = (props) => {
    switch (props.index) {
        case 0:
            return <Logo className={'w-[64px] h-[32px] mr-[10px]'} fill={'#00AEEC'}/>
        case props.length-1:
            return <div className={'w-full h-full flex items-center'}>
                <DynamicHeroIcon className={'mr-[5px]'} icon={props.icon} width={props.width} height={props.height}/>
                <span>{props.title}</span>
            </div>
        default:
            return <span>{props.title}</span>
    }
}

const RightMenus = (props) => {
    switch (props.index) {
        case 0:
            return <img src={Avatar} className={'rounded-[50%] object-cover'} />
        case props.length-1:
            return <div className={'flex flex-col items-center w-[90px] md:w-[34px] md:h-[34px] md:justify-center bg-[#fb7299] rounded-[8px]'}>
                <DynamicHeroIcon className={'text-[#fff]'} icon={props.icon} width={props.width} height={props.height} /><span className={'text-[#ffffff] md:hidden'}>{props.title}</span>
            </div>
        default:
            return <><DynamicHeroIcon icon={props.icon} width={props.width} height={props.height}/><span className={'md:hidden'}>{props.title}</span></>
    }
}


export default Header;