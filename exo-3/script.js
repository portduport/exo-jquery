console.log("exercice 3");

$(document).ready(function(){
// point 1
$("h1").text("Pablo Callejo");
// point 2
$("#tagline").text("Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.");
// point 3
//$("#myNavbar").find("ul").first().remove();
    $("#myNavbar ul:first").remove();
// point 4
$("span.glyphicon").removeClass("glyphicon-log-in").addClass("glyphicon-user");
// point 5
$("footer p").html("<strong>Copyright 2017</strong>");
// point 6
let i = 0;
$("#work1 div p").each(function(){
    i++;
    let text = $(this).text();
   $(this).text(text.replace("Some text..","Mon projet " + i));
});


// point 7
   // $("#work1 > div > img").attr('src','./img/001.jpg');
    let e = 0;
    $("#work1 div img").each(function(){
        e++;
        var src = $(this).attr('src');
        $(this).attr('src','./img/00' + e + '.jpg');
    });
// point 8
var $div = $('<div>');
$(".bg-3 h3").after($div);
$("#work1 div:first-child").clone().appendTo($div). removeAttr('class').attr('id','bigPhoto');
$("#bigPhoto img").attr('style','height: 250px; display: inline');

// point 9
$("footer").attr('class','container-fluid text-center intro');


// End script
});
