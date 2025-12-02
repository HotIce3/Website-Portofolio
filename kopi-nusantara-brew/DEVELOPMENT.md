# 🎓 Development Guide - Kopi Nusantara Brew

## 📚 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Navbar.jsx          # Navigation with cart & theme toggle
│   ├── Footer.jsx          # Footer with links & social
│   ├── Hero.jsx            # Hero section with animations
│   ├── About.jsx           # About section with scroll trigger
│   ├── MenuGrid.jsx        # Reusable menu grid with filters
│   ├── ProductModal.jsx    # Product detail modal
│   ├── Testimonials.jsx    # Testimonial slider
│   ├── Gallery.jsx         # Image gallery with lightbox
│   ├── Contact.jsx         # Contact section with maps
│   └── ProtectedRoute.jsx  # Route guard for admin

├── pages/                   # Page components
│   ├── Home.jsx            # Homepage
│   ├── Menu.jsx            # Menu page
│   ├── Cart.jsx            # Cart & checkout
│   └── Contact.jsx         # Contact page

├── admin/                   # Admin panel
│   ├── AdminLogin.jsx      # Login page
│   ├── AdminDashboard.jsx  # Main dashboard layout
│   ├── AdminDashboardHome.jsx # Analytics & stats
│   ├── AdminMenuManager.jsx # Menu CRUD
│   ├── AdminOrders.jsx     # Order management
│   └── AdminTestimonials.jsx # Testimonial management

├── context/                # React Context
│   └── ThemeContext.jsx    # Dark mode theme

├── hooks/                   # Custom hooks
│   ├── useCart.js          # Cart management
│   └── useMenu.js          # Menu data fetching

├── utils/                   # Utility functions
│   ├── supabase.js         # Supabase helpers
│   ├── auth.js             # Authentication
│   └── cart.js             # Cart utilities

├── styles/                  # Global styles
│   └── index.css           # Tailwind + custom CSS

└── App.jsx                 # Main app component
```

## 🔧 Adding New Features

### Add New Menu Category

1. **Update category filter in MenuGrid.jsx:**

```javascript
const categories = [
  "All",
  "Hot",
  "Ice",
  "Milk-based",
  "Non-coffee",
  "NEW_CATEGORY",
];
```

2. **Add to database schema:**

```sql
-- Update menu items
INSERT INTO menu (name, category, ...) VALUES ('New Coffee', 'NEW_CATEGORY', ...)
```

3. **Update tailwind config if needed for new colors**

### Add New Admin Feature

1. **Create new admin component:**

```javascript
// src/admin/AdminNewFeature.jsx
export default function AdminNewFeature() {
  return <div className="space-y-6">{/* Your feature */}</div>;
}
```

2. **Add route in AdminDashboard:**

```javascript
<Route path="feature" element={<AdminNewFeature />} />
```

3. **Add nav item:**

```javascript
{ path: 'feature', label: 'New Feature', icon: '🆕' }
```

### Add Dark Mode Support

All components already support dark mode via `dark:` Tailwind classes:

```javascript
<div className="bg-coffee-cream dark:bg-coffee-dark">Light and dark modes</div>
```

## 🎨 Styling Guidelines

### Use Tailwind Classes

```javascript
// Good
<div className="px-4 py-2 bg-coffee-gold text-coffee-dark rounded-lg hover:shadow-lg transition-all">

// Avoid inline styles
<div style={{ padding: '8px 16px' }}>
```

### Custom Colors

Defined in `tailwind.config.js`:

```javascript
colors: {
  coffee: {
    dark: '#3B2F2F',
    gold: '#C9A66B',
    cream: '#EFE6DD',
    black: '#1A1A1A',
  }
}
```

### Animation Utilities

```javascript
// Fade in
<div className="animate-fadeIn">

// Slide up
<div className="animate-slideUp">

// Custom delays with GSAP
import gsap from 'gsap'

gsap.to(element, {
  duration: 0.6,
  delay: 0.2,
  opacity: 1,
  y: 0
})
```

## 🗄️ Database Operations

### Fetch Menu

```javascript
import { getMenu } from "../utils/supabase";

