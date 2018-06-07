var blocks = $('.block__reveal'),
    menuButton = $('.menu'),
    menuLinks = $('.nav__link'),
		menuNav = $('.nav__container');

var blockAnimation = new TimelineMax({
  paused: true,
  reversed: true
});

blockAnimation
  .staggerTo (blocks, 0.6, {
    width: '27%',
    ease: Circ.easeInOut
  }, 0.05)

  .staggerFromTo (menuLinks, 0.6, {
    y: 20,
    autoAlpha: 0,
    ease: Circ.easeInOut }, {
      y: 0,
      autoAlpha: 1
  }, 0.2)

menuButton.click(function(e) {
  blockAnimation.reversed() ?
    blockAnimation.play() : blockAnimation.reverse();
    $('.nav__container').toggleClass('vis');
});
