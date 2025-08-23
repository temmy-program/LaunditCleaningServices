
let slides = [
  {
  image: "https://plus.unsplash.com/premium_photo-1663047397245-2ddad26c5dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwY2xlYW5pbmclMjBzZXJpdmVjfGVufDB8fDB8fHww",
  title: "Advanced Floor Care",
  subtitle: "Experience spotless, polished floors with lasting brilliance.",
  button: "Request a Free Quote"
},
{
  image: "https://images.unsplash.com/photo-1610276173132-c47d148ab626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsZWFufGVufDB8fDB8fHww",
  title: "Commercial Cleaning Excellence",
  subtitle: "Professional solutions that elevate workplace hygiene and image.",
  button: "Schedule a Service"
},
{
  image: "https://images.unsplash.com/photo-1742483359033-13315b247c74?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Trusted Office Cleaning Experts",
  subtitle: "Reliable, detail-driven cleaning trusted by leading businesses.",
  button: "Get Started Today"
}
];

let img = document.querySelector(".hero");
let title = document.getElementById("hero-title");
let subtitle = document.getElementById("hero-subtitle");
let btn = document.getElementById("hero-btn");

let i = 0;

function changeSlide() {
  // Update background image
  img.style.backgroundImage = `url(${slides[i].image})`;

  // Update text
  title.textContent = slides[i].title;
  subtitle.textContent = slides[i].subtitle;
  btn.textContent = slides[i].button;

  [title, subtitle, btn].forEach((el, index) => {
    el.style.opacity = "0"; // reset state
    el.style.transform = "translateY(50px)";
    
    setTimeout(() => {
      el.style.animation = "none";
      el.offsetHeight; // force reflow
      el.style.animation = `slideUp 1s ease forwards ${index * 0.2}s`;
    }, 50);
  });

  // Move to next
  i = (i + 1) % slides.length;

  setTimeout(changeSlide, 4000); // change every 5s
}

changeSlide();

