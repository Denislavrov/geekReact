import './css/normalize.css';
import './css/style.css';
import Icon from './img/hint.png';
import $ from 'jquery';


$('.mobile__link').click(function()
{
if ($(".menu").is(":visible") == false)
{
    $('.menu').css('display','block');
    $('.menu').show();
}
else
{
    $('.menu').hide();
    $('.menu').css('display', "");
}
});


$(document).ready(function() {
    validate();
    $('input').on('keyup', validate);
});

function validate() {
    var inputsWithValues = 0;

    // get all input fields except for type='submit'
    var myInputs = $("input:not([type='submit'])");

    myInputs.each(function(e) {
        // if it has a value, increment the counter
        if ($(this).val()) {
            inputsWithValues += 1;
        }
    });

    if (inputsWithValues == myInputs.length) {
        $("input[type=submit]").prop("disabled", false);
        $('input[type=submit]').css('opacity','1');



    } else {
        $("input[type=submit]").prop("disabled", true);
        $('input[type=submit]').css('opacity','0.4');
    }
}

// $('.form').submit(function (e) {
//    e.preventDefault();
//
//    var cardN = $('.form__input._cardN').val();
//    var cardowner = $('.form__cardowner').val();
//    var cvv2 = $('.form_input._cvv2').val();
//
//    var cardNReg = /^[0-9]+$/;
//    var cardownerReg = /^[A-Za-z]+$/;
//    var cvv2Reg = /^[0-9]+$/;
//
//
//

//});

$('.form__input').bind('keypress', function (event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$('.form__cardowner').bind('keypress', function (event) {
    var ownerReg = new RegExp ("^[A-Za-z]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!ownerReg.test(key)) {
        event.preventDefault();
        return false;
    }
});