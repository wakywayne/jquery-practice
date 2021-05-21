const body = document.body;
$(body).append('<form><label>Say Something</label><input id="theText" type="text" placeholder="Make sure its nice!"></input></form>')
$(body).append('<br>');
$(body).append('<div id="button" style="cursor: pointer;"><a>Click me when you are done typing!</a></div>');



$("#button").on("click", function(){
    let displayedText = $("#theText").val();
    alert(displayedText);
})

// $("#paragraphDiv").on('hover', function(event))

$("#paragraph").one("click", function(){$("#paragraph").append(' Whoah! I didnt even know I could do that! I am a RAINBOW!')
;})

$("#paragraph").on("click", function(){
        var list = ['blue', 'gray', 'red', 'white', 'brown', 'purple', 'pink'];
        var color = list[Math.floor(Math.random() * list.length)];
        $(this).css("color", color);
})

$("#paragraphDiv").on({
    mouseenter: function(){
        $(this).css("background-color", "#00FFFF");
        $("#paragraph").css('color', 'white');
    },  
   
    mouseleave: function(){
        $(this).css("background-color", "white");
    }
})

friends = ["Me","myself","I","Alex","Ben","Branden","Dr.Modi","Jason","john"];
// 8
let i = 0
$(".second-button").on("click", function(){
    if(i < friends.length){$(".the-list").append("<li>"+friends[i]+"</li>");
    i++;}else
    {
        $(".the-list").append("<li>no more friends</li>");
    }
})

$(".my-name").one("click", function(){
    $(body).append("<span>WayneCarl</span>");
})

// $(".third-button").click(function(){
//     $('.the-list').remove();
// }) Need to lear how remove() and removeALL() works