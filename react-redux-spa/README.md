# Company Details App
This SPA project provides a UI for managing company and contact details for a sales consultant. It has been configured to interact with a Web Api that handles data storage and retrieval.

## Functionality
The app offers the ability to add a new company, list existing companies and edit company details. A menu and navigation links are provided in the UI.

## React and state management
The app is built using React functional components and makes exensive use of React Hooks for local state, redux dispatch, url parameters and life cycle events.
Redux Toolkit is used and this provides a simplified and smaller foot print implementation of Redux for state management. Api calls, loading, success and error states are all handled in one place and used by the UI components to provide relevant feedback.

## Running the app
1. To run the app first issue the command 'npm install' from the root directory.
2. Build and start the ASP.NET Web Api.
3. issue the command 'npm run start' and open your browser at http://localhost:3000/

