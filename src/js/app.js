new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '.dot',
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

new Glider(document.querySelector('.glider2'), {
  slidesToShow: 3,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});