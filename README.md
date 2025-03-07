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

The **Admin Panel** ensures seamless management of products, users, and orders. 



---


 # numetry-flipkart-clone
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 8797d69 (Initialize project using Create React App)
