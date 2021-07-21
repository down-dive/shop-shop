# shop-shop

## Description

In this project, I have worked on an existing e-commerce application called "shop-shop". I have implemented a state management approach that's been popularized by the JavaScript library Redux. I have also added offline capabilities with IndexedDB as well as the ability to handle secure online payments with a service called Stripe.

## Table of Contents

- [shop-shop](#shop-shop)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Tasks List](#tasks-list)
  - [Screenshots](#screenshots)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)
  - [Deployed Application](#deployed-application)
  - [Questions](#questions)

## Technologies

* React
* GraphQL
* Apollo Server and Provider
* Node
* Express

## Tasks List

- [x] Use global state across multiple React components.

- [x] Use IndexedDB within a React component.

- [x] Cach server-side data using IndexedDB.

- [x] Generate product, price, and checkout session IDs by using the Stripe API.

- [x] Capture a completed order by saving IndexedDB data in MongoDB database.

- [x] Use the useLazyQuery Hook to delay executing a GraphQL query.

## Screenshots

Please see below animations for different sections of this application:

* The following animation shows how a user can register using the Signup page and then navigate to the Products page:

![alt=signup](./client/src/assets/signup.gif)

* The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:

![alt=main-functionality](./client/src/assets/main-functionality.gif)


* Finally, the user can checkout by going to their shopping cart, as shown in the following animation:

![alt=checkout](./client/src/assets/checkout.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deployed Application

Please use the following link to view the deployed application on Heroku: [Deployed App](https://arcane-everglades-43711.herokuapp.com/)

## Questions

If you have any questions please use the following two links to contact me:

* [GitHub](https://github.com/down-dive)

* [Email Address](mailto:yterlyuk@gmail.com)