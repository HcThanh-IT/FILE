function showIframe() {
  document.getElementById("iframeContainer").style.display = "block";
}
function closeIframe() {
  document.getElementById("iframeContainer").style.display = "none";
}
function showIframe1() {
  document.getElementById("iframeContainer1").style.display = "block";
}
function closeIframe1() {
  document.getElementById("iframeContainer1").style.display = "none";
}

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const check = document.getElementById("customCheckbox");
  if (check.checked) {
    if (isValidLogin(usernameValue, passwordValue)) {
      let iframeToShow;
      if (usernameValue === "ASDFG" && passwordValue === "123456") {
        iframeToShow = document.getElementById("spreadsheetDDT");
      } else if (usernameValue === "QWERT" && passwordValue === "123456") {
        iframeToShow = document.getElementById("spreadsheetKD");
      }
      if (iframeToShow) {
        iframeToShow.style.display = "block";
        startCountdown();
        username.value = "";
        password.value = "";
        username.blur();
        password.blur();
      }
    } else {
      Swal.fire({
        title: "Thông tin đăng nhập không chính xác!",
        text: "Vui lòng kiểm tra lại username và password.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  } else {
    Swal.fire({
      title: "Không có yêu cầu đăng nhập!",
      text: "Vui lòng kiểm tra lại.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
});

function isValidLogin(username, password) {
  return (
    (username === "ASDFG" && password === "123456") ||
    (username === "QWERT" && password === "123456")
  );
}

setTimeout(function () {
  window.location.href = "https://coffeetogo.kasco.vn/kas/Admin/Home";
}, 600000);
