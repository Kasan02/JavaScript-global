export let comments = [];

export function updateComments(newComments) {
    comments.splice(0, comments.length, ...newComments);
}
  

