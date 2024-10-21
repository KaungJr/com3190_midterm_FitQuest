document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const featurettes = data.featurettes;
      const container = document.querySelector(".container.marketing");

      featurettes.forEach((featurette, index) => {
        const orderClass = index % 2 === 0 ? "" : " order-md-2";
        const imageOrderClass = index % 2 === 0 ? "" : " order-md-1";

        const featuretteHTML = `
            <div class="row featurette">
              <div class="col-md-7${orderClass}">
                <h2 class="featurette-heading fw-normal lh-1">
                  ${featurette.heading}
                </h2>
                <p class="lead">${featurette.text}</p>
              </div>
              <div class="col-md-5${imageOrderClass}">
                <img src="${featurette.image}" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Featurette image">
              </div>
            </div>
            <hr class="featurette-divider">
          `;

        container.insertAdjacentHTML("beforeend", featuretteHTML);
      });
    })
    .catch((error) => console.error("Error loading JSON:", error));
});

document
  .getElementById("exploreWorkouts")
  .addEventListener("click", function () {
    window.location.href = "workouts.html";
  });

document
  .getElementById("explorePrograms")
  .addEventListener("click", function () {
    window.location.href = "workout_programs.html";
  });

document.getElementById("aboutUs").addEventListener("click", function () {
  window.location.href = "about.html";
});
