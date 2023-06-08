/*Login Form*/
$(".txtb input").on("focus",function(){
    $(this).addClass("focus");
});

$(".txtb input").on("blur",function(){
if($(this).val() == "")
$(this).removeClass("focus");
});

$(".txt input").on("focus",function(){
    $(this).addClass("focus");
});

$(".txt input").on("focus",function(){
    if($(this).val()=="")
    $(this).removeClass("focus");
});