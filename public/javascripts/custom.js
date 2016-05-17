$(document).ready(function() {
  var i = 150 + rand(100);
  var j = 150 + rand(100);
  var k = 150 + rand(100);
  var order = 'asc';
  setInterval(function(){
    if (order == 'asc') {
      if (i > 254 || j > 254 || k > 254) {
        order = 'desc';
        if (i < 1) { i = 1 } 
        if (j < 1) { j = 1 }
        if (k < 1) { k = 1 }
      }else{
        i += get_rand();
        j += get_rand();
        k += get_rand();
      }
    } 
    else {
      if (i < 1 || j < 1 || k < 1) {
        order = 'asc';
        if (i > 254) { i = 254 } 
        if (j > 254) { j = 254 }
        if (k > 254) { k = 254 }

      }else{
        i -= get_rand();
        j -= get_rand();
        k -= get_rand();
      }


    }
    set_backgrount(i, j, k);
  }, 3000);
});

function set_backgrount(i, j , k) {
  $('body').css('background-color', 'rgba('+i+','+j+','+k+','+'.7)');
}

function get_rand() {
  return rand(200)
}
function rand(n) {
  return parseInt(Math.random()*n);
}