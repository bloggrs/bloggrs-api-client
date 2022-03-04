import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewSecretKey, UpdateSecretKey, SecretKey } from './types'


export class SecretKeys extends Base {
    
    private secretkeys_create (secretKey: NewSecretKey) {
        return this.request<SecretKey>("/secretkeys", {
            method: "POST",
            body: JSON.stringify(secretKey)
        })
    }

    private secretkeys_update (id: number, secretKey: UpdateSecretKey) {
        return this.request<SecretKey>("/secretkeys/" + id, {
            method: "PATCH",
            body: JSON.stringify(secretKey)
        })
    }

    private secretkeys_delete (id: number) {
        return this.request<SecretKey>("/secretkeys/" + id, {
            method: "DELETE"
        })
    }

    private secretkeys_getOne (id: number) {
        return this.request<SecretKey>("/secretkeys/" + id);
    }

    private secretkeys_all () {
        return this.request<SecretKey>("/secretkeys");
    }

    get ["secretkeys"](): Record<string, any> {
        return getInstanceProperties(this, "secretkeys");
    }
}