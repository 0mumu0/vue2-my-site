import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function (options) {
    const content = options.content || ''
    const type = options.type || 'info'
    const duration = options.duration || 2000
    const container = options.container || document.body
    // 创建消息元素
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, { type })
    console.log('aaaaaaaaaa', iconDom)

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div class="${styles.text}">${content}</div>`
    // 设置样式
    div.className = `${styles.message} ${styles[`message-${type}`]}`;
    // 不可以这么写，这个原始的类名，用了css module是唯一的
    // div.className = `${styles.message} message-${type}}`;

    // 将div加入到容器中

    //容器的position是否改动过
    if (getComputedStyle(container).position === 'static'&&options.container) {
        container.style.position = 'relative';
    }

    container.appendChild(div);
    // 浏览器强行渲染
    div.clientHeight;//导致reflow

    // 回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`

    // 等一段时间，消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`
        div.addEventListener('transitionend', function () {
            div.remove()
            options.callback&&options.callback()
        }, { once: true })//监听移动完成，只执行一次
    }, duration)
}
// 调用测试
// this.$showMessage({content:'评论成功',type:'success',container:this.$refs.ccc,callback:function(){
//     console.log('aaa')
//   }})