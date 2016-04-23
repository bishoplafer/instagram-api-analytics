Instagram API endpoints to use:

#### Endpoint: https://api.instagram.com/v1/locations/1024160796/media/recent

Relevent Data: Shows number of posts and likes. "Recent" to be defined.

#### Endpoint: https://api.instagram.com/v1/users/348597836/media/recent

Relevent Data: Shows recent posts (including hashtags and likes) from user by user id.

#### Endpoint: https://api.instagram.com/v1/media/1232139857218674306

Relevent Data:  Shows data about specific user media (post) on Instagrm. 



These edpoints will be needed to provide analytic data about users and posts to help biuild community.

Example user case:

Example user : https://www.instagram.com/itssami_darling/

Basic User info endpoint: https://api.instagram.com/v1/users/search?q=itssami_darling

Did they follow "northwesttattoo" or id "2280825179" enpoint? : https://api.instagram.com/v1/users/25541958/follows

Who follows this example user?: https://api.instagram.com/v1/users/25541958/followed-by 


