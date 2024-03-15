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
/*************************************Working Area*********************************************/
// Important thing to note. 
//Query selectors give object outputs
//
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim(); //trim removes white spaces so that comparisons dont include them
    const goalList = document.querySelector('#goalList');
                            //important to use (from) method to find and grab object items
    const goalListArray = Array.from(goalList.querySelectorAll('li')/*returns array using goallist items*/).map(item => item.textContent.trim()/*creates a new array putting text in it*/);    //takes input puts it in a object array
    
    console.log(goalListArray, goalList)
    if (goalInput === "") {
        const Enter = () => {                         
            alert('Empty Entry.🚩');      //function calling alert for empty input
        };
        Enter()
    } else if (goalListArray.includes(goalInput)) {             //function calling alert for existing goal entry
        const Exists = () => {                         
            alert('Goal already exists!');      
        };
        Exists()
    } else {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;                        //Appending new goal 
        goalList.appendChild(newGoal);
        document.querySelector('#goalInput').value = "";   //clearing input field after every submition
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
