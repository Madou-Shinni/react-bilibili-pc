import {mainBody} from "../contants/data.js";

const MainBody = () => {
    return <main className={'block max-width main-pd margin-auto box-border'}>
        {/* 内容区 */}
        <div className={'grid grid-cols-5 gap-[20px] box-border'}>
            {/* 轮播 */}
            {
                mainBody.map((item,index) => (
                    <div className={`${index === 0 ? 'col-span-2 row-span-2 h-full' : 'h-[200px]'} w-full bg-black`}>
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