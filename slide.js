window.onload = function(){
   
     //画像を配列に格納
     var images =['url(https://drive.google.com/uc?export=view&id=1tLhP0imM-1kfL00b0wRFdX5gIII2dMaC)',
                  'url(https://drive.google.com/uc?export=view&id=1w21XpFKucyh3DSLU0_1mNugIi-Rko-QW)',
                  'url(https://drive.google.com/uc?export=view&id=1hc_1uV3wKih8O-pPOcAxnIVYLUMSAk6m)']

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
        if(count == 2){
            count = 0;
        }else{
            count++;
        }
        change();
    }
    
    //<をクリックしたらcountを-1する
    function goBack(){
        if(count == 0){
            count = 2;
        }else{
            count--;
        }
        change();
    }

    //クリックイベント
    right.addEventListener('click',goNext,false);
    left.addEventListener('click',goBack,false);
};
