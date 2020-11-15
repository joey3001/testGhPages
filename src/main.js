import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';

$('#calculator').submit(function(event) {
  event.preventDefault();
  let newAge = new Age(parseInt($('#number').val()));
  console.log($('#number').val());
  console.log(newAge);
  newAge.mercuryYears();
  console.log(newAge);
  newAge.venusYears();
  newAge.marsYears();
  newAge.jupiterYears();
  newAge.remainingYears();
  newAge.remainingMercuryYears();
  newAge.remainingVenusYears();
  newAge.remainingMarsYears();
  newAge.remainingJupiterYears(); 
  console.log(newAge);
  $('#mercury').text('mercury age: ' + newAge.mercuryAge);
  $('#mars').text('mars age: ' + newAge.marsAge);
  $('#venus').text('venus age: ' + newAge.venusAge);
  $('#jupiter').text('jupiter age: ' + newAge.jupiterAge);
});