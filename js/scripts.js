$(document).ready(function() {
    $("#design").click(function(){
        $("#design").hide();
        $("#designn").show();
    });
    $("#designn").click(function(){
        $("#designn").hide();
        $("#design").show();
    });

    $("#development1").click(function(){
        $("#development1").hide();
        $("#development2").show();
    });
    $("#development2").click(function(){
        $("#development2").hide();
        $("#development1").show();
    });

    $("#product1").click(function(){
        $("#product1").hide();
        $("#product2").show();
    });
    $("#product2").click(function(){
        $("#product2").hide();
        $("#product1").show();
    });

//portfolio section

$(".image1").mouseover(function(){
    $("#one").show();
});
$(".image1").mouseout(function(){
    $("#one").hide();
});

$(".image2").mouseover(function(){
    $("#two").show();
});
$(".image2").mouseout(function(){
    $("#two").hide();
});

$(".image3").mouseover(function(){
    $("#three").show();
});
$(".image3").mouseout(function(){
    $("#three").hide();
});

$(".image4").mouseover(function(){
    $("#four").show();
});
$(".image4").mouseout(function(){
    $("#four").hide();
});


$(".image5").mouseover(function(){
    $("#five").show();
});
$(".image5").mouseout(function(){
    $("#five").hide();
});

$(".image6").mouseover(function(){
    $("#six").show();
});
$(".image6").mouseout(function(){
    $("#six").hide();
});

$(".image7").mouseover(function(){
    $("#seven").show();
});
$(".image7").mouseout(function(){
    $("#seven").hide();
});

$(".image8").mouseover(function(){
    $("#eight").show();
});
$(".image8").mouseout(function(){
    $("#eight").hide();
});


});





