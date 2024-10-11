# Smart-Healthcare-System-for-Urban-Hospitals
Smart Healthcare System for Urban Hospitals

Steps to run the project on your local machine
Fork this repository
Open terminal or command prompt on your local machine. Run the following command to clone the repository:
git clone https://github.com/your-username/your-repo.git
Replace your-username with your GitHub username and your-repo with the name of your repository.

Open the project and rename .env.example files to .env in both client and root directory.
Add your own environment variables to these both files.
To run the backend, open a new terminal and run 'cd backend/' to go to backend directory and execute:
``npm start``

To run the frontend, open a new terminal and run 'cd frontend/' to go to frontend directory and execute:
``npm start``

To access the admin dashboard
Download the project from the git repository
You need to create your own MongoDB instance and add the MongoDB url to the .env file
Register on the website and go to your MongoDB and manually change the 'isAdmin' field of the account you want to make admin in the DB to 'true' and then log in back on the site
Now you will be able to access the admin dashboard
