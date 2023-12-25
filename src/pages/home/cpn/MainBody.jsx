import {mainBody, swipers} from "@/contants/data.js";
import Img1 from '@/assets/ce7839548f75c83cc1366bed5889f541d9f3156e.jpg@672w_378h_1c.avif'
import SwiperCover from '@/assets/swiper-cover.avif'
import DynamicHeroIcon from "@/components/Icon.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from 'swiper';
import {Autoplay} from "swiper/modules";
import 'swiper/css';


SwiperCore.use([Autoplay]);

const MainBody = () => {
    const videoList = mainBody
    return <main className={'block box-border relative'}>
        {/* 内容区 */}
        <div className={`grid grid-cols-5 md:grid-cols-4 gap-[20px] box-border`}>
            {/* 轮播 视频 */}
            <div className={'col-span-2 row-span-2'}>
                <Swiper spaceBetween={10} slidesPerView={"auto"} autoplay className={'rounded-[8px]'}>
                    {swipers.map((item,index)=>(
                        <SwiperSlide key={item.id}>
                           <img src={SwiperCover} alt={item.title} className={'w-full h-full object-cover rounded-[8px]'}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {
                videoList.map((item, index) => (
                    <BodyContent videoId={item.id} key={item.id} icon={item.icon}/>
                ))
            }
            {/* 换一批 */}
            <div className={'absolute top-0 left-[100%] translate-x-[10px]'}>
                <button className={`flex flex-col items-center w-[40px] p-[9px] rounded-[8px] border-[1px] border-solid border-[#e3e5e7]`}>
                    <DynamicHeroIcon icon={'ChangeIcon'} />
                    <span className={'w-[40px] p-[9px]'}>换一批</span>
                </button>
            </div>
        </div>
    </main>;
}

export default MainBody

const SwiperWrapper = (props) => {
    return <div className={`${props.className}`}>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide></SwiperSlide>
        </Swiper>
        <img src={SwiperCover} alt="" className={'rounded-[6px] object-cover w-full h-full'}/>
    </div>
}

const BodyContent = ({videoId=1,...props}) => {
    return <div className={'flex flex-col'}>
        {/* 图 */}
        <a href={"/video/"+videoId} className={'w-full h-full'}>
            <picture className={'object-cover'}>
                <img src={Img1} alt="" className={'block rounded-[6px] w-full h-full object-cover'}/>
            </picture>
        </a>
        {/* 标题 up信息 */}
        <div className={'mt-[10px]'}>
            <h3 className={'main-body-video-h main-body-video-title'}>桀桀桀桀桀桀</h3>
            <div className={'flex'}>
                <a href="#" className={'flex items-center justify-center text-[#9499a0]'}>
                    <DynamicHeroIcon icon={props.icon}/>
                    <span className={'flex-1'}>ricardo</span>
                    <span className={'ml-[4px]'}>12-10</span>
                </a>
            </div>
        </div>

    </div>
}