import React from 'react'
import '../design/header.css'

export default function Header() {
  return (
    <div>
    <header>
        <div class="logo">
            <img src="https://img.freepik.com/premium-vector/letter-g-wheat-logo-agriculture-symbol-vector-template_754537-6282.jpg" alt="logo-image"/>
            <h2>Gram Chitran</h2>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#upload">Upload Drone Image</a></li>
                <li><a href="#recommendations">Utility Information</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}
