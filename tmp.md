add post
    sent: {
            title,
            body
        }
    received: {
        successful: boolean
        errors?: [string]
        post: {
            id,
            timestamp,
            email,
            title,
            body,
            likes,
            hasLiked
        }
    }

delete post
    sent:{
        id
    }

edit post
    sent:{
        id,
        title,
        body,
    }
    received: {
        successful: boolean
        errors?: [string]
        post: {
            id,
            timestamp,
            email,
            title,
            body,
            likes,
            hasLiked
        }
    }

get my posts
    sent: N/A
    received: {
        successful: boolean
        errors?: [string]
        posts: [
            {
                id,
                timestamp,
                email,
                title,
                body,
                likes,
                hasLiked
            }
        ]
    }

like post
    sent:{
        id
    }

unlike post
    send:{
        id
    }

get post
    sent (query params): {
        id
    }
    received: {
        successful: boolean
        errors?: [string]
        posts: {
            id,
            timestamp,
            email,
            title,
            body,
            likes,
            hasLiked
        }
    }

get all posts (avec pagination et search sur le titre optionel)
    sent (query params): {
        page,
        query,
        pageSize
    }
    received: {
        successful: boolean
        errors?: [string]
        posts: [
            {
                id,
                timestamp,
                email,
                title,
                body,
                likes,
                hasLiked
            }
        ]
    }