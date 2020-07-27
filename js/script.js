$(document).ready(function(){
    var lenguage = 'esp';
    $('.eng').hide();
    $('.ops').hide();
    $('#op1').show();
    $('#minimenumov').hide();
    
    $("#setupEsp").css("font-weight", "bold");
    $("#setupEspmov").css("font-weight", "bold");
    $("#op1esp").css("font-weight", "bold");
    $("#op1eng").css("font-weight", "bold");
    $("#op1espmov").css("font-weight", "bold");
    $("#op1engmov").css("font-weight", "bold");

    $('#menumov').click(function(){
        $('#minimenumov').show();
    });
    $('.menuopsmov').click(function(){
        $('#minimenumov').hide();
    });

    $('#lenguage').click(function(){
        if(lenguage == 'esp'){
            $('.esp').hide();
            $('.eng').show();
            $("#setupEng").css("font-weight", "bold");
            $("#setupEsp").css("font-weight", "normal");
            $("#setupEngmov").css("font-weight", "bold");
            $("#setupEspmov").css("font-weight", "normal");
            lenguage = 'eng';
        }else{
            $('.eng').hide();
            $('.esp').show();
            $("#setupEsp").css("font-weight", "bold");
            $("#setupEng").css("font-weight", "normal");
            $("#setupEspmov").css("font-weight", "bold");
            $("#setupEngmov").css("font-weight", "normal");
            lenguage = 'esp';
        }
    });
    $('#lenguagemov').click(function(){
        if(lenguage == 'esp'){
            $('.esp').hide();
            $('.eng').show();
            $("#setupEng").css("font-weight", "bold");
            $("#setupEsp").css("font-weight", "normal");
            $("#setupEngmov").css("font-weight", "bold");
            $("#setupEspmov").css("font-weight", "normal");
            lenguage = 'eng';
        }else{
            $('.eng').hide();
            $('.esp').show();
            $("#setupEsp").css("font-weight", "bold");
            $("#setupEng").css("font-weight", "normal");
            $("#setupEspmov").css("font-weight", "bold");
            $("#setupEngmov").css("font-weight", "normal");
            lenguage = 'esp';
        }
    });
    $('#op1m').click(function(){
        $('.ops').hide();
        $('#op1').show();
        $(".menuop").css("font-weight", "normal");
        $(".menuopmov").css("font-weight", "normal");
        $("#op1esp").css("font-weight", "bold");
        $("#op1eng").css("font-weight", "bold");
        $("#op1espmov").css("font-weight", "bold");
        $("#op1engmov").css("font-weight", "bold");
    });
    $('#op2m').click(function(){
        $('.ops').hide();
        $('#op2').show();
        $(".menuop").css("font-weight", "normal");
        $(".menuopmov").css("font-weight", "normal");
        $("#op2esp").css("font-weight", "bold");
        $("#op2eng").css("font-weight", "bold");
        $("#op2espmov").css("font-weight", "bold");
        $("#op2engmov").css("font-weight", "bold");
    });
    $('#op3m').click(function(){
        $('.ops').hide();
        $('#op3').show();
        $(".menuop").css("font-weight", "normal");
        $(".menuopmov").css("font-weight", "normal");
        $("#op3esp").css("font-weight", "bold");
        $("#op3eng").css("font-weight", "bold");
        $("#op3espmov").css("font-weight", "bold");
        $("#op3engmov").css("font-weight", "bold");
    });
    $('#op4m').click(function(){
        $('.ops').hide();
        $('#op4').show();
        $(".menuop").css("font-weight", "normal");
        $(".menuopmov").css("font-weight", "normal");
        $("#op4esp").css("font-weight", "bold");
        $("#op4eng").css("font-weight", "bold");
        $("#op4espmov").css("font-weight", "bold");
        $("#op4engmov").css("font-weight", "bold");
    });
    $('#op1mmov').click(function(){
        $('.ops').hide();
        $('#op1').show();
        $(".menuop").css("font-weight", "normal");
        $(".menuopmov").css("font-weight", "normal");
        $("#op1esp").css("font-weight", "bold");
        $("#op1eng").css("font-weight", "bold");
        $("#op1espmov").css("font-weight", "bold");
        $("#op1engmov").css("font-weight", "bold");
    });
    $('#op2mmov').click(function(){
        $('.ops').hide();
        $('#op2').show();
        $(".menuop").css("font-weight", "normal");
        $(".menuopmov").css("font-weight", "normal");
        $("#op2esp").css("font-weight", "bold");
        $("#op2eng").css("font-weight", "bold");
        $("#op2espmov").css("font-weight", "bold");
        $("#op2engmov").css("font-weight", "bold");
    });
    $('#op3mmov').click(function(){
        $('.ops').hide();
        $('#op3').show();
        $(".menuop").css("font-weight", "normal");
        $(".menuopmov").css("font-weight", "normal");
        $("#op3esp").css("font-weight", "bold");
        $("#op3eng").css("font-weight", "bold");
        $("#op3espmov").css("font-weight", "bold");
        $("#op3engmov").css("font-weight", "bold");
    });
    $('#op4mmov').click(function(){
        $('.ops').hide();
        $('#op4').show();
        $(".menuop").css("font-weight", "normal");
        $(".menuopmov").css("font-weight", "normal");
        $("#op4esp").css("font-weight", "bold");
        $("#op4eng").css("font-weight", "bold");
        $("#op4espmov").css("font-weight", "bold");
        $("#op4engmov").css("font-weight", "bold");
    });
});