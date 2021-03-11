/*global $*/
/*global anime*/
/*global Chart*/

//画面ロード時に実行

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

//Contactの入力エラーの表示
//*Submitボタンを押したときの処理
$(function() {
    $('.send').on('click', function() {
        $('span').remove();

        let name = $('input[name="name"]').val();
        
        if(name === ''){
           $('input[name="name"]').after($('<span>', {text: 'お名前を入力してください'}));
            //flag = false;
        }
        let address = $('input[name="address"]').val();
        
        if(address === ''){
           $('input[name="address"]').after($('<span>', {text: 'メールアドレスを入力してください'}));
        }else if(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(address) === false){
           $('input[name="address"]').after($('<span>', {text: '正しいアドレスを入力してください'}));
        }
        
        let inquiry = $('textarea[name="inquiry"]').val();
        if(inquiry === '') {
           $('textarea[name="inquiry"]').after($('<span>', {text: 'お問い合わせ内容を入力してください'}));
        }
    });    
});
