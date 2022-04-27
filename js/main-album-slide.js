// 최신 앨범 슬라이드

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');


prevBtn.addEventListener("click",function() {
    $('.outer').css('display','block');
    $('.outer1').css('display','none');
    $('.page_num').text('1/2');
})

nextBtn.addEventListener("click",function() {
    $('.outer').css('display','none');
    $('.outer1').css('display','block');
    $('.page_num').text('2/2');
})

c1.addEventListener("click", function() {
    $('.outer').css('display','block');
    $('.outer1').css('display','none');
    $('.page_num').text('1/2');
})

c2.addEventListener("click", function() {
    $('.outer').css('display','none');
    $('.outer1').css('display','block');
    $('.page_num').text('2/2');
})

c3.addEventListener("click", function() {
    $('.outer').css('display','block');
    $('.outer1').css('display','none');
    $('.page_num').text('1/2');
})


