import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewBlogPostCategory, UpdateBlogPostCategory, BlogPostCategory } from './types'


export class BlogPostCategories extends Base {
    
    private blogpostcategories_create (blogPostCategory: NewBlogPostCategory) {
        return this.request<BlogPostCategory>("/blogpostcategories", {
            method: "POST",
            body: JSON.stringify(blogPostCategory)
        })
    }

    private blogpostcategories_update (id: number, blogPostCategory: UpdateBlogPostCategory) {
        return this.request<BlogPostCategory>("/blogpostcategories/" + id, {
            method: "PATCH",
            body: JSON.stringify(blogPostCategory)
        })
    }

    private blogpostcategories_delete (id: number) {
        return this.request<BlogPostCategory>("/blogpostcategories/" + id, {
            method: "DELETE"
        })
    }

    private blogpostcategories_getOne (id: number) {
        return this.request<BlogPostCategory>("/blogpostcategories/" + id);
    }

    private blogpostcategories_all () {
        return this.request<BlogPostCategory>("/blogpostcategories");
    }

    get ["blogpostcategories"](): Record<string, any> {
        return getInstanceProperties(this, "blogpostcategories");
    }
}