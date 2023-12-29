import Main from "@/components/Main.jsx";
import DynamicHeroIcon from "@/components/Icon.jsx";
import {useEffect, useState} from "react";
import Player from "@/components/Player.jsx";
import SendInput from "@/components/SendInput.jsx";
import Avatar from "@/assets/avatar.avif";
import {githubLink} from "@/constants/target_link.js";
import {danmuData} from "@/constants/danmu.js";
import BulletScreen,{StyledBullet} from "rc-bullets";
const headUrl='https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';

const Detail = () => {
    // 动态计算窗口大小
    const [windowWidth, setWindowWidth] = useState(window.innerWidth*0.6);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight*0.45);
    // 设置播放状态
    const [played, setPlayed] = useState(false);
    // 服务端推送弹幕数据
    const [currentDanmuData, setCurrentDanmuData] = useState([])
    const leftContainerDynamicWidth = windowWidth
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

    // 弹幕屏幕
    const [screen, setScreen] = useState(null);
    // 弹幕内容
    const [bullet, setBullet] = useState('');
    useEffect(() => {
        // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
        let s = new BulletScreen('.screen',{duration:8});
        // or
        // let s=new BulletScreen(document.querySelector('.screen));
        setScreen(s);
        // 模拟弹幕初始化数据
        setCurrentDanmuData(danmuData)
    }, []);
    // 弹幕内容输入事件处理
    const handleChange = ({ target: { value } }) => {
        setBullet(value);
    };
    // 发送弹幕
    const handleSend = () => {
        if (bullet) {
            // or 使用 StyledBullet
            screen.push(
                <StyledBullet
                    // head={headUrl}
                    msg={bullet}
                    backgroundColor={'#e5b7b7'}
                    size='small'
                />
            );
            // 清空输入框
            setBullet('');
        }
    };

    useEffect(() => {
        if (currentDanmuData.length > 0) {
            currentDanmuData.forEach(item => {
                // 弹幕随机推送
                let randomValue = Math.floor(Math.random() * (1000000 - 100 + 1)) + 100;
                setTimeout(()=>{
                    screen && screen.push(
                        <StyledBullet
                            // head={headUrl}
                            msg={item.content}
                            backgroundColor={'#fff'}
                            size='small'
                        />
                    );
                }, randomValue)
            })
        }
    },[currentDanmuData])

    return <Main>
        <div className={'flex w-full h-full relative'}>
            {/* left */}
            <div className={`h-fit sticky`} style={{width: leftContainerDynamicWidth}}>
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
                                <DynamicHeroIcon icon={'DmCountIcon'} width={18} height={18} className={'mr-[4px]'}/>
                                131
                            </span>
                            <span className={'flex items-center mr-[12px]'}>
                                2023-12-14 14:35:43
                            </span>
                            <span className={'flex items-center mr-[12px]'}>
                                <DynamicHeroIcon icon={'ExclamationCircleIcon'} width={18} height={18}
                                                 className={'mr-[4px]'}/>
                                未经作者允许禁止转载
                            </span>
                        </div>
                    </div>
                </div>
                {/* player */}
                <div className={'relative'}>
                    <div className={'relative w-full h-full'}>
                        {/* 播放器区域 */}
                        <div className={'flex flex-col shadow-[0_10px_15px_-15px_rgba(0,0,0,0.3)]'}>
                            {/* 播放器 */}
                            <div className={'flex-1 screen overflow-hidden'} onClick={() => setPlayed(!played)}>
                                <Player play={played} videoUrl={'http://localhost:9090/video'} width={'100%'} height={'100%'}/>
                            </div>
                            {/* 播放按钮 */}
                            <div className={`w-[64px] h-[64px] absolute right-[34px] bottom-[62px] ${played && 'hidden'}`}>
                                <DynamicHeroIcon icon={'PlayIcon'} width={64} height={64}/>
                            </div>
                            {/* 底部导航栏 */}
                            <div className={'pl-[12px] h-[46px]'}>
                                {/* 控制台 */}
                                <div className={'flex justify-between items-center h-full'}
                                     style={{padding: '0 12px 0 20px'}}>
                                    {/* 文字区 */}
                                    <div className={'text-[13px] text-[#61666d] mr-[24px]'}>
                                        <span>42人正在看，已装填124弹幕</span>
                                    </div>
                                    {/* 控制区 */}
                                    <div className={'flex items-center flex-auto'}>
                                        <DynamicHeroIcon icon={'DmCtrlIcon'} fill={'#61666d'} width={24} height={24}
                                                         className={'mr-[12px] cursor-pointer'}/>
                                        <DynamicHeroIcon icon={'DmSettingIcon'} fill={'#61666d'} width={24} height={24}
                                                         className={'mr-[12px] cursor-pointer'}/>
                                        <div className={'flex flex-1'}>
                                            <SendInput
                                                className={'h-[30px] bg-[#f1f2f3] rounded-[6px] cursor-pointer text-[#9499a0] flex-1 text-[13px]'}
                                                icon={{name: 'DmTextSettingIcon', width: 24, height: 24, fill: '#000'}}
                                                input={{
                                                    placeholder: '发弹幕',
                                                    width: '100%',
                                                    height: '28px',
                                                    styles: {minWidth: '100px', height: '30px'},
                                                    value: bullet,
                                                    onChange: handleChange
                                                }}
                                                style={{width: 'calc(100% - 72px)'}}
                                            >
                                                <span className={'text-[#9499a0] leading-[28px] shrink-[0] w-auto'}>弹幕礼仪 ></span>
                                            </SendInput>
                                            <div
                                                className={'h-full w-[62px] cursor-pointer text-center bg-[#00aeec] rounded-r-[8px] rounded-r-b-[8px]'}
                                                onClick={handleSend}
                                            >
                                                <span className={'text-[13px] text-[#fff] leading-[28px]'}>发送</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 活动区 */}
                <div className={'flex items-center pt-[16px] border-b pb-[20px]'}>
                    <ul className={'flex items-center px-[10px] text-[13px]'}>
                        <li className={'flex items-center w-[92px] cursor-pointer'}>
                            <DynamicHeroIcon icon={'LikeIcon'} fill={'#61666d'} width={28} height={28}
                                             className={'mr-[4px]'}/>
                            <span>7.5万</span>
                        </li>
                        <li className={'flex items-center w-[92px] cursor-pointer'}>
                            <DynamicHeroIcon icon={'DmPushGoldIcon'} fill={'#61666d'} width={28} height={28}
                                             className={'mr-[4px]'}/>
                            <span>4809</span>
                        </li>
                        <li className={'flex items-center w-[92px] cursor-pointer'}>
                            <DynamicHeroIcon icon={'StarIcon'} fill={'#61666d'} width={28} height={28}
                                             className={'mr-[4px]'}/>
                            <span>1.1万</span>
                        </li>
                        <li className={'flex items-center w-[92px] cursor-pointer'}>
                            <DynamicHeroIcon icon={'ShareIcon'} fill={'#61666d'} width={28} height={28}
                                             className={'mr-[4px]'}/>
                            <span>1182</span>
                        </li>
                    </ul>
                </div>
                <br/>
            </div>
            {/* right */}
            <div className={'w-[350px] ml-[30px] relative'}>
                {/* up信息 */}
                <div className={'flex items-center h-[104px]'}>
                    {/* left */}
                    <div className={'flex justify-center items-center w-[80px] h-[80px] overflow-hidden'}>
                        <a href={githubLink}>
                            <img src={Avatar} alt="" className={'w-full h-full rounded-[50%] object-cover'}/>
                        </a>
                    </div>
                    {/* right */}
                    <div className={'ml-[12px]'}>
                        <div className={'flex flex-col'}>
                            <a href="#" className={'text-[16px] text-[#000]'}>ricardo</a>
                            <a href={githubLink} target="_blank" className={'text-[13px] text-[#9499a0]'}>github:
                                https://github.com/Madou-Shinni</a>
                        </div>
                    </div>
                </div>
                {/* 弹幕列表 */}
                <div className={'min-h-[44px]'}>
                    <div className={'w-full h-full'}>
                        <div className={'w-full h-full bg-[#f1f2f3] px-[10px] rounded-[10px]'}>
                            <span className={'leading-[44px]'}>弹幕列表</span>
                        </div>
                        <div className={'flex flex-col w-full px-[10px] mt-[5px]  h-[510px] overflow-hidden'}>
                            {/* header */}
                            <div className={'flex justify-between items-center text-[13px]'}>
                                <span>时间</span>
                                <span>弹幕内容</span>
                                <span>发送时间</span>
                            </div>
                            {/* list */}
                            {
                                danmuData.map((item, index) => (
                                    index < 17 && <div key={item.id} className={'flex justify-between items-center h-[32px] text-[13px] text-[#61666d]'}>
                                        <span>{item.createAt}</span>
                                        <span>{item.content}</span>
                                        <span>{item.createAt}</span>
                                    </div>
                                ))
                            }
                            <div className={'w-full h-[42px] rounded-[6px] cursor-pointer leading-[42px] text-[13px] text-[#61666d] text-center bg-[#f1f2f3]'}>
                                查看历史弹幕
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>;
}

export default Detail;