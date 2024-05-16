document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenuButton = document.querySelector('.fr-translate__btn');
    const languageAbbrSpan = dropdownMenuButton.querySelector('.language-abbr');
    const languageFullSpan = dropdownMenuButton.querySelector('.fr-hidden-lg');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Function to set language to Français
    function setToFrench() {
        languageAbbrSpan.textContent = 'FR';
        languageFullSpan.textContent = ' - Français';
        localStorage.setItem('selectedLang', 'Français');
        localStorage.setItem('selectedAbbr', 'FR');
        dropdownItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-lang') === 'Français') {
                item.classList.add('active');
            }
        });
    }

    // Load the selected language from localStorage or default to 'FR' and 'Français'
    const savedLang = localStorage.getItem('selectedLang') || 'Français';
    const savedAbbr = localStorage.getItem('selectedAbbr') || 'FR';
    languageAbbrSpan.textContent = savedAbbr;
    languageFullSpan.textContent = ` - ${savedLang}`;

    // Event listener for logo click to set language to Français
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', setToFrench);
    }

    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the default link behavior

            const selectedLang = this.getAttribute('data-lang');
            const selectedAbbr = this.getAttribute('data-abbr');
            languageAbbrSpan.textContent = selectedAbbr;
            languageFullSpan.textContent = ` - ${selectedLang}`;

            // Save the selected language and abbreviation to localStorage
            localStorage.setItem('selectedLang', selectedLang);
            localStorage.setItem('selectedAbbr', selectedAbbr);

            // Update active class
            dropdownItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            // Navigate to the language page
            window.location.href = this.getAttribute('href');
        });
    });
});

// Téléphone
function callPhoneNumber() {
    // Replace '1234567890' with the desired phone number
    window.location.href = 'tel:+33 02 40 74 66 82';
}
function sendEmail() {
    window.location.href = 'mailto:ul.nantes@croix-rouge.fr';
}