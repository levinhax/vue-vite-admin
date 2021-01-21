import { message } from 'ant-design-vue';

export function checkStatus(status: number, msg: string): void {
    switch (status) {
      case 400:
        message.error(`${msg}`);
        break;
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        message.error('您还未登录');
        // userStore.loginOut(true);
        break;
      // 404请求不存在
      case 404:
        message.error('该请求不存在');
        break;
      case 500:
        message.error('请检查您的接口服务');
        break;
      default:
    }
  }