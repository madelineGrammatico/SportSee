# SportSee
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.2",
    "recharts": "^2.5.0",
    "typedoc": "^0.24.7"
    "typescript": "^4.9.5",
    "vite": "^4.1.0"
## 1 Installation
- fork the repository
- clone it on your computer
- run `npm install` commande or `yarn install` commande on the folder to install the dependencies.

## 2 Starting the projet
### 2.1 with mocks
Open the project in a code editor.
Make sure to comment code on the line 2, and the lines 56 to 76 
on the file src/loaders/dashboardLoader.tsx

And uncommend the line 3, and the line 78 to 99 
on the file src/loaders/dashboardLoader.tsx

You can run `npm run dev` or `yarn run dev` comande on the console,
you code will run on http://localhost:5173/

### 2.2 with an API backend
#### a) installation of API backend
you can fork the API repository in the follow links:
- in my personal github (it's a fork):
  https://github.com/madelineGrammatico/P12-front-end-dashboard
- in Openclassroms github:
  https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

clone it on your computer and follow the instructions in the readme of its repository

You can run `npm run dev` or `yarn run dev` comande on the console,
you code will run on http://localhost:3000

#### b) config the front
Open the project in a code editor.
Make sure to comment code on the line 3, and the lines 78 to 99 
on the file src/loaders/dashboardLoader.tsx

And uncommend the line 2, and the line 56 to 76 
on the file src/loaders/dashboardLoader.tsx

You can run `npm run dev` or `yarn run dev` comande on the console,
you code will run on http://localhost:5173/

## 3 Documentation
at docs/index.html you can find the typeDoc.

update the documentation if you had changes in the project run `npm run typeDoc`
