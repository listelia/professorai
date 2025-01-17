document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    
    // Show cursor when mouse enters the window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    // Hide cursor when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    // Move cursor with mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
    });

    // Close alert function
    window.closeAlert = function() {
        const alert = document.getElementById('previewAlert');
        alert.style.opacity = '0';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 500);
    }
}); 