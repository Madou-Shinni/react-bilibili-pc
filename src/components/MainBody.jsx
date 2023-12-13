import {mainBody} from "../contants/data.js";
import Img1 from '../assets/ce7839548f75c83cc1366bed5889f541d9f3156e.jpg@672w_378h_1c.avif'
import DynamicHeroIcon from "./Icon.jsx";

const MainBody = () => {
    return <main className={'block max-width main-pd margin-auto box-border'}>
        {/* 内容区 */}
        <div className={'grid grid-cols-5 gap-[20px] box-border'}>
            {/* 轮播 */}
            {
                mainBody.map((item, index) => (
                    <div className={`${index === 0 ? 'col-span-2 row-span-2 h-full' : 'h-[200px]'} w-full`}>
                        {index !== 0 &&
                            <div>
                                <a href="#">
                                    <img src={Img1} className={'w-full h-full'} alt=""/>
                                </a>
                                {/* 标题 */}
                                <div className={'mt-[4px] main-body-video-title'}>
                                    <h3 title={'golang开发日常 ：我：靠！'}
                                        className={'pr-[16px] main-body-video-h text-ellipsis h-[22px] overflow-hidden'}>
                                        <a href="#">
                                            golang开发日常 ：我：靠！
                                        </a>
                                    </h3>
                                    {/* up信息 */}
                                    <div className={'flex items-center justify-start'}>
                                        <a href="#" className={'flex items-center'}>
                                            <DynamicHeroIcon className={'mr-[5px]'} icon={item.icon} width={17}
                                                             height={17}/>
                                            <span className={'flex-1 overflow-hidden text-ellipsis'}>小金鱼</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))
            }
            {/* 视频 */}
            <div></div>
            {/* 换一批 */}
            <div>换一批</div>
        </div>
    </main>;
}

export default MainBody