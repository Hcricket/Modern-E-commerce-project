npm install react-router-dom
main.jsx <App/> render
App.jsx ---Routersetup HomePage,CartPage,CheckoutPage,ProfilePage-----connected
Navbar.jsx -------import to HomePage
npm run dev
install react bootstrap
npm install react router

set up navbar
Homepage
put links in navbar
Set up react router
Make skeleton page
Put links in navar
Make About page
All characters
-make api
-make card component


###folder src/
pages/ 
HomePage.jsx 
CollectionPage.jsx 
ProductDetailPage.jsx 
CartPage.jsx
CheckoutPage.jsx
ProfilePage.jsx

   components/
    Navbar.jsx ← global navigation 

    auth/
    LoginForm.jsx 
    RegisterForm.jsx 
    
    cart/
    CartItem.jsx 

    products/ 
    ProductCard.jsx 
    Filters.jsx 
    
    checkout/ 
    ShippingForm.jsx 
    PaymentForm.jsx 
    ReviewOrder.jsx








<!-- React e‑commerce project: step‑by‑step notes (HCRICKET)
Project setup and dependencies
Create project: Initialize a Vite + React app and move into the project directory.

Install baseline: Install the template’s default packages to confirm the scaffold runs.

Add UI and routing: Install React Router and React‑Bootstrap with Bootstrap CSS for layout and components.

Align versions (critical): Use React 18.2.0 and React‑DOM 18.2.0 to ensure compatibility with React‑Bootstrap v2.x.

Start and verify: Run the dev server; confirm the starter page renders without errors.

Structure and organization
Feature folders: Group components by feature (auth, cart, products, checkout) for clarity and reusability.

Pages vs components: Pages map to routes; components are shared UI pieces referenced by pages.

Global layout: Use a top‑level layout with a persistent Navbar and an outlet area for child routes.

Consistent naming: Match file and import names exactly; Vite is case‑sensitive and strict about paths.

Routing and layout
Router provider: Use the modern RouterProvider with a browser router and a single centralized route config.

Layout role: Place Navbar in the layout component so it displays across every route.

Core routes: Include Home, Collections, Product Detail, Cart, Checkout, Profile, Login, Register, plus a 404 fallback.

Error UX: Add an error element to routes to replace raw stack traces with a friendly message.

Branding and UI design
Navbar branding: Replace the brand text with “HCRICKET”; optionally include a logo image and align login/logout to the right.

Homepage hero: Add your logo and welcome text (“Great Deals, Happy Shopping”) in a hero section with clean spacing.

Login and logout: Style the login form with clear labels and spacing; add a logout button in the Navbar or profile menu.

Typography and colors: Choose a cohesive color palette and font (e.g., Poppins/Inter) to keep the brand consistent.

Assets and images
Image storage: Keep all images under src/assets/ (e.g., images/ for logos/hero, clothing/ for product photos).

Homepage photo: Place your personal photo under src/assets/images/ and display it on the homepage hero.

Collections photos: Store clothing images under src/assets/clothing/ and render them in a responsive grid under Filters.

Responsive behavior: Use fluid sizing and spacing so images look good on mobile and desktop.

Products and collections
Product card: Show name, price, and image for each item; clicking navigates to the product detail route.

Filters bar: Provide sorting and search UI at the top; keep it simple first, enhance later with real logic.

Detail page: Display larger product images, description, and actionable buttons (add to cart).

Cart basics: Use a presentational component for cart items; expand later to quantities and totals.

Auth integration (Django user_app)
Endpoints alignment: Confirm Django endpoints for register, login, logout, and profile, with CORS enabled for localhost.

API calls: Connect login/register/profile components to these endpoints; store the returned token client‑side.

Auth state: Maintain isAuthenticated, user, and token in a React Context; persist token to localStorage.

Protected routes: Guard checkout and profile; redirect unauthenticated users to login with a clear message.

Logout flow: Clear stored token/state, optionally call the backend logout endpoint, then navigate to home or login.

Quality, testing, and troubleshooting
Version alignment: Keep React and React‑DOM at 18.2.0 with React‑Bootstrap v2.x to avoid hook/runtime errors.

Case sensitivity: Double‑check import paths and filenames; mismatches cause “Failed to resolve import” and blank screens.

Error visibility: Use route error elements and console checks; read red errors to find import or version issues fast.

Dependency cleanup: If behavior is odd, delete node_modules and lockfile, then reinstall to remove duplicates.

Linting/formatting: Configure ESLint and Prettier early to keep the codebase consistent as it grows.

Git hygiene: Commit in small, logical steps; ignore build outputs and environment files.

Build and deployment (next steps)
Env config: Externalize API base URLs (e.g., .env files) for dev vs prod.

Static assets: Ensure images are imported from src/assets/ so bundlers handle them correctly.

Production build: Run a production build and serve the build output behind a static server or via your Django/Nginx setup.

Backend integration: Proxy API requests during dev or set full URLs; confirm CORS and HTTPS when deploying.

What to customize first (quick wins)
Branding: Update Navbar brand to HCRICKET and add your logo on the homepage.

Collections grid: Display your clothing images under Filters with clean spacing.

Auth UX: Wire login/logout buttons in the Navbar and protect profile/checkout routes.

Error UX: Add a friendly route error element to replace raw stack traces during dev. -->














src/
  api.js                # axios instance
  services/
    auth.jsx            # login, register, logout, getProfile
    cart.jsx            # cart API calls
    order.jsx           # order API calls
    product.jsx         # product API calls
    stripe.jsx          # stripe payment API calls
    weather.jsx         # weather API calls
  pages/
    LoginPage.jsx
    RegisterPage.jsx
    ProfilePage.jsx
    CartPage.jsx
    OrderPage.jsx
    ProductPage.jsx
    CheckoutPage.jsx
    WeatherPage.jsx
    HomePage.jsx
  components/
    Navbar.jsx




1. HomePage → ProductPage
User browses products.

2. ProductPage → ProductDetailPage
User clicks a product.

3. ProductDetailPage
User can:

Add to Cart

Buy Now (Stripe Checkout)

4. CartPage
User sees all cart items.

5. CheckoutPage
User pays for the whole cart.

6. Stripe → Django Webhook
Order is created automatically.

7. OrderPage
User sees their orders.

This is a complete e‑commerce system.