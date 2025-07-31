# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based static website for **Knock on Block Handyman Services LLC**, a handyman business based in Montvale, NJ serving Bergen, Rockland, Orange, Passaic, Hudson, and Essex counties. The project was bootstrapped with Create React App and is currently in initial development phase.

## Development Commands

- `npm start` - Runs the development server at http://localhost:3000 with hot reload
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Creates production build in the `build/` folder
- `npm run eject` - One-way operation to expose all configuration (avoid unless necessary)

## Project Architecture

### Current State
- Fresh Create React App setup with default boilerplate
- React 19.1.1 with standard CRA testing library setup
- Standard CRA project structure with `src/`, `public/`, and configuration files

### Business Requirements
The website needs to be transformed into a single-page application with:

1. **Navigation Sections**: Home, About Zach, Services, Testimonials, FAQs, Contact/Quote Request
2. **Key Components to Build**:
   - Sticky navigation with smooth scroll
   - Hero section with CTA
   - About section with bio content
   - Services grid with reusable service components
   - Testimonials carousel/grid
   - FAQ accordion components
   - Contact/quote request form
   - Professional footer

3. **Services to Highlight**:
   - Reverse Osmosis Water Filter Installation
   - Smart Device Installation
   - Drywall Repair, TV Mounting
   - Minor Electrical/Plumbing Repairs
   - Furniture Assembly, Painting
   - Light Fixture Installation

### Technical Specifications
- **Framework**: React (static site, no backend)
- **Styling**: CSS modules or Tailwind CSS recommended
- **Responsiveness**: Mobile-first design required
- **SEO**: Metadata, alt text, structured data for local business
- **Deployment**: Optimized for static hosting (Netlify/Vercel)

## File Structure

```
src/
  App.js          - Main application component (currently default CRA)
  App.css         - Main application styles
  index.js        - Application entry point
  index.css       - Global styles
  setupTests.js   - Jest configuration
  reportWebVitals.js - Performance monitoring
public/
  index.html      - HTML template
  manifest.json   - PWA configuration
  favicon.ico     - Site favicon
```

## Business Context

- **Owner**: Zach Block (10+ years experience, professional engineer)
- **Contact**: 816-304-7962
- **Domain**: www.knockonblock.com
- **Service Areas**: Northern NJ counties
- **Bio**: "Zach Block has over 10 years of experience in home repairs. He grew up learning handyman skills and has enhanced them through hands-on home remodels. In addition to running Knock on Block, Zach works as a professional engineer in the prosthetics industry."

## Development Notes

- Project is currently in initial setup phase with default CRA boilerplate
- Business requirements document (BUSINESS_REQUIREMENTS.md) contains detailed specifications
- Form submission will likely require service like Formspree or Netlify Forms
- Design should be professional and trustworthy to reflect the business nature