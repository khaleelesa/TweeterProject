const tweeter_module = function() {
    const posts_arr = [{
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 2
    let commentIdCounter = 6

    const getPosts = () => posts_arr

    const addPost = t => {
        postIdCounter += 1
        posts_arr.push({ text: t, id: "p" + postIdCounter, comments: [] })
    }

    const removePost = function(postId) {

        posts_arr.splice(postId, 1)
    }

    const addComment = (postId, comment) => {
        commentIdCounter += 1
        const objIndex = posts_arr.findIndex((obj => obj.id == postId));
        posts_arr[objIndex].comments.push({ id: "c" + commentIdCounter, text: comment })
    }
    const removeComment = (postId, commentId) => {
        const objIndex = posts_arr.findIndex((obj => obj.id == postId));
        posts_arr[objIndex].comments.splice(commentId, 1)
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        addComment: addComment,
        removeComment: removeComment,
        removePost: removePost
    }
}

// // const a = tweeter_module()
// // a.addPost("abc")
// // a.addPost("fff")
// // a.removePost("p2")
// // a.addComment("p3", "hello")
// // a.addComment("p3", "i want milk")
// //     //a.removeComment("p3", "c7")
// console.log(a.getPosts())