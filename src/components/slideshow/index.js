// Gallery
// Example
// InitSlideshow by
// Slideshow on data-slideshow by querySelectorAll
// const slideshow = new Slideshow({element: "[data-slideshow]"});
// slideshow.initSlideshow();
// Render
// const gallerydata = {
//  items: [
//    {src: 'https://picsum.photos/1200/400?image=1045', title: 'What is Lorem Ipsum?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
//    {src: 'https://picsum.photos/1200/400?image=1078', title: 'Why do we use it?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
//    {src: 'https://picsum.photos/1200/400?image=1018', title: 'Where does it come from?', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
//  ]
// }
// const slideshowapp = new Slideshow(gallerydata);
// const slideshowHTML = slideshowapp.render();

import PropTypes from 'prop-types';

class Slideshow {
  constructor(props) {
    this.props = props;
  }

  initSlideshow() {
    const {element} = this.props;
    slideshowElements(element);
  }

  render() {
    this.slideshow = getSlideshow(this.props.items)
    return this.slideshow;
  }

}

// Sample render from props
const getSlideshow = (items = []) => {

  const itemsList = items.map(function(item) {
    return `<div class="slideshow__item">
      <img class="slideshow__item__img" src="${item.src}">
      <div class="slideshow__item__caption">
        <h2>${item.title}</h2>
        <p>${item.text}</p>
      </div>
    </div>`;
  });

  const itemsWrapper = `
    <section class="slideshow" data-slideshow>
      ${itemsList.join('')}
      <button class="slideshow__prev">&#10094;</button>
      <button class="slideshow__next">&#10095;</button>
    </section>
  `;

  return itemsWrapper;
}

// Int slideshow

const slideshowElements = (element) => {
  var elements = document.querySelectorAll(element);
  for (var i = 0; i < elements.length; i++) {
    slideshowElement(elements[i]);
  }
}

// Current gallery

const slideshowElement = (element) => {

  let slideIndex = 0;
  const items = element.getElementsByClassName("slideshow__item");
  const prev = element.getElementsByClassName("slideshow__prev");
  const next = element.getElementsByClassName("slideshow__next");

  showContainer({
    items: items,
    slide: slideIndex
  });

  prev[0].onclick = function() {
    if (slideIndex < 1) {
      slideIndex = items.length - 1;
    } else {
      slideIndex += -1;
    }
    showContainer({items: items, slide: slideIndex});
  }

  next[0].onclick = function() {
    if (slideIndex + 1 > items.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex += 1;
    }
    showContainer({items: items, slide: slideIndex});
  }
}

// showContainer

const showContainer = (props) => {
  const {items, slide} = props;
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  items[slide].style.display = "block";
}

Slideshow.propTypes = {
  element: PropTypes.string.isRequired,
}

export default Slideshow;
