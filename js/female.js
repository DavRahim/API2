const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
       .then(res => res.json())
       .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender

    const name = document.getElementById('name');
    name.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    
    const postCode = document.getElementById('postcode');
    postCode.innerHTML = user.results[0].location.postcode
    
    console.log(user.results[0].location.postcode)
    
}



loadUser()