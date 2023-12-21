async function fetchAllUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }
  
  // Example: Fetch all user data
  fetchAllUserData()
    .then(allUserData => {
      console.log('All User Data:', allUserData);
    })
    .catch(error => {
      console.error('Error:', error);
    });





    