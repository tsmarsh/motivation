document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.poster p');
    items.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});
