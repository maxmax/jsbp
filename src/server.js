import express  from 'express';
import {store} from 'reducers';
import AppServer from 'containers/AppServer';

const sr = express();

sr.use((req, res) => {
  //console.log('AppServer!');
  const testapp = new AppServer({store: store});
  const componentHTML = testapp.render();
  return res.end(renderHTML(componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="server-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

sr.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
