**Cashew Microsatellite database** project is build using React and Node. It can be deployed to any server which has node installed. In modern web development most of the deployment happens over cloud like AWS or other cloud service, We have used heroku to deploy our application.

# Development Setup

## Clone the repo
`git clone https://github.com/raptlydev/cashew-microsatellite.git`

## Front-end

*Any changes that needs to be done in Frontend needs to be done inside client folder*

### Steps
`cd client/`
`npm install`
`npm start`

After making any changes in FrontEnd Application we need to build it and build folder needs to be placed inside server folder.

### Steps to build

`npm run build`

This will generate a build folder in root directory which needs to be copied and pasted inside server folder,

#### Note: Server directory already has a build folder and needs to be replaced with the new build folder generated using the above script

Push the changes to github and changes will reflect in the website. We have enabled automatic deployment which will take care of the deployment and no extra steps are required. To push the changes in github we need to type the above command.

`git push origin main`

## Back-end

To make changes in backend we need to go inside server folder.

`cd server/`

Once the changes are made push the changes in the github.

`git push origin main`

If we have to deploy the application to the server we need to point out server folder to our local server which is exposed to internet. Cloud services already does it for us but if we have a standalone machine from which we need to serve our website then we need to have node installed in the machine and IIS settings needs to be configured so that the endpoint is exposed to internet.
