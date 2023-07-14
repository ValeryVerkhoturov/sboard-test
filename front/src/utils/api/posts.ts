const getPostsRoute = '/api/posts'
export type GetPostsResponse = {
    data: [
        {id: string, createdAt: string,
            translations: [
                {title: string, languageCode: string, description: string}
            ],
        },],
    meta: {hasNextPage: boolean, hasPreviousPage: boolean, page: number,
        take: number, itemCount: number},
}
export const getPosts = async (token: string) => {
    'use client'

    const res = await fetch(getPostsRoute,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
    return ((await res.json()) as GetPostsResponse)
}

const deletePostRoute = '/api/posts/'
export const deletePost = async (postId: string, token: string) => {
    'use client'

    const res = await fetch(deletePostRoute + postId,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                'Authorization': `Bearer ${token}`
            },
        })
    return
}

