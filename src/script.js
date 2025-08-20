const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
mobileMenu.addEventListener("mouseenter", () => {
  mobileMenu.classList.add("hidden");
});
mobileMenu.addEventListener("mouseleave", () => {
  mobileMenu.classList.remove("hidden");
});
// Service Tabs
const serviceTabs = document.querySelectorAll(".service-tab");
const serviceImage = document.getElementById("service-image");
const serviceTitle = document.getElementById("service-title");
const serviceDescription = document.getElementById("service-description");

const services = [
  {
    title: "Home Cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    description:
      "Our comprehensive home cleaning service includes dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, and more. We customize our approach to meet your specific needs and preferences.",
  },
  {
    title: "Office Cleaning",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    description:
      "Keep your workplace pristine and professional with our commercial cleaning services. We work around your schedule to ensure minimal disruption to your business operations.",
  },
  {
    title: "Restaurant Cleaning",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    description:
      "Specialized cleaning for food service establishments, ensuring compliance with health regulations. We focus on kitchen deep cleaning, dining area maintenance, and complete sanitization.",
  },
  {
    title: "School Cleaning",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    description:
      "Creating clean and healthy learning environments for students and staff. Our school cleaning services include classroom sanitization, cafeteria cleaning, and playground maintenance.",
  },
  {
    title: "Laundry Services",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=400&fit=crop",
    description:
      "Professional laundry and dry cleaning services with pickup and delivery options. We handle everything from everyday clothing to delicate fabrics with the utmost care.",
  },
];

serviceTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    serviceTabs.forEach((t) => {
      t.classList.remove("active");
      t.classList.remove("border-customPurple-500");
      t.classList.add("border-transparent");
    });

    // Add active class to clicked tab
    tab.classList.add("active");
    tab.classList.remove("border-transparent");
    tab.classList.add("border-customPurple-500");

    // Update service details
    const service = services[index];
    serviceImage.src = service.image;
    serviceTitle.textContent = service.title;
    serviceDescription.textContent = service.description;
  });
});

// Set first tab as active
serviceTabs[0].click();

// Initialize Slick Slider
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    autoplaySpeed: 1000,
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      mobileMenu.classList.add("hidden");
    }
  });
});

// Active Navigation Link
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
// Review Section Toggle
const reviewButton = document.querySelector(".review-button");

reviewButton.addEventListener("click", () => {
  const reviewSection = document.querySelector(".review");
  reviewSection.classList.toggle("h-0");
  reviewSection.classList.toggle("py-20");
  reviewSection.classList.toggle("overflow-hidden");
});

const stars = document.querySelectorAll("#star-rating .star");
const ratingValue = document.getElementById("rating-value");
let currentRating = 0;

function highlightStars(rating) {
  stars.forEach((star, idx) => {
    star.classList.toggle("text-yellow-400", idx < rating);
    star.classList.toggle("text-gray-300", idx >= rating);
  });
}

stars.forEach((star, idx) => {
  star.addEventListener("mouseenter", () => highlightStars(idx + 1));
  star.addEventListener("mouseleave", () => highlightStars(currentRating));
  star.addEventListener("click", () => {
    currentRating = idx + 1;
    ratingValue.value = currentRating;
    highlightStars(currentRating);
  });
});

// Initial state
highlightStars(0);

