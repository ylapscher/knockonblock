## 📄 Business Requirements Document  
**Project:** KnockonBlock.com - Handyman Services Static Website  
**Owner:** Zach Block  
**Business Entity:** Knock on Block Handyman Services LLC  
**Location:** Based in Montvale, NJ  
**Service Areas:** Bergen, Rockland, Orange, Passaic, Hudson, and Essex counties  
**Contact Number:** 816-304-7962  
**Domain:** www.knockonblock.com  

## 🎯 Objective
To build a **simple, professional, and responsive static website** using **React** showcasing Zach's handyman services, enabling users to learn about the services, get to know Zach, and easily request a quote via a contact form.

## 💡 Site Structure (One-Page Layout With Navigation)

### **1. Header / Navigation Bar**
- Sticky navigation with smooth scroll
- Sections:  
  - Home  
  - About Zach  
  - Services  
  - Testimonials  
  - FAQs  
  - Contact / Request a Quote  

### **2. Hero Section**
- Image or illustration of handyman work
- Headline: “Reliable Handyman Services in Northern NJ”
- Subheadline: “Professional help from someone you can trust.”
- CTA Button: “Request a Quote” → Scrolls to form

### **3. About Zach Section**
- Bio Content:
  > Zach Block has over 10 years of experience in home repairs. He grew up learning handyman skills and has enhanced them through hands-on home remodels. In addition to running Knock on Block, Zach works as a professional engineer in the prosthetics industry.  
- Image: Optional headshot or working photo

### **4. Services Section**
Each service can be a reusable React component with an icon, title, and short description.  
**Services List:**
- Reverse Osmosis Water Filter Installation  
- Smart Device Installation (Thermostats, Doorbells, etc.)  
- Drywall Repair  
- TV Mounting  
- Minor Electrical Repairs  
- Minor Plumbing Repairs  
- Furniture Assembly  
- Painting  
- Light Fixture Installation  
- ...and more  

### **5. Testimonials Section**
Show 2–3 testimonials with customer name, star rating, and optional location.

Example:
> “Zach was professional, quick, and the quality of work was top-notch! Highly recommend.” – Sarah M., Montvale, NJ

### **6. FAQ Section (Collapsible Components)**
A list of frequently asked questions using React collapsible/accordion components, all collapsed by default.

Example FAQs:
1. **What areas do you serve?**  
   > Bergen, Rockland, Orange, Passaic, Hudson, and Essex counties.

2. **How soon will I hear back after submitting a form?**  
   > We respond within 1 business day.

3. **Are estimates free?**  
   > Yes, initial quotes are free and no-obligation.

### **7. Quote Request Form (CTA)**
Simple form with:
- Full Name  
- Email  
- Phone  
- Location (City/Zip)  
- Type of Work Needed (Text Area)  
- Submit Button  

Post-submission message:  
> “Thanks for reaching out! We’ll get back to you within 1 business day.”

### **8. Footer**
Footer includes:
- Links:
  - Privacy Policy
  - Terms & Conditions  
- Legal text:
  > © 2025 Knock on Block Handyman Services LLC. All rights reserved.

## ⚙️ Technical Requirements

### 🧱 Framework and Stack
- **Framework:** React (Static site, no backend required unless form submission uses service like Formspree/Netlify)
- **Component Structure:** Modular, reusable components for easy maintenance
- **Styling:** CSS modules or styling library like Tailwind CSS
- **Deployment:** Optimized for static deployment (e.g., Netlify, Vercel)

### 📱 Responsiveness
- Fully responsive design
- Mobile-first layout strategy
- Test across common screen sizes

### 📊 Performance & SEO
- Optimized images and code
- Metadata with Zach’s name, services, and service areas
- Alt text on images
- Structured data for local business (using JSON-LD)
