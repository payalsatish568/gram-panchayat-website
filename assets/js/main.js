// Basic interactions: feedback form + simple console log.

document.addEventListener('DOMContentLoaded', function () {
  console.log('Gram Panchayat site loaded');

  var form = document.getElementById('feedbackForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Basic client-side confirmation; later you can post to server or email.
      alert('धन्यवाद — आपला फीडबॅक प्राप्त झाला आहे. / Thank you — your feedback has been received.');
      form.reset();
    });
  }
});
