var swipe = function() {
// IF LOCK IS FALSE

    var listContainer = document.getElementById('wrap');
    var targetSelector = 'ul li';
    var threshold = 100;

    Hammer(listContainer).on('drag', function(e) {
        var isDraggingTarget = false,
            isDraggingChildOfTarget = false,
            draggedParents = false;
        var dragged = $(e.target);
        // console.log(dragged, 'i am dragged')

        isDraggingTarget = dragged.is(targetSelector);

        if (!isDraggingTarget) {
            draggedParents = dragged.parents(targetSelector);
            isDraggingChildOfTarget = draggedParents.length;
        }
        if (isDraggingTarget || isDraggingChildOfTarget) {
            e.stopPropagation();
            e.preventDefault();
            e.gesture.preventDefault();
            var el = (isDraggingChildOfTarget) ? draggedParents : dragged;
            var dragDistance = e.gesture.deltaX;

            if (dragDistance > threshold) {

                el.removeClass('prompt-remove');

            } else if (dragDistance < -threshold) {

                el.addClass('prompt-remove');
            }
        }
    });
}
swipe()

var lockQuestion = function(){
    $("li").click(function() {
    console.log(this);
    var gio = this.firstChild.nextSibling.id = 'locked'
    console.log(gio)
    

});
    // var toBlock = $("#unlocked")
    // this.src = "/images/lock.png"
    // toBlock.id = "locked"
    // toBlock.addClass = "iAmLocked"

    // // // console.log(toBlock.hasChildNodes('img'))
    // // console.log(toBlock.childNodes[1].src)
    // // if(toBlock.childNodes[1].src==="http://localhost:3000/images/unlock.png"){
    //  $('li')[1].attributes[3].value =  true
    // }
//      console.log($('li')[1].attributes[3].value)
}

var setLockDefault = function(){
      $('li').attr('locked', false);
      console.log($('li')[1].attributes[3].value)
}

