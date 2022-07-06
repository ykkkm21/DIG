window.onload = function(){
   
     //画像を配列に格納
     var images =['url(https://github.com/ykkkm21/DIG/raw/main/gt3.jpg)',
                  'url(https://github.com/ykkkm21/DIG/raw/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%891.JPG)',
                  'url(https://github.com/ykkkm21/DIG/raw/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%892.JPG)',
                  'url(https://github.com/ykkkm21/DIG/raw/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%893.JPG)']

     //要素をHTMLから取得
     //画像
     var target = document.getElementById('slide');
     //>,<
     var right = document.getElementById('right');
     var left = document.getElementById('left');
 

     //クリックしたときに変わるようにカウント変数
     var count = 0;
 
     //クリックしたら画像変更
    function change(){
        target.style.backgroundImage = images[count];
     }

    //>をクリックしたらcountを+1する
    function goNext(){
        if(count == 3){
            count = 0;
        }else{
            count++;
        }
        change();
    }
    
    //<をクリックしたらcountを-1する
    function goBack(){
        if(count == 0){
            count = 3;
        }else{
            count--;
        }
        change();
    }

    //クリックイベント
    right.addEventListener('click',goNext,false);
    left.addEventListener('click',goBack,false);
};
