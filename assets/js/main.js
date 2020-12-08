$(window).on('load', function () {
   setTimeout(function() {
      $('.offer').css({'animation-iteration-count': '2','height': '400px','width': '100%','border-radius': '60px'})

      setTimeout(function() {
         $('h1, .offer h3, .menu_form').css({'opacity': '1','visibility': 'visible'})

         let h1_symbols = $('h1').data('value').split(''), delay = 0.3
         h1_symbols.forEach(element => {
            $('h1').append('<span class="h1_item" style="animation-delay:' + (delay+=0.04).toFixed(3) + 's">' + element + '</span>')
         })
      }, 2000)
      
   }, 2000)
})