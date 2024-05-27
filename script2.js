(function() {

const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const userIcon = document.getElementById('user-icon');
const userName = document.getElementById('user-name');

function toggleDropdown() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function hideDropdown(event) {
    if (!event.target.closest('.user-info')) {
        dropdownMenu.style.display = 'none';
    }
}

dropdownToggle.addEventListener('click', toggleDropdown);
userIcon.addEventListener('click', toggleDropdown);
userName.addEventListener('click', toggleDropdown);
document.addEventListener('click', hideDropdown);

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', function() {
    alert('Cerrar Sesión');
    // Aquí puedes añadir la lógica para cerrar sesión
});

})();