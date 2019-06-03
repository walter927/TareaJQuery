$("div.module");
$("div:hidden");
$("tr:odd");

$("input[name=q]");
$("input[name=q]").addClass('big');
$("li.current");
$("li.current").removeClass('current');
$("li.current").next("li").addClass('current');
$("#slideshow li:first").addClass('current');
$("#slideshow li:first").addClass('current');
$("#slideshow li:first").siblings().addClass('disabled');

var item=8;
for (var i = 0; i<5; i++) {
	$('#myList').append("<li>List item "+item+"</li>");
	item++;
}
$("#myList li:even").remove();

$("#specials").append("<h2>Parrafo 2</h2><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"+
"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"+
"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"+
"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non"+
"proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");

$("select").append("<option value='wednesday'>Wednesday</option>");
