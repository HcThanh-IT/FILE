
        document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    // Kiểm tra thông tin đăng nhập
    if (isValidLogin(usernameValue, passwordValue)) {
        let iframeToShow;
        if (usernameValue === 'ASDFG' && passwordValue === '123456') {
            iframeToShow = document.getElementById('spreadsheetDDT');
        } else if (usernameValue === 'QWERT' && passwordValue === '123456') {
            iframeToShow = document.getElementById('spreadsheetKD');
        }

        // Hiển thị iframe tương ứng
        if (iframeToShow) {
            iframeToShow.style.display = 'block';
            startCountdown(); // Bắt đầu đếm ngược

            // Xóa thông tin đăng nhập
            username.value = '';
            password.value = '';
            username.blur();
            password.blur();
        }
    } else {
        // Thông báo lỗi khi đăng nhập không hợp lệ
        Swal.fire({
            title: 'Thông tin đăng nhập không chính xác!',
            text: 'Vui lòng kiểm tra lại username và password.',
            icon: 'error',
            confirmButtonText: 'OK',
        });
    }
});

// Kiểm tra tính hợp lệ của username và password
function isValidLogin(username, password) {
    return (username === 'ASDFG' && password === '123456') ||
           (username === 'QWERT' && password === '123456');
}

