function start_color_animation() {
  color_animation = setInterval(function(){
    set_backgrount(get_rand(), get_rand(), get_rand());
  }, 3000);
}

function stop_color_animation() {
  clearInterval(color_animation);
}

function set_backgrount(i, j , k) {
  $('body').css('background-color', 'rgba('+i+','+j+','+k+','+'.7)');
}

function get_rand() {
  return rand(255)
}
function rand(n) {
  return parseInt(Math.random()*n);
}