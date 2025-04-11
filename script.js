document.getElementById("collabForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("collabForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
});
