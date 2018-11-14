import express  from 'express';
import {store} from './reducers';
import TopNavigation from './components/navigation';
import Slideshow from './components/slideshow';
import AppServer from './containers/AppServer';

const sr = express();

sr.use((req, res) => {

  const topnavigation = new TopNavigation({items: [
    {name: 'Home', to: '/'},
    {name: 'Item 2', to: '/'},
    {name: 'Item 3', to: '/'}
  ]});
  const topnavigationHTML = topnavigation.render();

  //
  const gallerydata = {
    items: [
      {src: 'https://picsum.photos/1200/400?image=1045', title: 'What is Lorem Ipsum?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
      {src: 'https://picsum.photos/1200/400?image=1078', title: 'Why do we use it?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
      {src: 'https://picsum.photos/1200/400?image=1018', title: 'Where does it come from?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
      {src: 'https://picsum.photos/1200/400?image=951', title: 'Where does it come from?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
    ]
  }
  const slideshowapp = new Slideshow(gallerydata);
  const slideshowHTML = slideshowapp.render();
  //

  const appserver = new AppServer({store: store});
  const componentHTML = appserver.render();

  return res.end(renderHTML(topnavigationHTML, slideshowHTML, componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : 'https://maxmax.github.io/jsbp/';

function renderHTML(topnavigationHTML, slideshowHTML, componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello</title>
          <link rel="stylesheet" href="${assetUrl}/main.css">
      </head>
      <body>
        ${topnavigationHTML}
        ${slideshowHTML}
        <br />
        <br />
        <section class="container">
          ${componentHTML}
        </section>
        <br />
        <button data-async-app-feed-update-html>HTML Update</button>
        <br />
        <br />
        <section><div id="rootdom"></div><button id="reloaddom">reloaddom</button></section>
        <br />
        <br />
        <script type="application/javascript" src="${assetUrl}/main.bundle.js"></script>
        <script>
          console.log('Bump!', window);
        </script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

sr.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
