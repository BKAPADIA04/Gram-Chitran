import React from 'react'
import '../design/service.css'

export default function Service() {
  return (
    <div>
        <section class="services">
        <h3>Our Services</h3>
        <div class="content">
            <div class="main-content">
                <img class="content-image" src="https://blog.qgis.org/wp-content/uploads/2016/12/qgis-icon_anita02.png" alt='random'/>
                <h2>Feature Extraction</h2>
            </div>
            <div class="main-content">
                <img class="content-image" src="https://img.freepik.com/premium-vector/yellow-notepad-sticker-cartoon-illustration-vector_976369-1061.jpg" alt='random'/>
                <h2>Utility Report</h2>
            </div>
            <div class="main-content">
                <img class="content-image" src="https://cdn4.vectorstock.com/i/1000x1000/94/43/layer-icon-logo-stack-paper-symbol-flat-vector-28489443.jpg" alt='random'/>
                <h2>Layer Rasterization</h2>
            </div>
        </div>
    </section>
    </div>
  )
}
