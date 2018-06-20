function save() 
{
var name = document.getElementById('username').value;
localStorage.setItem('username',name);
document.getElementById('name').innerHTML = localStorage.getItem("username");

var email = document.getElementById('email').value;
localStorage.setItem('email',email);
document.getElementById('ema').innerHTML = localStorage.getItem("email");

var pass = document.getElementById('phone').value;
localStorage.setItem('phone',pass);
document.getElementById('phon').innerHTML = localStorage.getItem("phone");

var add = document.getElementById('address').value;
localStorage.setItem('address',add);
document.getElementById('add').innerHTML = localStorage.getItem("address");

var city = document.getElementById('city').value;
localStorage.setItem('city',city);
document.getElementById('cit').innerHTML = localStorage.getItem("city");

}