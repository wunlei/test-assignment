const modal = new bootstrap.Modal(".modal");
modal.show();

$(".btn-block-hide").on("click", function () {
  $(".block-hide").toggle();
});

$(".btn-block-switch").on("click", function () {
  const children = $(".row-middle").children();

  children[0].before(children[1]);
});
