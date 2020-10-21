## 🚀 Quick start

1.  **Add the Client.**

    The client is necessary to run gatsby

    ```npm install -g gatsby-cli```

1.  **Head into the App folder**

    Current Folder where the APP is located

    ```cd fred-recipe-book```

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


## :warning: Notes

- https://www.google.com/search?q=garlic
- static data
- search
- lightbox

## :warning: Why i did this and that

1. **Header**

    Two things can be easly spoted, a search and a button.

    - Search is a standard way to look for something, i like to cooking, and i know overtime, there would be many recipes. So having a way to look for it is a given. Idea came from https://react-icons.github.io/, at the time i just created the search input i wanted to focus on the priorities
    - Button for new recipe, several iterations on this one, i settled with this being the new recipe button

2. **Body**

    The List is here, and lightbox

    - List, with all the recipes, devided by cards, each one with a edit/delete button which provides easy functionality. I added a few categories to the list, i felt it was heavy to look at, specialy if there were a lot of them. I am considering adding a tab's system if i manage to complete all the other vital objectives
        - edit recipe
        - delete recipe, simple delete button, press it and a dialog box pops up asking if you really wish to delete. I also thought about creating a history so i could roleback missclick deletions, i felt it was just creating an array with the history of the values deleted, but i wanted to focus on the objectives first
    - Lightboxes, contains the edit/new and also presents a recipe, i wanted something that did not cut the flow and felt naturaly part of the App. I did not wish to have a new page just to display the content edit etc... i came to the conclusion this would be a great idea

3. **Ideas**

    This section is for ideas i did not implement but did consider and wanted to work on

    - keywords on the search, i also wished to creat a keyworded search, such has if i apply a button of sort would convert to finding categorys or ingredients. Maybe i want beef today
    - randompicker a component that picks a lucky number of recipes to try out, spin the wheel for some lucky find's who knows! For those days where you just can't decide what to eat and anything goes.
    - static backend; i wanted to focus just on the front-end. I concluded it would take valuable time from other parts. 
    - Lack of direction, these are mostly my thought's, but i felt i lacked direction. Sometimes freedom can be constricting, i went to several iterations and thoughts until i rested on how i wanted to do things, not on what i wanted to do. Something for me to consider for future projects
