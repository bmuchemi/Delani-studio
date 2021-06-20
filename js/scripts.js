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

});





