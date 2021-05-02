const render = function() {
    const render_post = function(posts) {
        $("#posts").empty()
        for (let n in posts) {
            $("#posts").append(`<div id =${posts[n].id} class="posts_class"> ${posts[n].text} , postNumber:${posts[n].id} , comments : </div>`)
            $("#" + posts[n].id).css("color", "#ecf0f1")
            $("#" + posts[n].id).css("background-color", "#34495e")
            $("#" + posts[n].id).append(`<button class ="delete_post"> DeletePost </button>`)
            $("#" + posts[n].id).append(`<button class ="add_comment"> Comment </button>`)
            $(".delete_post").css("position", "absolute")
            $(".delete_post").css("right", "32px")
            $.each(posts[n].comments, function(index, val) {
                $("#" + posts[n].id).append(`<div class=${val.id}> ${val.id},${val.text}  <\div>`)
                $("." + val.id).css("background-color", "#e67e22")
                $("." + val.id).css("padding-left", "20px")
                $("." + val.id).append(`<button class ="delete_comment"> X </button>`)
            });

        }
    }

    return {
        render_post: render_post
    }
}