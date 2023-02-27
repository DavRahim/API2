const loadMeal = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
      .then(res => res.json())
      .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    
    const mealsContainer = document.getElementById('mealsContainer');
     mealsContainer.innerHTML = '';
    meals.forEach(meal =>{
      console.log(meal)  
      const mealsDiv = document.createElement('div');
      mealsDiv.classList.add('col');
      mealsDiv.innerHTML = `
               <div class="card">
                    <img src="${meal.strMealThumb
                    }" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <!-- Button trigger modal -->
                      <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                         Details
                       </button>
                    </div>
                </div>
        

      
      `
     mealsContainer.appendChild(mealsDiv)
    })
}

const searchMeal = () =>{
    // console.log('button')
    const searchText = document.getElementById('search-field').value;

    //search meals;
    loadMeal(searchText)

}

const loadMealDetails = idMeal =>{
    // console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]))
    
    .catch(error => {
      console.log(error)
    })
}

// async await
// const loadMealDetails = async(idMeal) =>{
//     // console.log(idMeal)
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//     try{
//     const res = await fetch(url);
//     const data =await res.json();
//     displayMealsDetails(data.meals[0]);
//     }
//     catch(error){
//       console.log(error)
//     }
// }

const displayMealsDetails = meal =>{
   document.getElementById('exampleModalLabel').innerText = meal.strMeal
   const mealsDetails = document.getElementById('mealDetealsBody');
   mealsDetails.innerHTML = `
     <img class="img-fluid" src="${meal.strMealThumb}">
   
   `
}

loadMeal('fish')
