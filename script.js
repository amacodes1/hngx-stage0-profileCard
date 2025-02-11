function updateUTCTime() {
  document.getElementById(
    "utcTime"
  ).innerText = `UTC Time: ${new Date().toUTCString()}`;
}
updateUTCTime();
setInterval(updateUTCTime, 1000);
