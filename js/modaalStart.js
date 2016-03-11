$(document).ready( function() {
    //div inhoud word variabele en gedetached
    var enzoK = $('#enzo').detach();
    var armooW = $('#armoo').detach();
    var stukT = $('#stuk').detach();
    
    // events bij de thumbs : modaal venster openen met de passende inhoud er in
    $('#enzoKnol').on('click', function() {
       modaalObj.openen({inhoud: enzoK, breedte: 600});
    });
    $('#armooWas').on('click', function() {
       modaalObj.openen({inhoud: armooW, breedte: 700});
    });
    $('#stukTV').on('click', function() {
       modaalObj.openen({inhoud: stukT, breedte: 500});
    });
    
})