# MARAUDER'S MAP

By Jessica Uphoff

## TECHNOLOGIES

Languages & Libraries

- Javascript
- Vue.js - Single page application
- HTML
- CSS
- Pinia - Store Management

Open API

- Harry Potter: [HP-api](http://hp-api.herokuapp.com/)

```json
{ name: "Harry Potter",
  gender: "male",
  house: "Gryffindor",
  dateOfBirth: "31-07-1980",
  wizard: true,
  ancestry: "half-blood",
  eyeColour: "green",
  hairColour: "black",
  wand: {
  wood: "holly",
  core: "phoenix feather",
  length: 11
  },
  image: "http://hp-api.herokuapp.com/images/harry.jpg"
}
```

## FEATURES

### INTERACTIVE MAP

The map acts as the main view and allows users to display information about the HP characters while interacting with a simulation of the Marauder's Map from the movies.

- SVG Paths - 18 main characters have been added to the Map with a custom SVG path dictating the animation motion.
     To Create the SVG paths I utilized [Path Editor](https://yqnn.github.io/svg-path-editor/)


```css
#SeverusSnape-move {
  offset-path: path('m 556 185 L 618 96 L 779 230 L 617 410');
  animation: one-way 25000ms infinite linear;
}

@keyframes one-way {
  0% { offset-distance: 0%; opacity: 0; }
  5% { opacity: 1; }
  85% { opacity: 1; }
  90% { offset-distance: 100%; opacity: 0; }
  100% { opacity: 0;}
}
```

### CHARACTER SHOW

Once a character is selected either from the side menu or via route params, the Show component becomes visable.

- Close: Removes params from URL and hides the wizard card.
- Flip: If the chosen character has an image from the api, the user has the option to flip over the card to see it.

### CHARACTER INDEX

Displayed on the left side of the map are buttons allowing users to open a menu with all students/staff names listed in alphabetical order. These buttons populate thecharacter's wizard card.

### ADDITIONAL FEATURES

- Loading Square: When the initial api call is made the loading animation is displayed until the characters have been added to store.

```HTML
  <main>
    <div class="load-wrap" v-if="loading">
      <Loading />
    </div>
    <div class="content-wrap" v-else >
      <RouterView />
    </div>
  </main>
```

- Home Page Animation: Utilizing css @keyframes, Users are greated with the only way to open The Marauder's Map (saying the spell 'I solemnly swear that I am up to no good'). Once clicked, DOM elements are selected and a class is added to the classlist. The new class triggers the animation.
- Dynamic URL Params: Allows the url to track what character has been selected, so the user can pick up where they left of if the page needs to refresh. 

```Javascript
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      mode : 'hash'
    },
    {
      path: '/map/:group?/:name?',
      name: 'character',
      component: MapView,
      mode : 'hash'
    }

  ]
})
```

- API Connection: Information is collected via fetch(), than organized into a hash with character name as the key. This allows for the chatacters to be found quickly and efficiently.

```Javascript
      try {
        students = await fetch('http://hp-api.herokuapp.com/api/characters/students')
          .then((res) => res.json())
      } catch (error) {
        this.errors.push(error);
      } finally {
        loadCount++;
        if (loadCount === 2) this.loading = false;
        students.forEach((student) => this.students[student.name] = student)
      }
```

##### FUTURE FEATURES & TODOS

- Search Input
- Preload map image
- Handle Errors
- Close map animation

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
