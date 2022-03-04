import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewReferral, UpdateReferral, Referral } from './types'


export class Referrals extends Base {
    
    private referrals_create (referral: NewReferral) {
        return this.request<Referral>("/referrals", {
            method: "POST",
            body: JSON.stringify(referral)
        })
    }

    private referrals_update (id: number, referral: UpdateReferral) {
        return this.request<Referral>("/referrals/" + id, {
            method: "PATCH",
            body: JSON.stringify(referral)
        })
    }

    private referrals_delete (id: number) {
        return this.request<Referral>("/referrals/" + id, {
            method: "DELETE"
        })
    }

    private referrals_getOne (id: number) {
        return this.request<Referral>("/referrals/" + id);
    }

    private referrals_all () {
        return this.request<Referral>("/referrals");
    }

    get ["referrals"](): Record<string, any> {
        return getInstanceProperties(this, "referrals");
    }
}