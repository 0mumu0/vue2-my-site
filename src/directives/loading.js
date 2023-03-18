// 导出指令的配置对象
// export default{
//     bind(el,bingding){
//         console.log(el,bingding);
//         // el 是被绑定元素对应的真实dom
//         // bingding是一个对象，描述了指令中提供的信息
//         // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化配置

//         // 创建一个img元素，放到el元素内部
//         // 根据bingding.value的值，决定创建或删除img元素
//     },
//     inserted(){
//         // 被绑定元素插入父节点时调用
//     },
//     update(){
//         // 所在组件的VNode更新时调用
//         // 根据bingding.value的值，决定创建或删除img元素
//     }
// }
// 如果这两个钩子函数实现的功能相同，可以直接把指令配置简化为一个单独的函数

// 简写
import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';
// 得到el中loading效果的img元素
function getLoadingImage(el) {
    return el.querySelector('img[data-role=loading]');
}
function createLoadingImg() {
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.src = loadingUrl;
    img.className = styles.loading;
    return img
}
export default function (el, bingding) {
    // 根据bingding.value的值，决定创建或删除img元素
    let curImg = getLoadingImage(el)
    if (bingding.value) {
        if (!curImg) {//如果没有img元素，创建img元素
            const img = createLoadingImg();
            el.appendChild(img)
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }

}
