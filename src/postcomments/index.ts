import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewPostComment, UpdatePostComment, PostComment } from './types'


export class PostComments extends Base {
    
    private postcomments_create (postComment: NewPostComment) {
        return this.request<PostComment>("/postcomments", {
            method: "POST",
            body: JSON.stringify(postComment)
        })
    }

    private postcomments_update (id: number, postComment: UpdatePostComment) {
        return this.request<PostComment>("/postcomments/" + id, {
            method: "PATCH",
            body: JSON.stringify(postComment)
        })
    }

    private postcomments_delete (id: number) {
        return this.request<PostComment>("/postcomments/" + id, {
            method: "DELETE"
        })
    }

    private postcomments_getOne (id: number) {
        return this.request<PostComment>("/postcomments/" + id);
    }

    private postcomments_all () {
        return this.request<PostComment>("/postcomments");
    }

    get ["postcomments"](): Record<string, any> {
        return getInstanceProperties(this, "postcomments");
    }
}