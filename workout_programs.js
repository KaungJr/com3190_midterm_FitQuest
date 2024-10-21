document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const workoutContainer = document.getElementById("workout-container");

  fetch("workouts_programs.json")
    .then((response) => response.json())
    .then((data) => {
      const workouts = data.workouts;
      displayWorkouts(workouts);

      searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredWorkouts = workouts.filter((workout) =>
          workout.title.toLowerCase().includes(query)
        );
        displayWorkouts(filteredWorkouts);
      });
    });

  function displayWorkouts(workouts) {
    workoutContainer.innerHTML = "";
    workouts.forEach((workout) => {
      const workoutCard = `
          <div class="col-md-4">
            <div class="card workout-card">
              <img src="${workout.image}" alt="${
        workout.title
      }" class="card-img-top">
              <div class="card-body text-center">
                <h3>${workout.title}</h3>
                <p>Duration: ${workout.duration}</p>
                <p>Intensity: ${workout.intensity}</p>
                <p>${workout.description}</p>
                <h5>Workout Details:</h5>
                <ul>
                  <li>Warm-up: ${workout.details.warmup}</li>
                  <li>Exercises: ${workout.details.exercises}</li>
                  ${
                    workout.details.cardio
                      ? `<li>Cardio: ${workout.details.cardio}</li>`
                      : ""
                  }
                  <li>Cool Down: ${workout.details.cooldown}</li>
                </ul>
                <h5>Benefits:</h5>
                <p>${workout.benefits}</p>
                <p><strong>Recommended For:</strong> ${
                  workout.recommendedFor
                }</p>
                <h5>Weekly Schedule:</h5>
                <ul>
                  ${workout.schedule.map((day) => `<li>${day}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
        `;
      workoutContainer.innerHTML += workoutCard;
    });
  }
});
