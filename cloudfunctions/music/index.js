// 云函数入口文件
const cloud = require('wx-server-sdk')
const music = require('tcb-router');
const TcbRouter = require('tcb-router');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  });
  app.router('playlist', async (ctx, next) => {
    ctx.body = await cloud.database().collection('playlist')
      .skip(event.start)
      .limit(event.pageSize)
      .orderBy('createTime', 'desc')
      .get()
      .then(res => {
        return res;
      })
  })

  app.router('musiclist', async (ctx, next) => {
    ctx.body = await cloud.database().collection('playlist')
      .skip(event.start)
      .limit(event.pageSize)
      .orderBy('createTime', 'desc')
      .get()
      .then(res => {
        return res;
      })
  })

  return app.serve();
}