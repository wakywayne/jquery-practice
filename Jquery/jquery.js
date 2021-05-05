const body = document.body;

const btn = document.createElement("div");

$(btn).addClass('btn btn-primary');

body.appendChild(btn);

$(btn).click(function() {
    alert( "You clicked me!" );
  });
