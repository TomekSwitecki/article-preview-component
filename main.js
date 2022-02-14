window.onload = function StartFunction() {
  $(".share-icon").css({ fill: '#6E8098' });
}



$(".social-icon").click(function () {
    if ($(".share-expanded").hasClass("share-expanded-active") && $(".share-icon").hasClass("share-icon-active")) {
        $(".share-expanded").removeClass("share-expanded-active");
        $(".share-icon").css({ fill: '#6E8098' });
        $(".share-icon").removeClass("share-icon-active");
    }
    else {
        $(".share-expanded").addClass("share-expanded-active");
        $(".share-icon").css({ fill: '#ffffff' });
        $(".share-icon").addClass("share-icon-active");
    }


});



