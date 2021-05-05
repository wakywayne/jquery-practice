
$("#message2").blur(function(){
    if ($(this).val() =='') {
        $("#myButton").prop( "disabled", true );
    } else {
        $("#myButton").prop( "disabled", false );
    }
})

// function text(){
//     let $box = $('#message2').val();
//     alert($box);
// }

$(".form-disable").after("<ul class='the-list'><li><h2>Im Yellow</h2></li></ul>");

$("#myButton").click(function(event) {
    let theH2 = document.createElement('h2');
    let theLI = document.createElement('li');
    let $alert = $('#message2').val();
    $(theH2).text($alert);
    $(theLI).append(theH2)
    $(".the-list").append(theLI);
    $(theLI).hover(function() {
        $(this).css("background-color", "yellow");
      }, function() {
        $(this).css("background-color", "white");
      }

    )
    $(theLI).click(function() {
        var list = ['blue', 'gray', 'red', 'white', 'brown', 'purple', 'pink'];
        var color = list[Math.floor(Math.random() * list.length)];
        $(this).css("color", color);
      }

    )
    $(theLI).dblclick(function() {
        $(this).remove();
      }

    )
    event.preventDefault();
  })

  $(".the-list > li").hover(function(){
    $(this).css("background-color", "yellow");
  },function(){
    $(this).css("background-color", "white");
  }

  )

$("#message2").click(function(){
    $("#myButton").removeAttr("disabled");
    // event.preventDefault();
})

$(".buttn").click(function(event){

    $('body').append('<div>Hello Jason! Thanks for looking at my code.</div>');
    event.preventDefault();
})

$(".buttn2").click(function(){
    $('body').removeAll();
})











