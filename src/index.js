$(".stats_wrapper").each(function (index) {
  let items = $(this).find(".stats_item");
  let triggers = $(this).find(".stats_trigger");

  function makeItemActive(index) {
    items.removeClass("is-active");
    let activeItem = items.eq(index).addClass("is-active");
    activeItem.find(".stats_number");
  }
  makeItemActive(0);

  triggers.each(function (index) {
    let relatedItem = items.eq(index);
    let relatedProgressBar = relatedItem.find(".stats_line");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top top",
        end: "bottom top",
        scrub: true,
        onToggle: ({ self, isActive }) => {
          if (isActive) {
            makeItemActive(index);
          }
        }
      }
    });
    tl.to(relatedProgressBar, { width: "100%", ease: "none" });
  });
});
