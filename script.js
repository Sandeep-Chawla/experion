$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#nav").addClass("bg-[#141b23]");
    } else {
      $("#nav").removeClass("bg-[#141b23]");
    }
    $("#img-click2").removeClass('enlargeImage')
    $("#img-click2 div").addClass('flex')
    $("#img-click1").removeClass('enlargeImage')
    $("#img-click1 div").addClass('flex')
  });
  $("#menu").click(() => {
    $("aside").toggleClass("-translate-x-96");
  });
  $(".openForm").click(() => {
    $("#form-pop").removeClass("hidden");
    $("#form-pop").addClass("flex");
    gsap.from("#form-pop", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  });
  $("#close").click(() => {
    $("#form-pop").removeClass("flex");
    $("#form-pop").addClass("hidden");
  });
  $("#closs").click(() => {
    $("#menuside").addClass("-translate-x-96");
  });
  $("#img-click1").click(()=>{
    $("#img-click1").toggleClass('enlargeImage')
    $("#img-click1 div").toggle()
});
  $("#img-click2").click(()=>{
    $("#img-click2").toggleClass('enlargeImage')
    $("#img-click2 div").toggle()
});


  $("#myForm1").submit(function (event) {
    event.preventDefault();
    $("#name-error1").text("");
    $("#mobile-error1").text("");
    $("#mobile-error1").removeClass("bounce");
    $("#name-error1").removeClass("bounce");
    var isValid = true;
    var inputVal = $("#mobile1").val();
    if ($("#name1").val().length < 3) {
      $("#name-error1").text("Please Enter a Valid Name");
      $("#name-error1").addClass("bounce");
      isValid = false;
    }
    if ($("#mobile1").val().length < 10) {
      $("#mobile-error1").text(
        "Mobile number must be at least 10 characters long."
      );
      $("#mobile-error1").addClass("bounce");
      isValid = false;
    }
    if ($("#mobile1").val().length > 13) {
      $("#mobile-error1").text(
        "Mobile number must be at least 10 characters long."
      );
      $("#mobile-error1").addClass("bounce");
      isValid = false;
    }
    var isNumeric = isNaN(inputVal);
    if (isNumeric) {
      $("#mobile-error1").text("Enter a valid number");
      $("#mobile-error1").addClass("bounce");
      isValid = false;
    }
    if (isValid) {
      // form is valid, submit it via AJAX
      $("#submit1").prop("disabled", true);
      $("#mobile-error1").text("");
      $("#name-error1").text("");
      Swal.fire({
            title: "Thank You! " + $("#name").val(),
            text: "Your inquiry has been received, and we will respond shortly",
            icon: "success",
          });
      $.ajax({
        type: "POST",
        url: "process_form.php",
        data: $(this).serialize(),
        success: function (data) {
          // handle success response
          console.log("Form submitted successfully: " + data);
          $("#myForm")[0].reset();
          if(data =='success'){
          }
          else{
            Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
          }
          $("#mobile1").val("");
          $("#name1").val("");
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // handle error response
          console.error(
            "Form submission failed: " + textStatus + ", " + errorThrown
          );
          Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
        },
      });
    }
  });
  $("#myForm2").submit(function (event) {
    event.preventDefault();
    $("#name-error2").text("");
    $("#mobile-error2").text("");
    $("#mobile-error2").removeClass("bounce");
    $("#name-error2").removeClass("bounce");
    var isValid = true;
    var inputVal = $("#mobile2").val();
    if ($("#name2").val().length < 3) {
      $("#name-error2").text("Enter a valid name.");
      $("#name-error2").addClass("bounce");
      isValid = false;
    }
    if ($("#mobile2").val().length < 10) {
      $("#mobile-error2").text(
        "Mobile number must be at least 10 characters long."
      );
      $("#mobile-error2").addClass("bounce");
      isValid = false;
    }
    if ($("#mobile2").val().length > 13) {
      $("#mobile-error2").text(
        "Mobile number must be at least 10 characters long."
      );
      $("#mobile-error2").addClass("bounce");
      isValid = false;
    }
    var isNumeric = isNaN(inputVal);
    if (isNumeric) {
      $("#mobile-error2").text("Enter a valid number");
      $("#mobile-error2").addClass("bounce");
      isValid = false;
    }
    if (isValid) {
      // form is valid, submit it via AJAX
      $("#submit2").prop("disabled", true);
      $("#name-error2").text("");
      $("#mobile-error2").text("");
      $("#close").click();
      Swal.fire({
              title: "Thank You! " + $("#name").val(),
              text: "Your inquiry has been received, and we will respond shortly",
              icon: "success",
            });
      $.ajax({
        type: "POST",
        url: "process_form.php",
        data: $(this).serialize(),
        success: function(data) {
          // handle success response
          console.log("Form submitted successfully: " + data);
          $("#myForm")[0].reset();
          if(data =='success'){
          }
          else{
            Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
          }
      $("#mobile2").val("");
      $("#name2").val("");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // handle error response
          console.error("Form submission failed: " + textStatus + ", " + errorThrown);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
        }
      });
    }
  });
  $("#myForm3").submit(function (event) {
    event.preventDefault();
    $("#name-error3").text("");
    $("#mobile-error3").text("");
    $("#mobile-error3").removeClass("bounce");
    $("#name-error3").removeClass("bounce");
    var isValid = true;
    var inputVal = $("#mobile3").val();
    if ($("#name3").val().length < 3) {
      $("#name-error3").text("Enter a valid name.");
      $("#name-error3").addClass("bounce");
      isValid = false;
    }
    if ($("#mobile3").val().length < 10) {
      $("#mobile-error3").text(
        "Mobile number must be at least 10 characters long."
      );
      $("#mobile-error3").addClass("bounce");
      isValid = false;
    }
    if ($("#mobile3").val().length > 13) {
      $("#mobile-error3").text(
        "Mobile number must be at least 10 characters long."
      );
      $("#mobile-error3").addClass("bounce");
      isValid = false;
    }
    var isNumeric = isNaN(inputVal);
    if (isNumeric) {
      $("#mobile-error3").text("Enter a valid number");
      $("#mobile-error3").addClass("bounce");
      isValid = false;
    }
    if (isValid) {
      // form is valid, submit it via AJAX
      $("#submit3").prop("disabled", true);
      $("#name-error3").text("");
      $("#mobile-error3").text("");
      $("#close").click();
      Swal.fire({
              title: "Thank You! " + $("#name").val(),
              text: "Your inquiry has been received, and we will respond shortly",
              icon: "success",
            });
      $.ajax({
        type: "POST",
        url: "process_form.php",
        data: $(this).serialize(),
        success: function(data) {
          // handle success response
          console.log("Form submitted successfully: " + data);
          $("#myForm")[0].reset();
          if(data =='success'){
          }
          else{
            Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
          }
      $("#mobile3").val("");
      $("#name3").val("");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // handle error response
          console.error("Form submission failed: " + textStatus + ", " + errorThrown);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
        }
      });
    }
  });
});
