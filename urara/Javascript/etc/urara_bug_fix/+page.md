---
title: 'How to fix urara build bug while using gh-pages'
image: ''
alt: 'Urara'
created: 2024-01-24
updated: 2024-01-24
tags:
  - bug_fix
---

After deploying, page could not be loaded css files. Like that.

![image](https://github.com/lyukidon/lyukidon.github.io/assets/64675543/fefaa038-af7f-434b-9f69-7a59ae2a82eb)

I could access all the files in gh-pages branch, except "\_app" directory. So I wanted to change name of directory.

1. ~~Modified Build File~~

   What I wanted is to rename "\_app" to "app".

   This project has some build setting files

   - `tsconfig.json`
   - `svelte.config.js`
   - `urara.ts`

   I modified build setting by changing those files, but couldn't fix it.

2. Make `.nojekyll` at root of build directory, and deploy.

   I found that if `deploy` branch doesn't have `.nojekyll`, then Github Page serves page as Jekyll build.

   **gh-pages needs `.nojekyll` file**

   build script runs like `run-s tsc urara:build kit:build clean` that means

   1. `run-s` : run sequentially
   2. `tsc` : `tsc -p tsconfig.node.json`
   3. `urara:build` : `node urara.js build`
   4. `kit:build` : `cross-env NODE_OPTIONS=--max_old_space_size=7680 vite build`
   5. `clean` : `node urara.js clean`

   Before cleaning directories, I add `.nojekyll` file in build directory.

   1. make nojekyll function in `urara.ts`

      ```js
      const nojekyll = () => {
        fs.writeFile('build/.nojekyll', '')
      }
      ```

   2. Add 'nojekyll' case in switch case syntax

      ```js
      case 'nojekyll':
        nojekyll();
        break;
      ```

   3. Add that code in `package.json`

      ```json
      {
        "script": {
          "nojekyll": "node urara.js nojekyll",
          "gh-pages": "npm run build && npm run nojekyll && npx gh-pages -t -d build"
        }
      }
      ```

      _`gh-pages -t` means uploading files started with '.'_

After doing that, you can finally deploy the perfect Homepage. Enjoy :)
