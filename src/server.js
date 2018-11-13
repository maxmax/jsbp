import http from 'http';
import fs from 'fs';
import {store} from 'reducers';
import AppServer from 'containers/AppServer';
import TopNavigation from 'components/navigation';

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(3003);

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : '/';

function buildHtml(req) {

  const header = '';

  const topnavigation = new TopNavigation({items: [
    {name: 'Home', to: '/'},
    {name: 'Item 2', to: '/'},
    {name: 'Item 3', to: '/'}
  ]});
  const topnavigationHTML = topnavigation.render();

  const testapp = new AppServer({store: store});
  const componentHTML = testapp.render();

  const body = componentHTML;
  const domdev = '<section><div id="rootdom"></div><button id="reloaddom">reloaddom</button></section>';

  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello</title>
          <link rel="stylesheet" href="${assetUrl}/main.css">
          ${header}
      </head>
      <body>
        ${topnavigationHTML}
        <section class="container">
          <br />
          <br />
          ${body}
          <br />
          <button data-async-app-feed-update-html>HTML Update</button>
          <br />
          <br />
          ${domdev}
          <br />
        </section>
        <br />
        <br />
        <br />
        <!--JS-->
        <script type="application/javascript" src="${assetUrl}/main.bundle.js"></script>
        <script>
          console.log('renderHTML componentHTML Buuump!', window);
        </script>
      </body>
    </html>
  `;

};
