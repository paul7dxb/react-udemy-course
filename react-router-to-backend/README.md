# Events Viewer Application

## Intro

A small application that displays event details. Events can be added, edited and deleted from the Node.js backend.

The backend has a time delay on the events page data being retrieved to display the use of react-router loader actions and defering.

## Tech

- An example React application using / demonstrating
    - react-router-dom
        - Dynamic Routes
        - loader functions
        - Custom error pages
        - Using react router with a backend API
        - Form submission
        - useFetcher()
        - defer


## How to Use

This project actually contains two projects:
- A React.js application (i.e., the frontend SPA)
- A dummy backend API to which the React app can "talk" (to send + fetch data)

You must run "npm install" in both project folders.

Thereafter, you can start the dummy backend API server via "npm start" (inside the "backend-api" folder).
The React app dev server is then also started via "npm start" (though inside the "react-frontend" folder).

You MUST have both servers (backend + frontend) up and running for the projects to work.

The dummy backend API does not use any external database - instead the dummy data is saved to an "events.json" file inside the project folder.
