//黑暗模式自动匹配
if (localStorage.getItem('dark') === '1') {
  document.body.classList.add('dark');
} else if (new Date().getHours() >= 22 || new Date().getHours() < 7) {
  document.body.classList.add('dark');
} else if (matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}
//点击事件 （黑暗模式)
function switchNightMode() {
  var body = document.body;
  if(body.classList.contains('dark')){
    document.body.classList.remove('dark');
    localStorage.setItem('dark','0');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('dark','1');
  }
}
var xm = document.getElementById("xm");
xm.onclick = switchNightMode;
