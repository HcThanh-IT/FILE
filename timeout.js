let countdownTimeout;
let timeLeft = 600; // 10 phút = 600 giây

function startCountdown() {
    const countdownElem = document.createElement('div');
    countdownElem.classList.add('countdown');
    countdownElem.innerHTML = formatTime(timeLeft);
    document.body.appendChild(countdownElem);

    // Hàm cập nhật countdown
    function updateCountdown() {
        timeLeft--; // Giảm thời gian

        countdownElem.innerHTML = formatTime(timeLeft);

        // Cập nhật màu sắc theo phần trăm thời gian còn lại
        updateColor(countdownElem, timeLeft);

        // Nếu thời gian còn lại là 0, dừng đếm ngược và chuyển trang
        if (timeLeft <= 0) {
            countdownElem.innerHTML = '00:00'; // Đặt lại khi kết thúc
            window.location.href = 'https://coffeetogo.kasco.vn/kas/Admin/Home'; // Chuyển hướng sau khi đếm ngược xong
        } else {
            // Lên lịch gọi lại hàm updateCountdown sau 1 giây
            countdownTimeout = setTimeout(updateCountdown, 1000);
        }
    }

    // Bắt đầu đếm ngược
    updateCountdown();
}

// Hàm format để hiển thị thời gian đúng định dạng
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// Cập nhật màu sắc và màu chữ của đồng hồ đếm ngược dựa trên phần trăm thời gian
function updateColor(countdownElem, timeLeft) {
    const percentage = timeLeft / 600; // Tính phần trăm thời gian còn lại (600 giây ban đầu)

    // Thêm transition vào CSS của countdownElem để làm mượt các hiệu ứng chuyển màu
    countdownElem.style.transition = 'background 1s ease, color 1s ease'; // Thêm transition vào background và color

    if (percentage > 0.5) {
        countdownElem.style.background = 'linear-gradient(to right, #00FF00, #00FF00)';
        countdownElem.style.color = '#FFFFFF'; // Màu chữ trắng
    } else if (percentage > 0.25) {
        countdownElem.style.background = 'linear-gradient(to right, #FFFF00, #FFFF00)';
        countdownElem.style.color = '#FF0000'; // Màu chữ đỏ
    } else {
        countdownElem.style.background = 'linear-gradient(to right, #FF0000, #FF0000)';
        countdownElem.style.color = '#FFFF00'; // Màu chữ vàng
    }
}
