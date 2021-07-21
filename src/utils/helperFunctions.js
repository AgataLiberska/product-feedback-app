export const countComments = suggestion => {
    let count = 0;
    count += suggestion.comments.length;

    for (let i=0; i<suggestion.comments.length; i++) {
        count += suggestion.comments[i].replies.length;
    }

    return count;
}