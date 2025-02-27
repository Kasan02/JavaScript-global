const host = "https://wedev-api.sky.pro/api/v1/daniil-kasanov"

export const fetchComments = () => {
    return fetch(host + '/comments')
        .then((res) => {
           return res.json()
        })

    .then((responseData) => {
        const appComments = responseData.comments.map((comment => {
            return {
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
            name: name, // сервер требует name, а не author.name
        }),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => Promise.reject(err));
        }
        return fetchComments(); // Загружаем обновленный список комментариев
    })
    .catch(error => {
        console.error("Ошибка при отправке комментария:", error);
    });
};


