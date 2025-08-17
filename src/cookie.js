function setCookie(name, value, days = 7) {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${encodeURIComponent(name)}=`);
  if (parts.length === 2)
    return decodeURIComponent(parts.pop().split(";").shift());
  return null;
}

function checkCookie(name) {
  return getCookie(name) !== null;
}

const reviewForm = document.querySelector(".review form");
const usernameInput = document.getElementById("username");
const ratingInput = document.getElementById("rating-value");
const messageInput = document.getElementById("message");

reviewForm.addEventListener("submit", function (e) {
  setCookie("review_username", usernameInput.value);
  setCookie("review_rating", ratingInput.value);
  setCookie("review_message", messageInput.value);
  // ...your submit logic (e.g., AJAX, show thank you, etc.)
});
