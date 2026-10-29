const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}
const rideSearch = document.querySelector("#ride-search");
if (rideSearch) {
  rideSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(rideSearch);
    const from = String(data.get("from") || "").trim();
    const to = String(data.get("to") || "").trim();
    const date = String(data.get("date") || "");
    alert(`Demo search: ${from} → ${to}${date ? ` on ${date}` : ""}. Live ride matching is not connected yet.`);
  });
}
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    status.textContent = "Thanks! This demo form is working locally, but messages are not sent. Connect a form service or backend to receive enquiries.";
    status.className = "form-status success";
    contactForm.reset();
  });
}
const dateInput = document.querySelector('input[name="date"]');
if (dateInput) {
  const today = new Date();
  dateInput.min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
}