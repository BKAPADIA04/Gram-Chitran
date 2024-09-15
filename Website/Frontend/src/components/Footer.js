import React from 'react'
import '../design/footer.css'

export default function Footer() {
  return (
    <div>
    <div class="input-item">
        <section id="upload" class="upload-section">
            <h2>Upload Your Drone Image - Ortho Photo</h2>
        
            <form class="file-upload-form">
            <label for="soilFile">Upload Drone Image (Png/Jpeg/Tif):</label>
            <input type="file" id="soilFile" name="soilFile"/>
            <button type="submit" class="analyze-btn">Rasterize</button>
            </form>
        </section>
        </div>

        <footer>
            <p>&copy; 2024 Gram Chitran. All rights reserved. | <a href="#contact">Contact Us</a></p>
        </footer>
    </div>
  )
}