const fetchMenu = async () => {
  const data = await getMenu();
  console.log(data); // Array of menu items
};
```

### Create Order

```javascript
import { createOrder } from "../utils/supabase";

const handleCheckout = async (orderData) => {
  const order = await createOrder({
    name: "Customer",
    phone: "08xx",
    address: "Address",
    items: JSON.stringify(cart),
    total_price: 100000,
    status: "pending",
  });
};
```

### Update Order Status

```javascript
import { updateOrder } from "../utils/supabase";

await updateOrder(orderId, { status: "completed" });
```

## 🔐 Authentication

### Admin Login

```javascript
import { adminLogin, adminLogout, isAdminAuthenticated } from "../utils/auth";

// Login
const result = await adminLogin("admin@kopinusantara.com", "password");
if (result.success) {
  // Redirect to admin dashboard
}

// Check auth
if (isAdminAuthenticated()) {
  // Show admin panel
}

// Logout
adminLogout();
```

## 🛒 Cart Management

### useCart Hook

```javascript
import { useCart } from "../hooks/useCart";

const {
  cart, // Array of items
  addItem, // Add to cart
  removeItem, // Remove from cart
  updateQuantity, // Update quantity
  getTotal, // Get cart total
  clear, // Clear cart
} = useCart();

// Usage
addItem(product);
updateQuantity(productId, 2);
const total = getTotal(); // Returns number
```

## 🎬 Animation Examples

### Scroll Trigger Animation

```javascript
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedComponent() {
  useEffect(() => {
    gsap.to(".element", {
      scrollTrigger: {
        trigger: ".element",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      y: -50,
    });
  }, []);

  return <div className="element">Animated</div>;
}
```

### Button Hover Effect

```javascript
<button className="px-6 py-3 bg-coffee-gold hover:scale-105 hover:shadow-xl transition-all duration-300">
  Hover Me
</button>
```

## 📱 Responsive Development

### Mobile-First Approach

```javascript
// Default for mobile
<div className="w-full px-4">
  {/* Mobile layout */}
</div>

// Tablet and up
<div className="md:w-2/3 lg:w-1/2">
  {/* Desktop layout */}
</div>
```

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🧪 Testing Tips

### Test Locally

```bash
# Development
npm run dev

# Preview production build
npm run build
npm run preview
```

### Test Responsive

1. Chrome DevTools → Ctrl+Shift+M
2. Test all breakpoints
3. Check touch interactions

### Test Performance

```bash
# Lighthouse in DevTools
# Ctrl+Shift+I → Lighthouse → Generate report

# Or use npm package
npm install -g lighthouse
lighthouse https://your-site.com
```

## 🐛 Debugging

### Console Logging

```javascript
console.log("Debug message", variable);
console.error("Error:", error);
console.warn("Warning:", warning);
```

### React DevTools

Install React DevTools browser extension:

- Inspect components
- View props & state
- Profiler for performance

### Network Issues

Chrome DevTools → Network tab:

- Check API calls
- Response status
- Loading times

## 📚 Common Patterns

### Conditional Rendering

```javascript
{
  loading ? (
    <div className="spinner">Loading...</div>
  ) : error ? (
    <div className="text-red-500">{error}</div>
  ) : (
    <Content />
  );
}
```

### Form Handling

```javascript
const [formData, setFormData] = useState({
  name: "",
  email: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  // Submit data
};
```

### API Error Handling

```javascript
try {
  const data = await fetchAPI();
  setData(data);
} catch (error) {
  console.error("API Error:", error.message);
  setError(error.message);
} finally {
  setLoading(false);
}
```

## 🚀 Performance Tips

1. **Lazy Load Images:**

   ```javascript
   <img src="..." loading="lazy" />
   ```

2. **Code Splitting:**

   ```javascript
   const AdminPanel = lazy(() => import("./admin"));
   ```

3. **Memoization:**

   ```javascript
   export default memo(Component);
   ```

4. **Optimize Re-renders:**
   ```javascript
   useCallback, useMemo, useEffect dependencies
   ```

---

Happy coding! 🚀
