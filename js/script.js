    /*global $*/
    /*global anime*/

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
                

//Profile-Policy表示
let policy = $('.policyBox');
let policyBtn =$('.policyBtn');

policyBtn.on('click', function() {
    policy.toggleClass('toggleB')
})


//スクロールしてボールが転がる
    let elem = document.getElementById('elem');
    window.addEventListener('scroll',() => {
            
        let scrollTop = document.scrollingElement.scrollTop;
            anime({
            targets: elem,
            translateX: scrollTop,
            duration: 2000,
            loop: false,
        });
    }, 10000);
            
//スクロールしてポールが伸びる
    let elem2 = document.getElementById('elem2');
    window.addEventListener('scroll',() => {
        anime({ 
            targets: elem2,
            width: 400,
            duration: 8000,
            loop: false
       });
    }, true);
            
            
//スキルグラフ(html)
//転がるボール
    let elemHtml = document.getElementById('elem-html');
    window.addEventListener('scroll',() => {
                    
        anime({
            targets: elemHtml,
            translateX: 350,
            duration: 5000,
            loop: false,
            opacity:0                    
         });
    }, 10000);

//スクロールしてポールが伸びる
    let elemHtml2 = document.getElementById('elem2-html');
    window.addEventListener('scroll',() => {
        anime({
            opacity:1,
            targets: elemHtml2,
            width: 300,
            duration: 7000,
            loop: false
        });
    }, true);
                
//スキルグラフ(css)
//転がるボール
    let elemCss = document.getElementById('elem-css');
    window.addEventListener('scroll',() => {
                    
        anime({
            targets: elemCss,
            translateX: 350,
            duration: 5000,
            loop: false,
            opacity:0                    
         });
    }, 10000);
//スクロールしてポールが伸びる
    let elemCss2 = document.getElementById('elem2-css');
    window.addEventListener('scroll',() => {
        anime({
            opacity:1,
            targets: elemCss2,
            width: 200,
            duration: 7000,
            loop: false
         });
    }, true);
            

            
//問い合わせボタン
    $('[type="button"]').click(() => {
                        
    });
            
//Mobile Nav
/*let mn = $('#mobile-nav, .close');
let mnc = $('.mobile-nav-category');
            
    mn.on('click', function() {
        mnc.toggleClass('toggle');
    });
*/

//
$(function() {
    let hum = $('#mobile-nav, .close, .n-profile, .n-skills, .n-works, .n-contact');
    let nav = $('.mobile-nav-category');

    hum.on('click', function() {
        nav.toggleClass('toggleA');
    });
});
       
       //サイドからの表示
    var slideConts = document.querySelectorAll('.slideConts');
    var slideContsRect = [];
    var slideContsTop = [];
    // ウィンドウのスクロール位置を取得
    var windowY = window.pageYOffset;
    var windowH = window.innerHeight;
    
    var remainder = 100;
    
    // 要素の位置を取得
    for (var i = 0; i< slideConts.length; i++) {
        slideContsRect.push(slideConts[i].getBoundingClientRect());
    }
    for (var i = 0; i<slideContsRect.length; i++) {
        slideContsTop.push(slideContsRect[i].top + windowY);
    }
    // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
    window.addEventListener('resize', function() {
        windowH = window.innerHeight;
    });
    // スクロールされたら
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