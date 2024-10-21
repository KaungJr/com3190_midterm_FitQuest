// Fetch the workout data from the JSON file
fetch("workout.json")
  .then((response) => response.json())
  .then((data) => {
    const muscleGroups = data.muscleGroups;

    // for Chest workouts
    const chest = muscleGroups.find((group) => group.name === "Chest");
    insertWorkouts("chestWorkouts", chest.workouts);

    // for Back workouts
    const back = muscleGroups.find((group) => group.name === "Back");
    insertWorkouts("backWorkouts", back.workouts);

    // for Arm workouts
    const arms = muscleGroups.find((group) => group.name === "Arms");
    insertWorkouts("armsWorkouts", arms.workouts);

    // for Shoulder workouts
    const shoulders = muscleGroups.find((group) => group.name === "Shoulders");
    insertWorkouts("shouldersWorkouts", shoulders.workouts);

    // for Quadriceps workouts
    const quadriceps = muscleGroups.find(
      (group) => group.name === "Quadriceps"
    );
    insertWorkouts("quadricepsWorkouts", quadriceps.workouts);

    // for Hamstrings workouts
    const hamstrings = muscleGroups.find(
      (group) => group.name === "Hamstrings"
    );
    insertWorkouts("hamstringsWorkouts", hamstrings.workouts);
  })
  .catch((error) => console.error("Error fetching workout data:", error));

function insertWorkouts(containerId, workouts) {
  const container = document.getElementById(containerId);
  workouts.forEach((workout) => {
    const workoutElement = document.createElement("div");
    workoutElement.classList.add("workout-item");

    workoutElement.innerHTML = `
      <h4>${workout.name}</h4>
      <img src="images/${workout.image}" 
           alt="${workout.name}" 
           class="hover-image"
           onmouseover="this.src='images/${workout.hoverImage}'"
           onmouseout="this.src='images/${workout.image}'" 
           width="400" height="400" />
    `;
    container.appendChild(workoutElement);
  });
}
