import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewUser, User } from './types'

const resourceName = 'users'

export class Users extends Base {

    users_create (user: NewUser) {
        return this.request<User>("/users", {
            method: "POST",
            body: JSON.stringify(user)
        })
    }
    users_getCurrent (): Promise<any> {
        return this.request<User>(`${resourceName}/me`)
    }

    getUser (id: number): Promise<any> {
        return this.request<User>(`${resourceName}/${id}`)
    }

    getUserByUsername (username: string): Promise<any> {
        return this.request<User>(`${resourceName}/by_username?url=${username}`)
    }

    get [resourceName](): Record<string, any> {
        return getInstanceProperties(this, resourceName);
    }
}