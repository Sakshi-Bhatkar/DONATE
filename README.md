1 npm create vite@latest
2 project name: Donate
3 select framework: react
4 select varient: JS
5 cd Donate
6 npm i vite
7 npm install -D tailwindcss postcss autoprefixer
8 npx tailwindcss init -p

9 In tailwind.config.js Add: 
   /** @type {import('tailwindcss').Config} */
        export default {
           content: [
             "./index.html",
             "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
            extend: {},
            },
            plugins: [],
            }

10 In Index.css add:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

11 npm run dev
12 All code

13 Server Installation:
create a new folder and go inside it and run these cmds:

npm init -y
npm i axios cors crypto express helmet





