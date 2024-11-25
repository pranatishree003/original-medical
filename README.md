# Original Medical Assessment App

This is a simple medical assessment app that allows users to upload image Crop Image, Adjustment Brightness, Contrast, and Window level adjustment and In other Page There is DICOM Viewer and also user can upload a DICOM Image (which is commonly used in medical field) and view it along with It's metadata like Patient Name, Study Date, Modality.

# Technologies Used

- React
- Redux
- Tailwind CSS
- React Router
- Docker
- Nginx

# How to run the app

- Clone the repository
- Run `yarn install` to install all the dependencies
- Run `yarn dev` to start the app
- Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

# For Production Build with Docker

- Run `yarn build` to build the app for production
- Run `docker build -t react-app .` to build the docker image.
- Run `docker run --name dicom-viewer -p 3000:80 react-app` to run the docker image.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Build Process

- To run the app on docker container, I have created a Dockerfile and a nginx configuration file to serve the app on port 80.
- First it Build the App than it copies the build folder to the nginx folder and then it copies the nginx configuration file to the nginx folder.
- The nginx configuration file is used to serve the app on port 80 and also to handle the routing in the app to `index.html` incase of hard reload.

# Production

- The App is also hosted on [https://original-medical.vercel.app/] (https://original-medical.vercel.app/)
