document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('successMessage').style.display = 'block';
    this.reset();
  });
  