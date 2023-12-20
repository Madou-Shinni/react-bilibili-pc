import Main from "@/components/Main.jsx";
import DynamicHeroIcon from "@/components/Icon.jsx";
import {useEffect, useState} from "react";

const Detail = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const leftContainerDynamicWidth = windowWidth
    const playerDynamicStyles = {
        width: windowWidth,
        height: windowHeight
    }
    useEffect(() => {
        // 定义一个事件处理函数，用于更新窗口大小
        const handleResize = () => {
            let width = 668
            let height = 422
            if (window.innerWidth*0.6 > width) {
                width = window.innerWidth*0.6
            }
            if (window.innerHeight*0.45 > height) {
                height = window.innerHeight*0.45
            }
            setWindowWidth(width);
            setWindowHeight(height);
        };

        // 监听窗口大小变化，调用事件处理函数
        window.addEventListener('resize', handleResize);

        // 组件卸载时，移除事件监听
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // 注意，空数组表示只在组件挂载和卸载时执行 useEffect

    return <Main>
        <div className={'flex w-full h-full relative'}>
            {/* left */}
            <div className={`default-border h-fit sticky`} style={{width:leftContainerDynamicWidth}}>
                {/* 标题区 */}
                <div className={'h-[104px] pt-[20px]'}>
                    <h1 className={'mb-[6px]'}>独立开发+技术博主+自由职业，普通的一天</h1>
                    <div className={'text-[13px] text-[#9499a0] items-center h-[24px] leading-[18px] overflow-hidden'}>
                        <div className={'flex items-center'}>
                            <span className={'inline-flex items-center mr-[12px]'}>
                                <DynamicHeroIcon icon={'PlayIcon'} width={18} height={18} className={'mr-[4px]'}/>
                                1.2w
                            </span>
                            <span className={'flex items-center mr-[12px]'}>
                                <DynamicHeroIcon icon={'PlayIcon'} width={18} height={18} className={'mr-[4px]'}/>
                                131
                            </span>
                            <span className={'flex items-center mr-[12px]'}>
                                <DynamicHeroIcon icon={'PlayIcon'} width={18} height={18} className={'mr-[4px]'}/>
                                2023-12-14 14:35:43
                            </span>
                            <span className={'flex items-center mr-[12px]'}>
                                <DynamicHeroIcon icon={'PlayIcon'} width={18} height={18} className={'mr-[4px]'}/>
                                未经作者允许禁止转载
                            </span>
                        </div>
                    </div>
                </div>
                {/* player */}
                <div className={'relative'} style={playerDynamicStyles}>

                </div>
            </div>
            {/* right */}
            <div>

            </div>
        </div>
    </Main>;
}

export default Detail;