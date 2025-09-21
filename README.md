# Smokie Kenya - Street Food Website 🍴

A modern, responsive website for **Smokie Kenya**, showcasing authentic Kenyan street food including smokies, mahindi choma, shawarma, and more. Built with clean HTML, CSS, and vanilla JavaScript for optimal performance and user experience.

## 🌟 Features

### 📱 **Responsive Design**
- Mobile-first approach with hamburger navigation
- Smooth animations and transitions
- Professional glass-morphism effects
- Cross-browser compatibility

### 🍽️ **Interactive Menu**
- Filterable menu categories (Wraps & Rolls, Quick Snacks, Grilled Specials)
- 20+ authentic Kenyan street food items
- Real-time price display in KES
- Smooth category transitions

### 📞 **WhatsApp Integration**
- Direct WhatsApp ordering system
- Dynamic order link generation
- Form validation with user feedback
- Mobile-optimized contact flow

### 🎨 **Modern UI/UX**
- Clean, professional design
- Kenyan street food color palette
- Hover effects and micro-animations
- Accessible navigation and forms

## 🏗️ Project Structure

```
smokie-kenya/
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── smocha.png
│   ├── Smokie-Pasua.png
│   ├── mahindi-choma.png
│   ├── shawarma.png
│   ├── samoasa.png
│   ├── samosaveg.png
│   ├── mandazi.png
│   ├── bhajia.png
│   ├── mishkaki.png
│   ├── viazi.png
│   ├── mutura.png
│   ├── nyamachoma.png
│   └── chapo 2.png
├── index.html
├── menu.html
├── about.html
├── contact.html
└── README.md
```

## 🚀 Quick Start

### **1. Clone/Download**
```bash
git clone https://github.com/Gunther5kevo/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl.git
cd plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl
```

### **2. Launch Locally**
- Open `index.html` in your browser, or
- Use a local server (recommended):
```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### **3. View Website**
Navigate to `http://localhost:8000` in your browser.

## 📋 Menu Categories

### 🌯 **Wraps & Rolls**
- Beef Shawarma (KES 250)
- Chicken Shawarma (KES 230)
- Beef Chapati Roll (KES 180)
- Chicken Chapati Roll (KES 200)
- Rolex - Chapati & Egg (KES 80)

### 🍟 **Quick Snacks**
- Classic Smokie (KES 30)
- Smokie & Egg (KES 120)
- Smokie Pasua (KES 35)
- Beef Samosas - 3pcs (KES 60)
- Vegetable Samosas - 3pcs (KES 45)
- Mandazi - 4pcs (KES 40)
- Bhajia (KES 50)

### 🔥 **Grilled Specials**
- Mahindi Choma (KES 40)
- Mishkaki - Beef Skewers (KES 150)
- Chicken Mishkaki (KES 130)
- Nyama Choma Small (KES 300)
- Viazi Kaanga (KES 70)
- Mutura (KES 30)

## ⚙️ Configuration

### **WhatsApp Integration**
Update the phone number in `js/main.js`:
```javascript
const businessPhone = '+254719160307'; 
```

### **Business Information**
Update locations and hours in `contact.html`:
- Tom Mboya Street: 7:00 AM - 8:00 PM
- Haile Selassie Avenue: 4:00 PM - 9:00 PM

### **Styling Customization**
Main colors in `css/style.css`:
```css
:root {
  --primary: #d62828;   /* Smokie red */
  --secondary: #f77f00; /* Grilled maize orange */
  --accent: #fcbf49;    /* Golden maize */
  --dark: #2b2d42;      /* Charcoal */
  --light: #fffaf0;     /* Cream background */
}
```

## 🎯 Key Features Explained

### **Mobile Navigation**
- Hamburger menu appears on screens < 768px
- Smooth slide-down animation
- Auto-closes when clicking links or outside menu
- Touch-friendly tap targets

### **Menu Filtering**
- Real-time category filtering
- Smooth fade transitions
- Maintains active states
- No page reload required

### **Contact Forms**
- Client-side validation
- WhatsApp link generation
- Error handling and user feedback
- Mobile-optimized input fields

### **Performance Optimizations**
- Minimal JavaScript dependencies
- Optimized CSS with custom properties
- Efficient image loading
- Fast page load times

## 🌐 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📱 Mobile Features

- Responsive grid layouts
- Touch-friendly navigation
- Optimized form inputs
- Fast tap interactions
- Proper viewport scaling

## 🛠️ Customization Guide

### **Adding New Menu Items**
1. Add new card in `menu.html`:
```html
<article class="card" data-category="snacks">
  <img src="images/your-food.png" alt="Description">
  <h3>Food Name</h3>
  <p class="price">KES XX</p>
  <p class="muted">Description of the food item.</p>
</article>
```

### **Updating Business Hours**
Edit the location cards in `contact.html`.

### **Changing Colors**
Modify CSS custom properties in `:root` selector.

## 📞 Support & Contact

- **Website**: [Your domain]
- **WhatsApp**: +254 700 000 000
- **Location**: Tom Mboya Street, Nairobi CBD

## 📄 License

This project is licensed under the MIT License - feel free to use and modify for your street food business.

## 🤝 Contributing

Contributions welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

**Built with ❤️ for Kenyan street food culture**

*Smokie Kenya - Authentic flavors, trusted service*