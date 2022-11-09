const loadUser = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
  const usersContainer = document.getElementById("user-container");
  for (const user of users) {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <h3>User Name</h3>
      <p>User Info</p>
    
    `;
    usersContainer.appendChild(userDiv);
  }
};
loadUser();
