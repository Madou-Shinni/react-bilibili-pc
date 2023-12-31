export const headerleft = [
    {
        id: 1,
        title: "首页"
    },
    {
        id: 2,
        title: "直播"
    },
    {
        id: 3,
        title: "游戏中心"
    },
    {
        id: 4,
        title: "会员购"
    },
    {
        id: 5,
        title: "漫画"
    },
    {
        id: 6,
        title: "赛事"
    },
    {
        id: 7,
        title: "这一年"
    },
    {
        id: 8,
        title: "下载客户端",
        icon: 'DownloadIcon'
    },
]

export const headerright = [
    {
        id: 1,
        title: "大会员",
        icon: 'VipIcon'
    },
    {
        id: 2,
        title: "消息",
        icon: 'MessageIcon'
    },
    {
        id: 3,
        title: "动态",
        icon: 'DynamicIcon'
    },
    {
        id: 4,
        title: "收藏",
        icon: 'StarIcon'
    },
    {
        id: 5,
        title: "历史",
        icon: 'HistoryIcon'
    },
    {
        id: 6,
        title: "创作中心",
        icon: 'LightBulbIcon'
    },
    {
        id: 7,
        title: "投稿",
        icon: 'UploadSubmissionIcon'
    },
]

export const mainNavbarLeft = [
    {
        id: 1,
        title: "动态",
        img: "https://i2.hdslb.com/bfs/face/667cb1473c000e6188eccceb42118365ad265bb4.jpg@92w_92h",
        icon: null,
    },
    {
        id: 1,
        title: "动态",
        img: "https://i2.hdslb.com/bfs/face/667cb1473c000e6188eccceb42118365ad265bb4.jpg@92w_92h",
        icon: 'FireIcon'
    }
]

export const mainNavbarMid = [
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
    "番剧",
]

export const mainNavbarRight = [
    {
        id: 1,
        title: '专栏',
        icon: 'AcademicCapIcon'
    },
    {
        id: 2,
        title: '专栏',
        icon: 'AcademicCapIcon'
    },
    {
        id: 3,
        title: '专栏',
        icon: 'AcademicCapIcon'
    },
    {
        id: 4,
        title: '专栏',
        icon: 'AcademicCapIcon'
    },
    {
        id: 5,
        title: '专栏',
        icon: 'AcademicCapIcon'
    },
    {
        id: 6,
        title: '专栏',
        icon: 'AcademicCapIcon'
    },
]
export const mainBody = []
export const swipers = []

// 使用 for 循环填充数据
for (let i = 0; i < 20; i++) {
    mainBody.push({
        id: i + 1, // Assuming ids start from 1
        title: `Item ${i + 1}`,
        img: `https://i1.hdslb.com/bfs/live/new_room_cover/ce7839548f75c83cc1366bed5889f541d9f3156e.jpg@672w_378h_1c.avif`, // Replace with your image source logic
        icon: 'UPIcon'
    });
}

for (let i = 0; i < 5; i++) {
    swipers.push({
        id: i+1,
        title: "天行九歌",
        img: '',
    })
}
