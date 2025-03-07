# Flipkart Clone - Full-Stack E-Commerce Platform

## 1. Introduction
The **Flipkart Clone** is a full-stack e-commerce web application that replicates the core functionalities of Flipkart, including user authentication, product browsing, cart management, order placement, and an **admin panel**. 

This project provides a seamless online shopping experience for users while also offering an admin dashboard for managing products, users, and orders.

---

## 2. Features

### 🔹 User Features:
- **User Authentication** – Secure signup/login using JWT authentication.
- **Product Browsing** – View a wide range of products with images, descriptions, and pricing.
- **Search & Filters** – Easily find products using keyword search and category filters.
- **Cart Management** – Add, update, or remove items from the cart.
- **Checkout & Orders** – Place orders and track order status.
- **Wishlist** – Save favorite products for later.
- **Reviews & Ratings** – Leave reviews and rate products.

### 🔹 Admin Panel Features:
- **Product Management** – Admins can add, update, and remove products.
- **Order Management** – View and process customer orders.
- **User Management** – View and manage registered users.
- **Dashboard Analytics** – View total users, products, orders, and revenue insights.

---

## 3. Technology Stack

| Technology    | Purpose                     |
|--------------|-----------------------------|
| **Frontend**  | React.js, Redux, Tailwind CSS |
| **Backend**   | Node.js, Express.js         |
| **Database**  | MySQL                        |
| **Authentication** | JWT (JSON Web Tokens) |
| **Deployment** | Vercel (Frontend), Firebase/Heroku (Backend) |

---

## 4. Project Architecture

- The **React.js frontend** interacts with the **Node.js backend** via **REST APIs**.
- The **backend communicates with MySQL** for storing users, products, orders, etc.
- **JWT authentication** ensures secure access for users and admins.
- **Admin Panel** allows authorized admins to manage platform data efficiently.


### **System Flow:**
1️⃣ User visits the website → Browses products.  
2️⃣ User adds products to the cart → Proceeds to checkout.  
3️⃣ User logs in/registers → Enters shipping/payment details.  
4️⃣ Order is placed → Admin updates order status from the panel.  
5️⃣ User tracks order → Leaves a review after delivery.  
6️⃣ Admin manages orders & products → From the Admin Dashboard.  

---

## 5. Database Schema

### 🔹 Users Table
| Column Name  | Type        | Description           |
|-------------|------------|-----------------------|
| id          | INT (PK)    | Unique user ID       |
| name        | VARCHAR     | User's full name     |
| email       | VARCHAR (Unique) | User's email (login) |
| password    | VARCHAR     | Hashed password      |
| role        | ENUM       | user, admin          |
| created_at  | TIMESTAMP   | Account creation date |

### 🔹 Products Table
| Column Name  | Type        | Description           |
|-------------|------------|-----------------------|
| id          | INT (PK)    | Unique product ID    |
| name        | VARCHAR     | Product name         |
| description | TEXT        | Product description  |
| price       | DECIMAL     | Price of the product |
| image_url   | VARCHAR     | Product image link   |
| stock       | INT         | Available stock      |
| category    | VARCHAR     | Product category     |
| rating      | FLOAT       | Product rating       |

### 🔹 Orders Table
| Column Name  | Type        | Description               |
|-------------|------------|---------------------------|
| id          | INT (PK)    | Unique order ID          |
| user_id     | INT (FK)    | User who placed the order |
| total_price | DECIMAL     | Total cost               |
| status      | ENUM       | Pending, Shipped, Delivered, Cancelled |
| payment_status | ENUM    | Pending, Completed, Failed |
| created_at  | TIMESTAMP   | Order creation date      |

---

## 6. API Endpoints

### 🔹 User Authentication
- `POST /api/register` – Register new users.
- `POST /api/login` – Authenticate users.

### 🔹 Product Management
- `GET /api/products` – Fetch all products.
- `POST /api/products` – Add new product (**Admin only**).
- `PUT /api/products/:id` – Update product details (**Admin only**).
- `DELETE /api/products/:id` – Remove a product (**Admin only**).

### 🔹 Cart Management
- `POST /api/cart` – Add product to cart.
- `GET /api/cart/:userId` – Get cart items.
- `DELETE /api/cart/:id` – Remove item from cart.

### 🔹 Orders & Payments
- `POST /api/orders` – Place an order.
- `GET /api/orders/:userId` – Get order history.
- `PUT /api/orders/:id` – Update order status (**Admin only**).

### 🔹 Admin Panel
- `GET /api/admin/users` – Fetch all users.
- `GET /api/admin/orders` – Fetch all orders.
- `PUT /api/admin/orders/:id` – Change order status.
- `GET /api/admin/stats` – Fetch total users, orders, revenue.

---

## 7. Frontend Pages & UI

1️⃣ **Home Page** – Showcases product listings with search and filters.  
2️⃣ **Product Page** – Displays product details, reviews, and an "Add to Cart" button.  
3️⃣ **Cart Page** – Users can view/edit their cart and proceed to checkout.  
4️⃣ **Checkout Page** – Users enter shipping/payment details.  
5️⃣ **Order History Page** – Displays past orders and statuses.  
6️⃣ **Admin Dashboard** – Allows admins to manage products, orders, users, and view sales stats.  

---

## 8. Deployment & Hosting

| Component  | Deployment Platform |
|------------|----------------------|
| **Frontend** | Vercel |
| **Backend**  | Firebase / Heroku |
| **Database** | MySQL Cloud |

---

## 9. Future Enhancements

✅ **AI-Based Recommendations** – Suggests products based on browsing history.  
✅ **Live Chat Support** – Allows real-time customer queries.  
✅ **Multi-Vendor Support** – Enables multiple sellers on the platform.  
✅ **Progressive Web App (PWA)** – Optimized for mobile users.  

---

## 10. Conclusion
The **Flipkart Clone** is a complete, feature-rich, full-stack e-commerce platform that mimics real-world shopping experiences. Built using **React.js, Node.js, and MySQL**, it provides a **scalable and efficient solution** for online shopping.
