$(document).ready(function() {
  var i = 150 + rand(100);
  var j = 150 + rand(100);
  var k = 150 + rand(100);
  var order = 'asc';
  setInterval(function(){
    if (order == 'asc') {
      if (i > 254 || j > 254 || k > 254) {
        order = 'desc';
      }else{
        i += get_rand();
        j += get_rand();
        k += get_rand();
      }
    } 
    else {
      if (i < 1 || j < 1 || k < 1) {
        order = 'asc';
      }else{
        i -= get_rand();
        j -= get_rand();
        k -= get_rand();
      }


    }
    set_backgrount(i, j, k);
  }, 100);
});

function set_backgrount(i, j , k) {
  $('body').css('background-color', 'rgba('+i+','+j+','+k+','+'.5)');
}

function get_rand() {
  return rand(5)
}
function rand(n) {
  return parseInt(Math.random()*n);
}