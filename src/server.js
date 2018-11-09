import http from 'http';
import {store} from 'reducers';
import AppServer from 'containers/AppServer';

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

  const testapp = new AppServer({store: store});
  const componentHTML = testapp.render();
  // console.log('componentHTML!', componentHTML);
  // return res.end(renderHTML(componentHTML));

  var header = '';
  var body = componentHTML;

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
        <section class="container">
          <br />
          <br />
          ${body}
        </div>
        <br>
        <button data-async-app-feed-update-html>HTML Update</button>
        <br />
        <br />
        <br />
        <br />
        <!--JS-->
        <script type="application/javascript" src="${assetUrl}/main.bundle.js"></script>
        <script>
          console.log('renderHTML componentHTML Buuuump!', window);
        </script>
      </body>
    </html>
  `;

};
