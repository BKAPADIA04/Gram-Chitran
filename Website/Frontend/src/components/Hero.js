import React from 'react'
import '../design/hero.css'

export default function Hero() {
  return (
    <div>
        <section class="hero">
        <div class="hero-content">
            <h1>AI-Powered Feature Extraction</h1>
            <p>Dive into the world of Advanced Satellite Image Analysis with our state of art UNET model.</p>
            <a href="#upload" class="cta-btn">Get Started</a>
        </div>
        </section>

        <div class="rotating-image">
            <div className='image-rotate'>
                
            </div>
        </div>
    </div>
  )
}
