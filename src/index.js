import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.scss'
import App from './App'


const container = document.getElementById('app')
const root = createRoot(container) 
root.render(<App />)