const url = 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=skiing';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '77312c4fe0mshea1aa31e0ab64fap188204jsn81ed638681b5',
        'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
    }
};

const sport = (activity) => {
    fetch('https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=' + activity, options)
        .then((response) => { return response.json() })
        .then((data) => {
            console.log(data)

            sportName.innerHTML = data[0].name
            duration_minutes.innerHTML = data[0].duration_minutes
            total_calories.innerHTML = data[0].total_calories

        })

}

submit.addEventListener("click", (event) => {
    event.preventDefault();
    sport(activity.value);

})

sport();