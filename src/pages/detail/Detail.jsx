import Main from "@/components/Main.jsx";
import DynamicHeroIcon from "@/components/Icon.jsx";
import {useEffect, useState} from "react";
import Player from "@/components/Player.jsx";
import SendInput from "@/components/SendInput.jsx";

const Detail = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth*0.6);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight*0.45);
    const leftContainerDynamicWidth = windowWidth
    const playerDynamicStyles = {
        width: windowWidth,
        height: windowHeight
    }
    // console.log(playerDynamicStyles)
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
            <div className={`default-border h-fit sticky`} style={{width: leftContainerDynamicWidth}}>
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
                <div className={'relative'}>
                    <div className={'relative w-full h-full'}>
                        {/* 播放器区域 */}
                        <div className={'flex flex-col'}>
                            {/* 播放器 */}
                            <div className={'flex-1'}>
                                <Player width={'100%'} height={'100%'} />
                            </div>
                            {/* 播放按钮 */}
                            <div className={`w-[64px] h-[64px] absolute right-[34px] bottom-[62px]`}>
                                <DynamicHeroIcon icon={'PlayIcon'} width={64} height={64}/>
                            </div>
                            {/* 底部导航栏 */}
                            <div className={'pl-[12px] h-[46px]'}>
                                {/* 控制台 */}
                                <div className={'flex justify-between items-center h-full'} style={{padding: '0 12px 0 20px'}}>
                                    {/* 文字区 */}
                                    <div className={'text-[13px] text-[#61666d] mr-[24px]'}>
                                        <span>42人正在看，已装填124弹幕</span>
                                    </div>
                                    {/* 控制区 */}
                                    <div className={'flex items-center flex-auto'}>
                                        <DynamicHeroIcon icon={'DmCtrlIcon'} fill={'#61666d'} width={24} height={24} className={'mr-[12px] cursor-pointer'}/>
                                        <DynamicHeroIcon icon={'DmSettingIcon'} fill={'#61666d'} width={24} height={24} className={'mr-[12px] cursor-pointer'}/>
                                        <div className={'flex'}>
                                            <SendInput
                                                className={'h-[30px] bg-[#f1f2f3] rounded-[6px] cursor-pointer text-[#9499a0] flex-1'}
                                                icon={{name:'DmTextSettingIcon',width:24,height:24,fill:'#000'}}
                                                input={{placeholder:'发弹幕',width:'100%',height:'100%',styles: {minWidth: '100px'} }}
                                                style={{width: 'calc(100% - 72px)'}}
                                            >
                                                <span className={'text-[13px] text-[#9499a0]'}>弹幕礼仪 ></span>
                                            </SendInput>
                                            <div className={'h-full w-[62px]'}>
                                                发送
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* right */}
            <div>

            </div>
        </div>
    </Main>;
}

export default Detail;