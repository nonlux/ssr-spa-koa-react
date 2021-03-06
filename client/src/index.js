import React from 'react'
import {render} from 'react-dom'
window.$ = window.jQuery = require('jquery') // required for bootstrap
window.Popper = require('popper.js') // required for tooltip, popup...
//import'bootstrap'

import './index.scss' // include bootstrap css file with own modifications

// tooltip and popover require javascript side modification to enable them (new in Bootstrap 4)
// use tooltip and popover components everywhere

//$(function (){
//    $('[data-toggle="tooltip"]').tooltip()
//    $('[data-toggle="popover"]').popover()
//})

import App from './App'

render(<App/>, document.getElementById('container'));