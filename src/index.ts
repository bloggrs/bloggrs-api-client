// import { Articles } from './articles'
// import { Comments } from './comments'
// import { Followers } from './followers'
// import { Listings } from './listings'
// import { PodcastEpisodes } from './podcast-episodes'
// import { Tags } from './tags'
// import { Videos } from './videos'
// import { Webhooks } from './webhooks' 
import { Users } from './users'
import { applyMixins } from './utils'
import { Base } from './base'

// class DevTo extends Base {}
// interface DevTo extends Articles, Comments, Users, Followers, Listings, PodcastEpisodes, Tags, Videos, Webhooks {}
// applyMixins(DevTo, [Articles, Comments, Users, Followers, Listings, PodcastEpisodes, Tags, Videos, Webhooks]);
class Bloggrs extends Base {}
interface Bloggrs extends Users {}
applyMixins(Bloggrs, [ Users ])

export default Bloggrs