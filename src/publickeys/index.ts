import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewPublicKey, UpdatePublicKey, PublicKey } from './types'


export class PublicKeys extends Base {
    
    private publickeys_create (publicKey: NewPublicKey) {
        return this.request<PublicKey>("/publickeys", {
            method: "POST",
            body: JSON.stringify(publicKey)
        })
    }

    private publickeys_update (id: number, publicKey: UpdatePublicKey) {
        return this.request<PublicKey>("/publickeys/" + id, {
            method: "PATCH",
            body: JSON.stringify(publicKey)
        })
    }

    private publickeys_delete (id: number) {
        return this.request<PublicKey>("/publickeys/" + id, {
            method: "DELETE"
        })
    }

    private publickeys_getOne (id: number) {
        return this.request<PublicKey>("/publickeys/" + id);
    }

    private publickeys_all () {
        return this.request<PublicKey>("/publickeys");
    }

    get ["publickeys"](): Record<string, any> {
        return getInstanceProperties(this, "publickeys");
    }
}