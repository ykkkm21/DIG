window.onload = function(){
   
     //画像を配列に格納
     var images =['url(https://github.com/ykkkm21/DIG/blob/main/gt3.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%891.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%892.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%893.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%894.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%895.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%896.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%897.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%898.JPG?raw=true)',
                  'url(https://github.com/ykkkm21/DIG/blob/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%899.JPG?raw=true)',
                ]

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
        if(count == 9){
            count = 0;
        }else{
            count++;
        }
        change();
    }
    
    //<をクリックしたらcountを-1する
    function goBack(){
        if(count == 0){
            count = 9;
        }else{
            count--;
        }
        change();
    }

    //クリックイベント
    right.addEventListener('click',goNext,false);
    left.addEventListener('click',goBack,false);
};
