import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewBlog, UpdateBlog, Blog } from './types'


export class Blogs extends Base {
    
    private blogs_create (blog: NewBlog) {
        return this.request<Blog>("/blogs", {
            method: "POST",
            body: JSON.stringify(blog)
        })
    }

    private blogs_update (id: number, blog: UpdateBlog) {
        return this.request<Blog>("/blogs/" + id, {
            method: "PATCH",
            body: JSON.stringify(blog)
        })
    }

    private blogs_delete (id: number) {
        return this.request<Blog>("/blogs/" + id, {
            method: "DELETE"
        })
    }

    private blogs_getOne (id: number) {
        return this.request<Blog>("/blogs/" + id);
    }

    private blogs_all () {
        return this.request<Blog>("/blogs");
    }

    get ["blogs"](): Record<string, any> {
        return getInstanceProperties(this, "blogs");
    }
}