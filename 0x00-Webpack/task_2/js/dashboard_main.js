import $ from 'jquery';
const _ = require('lodash');
import style from '../css/main.css';
import image from '../assets/holberton-logo.jpg';

$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append("<p>Click here to get started</p>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");

let count = 0;
function updateCounter() {
    count++;
    $("#count").text(`${count} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
