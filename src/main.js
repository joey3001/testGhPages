import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';

$('#calculator').submit(function(event) {
  event.preventDefault();
  let newAge = new Age(parseInt($('number').val()));
  newAge.mercuryYears();
  newAge.venusYears();
  newAge.marsYears();
  newAge.jupiterYears();
  newAge.remainingYears();
  newAge.remainingMercuryYears();
  newAge.remainingVenusYears();
  newAge.remainingMarsYears();
  newAge.remainingJupiterYears(); 
  console.log(newAge);
});