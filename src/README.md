# Bot Battlr

Bot Battlr is a web application that allows users to browse a collection of robots, view their details, and enlist them into their army. Users can create their ultimate Bot Army and manage their enlisted robots.

## Author

Conrad Kambi
https://github.com/conokisekai

## Project Overview

In this application, users can:

- View a list of available bots.
- Add bots to your Bot Army.
- Remove bots from your Bot Army.
- Delete bots permanently from the backend.
- Enlist only one bot per bot class.

## Project Setup & Data Fetching

To set up the project:

1. **Create a Project Folder:** Create a new project folder on your local machine.
2. **Create a GitHub Repository:** Create a private GitHub repository for your project. Add your TM as a contributor for grading purposes.
3. **Add Database Configuration:** In your project directory, create a `db.json` file with the necessary data for your server DB. Use this data for your JSON DB server.
4. **Start Backend Server:** Run `json-server --watch db.json` to start the local server. Test the server by visiting `http://localhost:8001/bots` in your browser.

## Core Deliverables

1. View Profiles of All Bots
Users can see detailed profiles of all available bots in the BotCollection component.
2. Enlist Bots into Your Army
Users can add individual bots to their Bot Army by clicking on them in the BotCollection component.
Each bot can be enlisted only once into the army.
The enlisted bots are displayed in the YourBotArmy component.
3. Release Bots from Your Army
Users can remove bots from their Bot Army by clicking on them in the YourBotArmy component.
The released bots no longer appear in the YourBotArmy component but remain in the BotCollection.
4. Permanently Delete Bots
Users can discharge a bot from their service forever by clicking the red button marked "x".
This action deletes the bot both from the backend and from the YourBotArmy component.

## Development Process

To work on the project:

- **Clone the Repository:** Clone the project repository to your local machine.
- **Install Dependencies:** Run `yarn install` to install project dependencies.
- **Start Development Server:** Run `npm run dev` to start the development server. The application will be running at `http://localhost:8001`.


# LICENCE
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
