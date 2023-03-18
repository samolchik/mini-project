const url = new URL(location.href);
const user = JSON.parse(url.searchParams.get('data'));

const userContent = document.querySelector('.user-content');

userContent.innerHTML = `
                  <p><i class="fa-regular fa-circle-user"></i></p>
                  <h1 class="font-effect-shadow-multiple"> ${user.name} ${user.username}</h1>
                  <h4>id: ${user.id}</h4>
                  <div class="user-company">
                      <span>company:</span> ${user.company.name}</h3>
                      <h4><span>slogan:</span> ${user.company.catchPhrase}</h4>
                      <h4><span>bs:</span> ${user.company.bs}</h4>
                  </div>
                  <div>      
                      <p><i class="fa-solid fa-phone grey"></i> ${user.phone}</p>
                      <address><i class="fa-regular fa-envelope grey"></i> <a href="mailto:${user.email}">${user.email}</a></address>
                      <p><i class="fa-solid fa-globe grey"></i> ${user.website}</p>
                      <address><i class="fa-solid fa-address-book grey"></i> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</address>
                      <p><i class="fa-solid fa-location-dot grey"></i> ${user.address.geo.lat} & ${user.address.geo.lng}</p>
                  </div>`;

const posts = new URL(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
fetch(posts)
    .then(posts => posts.json())
    .then(posts => {

        const postsDiv = document.querySelector('.posts');

        for (const post of posts) {

            const postItem = document.createElement('li');
            postItem.classList.add('post');
            postItem.innerText = post.title;

            const btnPostDetails = document.createElement('div');
            btnPostDetails.innerText = 'MORE DETAILS';

            const linkPost = document.createElement('a');
            linkPost.classList.add('btn-post');
            linkPost.target = '_blank';
            linkPost.href = '../../pages/PostDetails/post-details.html?post=' + JSON.stringify(post);

            linkPost.appendChild(btnPostDetails);
            postItem.appendChild(linkPost);
            postsDiv.appendChild(postItem);
        }

        const buttonPosts = document.getElementById('buttonPosts');
        const togglePosts = () => {
            postsDiv.classList.toggle('toggle');
        };

        buttonPosts.addEventListener("click", togglePosts);
    });


