Live Link: https://book-catellog-backend.vercel.app/

admin_toke = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMmVjNmE4ZC05ZTIwLTQ5OWItYmEyOC1iNWMwZTA2MDNmNDYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTM5NjQxMjEsImV4cCI6MTcyNTUwMDEyMX0.msy6o4iDKPMbHOsFz24ZXwOxbt4a1u_Or3z3lvx5YN4

customer_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjMjI5NDQ1Yy0yODUwLTQwZTctYTkwOS1lODBhYTVhYjYwYTEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2OTQxNjU3NzAsImV4cCI6MTcyNTcwMTc3MH0.JppL-OTVWqWUcn2umDGzU7ZKVWN9bzG-anDZZ85NzD8

Application Routes:

User

https://book-catellog-backend.vercel.app/api/v1/auth/signup (POST)
https://book-catellog-backend.vercel.app/api/v1/users/28067a59-caa7-4a57-85d6-9ce9dbf4b121 (Single GET)
https://book-catellog-backend.vercel.app/api/v1/users (GET)
https://book-catellog-backend.vercel.app/api/v1/users/28067a59-caa7-4a57-85d6-9ce9dbf4b121 (PATCH)
https://book-catellog-backend.vercel.app/api/v1/users/28067a59-caa7-4a57-85d6-9ce9dbf4b121 (DELETE)
https://book-catellog-backend.vercel.app/api/v1/profile (GET)

Category

https://book-catellog-backend.vercel.app/api/v1/categories/create-category (POST)
https://book-catellog-backend.vercel.app/api/v1/categories (GET)
https://book-catellog-backend.vercel.app/api/v1/categories/eabd19a1-3f18-4f1c-8620-a0b497a12475 (Single GET) Include an id that is saved in your database
https://book-catellog-backend.vercel.app/api/v1/categories/eabd19a1-3f18-4f1c-8620-a0b497a12475 (PATCH)
https://book-catellog-backend.vercel.app/api/v1/categories/eabd19a1-3f18-4f1c-8620-a0b497a12475 (DELETE) Include an id that is saved in your database

Books

https://book-catellog-backend.vercel.app/api/v1/books/create-book (POST)
https://book-catellog-backend.vercel.app/api/v1/books (GET)
https://book-catellog-backend.vercel.app/api/v1/books/eabd19a1-3f18-4f1c-8620-a0b497a12475/category (GET)
https://book-catellog-backend.vercel.app/api/v1/books/01c1a87a-7d78-4aa9-97e2-b064779e762e (GET)
https://book-catellog-backend.vercel.app/api/v1/books/01c1a87a-7d78-4aa9-97e2-b064779e762e (PATCH)
https://book-catellog-backend.vercel.app/api/v1/books/01c1a87a-7d78-4aa9-97e2-b064779e762e (DELETE)

Orders

https://book-catellog-backend.vercel.app/api/v1/orders/create-order (POST)
https://book-catellog-backend.vercel.app/api/v1/orders (GET)
https://book-catellog-backend.vercel.app/api/v1/orders/489678e8-1f8d-43b6-9562-06b14b647ab8 (GET)
