/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
$("body").click(function(e) {
var a = new Array("🍲火锅","🥩烤肉","🥘麻辣烫","🍜螺蛳粉","🍫巧克力","🥤奶茶","炸鸡🍗","🍔汉堡","🍟薯条","🍨冰淇淋","❤蛋挞❤","🌮手抓饼","🍚炒饭");
var $i = $("<span></span>").text(a[a_idx]);
a_idx = (a_idx + 1) % a.length;
var x = e.pageX,
y = e.pageY;
$i.css({
"z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
"top": y - 20,
"left": x,
"position": "absolute",
"font-weight": "bold",
"color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
});
$("body").append($i);
$i.animate({
"top": y - 180,
"opacity": 0
},
1500,
function() {
$i.remove();
});
});
});