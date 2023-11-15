# Guide to test in browser

1. clone LlamaIndexTS
2. split terminal, one in packges/core the other in examples/browser_example
3. add your blindchat jwt token in examples/browser_example/src/index.js (DO NOT PUSH IT !)
4. in packages/core:
```
npm i
npm run old-build # optional, run it once to generate the .d.ts file
npm run build # wepback bundling, creates dist/browser.bundle.js
```
4. in examples/browser_example
```
npm i
npm run build # webpack bundling, creates dist/main.bundle.js
cd dist
python3 -m http.server # to serve dist/index.html (which imports main.bundle.js)
```
5. Open browser to localhost:8000, select a text file (e.g abramov), enter a question, wait a bit and the answer should appear below!
