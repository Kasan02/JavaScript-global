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
            text,
            name, 
        }),
    })
    .then(response => {
        document.querySelector('.form-loading').style.display = 'none';
        document.querySelector('.add-form').style.display = 'flex';

        if (response.status === 500) {
            throw new Error("Ошибка сервера");
        }
        if (response.status === 400) {
            throw new Error("Некорректные данные");
        }
        if (response.status === 201) {
            return response.json();
        }
    })
    .then(() => {
        return fetchComments();
    })
};