/**
 * Savoria Bistro & Lounge - Interactive JavaScript
 * Form validation, toast notifications, and interactive UI behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Contact / Reservation Form Handling with Feedback Toast
  const contactForm = document.getElementById('restaurantContactForm');
  const alertContainer = document.getElementById('formAlertContainer');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form validation check
      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }

      const name = document.getElementById('contactName')?.value || 'Guest';
      const email = document.getElementById('contactEmail')?.value || '';
      const date = document.getElementById('contactDate')?.value || 'an upcoming date';
      const guests = document.getElementById('contactGuests')?.value || '2';

      // Show animated success banner
      if (alertContainer) {
        alertContainer.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show border-0 shadow-lg" role="alert" style="background: #1e3a29; color: #a7f3d0; border-left: 4px solid #10b981 !important;">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-check-circle-fill fs-4 text-success"></i>
              <div>
                <strong>Thank you, ${escapeHtml(name)}!</strong>
                <p class="mb-0 small">Your reservation request for <strong>${escapeHtml(guests)} guests</strong> on <strong>${escapeHtml(date)}</strong> has been received. A confirmation email has been sent to <em>${escapeHtml(email)}</em>.</p>
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Reset form
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

  // 2. Menu Quick Order / Detail Modal Trigger
  const menuButtons = document.querySelectorAll('.btn-menu-action');
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const price = btn.getAttribute('data-price');
      showQuickOrderNotification(title, price);
    });
  });

  function showQuickOrderNotification(title, price) {
    // Dynamic toast notification
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      toastContainer.style.zIndex = '1090';
      document.body.appendChild(toastContainer);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center text-bg-dark border-gold border';
    toastEl.style.borderColor = '#d4a373';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi bi-bag-check-fill text-warning fs-5"></i>
          <div>
            <strong>${escapeHtml(title)}</strong> (${escapeHtml(price)}) added to your selection!
          </div>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    toastContainer.appendChild(toastEl);
    const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
    bsToast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  }

  // Helper escape
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});

