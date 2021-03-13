/*global $*/
/*global Chart*/

//画面ロード時に実行
$(function(){
    
});

//title下のラインが伸びる

$(window).on('scroll' , function() {
    $(".line-animation").each(function() {
        const linePosition = $(this).offset().top;
        const lineScroll = $(window).scrollTop();
        const windowHeight2 = $(window).height();
        
        if(lineScroll > linePosition - windowHeight2) {
            $(this).addClass('isActive');
        }
    });
});

//H１が表示される
let moji = $('#h1').text();
$('#h1').html();
                    
let count = 0;
                    
const animation = () => {
    let show_moji = moji.substr(count,1);
    count++;
                        
    let span = $('<span>', {text: show_moji});
    span.css({"color": "rgb(" + (count*15) + "," + (count*15) + "," + (count * 15)});
    $('#h1').append(span);
                            
    span.textContent = moji.substr(0, count);
                        
    if(count === moji.length){
        clearInterval(interval_id);
    }
};
const interval_id = setInterval(animation, 1000);
                    
 

//スキルグラフ
window.onload= function() {
    const data = {
        labels: ['HTML', 'CSS', 'JavaScript','jQuery', 'php', 'MySQL'],
        datasets:[
            {
                label: 'basic',
                data:[90 ,80 ,40 ,60, 20, 30],
                backgroundColor: [
                    'hsla(90, 60%, 60%, 0.3)',
                    'hsla(180, 60%, 60%, 0.3)',
                    'hsla(270, 60%, 60%, 0.3)',
                    'hsla(360, 60%, 60%, 0.3)',
                    'hsla(200, 60%, 60%, 0.3)',
                    'hsla(400, 60%, 60%, 0.3)',
                ],
                fill: false,
                pointStyle: 'rect'
            }
        ]
    };
        
    const options = {
        legend: {display: false},
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    fontColor: '#999',
                    labelString: 'Skill Level'
                },
                stacked: true,
                ticks: {
                    fontSize:16,
                    max: 100,
                    stepSize: 50,
                },
              
                categorySpacing: 0
            }],
             yAxes: [{
                stacked: true,
                ticks:{
                    //display: false
                },
                categoryPercentage: 1.0,
                barPercentage: 0.9,
            }]
        }
    };
            
    var Fctx = document.getElementById('mChart').getContext('2d');
    new Chart(Fctx, {
        type: 'horizontalBar',
        data: data,
        options: options
    });
}
      
       
//サイドからの表示
let slideConts = document.querySelectorAll('.slideConts');
let slideContsRect = [];
let slideContsTop = [];
// *ウィンドウのスクロール位置を取得
let windowY = window.pageYOffset;
let windowH = window.innerHeight;
    
let remainder = 100;
    
//* 要素の位置を取得
for (let i = 0; i< slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (let i = 0; i<slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
}
//* ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function() {
    windowH = window.innerHeight;
});
//* スクロールされたら
window.addEventListener('scroll',function() {
    windowY = window.pageYOffset;
    
    for( let i = 0; i< slideConts.length; i++ ){
        if(windowY > slideContsTop[i] - windowH + remainder){
            slideConts[i].classList.add('show');
        }else{
            slideConts[i].classList.remove('show');
        }
    }
});




$(function() {
//Mobile Nav
    let hum = $('#mobile-nav, .close, .nav-category');
    let nav = $('.mobile-nav-category');

    hum.on('click', function() {
        nav.toggleClass('toggleA');
    });


//Work 画像スライド
    let count_slider = 0;
    
    //PC
    $('#slider img').eq(1).css('margin-left', '-676px');
    $('#slider img').eq(2).css('margin-left', '-676px');
    
    const slide = () => {
        $('#slider img').eq(count_slider % 3).animate({'marginLeft': '676px'}, 2000 , function(){
            $('#slider img').eq(count_slider % 3).css('margin-left', '-676px');
            count_slider++;
        });
        $('#slider img').eq((count_slider + 1) % 3).animate({'marginLeft': '0'}, 2000);
    };
    
    setInterval(slide, 5000);
    
    //Mobile
    $('#m-slider img').eq(1).css('margin-left', '-250px');
    $('#m-slider img').eq(2).css('margin-left', '-250px');
    
    const slide_m = () => {
        $('#m-slider img').eq(count_slider % 3).animate({'marginLeft': '250px'}, 2000 , function(){
            $('#m-slider img').eq(count_slider % 3).css('margin-left', '-250px');
            count_slider++;
        });
        $('#m-slider img').eq((count_slider + 1) % 3).animate({'marginLeft': '0'}, 2000);
    };
    
    setInterval(slide_m, 5000);

//Mobile Contactの入力エラーの表示
//*Submitボタンを押したときの処理
    $('.m-send').on('click', function() {
        $('span').remove();

        let name = $('input[name="name"]').val();
        
        if(name === ''){
           $('.nlabel').after($('<span>', {text: 'お名前を入力してください'}));
            //flag = false;
        }
        let address = $('input[name="address"]').val();
        
        if(address === ''){
           $('.alabel').after($('<span>', {text: 'メールアドレスを入力してください'}));
        }else if(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(address) === false){
           $('.alabel').after($('<span>', {text: '正しいアドレスを入力してください'}));
        }
       
        let inquiry = $('textarea[name="inquiry"]').val();
        if(inquiry === '') {
           $('.ilabel').after($('<span>', {text: 'お問い合わせ内容を入力してください'}));
        }
    });    
    
//スムーススクロール
    $('a').on('click', function() {
        
        // 移動先を0px調整する
        const adjust = 0;
        const speed = 1000;
        
        const href = $(this).attr("href");
        
        const goal =$(href);
        const position_top = goal.offset().top + adjust;
        
        $('body, html').animate({scrollTop: position_top}, speed, 'swing');
        
        return false;
    });
    
});


