$(".form").on("submit", function (e) {
  e.preventDefault();
  const formData = JSON.stringify($(this).serializeArray());

  $(".form-data").text(formData);

  $.get(
    "./response.json",
    formData,
    function (response) {
      alert(JSON.stringify(response));
    },
    "json"
  );
});