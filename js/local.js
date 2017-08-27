var local = function() {
    var game;

    // 绑定键盘事件
    var bindKeyEvent = function() {
        document.onkeydown = function(e) {
            if(e.keyCode == 38) {

            }else if(e.keyCode == 39){

            }else if(e.keyCode == 40){
                game.down();
            }else if(e.keyCode == 37){
                
            }else if(e.keyCode == 32){
                
            }
        }
    }
    var start = function() {
        var doms = {
            gameDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next')
        }
        game = new Game();
        game.init(doms);
        bindKeyEvent(); 
    }
    // 导出api
    this.start = start;
}