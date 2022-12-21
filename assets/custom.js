/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

$(".sectionwrapper").flickity({
  "pageDots": false,
  "draggable": true,
  "cellAlign": "center",
  "wrapAround": true,
  "arrowShape": {"x0": 20, "x1": 60, "y1": 40, "x2": 60, "y2": 35, "x3": 25}
});

// var lastScrollTop = 0, delta = 0;
// var ticking = true;

// $(window).scroll(function(){
//   var nowScrollTop = $(this).scrollTop();
  
//     if(Math.abs(lastScrollTop - nowScrollTop) > delta){
//       if (nowScrollTop > lastScrollTop){
//         // ACTION ON
//         // SCROLLING DOWN
//         $("#section-header").css("display", "none");
//       } else {
//         // ACTION ON
//         // SCROLLING UP 
//         $("#section-header").css("display", "block");
//       }
//       lastScrollTop = nowScrollTop;
//     }
// });
