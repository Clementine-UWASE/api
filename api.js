const btnEl = document.querySelector(".btn");
const newUser = {
    name:'Maria',
    job : 'Teacher'
};
const ClickHandler = async() => {
    try{
        const res =await fetch('https://reqres.in/api/users',{
            Method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },body:JSON.stringify(newUser)
        });
        const data = await res.json();
        console.log(data);
    }catch (error){
        console.log(error);
    }
};
btnEl.addEventListener("click",ClickHandler);
fetch('https://jsonplaceholder.typicode.com/users')
method : 'GET',





// async function fetchUserData(username) {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching user data:', error.message);
//     }
//   }
  
//   // Example: Fetch user data for the username 'Bret'
//   fetchUserData('Bret')
//     .then(userData => {
//       console.log('User Data:', userData);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
