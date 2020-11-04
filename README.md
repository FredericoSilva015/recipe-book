## 🚀 Quick start

1.  **Add the Client.**

    The client is necessary to run gatsby

    ```npm install -g gatsby-cli```

1.  **Add Json-server.**

    The client is necessary to run gatsby

    ```npm install -g json-server```

1.  **Head into the App folder**

    Current Folder where the APP is located

    ```cd recipe-book```

1.  **Head into the App folder**

    Run NPM install command

    ```npm install```

1.  **Start the back end**

    I am running the back end on top of test.json

    ```json-server --watch src/data/test.json```

1.  **Start the developing**

    Dev mode command, use this one to see the code or to develop

    ```gatsby develop```

1.  **Or Build**

    Build command, build the static site ready for production

    ```gatsby build```


## :point_right: Objectives

- Functionality recipe
    - create recipe
    - edit recipe
    - delete recipe
    - view recipe
- Edit Functionality recipe
    - name
    - number of servings
    - cooking time
- Functionality for these recipe properties: ingredients, preparation steps
    - add 
    - remove 
    - eddit

## :warning: Why i did this and that

1. **Header**

    Two things can be easly spoted, a search and a button.

    - Search is a standard way to look for something, i like to cooking, and i know overtime, there would be many recipes. Idea came from https://react-icons.github.io/, at the time i just created the search input i wanted to focus on the priorities
    - Button for new recipe, several iterations on this one, i settled with this being the new recipe button

2. **Body**

    The List is here, and lightbox

    - List, with all the recipes, devided by cards, each one with a edit/delete button which provides easy functionality. I added a few categories to the list, i felt it was heavy to look at, specialy if there were a lot of them. I am considering adding a tab's system if i manage to complete all the other vital objectives
        - edit recipe
        - delete recipe, simple delete button. One idea that occured to me was when pressed a dialog box pops up asking if you really wish to delete. I also thought about creating a history so i could roleback missclick deletions, but i wanted to focus on the main objectives
    - Lightboxes, contains the edit/new and also presents a recipe, i wanted something that did not cut the flow and felt naturaly part of the App. I did not wish to have a new page just to display the content edit etc... i came to the conclusion this would be a great idea

3. **Ideas**

    This section is for ideas i did not implement but did consider and wanted to work on

    - Keywords on the search, i also wished to creat a keyworded search, such has, if i apply a button of sort would convert to finding categorys or ingredients. Maybe i want beef today, or how many Portuguese recipes i got, something spicy? .. a guy can dream with cake can't ?
    - Random picker a component that picks a lucky number of recipes to try out, spin the wheel for some lucky find's who knows! For those days where you just can't decide what to eat and anything goes. or maybe just for the lol's...
    - static backend; i wanted to focus just on the front-end. I concluded it would take valuable time from other parts. 
    - help button
    - google ingredients
