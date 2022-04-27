// 인기 있어요 슬라이드 

const prevBtn2 = document.querySelector('.prev2');
const nextBtn2 = document.querySelector('.next2');

prevBtn2.addEventListener('click',() => {
    $('.popularity').css('display','block');
    $('.popularity2').css('display','none');
    $('.page_num2').text('1/2');
});

nextBtn2.addEventListener('click',() => {
    $('.popularity').css('display','none');
    $('.popularity2').css('display','block');
    $('.page_num2').text('2/2');
});

