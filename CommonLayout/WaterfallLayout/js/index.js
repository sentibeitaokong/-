
// 瀑布流布局
//  实现方式：获取容器的宽度，根据图片列数以及间隔算出图片宽度，给容器设置相对定位，子类以绝对定位排成一行
//  再存储第一行图片的高度，获取第一行图片中的最小高度的索引,添加下一张图片到该索引下的图片下方，然后动态修改该索引下的高度值，计算方式为加上当前图片的高度级间隔
;(function () {
    var WaterFall=function (opt) {
        this.el=document.getElementsByClassName(opt.el)[0]
        this.columns=opt.columns
        this.columnGap=opt.columnGap
        this.oItems=this.el.getElementsByTagName('div')
        this.itemWidth=(this.el.offsetWidth-this.columnGap*(this.columns-1))/this.columns
        this.heightArr=[]
        this.init()
    }
    WaterFall.prototype.init=function(){
        this.render()
    }
    WaterFall.prototype.render=function(){
        let item=null
        var itemLength=this.oItems.length
        let minIndex=-1
        console.log(itemLength)
        for(let i=0;i<itemLength;i++){
            item=this.oItems[i]
            console.log(item)
            item.style.width=this.itemWidth+'px'

            if(i<this.columns){
                item.style.left=i*(this.itemWidth+this.columnGap)+'px';
                item.style.top='0px'
                this.heightArr.push(this.oItems[i].offsetHeight)
                console.log(this.heightArr)
            }else{
                minIndex=getMinIndex(this.heightArr)
                item.style.left=minIndex*(this.itemWidth+this.columnGap)+'px';
                item.style.top=this.heightArr[minIndex]+this.columnGap+'px'
                this.heightArr[minIndex]+=item.offsetHeight+this.columnGap
            }
        }
    }
    var getMinIndex=function(arr){
        return arr.indexOf(Math.min.apply(null,arr))
    }
    // 判断是否需要加载图片
    var checkWillLoadImage=function (){
        // 获取最后一个盒子
        var allBox=document.getElementsByClassName("main");
        var lastBox=allBox[allBox.length-1];

        // 求出最后一个盒子自身高度的一半+offsetTop
        var lastBoxTop=lastBox.offsetHeight*0.5+lastBox.offsetTop;

        //求出屏幕的高度
        var screenH=document.body.clientHeight||document.documentElement.clientHeight;

        //求出页面偏离浏览器的高度
        var scrollTop=scroll().top;

        return lastBoxTop<=screenH+scrollTop;
    }
    window.Waterfull=WaterFall
})()