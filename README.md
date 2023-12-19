
# Project Title
Airbnb Clone 

## Description

an Airbnb clone is a web platform that mimics the core functionalities and user experience of Airbnb,
a popular online marketplace for lodging, primarily homestays for vacation rentals and tourism activities.

## Features

User Registration & Authentication:

Sign up and login options for users to create and access their accounts securely.
Social login integrations (Google, Facebook, etc.) for easy account creation.

Property Listings:

Hosts can create detailed property listings with descriptions, photos, location, pricing, availability calendar, amenities, and house rules.
Search functionality allowing users to filter properties based on location, dates, price range, property type, and amenities.

Booking & Reservations:

Users can book properties for specific dates, view booking details, and receive confirmation emails or notifications.
Payment integration for secure transactions, supporting various payment methods (credit/debit cards, PayPal, etc.).

Messaging & Communication:

A messaging system allowing communication between hosts and guests to discuss bookings, ask questions, and share information.

User Profiles & Reviews:

User profiles for hosts and guests containing information like profile picture, reviews, ratings, and booking history.
Reviews and ratings for properties and hosts based on the experiences of guests.

Responsive Design:

A user interface optimized for various devices (desktops, tablets, mobile phones) ensuring a seamless experience across different screen sizes.

Tailwind design

Tailwind animations and effects

Full responsiveness

Credential authentication

Google authentication

Github authentication

Image upload using Cloudinary CDN

Client form validation and handling using react-hook-form

Server error handling using react-toast

Calendars with react-date-range

Page loading state

Page empty state

Booking / Reservation system

Guest reservation cancellation

Owner reservation cancellation

Creation and deletion of properties

Pricing calculation

Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms

For example we will filter out properties that have a reservation in your desired date range to travel

Favorites system

Shareable URL filters

Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results

How to write POST and DELETE routes in route handlers (app/api)
How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)

How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling

How to handle relations between Server and Child components!
## Installation
npm i 

## Setup .env file

DATABASE_URL=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

GITHUB_ID=

GITHUB_SECRET=

NEXTAUTH_SECRET=

## Setup Prisma

npx prisma db push
