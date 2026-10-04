# ITZFIZZ - Scroll-Driven Hero Animation

![Hero Preview](https://dhanush0254.github.io/itzfizz-scroll-animation/car.png)

A high-performance, scroll-driven hero section built to demonstrate advanced frontend animations, scroll-based interactions, and smooth UI behavior using modern web technologies.

## 🚀 Live Demo
**[View the Live Webpage Here](https://dhanush0254.github.io/itzfizz-scroll-animation/)**

---

## 🎯 Objective
This project was built to satisfy the requirements of a frontend animation assignment. The goal was to recreate a premium hero section focusing on motion quality, smoothness, and interactive logic using a modern technology stack.

## ✨ Features & Functional Requirements

1. **Hero Section Layout**
   - Occupies the first screen (above the fold).
   - Features a letter-spaced headline: `W E L C O M E  I T Z F I Z Z`.
   - Displays impact metrics and statistics with short descriptions.

2. **Initial Load Animation**
   - Headline appears smoothly with a staggered scale and fade effect.
   - Smooth, premium motion avoiding abrupt flashes.

3. **Scroll-Based Animation (Core Feature)**
   - The primary visual element (the orange sports car) moves smoothly along a track based on the user's scroll position.
   - The animation uses a `scrub: 1.5` interpolation so the motion feels natural, fluid, and tied directly to scroll progress (not time-based autoplay).
   - Statistics dynamically pop up in sequential order (23%, 58%, 40%, 27%) precisely as the car reaches their positions.
   - **Extra Scroll Feature**: As the user reaches the end of the scroll, the car smoothly speeds off the screen.

4. **Motion & Performance Optimization**
   - Animations exclusively target hardware-accelerated properties (`transform: translate/scale` and `opacity`).
   - Utilizes `will-change` CSS properties to ensure GPU processing, preventing heavy calculations or layout reflows on scroll events.

---

## 🛠️ Technology Stack

**Mandatory Requirements Met:**
- **HTML5 & CSS3** (Vanilla CSS for gradients and track layout)
- **JavaScript / TypeScript**
- **GSAP (GreenSock)** - Powers the complex timeline and ScrollTrigger functionality.
- **Next.js & React.js** - Used for component architecture and state.
- **Tailwind CSS** - Used for rapid utility styling and typography.

**Optional Plus Points Met:**
- **Bootstrap 5 (Grid System)** - Integrated specifically to structure the footer layout, satisfying the "Bootstrap for layout help" bonus point without creating CSS conflicts with Tailwind.

---

## 💻 Local Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhanush0254/itzfizz-scroll-animation.git
   ```
2. Navigate into the directory:
   ```bash
   cd itzfizz-scroll-animation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.
