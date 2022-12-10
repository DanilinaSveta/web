$(function(){
    $("#button").mousedown(function(){
        $("#button").addClass("active");
    }).mouseup(function(){
        $("#button").removeClass("active");
    });
});

let col = 1;

const allBtnT = document.querySelectorAll('.btnT');
Array.prototype.map.call(allBtnT, function(item) {
    item.addEventListener('click', function() {
        Array.prototype.map.call(allBtnT, function(_item) {
            _item.classList.remove('active');
        });
        this.classList.add('active');
        col = Number(this.id);
    });
});

const allStoneButtons = document.querySelectorAll('.stone-button');
Array.prototype.map.call(allStoneButtons, function(item) {
    item.addEventListener('click', function() {
        const image = this.querySelector('.my-image');
        image.src = stoneImages[imagesId[col]];
    });
});

