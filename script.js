$(document).ready(function () {
  // Burger menu toggle
  $(".burger-menu").click(function () {
    $(".nav-links").toggleClass("active");
  });

  // Form submission handling
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "process_form.php",
      data: formData,
      success: function (response) {
        alert("Message sent successfully!");
        $("#contact-form")[0].reset();
      },
      error: function () {
        alert("An error occurred. Please try again.");
      },
    });
  });

  // Modal handling for project and skill details
  $(".project-card, .skill-card").click(function () {
    // Logic to display modal with details
    alert("Display modal with more details.");
  });
});
