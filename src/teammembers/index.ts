import { Base } from '../base'
import { getInstanceProperties } from '../utils'
import { NewTeamMember, UpdateTeamMember, TeamMember } from './types'


export class TeamMembers extends Base {
    
    private teammembers_create (teamMember: NewTeamMember) {
        return this.request<TeamMember>("/teammembers", {
            method: "POST",
            body: JSON.stringify(teamMember)
        })
    }

    private teammembers_update (id: number, teamMember: UpdateTeamMember) {
        return this.request<TeamMember>("/teammembers/" + id, {
            method: "PATCH",
            body: JSON.stringify(teamMember)
        })
    }

    private teammembers_delete (id: number) {
        return this.request<TeamMember>("/teammembers/" + id, {
            method: "DELETE"
        })
    }

    private teammembers_getOne (id: number) {
        return this.request<TeamMember>("/teammembers/" + id);
    }

    private teammembers_all () {
        return this.request<TeamMember>("/teammembers");
    }

    get ["teammembers"](): Record<string, any> {
        return getInstanceProperties(this, "teammembers");
    }
}