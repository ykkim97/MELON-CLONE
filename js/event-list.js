// 이벤트 배너 

const indicator1 = document.querySelector('.indi1');
const indicator2 = document.querySelector('.indi2');
const indicator3 = document.querySelector('.indi3');

const eventItem1 = document.querySelector('.event1');
const eventItem2 = document.querySelector('.event2');
const eventItem3 = document.querySelector('.event3');

const currentIndex = 1;

indicator1.addEventListener('click',() => {
    $(eventItem1).css('display','block');
    $(eventItem2).css('display','none');
    $(eventItem3).css('display','none');
});

indicator2.addEventListener('click',() => {
    $(eventItem1).css('display','none');
    $(eventItem2).css('display','block');
    $(eventItem3).css('display','none');
});

indicator3.addEventListener('click',() => {
    $(eventItem1).css('display','none');
    $(eventItem2).css('display','none');
    $(eventItem3).css('display','block');
});