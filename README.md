# Google Sheets App

This is simple react web app which fetches data from google sheet URL entered by user and displayes it in table format on the page.  


## Technologies used 
The application is created using create-react-app. Mainly a UI application built in React (16.13.1) with support of few third party libraries (Details can be found in package.json). 

Each functionality is a different react component. I have tried to make components as reusable as possible to be used in multiple places in application in future. 


## Running the app

1. Clone the project using following command - 

   *git clone https://github.com/pankajm/google-sheets-app.git*

2. Once cloned to local machine, navigate to google-sheets-app directory and run following command 

   *npm install* 

   This will install all the dependencies. 

2. Run the app using following command 

   *npm start*

3. This will start the server and application will be opened in browser 

### (P.S. By default the app starts on port 3000 however If the port is busy it will ask you to run the app on other port)

4. Once app is launched, it will show empty URL box. Enter the google sheet URL and hit Get button. Spineer will role until data is shown. 

### End 
