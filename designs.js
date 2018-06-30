// Select color input
// Select size input
const canvas = document.getElementById('pixelCanvas');
let height = $('#inputHeight');
let width = $('#inputWeight');
let color = $('#colorPicker');
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault(); // prevent default action
let row = height.val(); // to take the value of grid height
let column = width.val(); // to take the value of grid width
  makeGrid(row, column);
});
function makeGrid(a, b) {
// Your code goes here!
//clear grid if not empty with while loop
 canvas.innerHTML='';
while($('#pixelCanvas').is(':empty') === false){
    $('td').children.remove();
}
//create grid dynamically
for(let i = 1; i <= a; i++){
 $('#pixelCanvas').append('<tr id=t' + i + '></tr>');
 for (let j = 1; j <= b; j++){
   $('#t' + i).append('<td></td>');
 }
}
//add color to the Grid
$('td').on('click',function (evt){
 let c = color.val();

if($(this).attr('style')){
   $(this).removeAttr('style', 'background-color:'+c);
 }else {
   $(this).attr('style', 'background-color:'+c);
 }
});

 }
