// hide announcement
function hideAnnouncement() {
  document.querySelector(".announcement").style.display = "none";
}

// function toggleMenu() {
//   const menuItems = document.getElementById("menuItems");
//   menuItems.classList.toggle("show");
// }

// scrollbar
document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".section-cards");
  const dots = document.querySelectorAll(".dot");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the index of the intersecting card
          const cardIndex = Array.from(cardsContainer.children).indexOf(
            entry.target
          );

          // Remove 'active' class from all dots
          dots.forEach((dot) => dot.classList.remove("active"));

          // Add 'active' class to the corresponding dot
          dots[cardIndex].classList.add("active");
        }
      });
    },
    {
      threshold: 0.5, // Change this threshold based on your preference
    }
  );

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    observer.observe(card);
  });
});
