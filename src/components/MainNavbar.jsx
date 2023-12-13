import DynamicHeroIcon from "./Icon.jsx";
import DynamicImg from '../assets/667cb1473c000e6188eccceb42118365ad265bb4.jpg'
import {mainNavbarMid, mainNavbarRight} from "../contants/data.js";

const MainNavbar = () => {
    return <div className={`flex items-center my-0 w-full h-[140px]
    `}>
        {/*left*/}
        <div className={'flex items-center'}>
            <a href="#" className={'flex items-center flex-col mr-[20px] md:mr-[16px]'}>
                <div className={'w-[40px]'}>
                    <img src={DynamicImg} alt="" className={'rounded-[50%] object-cover'}/>
                </div>
                <span>动态</span>
            </a>
            <a href="#" className={'flex items-center flex-col mr-[20px] md:mr-[16px]'}>
                <DynamicHeroIcon className={'bg-[#f07775] w-[40px] rounded-[50%]'} icon={'FireIcon'} width={40}
                                 height={40} fill={'#fff'}/>
                <span>热门</span>
            </a>
        </div>
        {/*right*/}
        <div className={'flex items-center justify-between w-full pr-[30px]'}>
            {/* mid */}
            <div className={`grid grid-rows-[repeat(2,1fr)] md:grid-cols-[repeat(9,1fr)]
            grid-flow-col gap-[10px] w-full pr-[20px] border-solid border-r-[1px] border-[#e3e5e7]
            `}>
                {mainNavbarMid.map((item, index) => (
                    <a href={'#'} className={`h-[30px] leading-[30px] inline-block 
                        w-full rounded-[6px] border-[1px] md:h-[26px] md:leading-[26px]
                        border-[#f1f2f3] tracking-[2px] box-content ${index > 17 && 'md:hidden'}
                        bg-[#f6f7f8] text-center font-normal text-[16px] md:text-[13px] text-[#61666d]`}>
                        {item}
                    </a>
                ))}
            </div>
            {/* right */}
            <div className={'grid grid-rows-[repeat(2,1fr)] gap-y-[10px] grid-flow-col w-[240px] shrink-0'}>
                {mainNavbarRight.map((item, index) => (
                    <a href={'#'} className={`flex items-center justify-end text-[16px]  font-normal md:text-[13px] text-[#61666d]`}>
                        <DynamicHeroIcon icon={item.icon}/>
                        <span>{item.title}</span>
                    </a>
                ))}
            </div>
        </div>
    </div>;
}

export default MainNavbar