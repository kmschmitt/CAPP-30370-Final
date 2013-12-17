  $("#Light_Him").on("click", function(){
    var $Santa = $("#Santa_Unlit");
    $Santa.attr("src", "Santa_lit.jpeg");
    $Santa.attr("alt", "Santa in the day");
  });
  
 $(document).on("click","img", function() {
  var $this = $(this);
  console.log("Alt: ", $(this).attr("alt"));
	console.log("width: ", $(this).width());
	console.log("height: ", $(this).height());
	});

 $(document).on("click", "h1,h2", function() {
  var $this = $(this);
	console.log("alt text: ", $(this).text());
	console.log("color: ", $(this).css('color'));
	console.log("font-size: ", $(this).css('font-size'));
  });
  
 console.log("width: ", $(window).width());

 $(window).resize(function(){
    $("width").text($(window).width());
     console.log("Width: ", $(window).width());
	});



  