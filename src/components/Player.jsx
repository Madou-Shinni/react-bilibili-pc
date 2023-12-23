import React, { useEffect, useRef } from 'react';
import flvjs from 'flv.js';

const videoCover = '/src/assets/swiper-cover.avif'

const Player = ({ videoUrl, width, height }) => {
    const videoRef = useRef(null);
    const flvPlayerRef = useRef(null);

    useEffect(() => {
        // 创建 flv.js 播放器实例
        flvPlayerRef.current = flvjs.createPlayer({
            type: 'flv',
            url: videoUrl,
            isLive: true,
        });
        flvPlayerRef.current.attachMediaElement(videoRef.current);
        flvPlayerRef.current.load();
        flvPlayerRef.current.play();

        // 清理函数
        return () => {
            if (flvPlayerRef.current) {
                flvPlayerRef.current.pause();
                flvPlayerRef.current.unload();
                flvPlayerRef.current.detachMediaElement();
                flvPlayerRef.current.destroy();
            }
        };
    }, [videoUrl]);

    return (
        <video
            className={`box-content bg-[url(${videoCover})] bg-cover`}
            ref={videoRef}
            width={width}
            height={height}
        />
    );
};

export default Player;