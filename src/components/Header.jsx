import Logo from "../assets/bilibili.svg?react";
import SearchIcon from "../assets/search.svg?react";
import Avatar from "../assets/avatar.avif";
import {headerleft, headerright} from "../contants/data.js";
import styles from "../style.js";

const Header = () => {
    return <div className={`flex justify-between 
    items-center leading-[64px] py-[24px] fixed 
    box-border shadow max-w-[2560px] w-full px-[24px]`}>
        {/* 左侧导航栏 */}
        <ul className={'flex list-none items-center'}>
            {headerleft.map((item,index) => (
                <li key={item.id} className={'text-[14px] leading-normal'}>
                    <a className={`mr-[10px] 
                        ${index === 0 ? 'flex items-center' : 'inline-block'}
                    `} href="#">
                        {index === 0 && <Logo className={'w-[64px] h-[32px] mr-[10px]'} fill={'#00AEEC'}/> }
                        <span>{item.title}</span>
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
                <li key={item.id} className={`text-[14px] ${index === 0 && 'w-[50px] h-[50px]'} cursor-pointer`}>
                    <a className={`flex flex-col items-center mr-[10px] leading-normal`} href="#">
                        {index === 0 ? <img src={Avatar} className={'w-full h-full mr-[10px] rounded-[50%] object-cover'}/> :
                            <><SearchIcon Cp={item.icon} width={20} height={21}/><span>{item.title}</span></>
                        }
                    </a>
                </li>
            ))}
        </ul>
    </div>
}

export default Header;