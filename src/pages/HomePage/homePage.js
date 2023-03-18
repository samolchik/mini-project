const users = new URL('https://jsonplaceholder.typicode.com/users');
fetch(users)
    .then(users => users.json())
    .then(users => {

        const usersContainer = document.getElementById('usersContainer');

        for (const user of users) {

            const userItem = document.createElement('li');
            userItem.classList.add('user-item');

            const userInfo = document.createElement('div');
            const userName = document.createElement('h2');
            userName.classList.add('user-name');
            userName.innerText = user.name;

            const userId = document.createElement('h5');
            userId.innerText = `id: ${user.id}`;

            userInfo.append(userName, userId);

            const btnUserDetails = document.createElement('div');
            btnUserDetails.innerText = 'MORE DETAILS'

            const linkUser = document.createElement('a');
            linkUser.classList.add('btn-details');
            linkUser.target = '_blank';
            linkUser.href = '../../pages/UserDetails/user-details.html?data=' + JSON.stringify(user);

            linkUser.appendChild(btnUserDetails);
            userItem.append(userInfo, linkUser);
            usersContainer.appendChild(userItem);
        }
    });

