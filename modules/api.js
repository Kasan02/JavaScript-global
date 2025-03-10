const host = "https://wedev-api.sky.pro/api/v1/daniil-kasanov"

export const fetchComments = () => {
    return fetch(host + '/comments')
        .then((res) => {
           return res.json()
        })

    .then((responseData) => {
        const appComments = responseData.comments.map((comment => {
            return {
                id: comment.author.name,
                name: comment.author.name,
                text: comment.text,
                date: new Date(comment.date),
                likes: comment.likes,
                isLiked: false
            }
        })
    )
    return appComments
})
}
export const postComment = (text, name) => {
    return fetch(host + "/comments", {
        method: "POST",
        body: JSON.stringify({
            text: text,
            name: name, 
        }),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();  
    })
    .catch(error => {
        console.error("Ошибка при отправке комментария:", error);
        return Promise.reject(error);
    });
};