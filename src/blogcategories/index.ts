import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewBlogCategory, UpdateBlogCategory, BlogCategory } from './types'


export class BlogCategories extends Base {
    
    private blogcategories_create (blogCategory: NewBlogCategory) {
        return this.request<BlogCategory>("/blogcategories", {
            method: "POST",
            body: JSON.stringify(blogCategory)
        })
    }

    private blogcategories_update (id: number, blogCategory: UpdateBlogCategory) {
        return this.request<BlogCategory>("/blogcategories/" + id, {
            method: "PATCH",
            body: JSON.stringify(blogCategory)
        })
    }

    private blogcategories_delete (id: number) {
        return this.request<BlogCategory>("/blogcategories/" + id, {
            method: "DELETE"
        })
    }

    private blogcategories_getOne (id: number) {
        return this.request<BlogCategory>("/blogcategories/" + id);
    }

    private blogcategories_all () {
        return this.request<BlogCategory>("/blogcategories");
    }

    get ["blogcategories"](): Record<string, any> {
        return getInstanceProperties(this, "blogcategories");
    }
}