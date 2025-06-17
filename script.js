document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const passwordToggle = document.querySelector('.password-toggle');
    if (passwordToggle) {
        passwordToggle.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-switch');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light-mode') {
    body.classList.add('light-mode');
    darkModeToggle.checked = false;
} else {
    body.classList.remove('light-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

    // Modals
    const basicModal = document.getElementById('basicModal');
    const formModal = document.getElementById('formModal');
    const openBasicModalBtn = document.getElementById('openBasicModal');
    const openFormModalBtn = document.getElementById('openFormModal');
    const closeButtons = document.querySelectorAll('.modal .close-button');

    function openModal(modal) {
        modal.classList.add('show');
    }

    function closeModal(modal) {
        modal.classList.remove('show');
    }

    if (openBasicModalBtn) {
        openBasicModalBtn.addEventListener('click', () => openModal(basicModal));
    }

    if (openFormModalBtn) {
        openFormModalBtn.addEventListener('click', () => openModal(formModal));
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === basicModal) {
            closeModal(basicModal);
        }
        if (event.target === formModal) {
            closeModal(formModal);
        }
    });

    // Mobile Nav
    const openMobileNavBtn = document.getElementById('openMobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const closeMobileNavBtn = document.querySelector('.close-mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (openMobileNavBtn) {
        openMobileNavBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.add('show');
        });
    }

    if (closeMobileNavBtn) {
        closeMobileNavBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('show');
        });
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('show');
        });
    });

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', function(event) {
            if (event.target === mobileNavOverlay) {
                mobileNavOverlay.classList.remove('show');
            }
        });
    }

    // Toast Messages
    const showToastBtn = document.getElementById('showToast');
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.classList.add('toast', type);
        toast.textContent = message;
        toastContainer.appendChild(toast);

        // Trigger reflow to enable transition
        void toast.offsetWidth;

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => toast.remove());
        }, duration);
    }

    if (showToastBtn) {
        showToastBtn.addEventListener('click', () => {
            showToast('This is a sample toast message!', 'success');
        });
    }
});