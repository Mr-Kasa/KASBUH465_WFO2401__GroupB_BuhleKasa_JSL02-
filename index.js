const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);




























// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim(); //trim removes white spaces
    const goalList = document.querySelector('#goalList');
                            //importent to use (from) method to find and grab objects
    const goalListArray = Array.from(goalList.querySelectorAll('li')/*returns array using goallist items*/).map(item => item.textContent.trim()/*creates a new array putting text in it*/);    //takes input puts it in a object array
    console.log(goalListArray, goalList)
    if (goalInput === "") {
        const Enter = () => {                         
            alert('Please enter atleast 1 workout goal!');      
        };
        Enter()
    } else if (goalListArray.includes(goalInput)) {
        const Exists = () => {                         
            alert('Goal already exists!');      
        };
        Exists()
    } else {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal);
        document.querySelector('#goalInput').value = ""; 
    }
};

document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {                         
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');      
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
