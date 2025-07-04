let stack = [];

const postList = document.getElementById('postList');

// 글 추가
function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!title || !content) {
        alert('글을 작성해주세용 🥹');
        return;
    }

    const post = { title, content };
    stack.push(post);
    alert('작성 완료! 🎀');
    posts();

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
}


// 글 삭제
function deletePost() {
    if (stack.length === 0) {
        alert('삭제할 글이 없서용 🥹');
        return;
    }

    const removed = stack.pop();
    alert(`🗑️ 삭제된 글: ${removed.title}`);
    posts();
}


// 글 보여주기
function posts() {
    postList.innerHTML = '';

    [...stack].reverse().forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';

        div.innerHTML = `
      <div class="post-title">${post.title}</div>
      <div class="post-content">${post.content}</div>
    `;

        postList.appendChild(div);
    });
}
