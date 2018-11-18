$(document).ready(function() {
// console.log("we are in the main js file")
$(document).on("click", ".devour-button", function(){
    // console.log('we are in main.js')
    var burgerId = $(this).data("id")
    console.log(burgerId)
    $.ajax({
        method: "PUT", 
        url: "/burgers/" + burgerId
    }).then(function(data){
        location.reload();
    })
    
})

});