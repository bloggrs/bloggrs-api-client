import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewBlogContact, UpdateBlogContact, BlogContact } from './types'


export class BlogContacts extends Base {
    
    private blogcontacts_create (blogContact: NewBlogContact) {
        return this.request<BlogContact>("/blogcontacts", {
            method: "POST",
            body: JSON.stringify(blogContact)
        })
    }

    private blogcontacts_update (id: number, blogContact: UpdateBlogContact) {
        return this.request<BlogContact>("/blogcontacts/" + id, {
            method: "PATCH",
            body: JSON.stringify(blogContact)
        })
    }

    private blogcontacts_delete (id: number) {
        return this.request<BlogContact>("/blogcontacts/" + id, {
            method: "DELETE"
        })
    }

    private blogcontacts_getOne (id: number) {
        return this.request<BlogContact>("/blogcontacts/" + id);
    }

    private blogcontacts_all () {
        return this.request<BlogContact>("/blogcontacts");
    }

    get ["blogcontacts"](): Record<string, any> {
        return getInstanceProperties(this, "blogcontacts");
    }
}