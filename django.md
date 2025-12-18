<!-- user_app
Model: extend AbstractUser or use default User.

Serializer: expose id, username, email.

Views: ListCreateAPIView for all users, RetrieveUpdateDestroyAPIView for single user.

URLs: /api/v1/users/, /api/v1/users/<id>/. -->

<!-- user_app
Views: ListCreateAPIView + RetrieveUpdateDestroyAPIView

Provides all CRUD:

Create user (POST)

Read users (GET list/detail)

Update user (PUT/PATCH)

Delete user (DELETE) -->





<!-- 
product_app
Models: ItemCategory, Product (FK to category).

Serializer:

ItemCategorySerializer → id, name.

ProductSerializer → nested category (read‑only) + category_id (write‑only).

Views: ListCreateAPIView + RetrieveUpdateDestroyAPIView for both categories and products.

URLs: /api/v1/categories/, /api/v1/products/. -->


<!-- cart_app
Models:

Cart (OneToOne with User).

CartItem (FK to Cart + Product).

Serializer:

CartSerializer → includes nested CartItemSerializer.

Views: CRUD for Cart and CartItem.

URLs: /api/v1/cart/, /api/v1/cart/items/. -->


<!-- Order_app
Models:

Order (FK to User, status, total_price).

OrderItem (FK to Order + Product, quantity, price).

Serializer:

OrderSerializer → nested OrderItemSerializer.

Views: CRUD for Order and OrderItem.

URLs: /api/v1/orders/, /api/v1/order-items/. -->


<!-- Authentication
Add rest_framework.authtoken to INSTALLED_APPS.

Run python manage.py migrate.

Endpoint: POST /api/v1/token/ with { "username": "...", "password": "..." }.

Use header: Authorization: Token <token>. -->


<!-- 
User signs up → gets token.

Product endpoints list/create items.

Cart endpoints let user add/remove products.

Order endpoints finalize cart into orders with items. -->


<!-- 
STRIPE_SECRET_KEY=sk_test_12345
OPENAI_API_KEY=sk-abc123 -->

<!-- pip install django-environ -->
<!--  -->



user_app
Handles authentication, registration, and profile management.

POST /api/v1/users/register/ → create a new user

POST /api/v1/users/login/ → authenticate user

GET /api/v1/users/<id>/ → fetch user profile

PUT /api/v1/users/<id>/ → update full profile

PATCH /api/v1/users/<id>/ → update partial profile (e.g., email only)

DELETE /api/v1/users/<id>/ → delete user account

2. cart_app
Handles shopping cart operations.

GET /api/v1/cart/ → view current cart

POST /api/v1/cart/ → add item to cart

PUT /api/v1/cart/<item_id>/ → update item quantity

PATCH /api/v1/cart/<item_id>/ → partially update (e.g., change size)

DELETE /api/v1/cart/<item_id>/ → remove item from cart

3. API_app (Stripe + OpenAI)
External integrations.

POST /api/v1/payment/ → create Stripe PaymentIntent (returns client_secret)

POST /api/v1/chat/ → send message to OpenAI and get reply  Only POST is used here, since you’re sending data to external APIs.

4. product_app
Handles product catalog.

GET /api/v1/products/ → list all products

GET /api/v1/products/<id>/ → get product detail

POST /api/v1/products/ → add new product (admin only)

PUT /api/v1/products/<id>/ → update full product info

PATCH /api/v1/products/<id>/ → update partial product info

DELETE /api/v1/products/<id>/ → delete product

5. order_app
Handles orders and order items.

GET /api/v1/orders/ → list all orders (user/admin)

GET /api/v1/orders/<id>/ → get order detail

POST /api/v1/orders/ → create new order

PUT /api/v1/orders/<id>/ → update full order (e.g., shipping address)

PATCH /api/v1/orders/<id>/ → update partial order (e.g., status only)

DELETE /api/v1/orders/<id>/ → cancel/delete order