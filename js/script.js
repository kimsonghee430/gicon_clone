$(document).ready(function(){
    // $(".lang").click(function(){
    //     $(".country").toggle() 
    // })
    $(".lang > a").on("click",function(e){
        e.preventDefault()
        $(".country").toggle() 
    })

})