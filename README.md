# Modern-E-commerce-project

Personal Project Pitch
Project Title: Modern Mini E-commerce

User Stories

I want my users to be able to:
Create an account -to save my info and track orders
Login
View my order history - to track past purchases and reorder favorites
Manage my profile - to update shipping addresses and preferences

View their shopping cart
Remove items
Purchase the items in their shopping cart
“Favorite” an item
View their favorite items on a “Favorite Items” page
View, edit, and update their profile page
Name, email, etc
Add payment information (credit card)
A user can view their past purchases

NOTES
I will need to create dummy data for all my store e-commerce items

Frontend - Wireframe/Pages

PAGES
HomePage - Login
Collection
Men,Women,Accessories
New arrivals
Best sellers section
NewsLetter signup
Products - Categories
Size,Price,Color,Brand
Products grid
Newest,Popularity
Add to cart buttons
Product detail -Reviews
Image gallery
Size selector
Color variants
Customer reviews and ratings
Related products suggestions

Cart - Saved Items
Size/color reminders
Promo code input
Order summary with total
‘CheckOut - Profile
Multi-step form(Shipping ,Payment,Review)
Address auto-complete
Secure payment form
Order review before submission

CRUD Resources / Data Model
Models
User
Product
ItemCategory
Order
OrderItem
Review
Wishlist
API’s
Stripe API for credit card processing & payments
OPEN API
Authentication
Use Django’s built in authentication for a user to create an account.

What will be tied to a logged-in user? What features will be specific to someone who is logged in?

Registration 
Login
Logout
Login Required Decorators
Password Management
Session Configuration
Shopping Cart


User → Profile (One-to-One)

User → Addresses (One-to-Many)

User → Cart (One-to-One)

User → Wishlist (One-to-One)

User → Orders (One-to-Many)

User → Reviews (One-to-Many)

Product → Category (Many-to-One)

Product → Brand (Many-to-One)

Cart → Cart Items → Product (Chain relationship)

Order → Order Items → Product (Chain relationship)


python -m Ecommerce venv
source Ecommerce/bin/activate

pip install django framework

create db

django-admin startproject ecom_proj
cd ecom_proj

python manage.py startapp user_app
python manage.py startapp product_app
python manage.py startapp cart_app
python manage.py startapp order_app
python manage.py startapp review_app
python manage.py startapp wishlist_app



INSTALLED_APPS = [
    
    'rest_framework',
    'user_app',
    'product_app',
    'cart_app',
    'order_app',
    'review_app',
    'wishlist_app',
]

AUTH_USER_MODEL = 'user_app.User'

create dummy data
 user_app/fixtures/users.json
 product_app/fixtures/categories.json
 product_app/fixtures/products.json
 cart_app/fixtures/carts.json
 order_app/fixtures/orders.json
 review_app/fixtures/reviews.json
 wishlist_app/fixtures/wishlists.json

Models(class)
-User
-ItemCategory,Product
-Cart,CartItem,Meta
-Order,OrderItem
-Review
-Wishlist,WishlistItem,Meta(python manage.py makemigrations/migrate)

#Superuser
python manage.py createsuperuser

<!-- dummy data -->
model → app name + model name

pk → primary key

fields → field values



'''Defined models (User, Product, Cart, Order, Wishlist, etc.)

Created fixtures (.json files)

Tested relationships in the Django shell'''


user_app
-JWT JSON-Web-Token(authentication library)
pip install djangorestframework-simplejwt
put/settings.py->REST_FRAMEWORK
serializer/view/urls


User first → authentication baseline.

Cart second → core shopping functionality.

Product third → catalog to fill cart.

Order fourth → checkout flow.

Review fifth → feedback system.

Wishlist last → optional but nice‑to‑have feature.



Model → defines data.

Serializer → translates data.

View → handles API logic.

URL → exposes endpoint to client.

<!-- Model → Serializer → View → URL → Client -->


