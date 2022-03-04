import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewCategory, UpdateCategory, Category } from './types'


export class Categories extends Base {
    
    private categories_create (category: NewCategory) {
        return this.request<Category>("/categories", {
            method: "POST",
            body: JSON.stringify(category)
        })
    }

    private categories_update (id: number, category: UpdateCategory) {
        return this.request<Category>("/categories/" + id, {
            method: "PATCH",
            body: JSON.stringify(category)
        })
    }

    private categories_delete (id: number) {
        return this.request<Category>("/categories/" + id, {
            method: "DELETE"
        })
    }

    private categories_getOne (id: number) {
        return this.request<Category>("/categories/" + id);
    }

    private categories_all () {
        return this.request<Category>("/categories");
    }

    get ["categories"](): Record<string, any> {
        return getInstanceProperties(this, "categories");
    }
}