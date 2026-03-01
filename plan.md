# what are we doing ? 
- make robust backend to serve chat application. 
- make frontend to meet robust backend.

# features: 
- Add users. 
- authentication. 
- search with username. 
- Add friends.
- personal chat
- group chat. 

# flow : 
- User sign-in. 
- User log-in
- Home page 
   - All friends availabe.
   - list all users. 
- user open chat.
- user sends message.
- other user recieves the message. 

# POC
- display all the people who are logged in. 
- let them message each other. 

# Directory structure. 
1. Frontend(server)
  - public
    - pages
    - styles
    - templates
  - src
      - auth_fns.js
      - chat_fns.js
      - app.js
  - test
  - main.js

2. Backend 
  - src
    - db_fns
    - handler
  - main.js