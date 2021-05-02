const tweeter = tweeter_module()
const renderer = render()

renderer.render_post(tweeter.getPosts())
const post = function() {
    if ($("#input").val()) {
        tweeter.addPost($("#input").val())
        renderer.render_post(tweeter.getPosts())
    } else alert("please write somthing")
}
$("body").on("click", ".delete_post", function() {
    const postId = $(this).closest("div").attr("id")
    tweeter.removePost(postId)
    renderer.render_post(tweeter.getPosts())
})
$("body").on("click", ".add_comment", function() {
    const postId = $(this).closest("div").attr("id")
    if ($("#input").val()) {
        tweeter.addComment(postId, $("#input").val())
        renderer.render_post(tweeter.getPosts())
    } else alert("please write somthing")
})

$("body").on("click", ".delete_comment", function() {
    const commenttId = $(this).closest("div").attr("id")
    const postId = $(this).closest(".posts_class").attr("id")
    tweeter.removeComment(postId, commenttId)
    renderer.render_post(tweeter.getPosts())
})