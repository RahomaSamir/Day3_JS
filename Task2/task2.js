//fetch all data\
function fetchPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data =>{
        let tableBody = document.querySelector("#postsTable tbody");
        tableBody.innerHTML = "";
        data.forEach(post => {
            tableBody.innerHTML +=`
            <tr>
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.body}</td>
            </tr>
            `;
            
        });
    })
}

//fetch data by id

function fetchPostById(){

    const postId = document.getElementById('postId').value;
    if(postId){

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(Response => Response.json())
        .then(post =>{
            let tableBody = document.querySelector("#postsTable tbody");
            tableBody.innerHTML = `
         
                <tr>
                  <td>${post.id}</td>
                  <td>${post.title}</td>
                  <td>${post.body}</td>
                </tr>
                `;
                
            })
            .catch(() => alert("post not found"));
        }else{
               alert("please enter a post id")
        }
}
// Automatically load 
window.onload = fetchPosts;