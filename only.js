async function fetchUsernames() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const userData = await response.json();
      const usernames = userData.map(user => user.username);
      
      return usernames;
    } catch (error) {
      console.error('Error fetching usernames:', error.message);
    }
  }
  
  // Example: Fetch all usernames
  fetchUsernames()
    .then(usernames => {
      console.log('Usernames:', usernames);
    })
    .catch(error => {
      console.error('Error:', error);
    });