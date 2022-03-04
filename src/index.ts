import { Base } from './base'
import { applyMixins } from './utils'
import { Users } from './users'
import { BlogCategories } from './blogcategories'
import { BlogContacts } from './blogcontacts'
import { BlogPostCategories } from './blogpostcategories'
import { Blogs } from './blogs'
import { Categories } from './categories'
import { PostComments } from './postcomments'
import { PostLikes } from './postlikes'
import { Posts } from './posts'
import { PublicKeys } from './publickeys'
import { Referrals } from './referrals'
import { SecretKeys } from './secretkeys'
import { TeamMembers } from './teammembers'

// class DevTo extends Base {}
// interface DevTo extends Articles, Comments, Users, Followers, Listings, PodcastEpisodes, Tags, Videos, Webhooks {}
// applyMixins(DevTo, [Articles, Comments, Users, Followers, Listings, PodcastEpisodes, Tags, Videos, Webhooks]);
class Bloggrs extends Base {}
interface Bloggrs extends 
    Users, BlogCategories, BlogContacts, BlogPostCategories, 
    Blogs, Categories, PostComments, PostLikes, Posts,
    PublicKeys, Referrals, SecretKeys, TeamMembers {}
applyMixins(Bloggrs, [ 
    Users, BlogCategories, BlogContacts, BlogPostCategories, 
    Blogs, Categories, PostComments, PostLikes, Posts,
    PublicKeys, Referrals, SecretKeys, TeamMembers 
])

export default Bloggrs