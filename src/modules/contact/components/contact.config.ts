export interface ContactCardProps {
  textColor: string,
  bgColor: string,
  icon: string,
  name: string,
  detail: string
}
export const contactConfig: ContactCardProps[] = [{
  name: '地址',
  detail: '华中师范大学南湖校区',
  icon: 'https://s2.loli.net/2024/04/27/QHVZbBRJ6mDIrXC.png',
  textColor: 'text-darkRed',
  bgColor: 'bg-darkRed'
}, {
  name: '联系方式',
  detail: '工作号码：XXX',
  icon: 'https://s2.loli.net/2024/04/27/NYXkihM8rogOGql.png',
  textColor: 'text-orange',
  bgColor: 'bg-orange'
}, {
  name: '微信添加',
  icon: 'https://s2.loli.net/2024/04/27/Ygw6nQaquPAFbm7.png',
  detail: '微信号：XXXX',
  textColor: 'text-wechatGreen',
  bgColor: 'bg-wechatGreen'
}]