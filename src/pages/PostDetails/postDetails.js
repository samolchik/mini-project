const urlPost = new URL(location.href);
const post = JSON.parse(urlPost.searchParams.get('post'));

const containerPost = document.querySelector('.container-post');

containerPost.innerHTML = `
              <div class="post-info">
                  <h2 class="font-effect-shadow-multiple"><span>title:</span>${post.title}</h2>
                  <p class="font-effect-emboss">user id: ${post.userId} & post id: ${post.id}</p>
                  <p class="post-body">${post.body}</p>
              </div>`;

const comments = new URL(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
fetch(comments)
    .then(res => res.json())
    .then(comments => {

        const commentsDiv = document.createElement('ul');
        commentsDiv.classList.add('comments');

        for (const comment of comments) {

            const commentItem = document.createElement('li');
            commentItem.classList.add('comment');
            commentItem.innerHTML += `
                  <h4 class="comment-name">${comment.name}</h4>
                  <p class="comment-body">${comment.body}.</p>
                  <address><i class="fa-regular fa-envelope grey"></i> <a href="mailto:${comment.email}">${comment.email}</a> </address>`;

            commentsDiv.appendChild(commentItem);
        }

        containerPost.appendChild(commentsDiv);
    });




