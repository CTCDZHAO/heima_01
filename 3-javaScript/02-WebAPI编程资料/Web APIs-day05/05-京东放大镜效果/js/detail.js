window.addEventListener('load',function (){
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');

//    1.鼠标经过 preview_img 就显示和隐藏 mask和big大盒子
    preview_img.addEventListener('mouseover',function (){
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout',function (){
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove',function (e){
        //(1)先计算出鼠标在盒子内的坐标，让黄色盒子跟着鼠标移动
        var x=e.pageX-this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(this,e);
        console.log(x,y)
        //(2)减去盒子高度 的一半   就是我们mask的最终left和top值了
        //(3）我们mask移动的距离
          var maskX = x-mask.offsetWidth/2;
        var maskY = y- mask.offsetWidth/2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth  - mask.offsetWidth;
        if  (maskX<=0){
            maskX=0;
        }else if(maskX>=maskMax){
            maskX=maskMax;
        }
        if(maskY<=0){
            maskY=0;
        }else if(maskY>=maskMax){
            maskY=maskMax;
        }
        mask.style.left = maskX+'px';
        mask.style.top = maskY+'px';
    //    3.大图片的移动距离 = 遮盖层移动距离 *  大图片最大移动距离/遮盖层的最大移动距离
    //    大图
        var bigImg= document.querySelector('.bigImg');
        var bigMax = bigImg.offsetWidth-big.offsetWidth;

        var bigX = maskX*bigMax/maskMax;
        var bigY = maskY*bigMax/maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })

})
