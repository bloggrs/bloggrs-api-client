import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewPostLike, UpdatePostLike, PostLike } from './types'


export class PostLikes extends Base {
    
    private postlikes_create (postLike: NewPostLike) {
        return this.request<PostLike>("/postlikes", {
            method: "POST",
            body: JSON.stringify(postLike)
        })
    }

    private postlikes_update (id: number, postLike: UpdatePostLike) {
        return this.request<PostLike>("/postlikes/" + id, {
            method: "PATCH",
            body: JSON.stringify(postLike)
        })
    }

    private postlikes_delete (id: number) {
        return this.request<PostLike>("/postlikes/" + id, {
            method: "DELETE"
        })
    }

    private postlikes_getOne (id: number) {
        return this.request<PostLike>("/postlikes/" + id);
    }

    private postlikes_all () {
        return this.request<PostLike>("/postlikes");
    }

    get ["postlikes"](): Record<string, any> {
        return getInstanceProperties(this, "postlikes");
    }
}