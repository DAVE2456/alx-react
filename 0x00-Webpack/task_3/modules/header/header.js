import $ from 'jquery'
import { head } from 'lodash';
import style from './header.css'
import logo from '../../assets/holberton-logo.jpg';

leat header = document.cerateElement('header');
let h1 = document.createElement('h1');
let div = document.createElement('div');
div.id = 'logo';
let img = document.createElement('img');
img.src = logo;
img.alt = 'sample logo';
h1.text('Holberton Dashboard');

header.append(div, h1);
$('body').append(header);

console.log('Init header');
