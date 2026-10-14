# Bootstrap & Grid System + Bootstrap Components Checkpoints

This repository contains complete, production-ready implementations for both assignments:
1. **Checkpoint 1: Fictional Restaurant Webpage** (*Bootstrap & Grid System*)
2. **Checkpoint 2: Travel Agency Landing Page** (*Bootstrap Components Checkpoint*)

Both projects are built with **Bootstrap 5.3.3**, modern semantic HTML5, custom CSS styling, and interactive JavaScript with client-side form validation and dynamic modals.

---

## 📁 Repository Structure

```
checkpoint-14102026/
├── index.html                   # Master Showcase Hub with interactive live viewport simulator
├── restaurant.html              # Checkpoint 1: Full-featured Restaurant Webpage
├── travel.html                  # Checkpoint 2: Full-featured Travel Agency Landing Page
├── restaurant/
│   └── index.html               # Directory entrypoint for restaurant project
├── travel-agency/
│   └── index.html               # Directory entrypoint for travel agency project
├── css/
│   ├── restaurant.css           # Custom warm culinary theme stylesheet
│   ├── travel.css               # Custom oceanic luxury travel stylesheet
│   └── hub.css                  # Showcase hub & device simulator stylesheet
├── js/
│   ├── restaurant.js            # Restaurant form validation, toasts, and interactions
│   ├── travel.js                # Travel agency modal loader, accordion events & form validation
│   └── hub.js                   # Master showcase switcher & device viewport simulator
└── README.md                    # Project documentation & requirements verification
```

---

## 🍽️ Checkpoint 1: Restaurant Webpage (Bootstrap & Grid System)

### Requirements Checklist

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Header Section** | Fixed/sticky navbar with restaurant name (`SAVORIA BISTRO`) on the left, and navigation links (`Home`, `Menu`, `About Us`, `Contact`) on the right with a mobile toggler. | ✅ Passed |
| **Hero Section** | Hero banner featuring a high-resolution culinary dish background, centered headline, subtitle, and primary call-to-action buttons (`Explore Menu`, `Reserve Table`). | ✅ Passed |
| **Menu Section** | Responsive grid layout (`container > row g-4 > col-12 col-md-6 col-lg-4`) displaying 6 dishes with images, titles, descriptions, price badges, star ratings, and selection buttons. | ✅ Passed |
| **About Us Section** | Grid system two-column layout (`col-12 col-lg-6` + `col-12 col-lg-6`). Image with floating badge on one side, restaurant history, farm-to-table philosophy, and chef quote on the other side. | ✅ Passed |
| **Contact Section** | Form with fields for **Name**, **Email**, **Message**, and **Submit Button**, plus optional party size & reservation time, complete with validation feedback. | ✅ Passed |
| **Footer** | Clean footer featuring copyright statement and social media icons (Instagram, Facebook, Twitter/X, TripAdvisor). | ✅ Passed |

### Grid Classes Utilized
- `container` for responsive max-width containment
- `row g-4` for consistent grid gutters across breakpoints
- `col-12 col-md-6 col-lg-4` for adaptive card columns (1 col on mobile, 2 on tablet, 3 on desktop)
- `col-12 col-lg-6` for the two-column About Us and Contact layouts
- `navbar-expand-lg` for collapsible navigation across screen widths

---

## ✈️ Checkpoint 2: Travel Agency Landing Page (Bootstrap Components)

### Requirements Checklist

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Navbar** | Navigation bar with agency brand/logo (`Wanderlust Horizons`) on the left, and links (`Home`, `Destinations`, `Tours`, `Contact`) on the right. | ✅ Passed |
| **Hero Section** | Hero section with scenic travel landscape background, centered heading, subheading, and prominent call-to-action button (`Explore Destinations`). | ✅ Passed |
| **Destinations Section** | Grid layout utilizing Bootstrap **cards** (`.card`, `.card-img-top`, `.card-body`, `.card-title`, `.card-text`), with images, titles, descriptions, price badges, and **"Learn More"** buttons. | ✅ Passed |
| **Tours Section** | Bootstrap **Accordion component** (`.accordion`, `.accordion-item`, `.accordion-button`, `.accordion-collapse`) showcasing 4 packages with titles, descriptions, badges, and **"View Details"** links. | ✅ Passed |
| **Contact Form** | Bootstrap form components (`form-control`, `form-select`, `input-group`, validation states) with fields for **Name**, **Email**, **Destination of Interest**, **Message**, and **Submit button**. | ✅ Passed |
| **Footer** | Responsive footer with copyright information and social media icons (Instagram, Facebook, Twitter/X, LinkedIn, YouTube). | ✅ Passed |

### Bootstrap Components Utilized
1. **Navbar** (`.navbar`, `.navbar-expand-lg`, `.navbar-toggler`)
2. **Hero / Jumbotron Style** (CSS-enhanced background image showcase with responsive layout)
3. **Cards** (`.card`, `.card-img-top`, `.card-body`, `.card-title`, `.card-text`, hover zoom)
4. **Accordion** (`.accordion`, `.accordion-item`, `.accordion-button`, `.accordion-collapse`)
5. **Form Elements** (`.form-control`, `.form-select`, `.input-group`, `.was-validated`, feedback alerts)
6. **Modal** (`.modal`, `.modal-dialog-centered`, `.modal-content`) for dynamic destination itineraries
7. **Badges & Buttons** (`.badge`, `.btn-primary`, `.btn-outline-primary`, `.rounded-pill`)

---

## 🚀 How to Run and Test

1. **Directly in Any Web Browser**:
   - Double-click [`index.html`](file:///c:/Users/DELL/checkpoint-14102026/index.html) to open the Master Showcase Hub.
   - Use the built-in **Device Simulator** to test both websites in Desktop, Tablet (768px), and Mobile (375px) viewports with one click.
   - Or open [`restaurant.html`](file:///c:/Users/DELL/checkpoint-14102026/restaurant.html) or [`travel.html`](file:///c:/Users/DELL/checkpoint-14102026/travel.html) directly for full-screen view.

2. **Using a Local Development Server**:
   ```bash
   # Python HTTP server
   python -m http.server 8000

   # Or npx serve
   npx serve .
   ```
   Navigate to `http://localhost:8000/`.

---

## 📱 Responsiveness Testing

- **Desktop (>= 1200px / 992px)**: Full multi-column grids, horizontal navigation links, side-by-side About Us section.
- **Tablet (768px - 991px)**: 2-column card layouts, adjusted hero typography, fluid forms.
- **Mobile (< 768px / 576px)**: Collapsible hamburger menu, single-column stacked cards, full-width touch-friendly buttons, and responsive inputs.

