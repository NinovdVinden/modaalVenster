var modaalObj = (function() {
    
    $modaalVen = $('<div class="modaal-ven"/>');
    $modaalIn = $('<div class="modaal-in"/>');
    $sluitButton = $('<span class="sluit-button">&#10005;</span>');
    
    $modaalVen.append($modaalIn);
    
    return {
        centreren: function() {
         // opdrachten centreren
        },
        openen: function(instellingen){
           console.log('het venster openen met: ' + instellingen);
           $modaalVen.appendTo('body');
        },
        sluiten: function() {
            // opdrachten sluiten
            
        }
        
        
    }
    

}());