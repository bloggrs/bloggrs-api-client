import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewPost, UpdatePost, Post } from './types'


export class Posts extends Base {
    
    private posts_create (post: NewPost) {
        return this.request<Post>("/posts", {
            method: "POST",
            body: JSON.stringify(post)
        })
    }

    private posts_update (id: number, post: UpdatePost) {
        return this.request<Post>("/posts/" + id, {
            method: "PATCH",
            body: JSON.stringify(post)
        })
    }

    private posts_delete (id: number) {
        return this.request<Post>("/posts/" + id, {
            method: "DELETE"
        })
    }

    private posts_getOne (id: number) {
        return this.request<Post>("/posts/" + id);
    }

    private posts_all () {
        return this.request<Post>("/posts");
    }

    get ["posts"](): Record<string, any> {
        return getInstanceProperties(this, "posts");
    }
}