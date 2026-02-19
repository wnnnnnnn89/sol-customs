// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Automatic Theme Switch based on South Korea Time (UTC+9)
function applyAutomaticTheme() {
    const now = new Date();
    // Get current time in South Korea (UTC+9)
    const koreaTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Seoul"}));
    const hours = koreaTime.getHours();

    // Set Dark Mode between 18:00 (6 PM) and 06:00 (6 AM)
    if (hours >= 18 || hours < 6) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// Apply theme on load
applyAutomaticTheme();

// Optional: Re-check every minute to handle time transitions while the page is open
setInterval(applyAutomaticTheme, 60000);
