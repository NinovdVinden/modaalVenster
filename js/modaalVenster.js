var modaalObj = (function() {
    var $raam = $(window);
    var $modaalVen = $('<div class="modaal-ven"/>');
    var $modaalIn = $('<div class="modaal-in"/>');
    var $sluitButton = $('<span class="sluit-button">&#10005;</span>');
    
    $modaalVen.append($modaalIn);
    
    return {
        centreren: function() {
         // opdrachten centreren
         var links = Math.max($raam.width()-$modaalIn.outerWidth(), 0) / 2;
         var boven = Math.max($raam.height()-$modaalIn.outerHeight(), 0) / 2;
         $modaalIn.css({left: links, top: boven});
        },
        openen: function(instellingen){
            // opdrachten openen
           $modaalIn.append(instellingen.inhoud, $sluitButton);
            $modaalIn.css({width: instellingen.breedte+'px' || 'auto',
                          height: instellingen.hoogte+'px' || 'auto'})
                .on('click', function(e){
                    e.stopPropagation();
            });
           $modaalVen.appendTo('body')
               .on('click', modaalObj.sluiten);
            modaalObj.centreren();
            $sluitButton.on('click', modaalObj.sluiten);
            $raam.on('resize', modaalObj.centreren);
        },
        sluiten: function() {
            // opdrachten sluiten
            $modaalIn.empty()
              .off('click', modaalObj.sluiten);
            $modaalVen.detach();
            $raam.off('resize', modaalObj.centreren);
            
            
        }
        
        
    }
    

}());