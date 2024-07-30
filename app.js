
document.addEventListener('DOMContentLoaded', (event) => {
    const inputElement = document.getElementById('search_area');
    inputElement.addEventListener('input', function() {
        alert(this.value)


    });
});