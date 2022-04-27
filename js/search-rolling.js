// 급상승 검색어

const rankList = document.getElementById("rank-list");
const content = document.getElementById("content");
const rankListHover = document.getElementById("rank-list-hover");


content.addEventListener("mouseover", function() {
    content.setAttribute('class','hover');
    rankListHover.style.display = "block";
    rankList.style.display = "none";
});

content.addEventListener("mouseout", function() {
    content.removeAttribute('class');
    rankListHover.style.display = "none";
    rankList.style.display = "block";
});


$(function() {
    var count = $('#rank-list li').length;
    var height = $('#rank-list li').height();
    function step(index) {
        $('#rank-list ol').delay(2000).animate({
            top: -height * index ,
        }, 500, function() {
            step((index + 1) % count);
        });
    }
    step(1);
});
