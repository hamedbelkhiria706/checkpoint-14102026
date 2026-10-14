/**
 * Wanderlust Horizons - Travel Agency Interactive JavaScript
 * Form validation, dynamic modals, and tour interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Destination Modal Data
  const destinationData = {
    santorini: {
      title: "Santorini & The Aegean Isles, Greece",
      duration: "7 Days / 6 Nights",
      price: "From $1,899 / person",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
      description: "Experience the magic of whitewashed cliffside villages perched above the sapphire Aegean Sea. Watch breathtaking sunsets from Oia, sail inside the volcanic caldera on a luxury catamaran, and indulge in world-class Assyrtiko wine tastings at ancient vineyards.",
      highlights: [
        "Private sunset catamaran cruise with chef-prepared seafood dinner",
        "Guided exploration of Akrotiri prehistoric ruins & red beach",
        "Traditional Aegean cooking class in an authentic village",
        "Stay at cliffside cave suite with private infinity plunge pool"
      ]
    },
    kyoto: {
      title: "Kyoto & Mount Fuji Cultural Immersion, Japan",
      duration: "10 Days / 9 Nights",
      price: "From $2,499 / person",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
      description: "Step into centuries of Zen tranquility, gilded temples, and bamboo forests. Journey on high-speed Shinkansen bullet trains, partake in authentic private tea ceremonies, and relax in healing mineral onsen baths overlooking Mount Fuji.",
      highlights: [
        "Exclusive early-access morning tour of Fushimi Inari-taisha",
        "Traditional multi-course Kaiseki dinner with a Geiko artisan",
        "Bullet train ride past Mt. Fuji with private lake cruise",
        "Authentic ryokan stay featuring private open-air hot springs"
      ]
    },
    swiss: {
      title: "Swiss Alps & Glacier Express Adventure, Switzerland",
      duration: "8 Days / 7 Nights",
      price: "From $2,850 / person",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
      description: "Ascend into pristine alpine wonderlands. Ride the legendary panoramic Glacier Express train through snowcapped mountain passes, gaze upon the iconic Matterhorn in Zermatt, and savor artisanal Swiss chocolates and fondue in traditional timber chalets.",
      highlights: [
        "First-class panoramic Glacier Express scenic rail journey",
        "Gornergrat cogwheel train summit excursion facing the Matterhorn",
        "Guided alpine wildflower & glacier hiking with local naturalist",
        "Luxury mountain lodge stay with panoramic spa access"
      ]
    },
    serengeti: {
      title: "Serengeti & Ngorongoro Big Five Safari, Tanzania",
      duration: "9 Days / 8 Nights",
      price: "From $3,650 / person",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      description: "Witness nature’s greatest spectacle across endless golden plains. Track the Great Migration, encounter lions, elephants, and leopards in their untamed habitats, and take flight on an unforgettable sunrise hot-air balloon safari.",
      highlights: [
        "Sunrise hot-air balloon flight followed by champagne bush breakfast",
        "Daily private 4x4 game drives with certified wildlife trackers",
        "Full-day expedition inside the UNESCO Ngorongoro Crater",
        "Eco-luxury canvas tented suites under the African night sky"
      ]
    },
    banff: {
      title: "Banff & The Canadian Rocky Mountains, Canada",
      duration: "6 Days / 5 Nights",
      price: "From $1,550 / person",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1000&q=80",
      description: "Explore emerald-green glacial waters and towering jagged summits along the legendary Icefields Parkway. Canoe across Lake Louise, trek to alpine tea houses, and spot grizzly bears and elk in their natural sanctuary.",
      highlights: [
        "Private canoe rental & morning reflection tour on Lake Louise",
        "Columbia Icefield skywalk & glacier explorer vehicle trek",
        "Scenic helicopter flight over the Three Sisters mountain range",
        "Historic Fairmont Banff Springs luxury castle stay"
      ]
    },
    amalfi: {
      title: "Amalfi Coast & Capri Island Odyssey, Italy",
      duration: "7 Days / 6 Nights",
      price: "From $2,100 / person",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
      description: "Bask under the Mediterranean sun along glamorous pastel cliffs. Cruise to the mythical Blue Grotto of Capri on a private wooden gozzo boat, stroll through fragrant Sorrento lemon groves, and savor handcrafted limoncello and coastal seafood.",
      highlights: [
        "Private skippered gozzo boat charter around Capri & Faraglioni",
        "Limoncello tasting & organic lemon grove estate walking tour",
        "Scenic drive along the cliffside Positano & Ravello coastline",
        "Cliff-perched boutique hotel with panoramic Mediterranean views"
      ]
    }
  };

  // Modal element references
  const destinationModalEl = document.getElementById('destinationModal');
  const modalTitle = document.getElementById('modalDestTitle');
  const modalDuration = document.getElementById('modalDestDuration');
  const modalPrice = document.getElementById('modalDestPrice');
  const modalImg = document.getElementById('modalDestImg');
  const modalDesc = document.getElementById('modalDestDesc');
  const modalHighlights = document.getElementById('modalDestHighlights');
  const modalInquireBtn = document.getElementById('modalDestInquireBtn');

  // Handle Learn More Buttons
  document.querySelectorAll('[data-destination-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-destination-key');
      const data = destinationData[key];
      if (data && destinationModalEl) {
        modalTitle.textContent = data.title;
        modalDuration.textContent = data.duration;
        modalPrice.textContent = data.price;
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalDesc.textContent = data.description;

        // Populate highlights
        modalHighlights.innerHTML = data.highlights
          .map(h => `<li class="mb-2"><i class="bi bi-check2-circle text-primary me-2"></i>${escapeHtml(h)}</li>`)
          .join('');

        // Wire Inquire button to pre-select destination in contact form
        if (modalInquireBtn) {
          modalInquireBtn.onclick = () => {
            const destSelect = document.getElementById('travelDestination');
            if (destSelect) {
              for (let option of destSelect.options) {
                if (option.value.toLowerCase().includes(key) || data.title.toLowerCase().includes(option.value.toLowerCase())) {
                  option.selected = true;
                  break;
                }
              }
            }
            // Close modal
            const bsModal = bootstrap.Modal.getInstance(destinationModalEl);
            if (bsModal) bsModal.hide();

            // Scroll to contact form
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          };
        }

        // Show modal
        const modal = new bootstrap.Modal(destinationModalEl);
        modal.show();
      }
    });
  });

  // Handle Tours "View Details" links
  document.querySelectorAll('.btn-tour-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourTitle = btn.getAttribute('data-tour-title') || 'Featured Tour Package';
      const destSelect = document.getElementById('travelDestination');
      if (destSelect) {
        // Look for matching option
        for (let option of destSelect.options) {
          if (tourTitle.toLowerCase().includes(option.value.toLowerCase())) {
            option.selected = true;
            break;
          }
        }
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 2. Contact Form Handling & Interactive Confirmation
  const travelForm = document.getElementById('travelContactForm');
  const formAlertContainer = document.getElementById('travelFormAlert');

  if (travelForm) {
    travelForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!travelForm.checkValidity()) {
        e.stopPropagation();
        travelForm.classList.add('was-validated');
        return;
      }

      const name = document.getElementById('travelName')?.value || 'Valued Traveler';
      const email = document.getElementById('travelEmail')?.value || '';
      const destSelect = document.getElementById('travelDestination');
      const destination = destSelect?.options[destSelect.selectedIndex]?.text || 'your chosen destination';

      if (formAlertContainer) {
        formAlertContainer.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show border-0 shadow-lg p-4" role="alert" style="background-color: #ecfdf5; border-left: 5px solid #10b981 !important;">
            <div class="d-flex align-items-start gap-3">
              <i class="bi bi-send-check-fill text-success fs-2"></i>
              <div>
                <h5 class="alert-heading text-success mb-1">Your Travel Inquiry Has Been Sent!</h5>
                <p class="mb-1 text-dark">
                  Dear <strong>${escapeHtml(name)}</strong>, thank you for reaching out regarding <strong>${escapeHtml(destination)}</strong>.
                </p>
                <small class="text-secondary">
                  Our destination specialist will email your custom itinerary and pricing quote to <strong>${escapeHtml(email)}</strong> within 24 hours.
                </small>
              </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        formAlertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      travelForm.reset();
      travelForm.classList.remove('was-validated');
    });
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});

