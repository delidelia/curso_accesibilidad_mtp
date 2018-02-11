// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the contact form.
  // It has the name attribute "contact"
  $("form[name='contact']").validate({
    
    errorClass: 'error-form-contact',
    
    errorElement: "strong",

    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      fname: "required",
      lname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      message: {
        required: true,
        minlength: 10,
        maxlength: 255,
      }
    },
    // Specify validation error messages
    messages: {
      fname: "Please enter your firstname",
      lname: "Please enter your lastname",
      message: {
        required: "Please provide a message",
        minlength: "The message must be at least 10 characters long",
        maxlength: "The message exceeds the size limit of 255 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});