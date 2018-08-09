/*测试动画 用点击模拟动画事件*/
var screenAnimateElements = {
    '.screen-1' : [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2' : [
        '.screen-2__heading',
        '.screen-2__phone',
        '.screen-2__subheading',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3'
    ],
    '.screen-3' : [
        '.screen-3__heading',
        '.screen-3__phone',
        '.screen-3__subheading',
        '.screen-3__features'
    ],
    '.screen-4' : [
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__type__item_i_1',
        '.screen-4__type__item_i_2',
        '.screen-4__type__item_i_3',
        '.screen-4__type__item_i_4',
    ],
    '.screen-5' : [
        '.screen-5__heading',
        '.screen-5__subheading',
        '.screen-5__bg'
    ],
}
function setScreenAnimate(screenCls){
    var screen = document.querySelector(screenCls); /*获取当前屏的元素 */
    var animateElements = screenAnimateElements[screenCls];/*需要设置动画的元素 */
    var isSetAnimateClass = false;//是否有初始化子元素的样式
    var isAnimateDone = false;//当前屏幕下所有子元素的状态done？

    screen.onclick = function(){
        // 初始化样式-切换所有的animateElements
        if(isSetAnimateClass === false){
            for(var i = 0;i < animateElements.length;i ++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute("class");/*找到class修饰的元素的基础样式 */
                element.setAttribute("class",baseCls+" "+animateElements[i].substr(1)+"_animate_init");
            }
            isSetAnimateClass = true;
            return;
        }

        if(isAnimateDone === false){
            for(var i = 0;i < animateElements.length;i ++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute("class");/*找到class修饰的元素的基础样式 */
                element.setAttribute("class",baseCls.replace("_animate_init","_animate_done"));
            }
            isAnimateDone = true;
            return;
        }
        if(isAnimateDone === true){
            for(var i = 0;i < animateElements.length;i ++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute("class");/*找到class修饰的元素的基础样式 */
                element.setAttribute("class",baseCls.replace("_animate_done","_animate_init"));
            }
            isAnimateDone = false;
            return;
        }
    }
}
for(var key in screenAnimateElements){
    setScreenAnimate(key);
}