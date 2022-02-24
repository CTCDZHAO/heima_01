var that;
class Tab{
    constructor(id) {
        //获取元素
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector(".tabadd");
        //li的父元素
        this.ul = this.main.querySelector(".fisrstnav ul:first-child");
        //section的父亲
        this.fsection = this.main.querySelector(".tabscon");
        this.init();
    }

    init(){
        this.updateNde();
        //init 初始化操作让相关的元素绑定事件
         this.add.onclick = this.addTab;
         for(var i=0;i<this.lis.length;i++){
             this.lis[i].index=i;
             this.lis[i].onclick = this.toggleTab;
             this.remove[i].onclick = this.removeTab;
             this.spans[i].ondblclick = this.editTab;
             this.section[i].ondblclick = this.editTab;
         }
    }
    //因为我们动态添加元素 需要重新获取对应元素
    updateNde(){
        this.lis = this.main.querySelectorAll("li");
        this.section  = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll(".icon-guanbi");
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');

    }
    //1.切换功能
    toggleTab(){
           that.clearClass();
           this.className = 'liactive';
           that.section[this.index].className = 'conactive';
    }
    //清除所有li和section的类
    clearClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className = "";
            this.section[i].className=  "";
        }
    }
    //2.添加功能
    addTab() {
        that.clearClass();
        // (1) 创建li元素和section元素
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试 ' + random + '</section>';
        // (2) 把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    //3.删除功能
    removeTab(e){
        e.stopPropagation();//阻止冒泡，放置触发切换做
        var index= this.parentNode.index;
        console.log(index);
        //根据索引号删除li和section
        that.lis[index].remove();
        that.section[index].remove();
        that.init();
        //当我们删除的不是选中状态的li的时候原来的选中状态不变
        if(document.querySelector('.liactive')) return;
        //当我们删除了选中状态的这个LI的时候，让它的前一个li处于选中状态
        index--;
         //手动调用我们的点击事件，不需要鼠标触发，前面的为真才调用后面的
        that.lis[index]&& that.lis[index].click();


    }
    //4.修改功能
    editTab(){}
}
new Tab('#tab');
