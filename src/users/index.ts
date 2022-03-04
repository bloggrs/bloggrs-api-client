import { Base, Pagination } from '../base'
import { getInstanceProperties } from '../utils'
import { NewUser, UpdateUser, User } from './types'

export class Users extends Base {
    private users_create (user: NewUser) {
        return this.request<User>("/users", {
            method: "POST",
            body: JSON.stringify(user)
        })
    }

    private users_update (id: number, user: UpdateUser) {
        return this.request<User>("/users/" + id, {
            method: "PATCH",
            body: JSON.stringify(user)
        })
    }

    private users_delete (id: number) {
        return this.request<User>("/users/" + id, {
            method: "DELETE"
        })
    }

    private users_getOne (id: number) {
        return this.request<User>("/users/" + id);
    }

    private users_all (pagination?: Pagination) {
        return this.request<User>("/users");
    }

    get ["users"](): Record<string, any> {
        return getInstanceProperties(this, "users");
    }
}