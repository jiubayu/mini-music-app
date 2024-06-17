// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
const rp = require('request-promise');
const URL = 'http://musicapi.xiecheng.live/personalized';
const playlistCollection = db.collection('playlist');
// console.log(playlistCollection,'playlistCollection---')

const MAX_LIMIT = 100;
// 云函数入口函数
exports.main =   (event, context) => {
  // const playlist = await rp(URL);
  // const list = await playlistCollection.get();
  // console.log(list, 'list----')
  // const countResult = await playlistCollection.count();
  // const total = countResult.total;
  // const batchTimes = Math.ceil(total/MAX_LIMIT);
  // const tasks = [];
  // for(let i=0;i<batchTimes;i++) {
  //  let promise =  playlistCollection.skip(i*MAX_LIMIT).limit(MAX_LIMIT).get();
  //  tasks.push(promise);
  // }
  // let list = {
  //   data: []
  // }
  // if(tasks.length > 0) {
  //   list = await Promise.all(tasks).reduce((accu, curr) => ({
  //     data: accu.data.concat(curr.data)
  //   }), {data: []});
  // }
  const mockRes = [{
      "_id": "08560c9e5d042a5c0174f1ca26f1d7b2",
      "copywrier": "热门推荐",
      "playCount": 1.44535238e+06,
      "highQuality": false,
      "type": 0.0,
      "canDislike": true,
      "name": "经典老歌荟萃，不要错过哦。",
      "alg": "cityLevel_unknow",
      "createTime": {
        "$date": "2019-06-14T23:14:36.746Z"
      },
      "id": 2.787891322e+09,
      "picUrl": "https://p2.music.126.net/Biky7TE4CtW6NjGuqoUKZg==/109951164041827987.jpg",
      "trackCount": 53.0
    },
    {
      "_id": "08560c9e5d042a5c0174f1da7aa357aa",
      "highQuality": false,
      "copywriter": "热门推荐",
      "canDislike": true,
      "playCount": 65689822.6,
      "id": 2.740165447e+09,
      "name": "深夜网抑云时刻到了，伤感歌曲",
      "type": 0.0,
      "alg": "cityLevel_unknow",
      "createTime": {
        "$date": "2019-06-14T23:14:36.955Z"
      },
      "picUrl": "https://p2.music.126.net/Q0eS0avwGK04LufWM7qJug==/109951164116217181.jpg",
      "trackCount": 20.0
    },
    {
      "_id": "08560c9e5d042a5c0174f1de21c7e79e",
      "id": 2.8342823443e+09,
      "type": 0.0,
      "name": "百首经典粤语歌曲大全",
      "picUrl": "https://p2.music.126.net/K9IcG8cU6v4_SwuQ_x2xMA==/109951164124604652.jpg",
      "highQuality": false,
      "alg": "cityLevel_unknow",
      "playCount": 1.785097e+06,
      "trackCount": 52.0,
      "copywriter": "热门推荐",
      "canDislike": true,
      "createTime": {
        "$date": "2019-06-14T23:14:36.982Z"
      }
    },
    {
      "_id": "08560c9e5d042a5d0174f1e67d1bb16f",
      "playCount": 7.719349e+06,
      "highQuality": false,
      "trackCount": 950.0,
      "alg": "cityLevel_unknow",
      "id": 9.17786768e+08,
      "type": 0.0,
      "name": "翻唱简史：中国风歌曲400首",
      "canDislike": true,
      "createTime": {
        "$date": "2019-06-14T23:14:37.037Z"
      },
      "copywriter": "热门推荐",
      "picUrl": "https://p2.music.126.net/NczCuurE5eVvObUjssoGjQ==/109951163788653124.jpg"
    },
    {
      "_id": "08560c9e5d042a5d0174f1ea32c4c288",
      "type": 0.0,
      "copywriter": "热门推荐",
      "highQuality": false,
      "createTime": {
        "$date": "2019-06-14T23:14:37.097Z"
      },
      "id": 2.201123658e+09,
      "alg": "cityLevel_unknow",
      "playCount": 1.06749088e+08,
      "name": "校园青春回忆歌曲",
      "picUrl": "https://p2.music.126.net/wpahk9cQCDtdzJPE52EzJQ==/109951163271025942.jpg",
      "canDislike": true,
      "trackCount": 169.0
    },
    {
      "_id": "08560c9e5d0829820362a79f4b049d2d",
      "alg": "cityLevel_unknow",
      "name": "「好声音」国外精选好听歌曲",
      "highQuality": false,
      "picUrl": "http://p2.music.126.net/2WE5C2EypEwLJd2qXFd4cw==/109951164086686815.jpg",
      "trackCount": 158.0,
      "createTime": {
        "$date": "2019-06-18T00:00:02.553Z"
      },
      "copywriter": "热门推荐",
      "playCount": 1.5742008e+06,
      "canDislike": true,
      "id": 2.76747263e+09,
      "type": 0.0
    }
  ]
  for (let i = 0, len = mockRes.length; i < len; i++) {
    await playlistCollection.add({
      data: {
        ...mockRes[i],
        createTime: db.serverDate(),
      }
    }).then((res) => {
      console.log(res, '插入成功');
    }).catch(err => {
      console.log('插入失败');
      return;
    })
  }
  for (let i = 0, len = mockRes.length; i < len; i++) {
    await playlistCollection.add({
      data: {
        ...mockRes[i],
        createTime: db.serverDate(),
      }
    }).then((res) => {
      console.log(res, '插入成功');
    }).catch(err => {
      console.log('插入失败');
      return;
    })
  }
}