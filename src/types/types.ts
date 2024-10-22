export type ErrorType =
    | {
          message: string,
          errors: { field?: string, message?: string }[],
          details: string,
      }
    | string

export type informationUser = {
    login: string,
}

export type informationUsers = {
    login: string,
    name: string,
    company: string,
    avatar_url: string,
    url: string,
    location: string,
    email: string,
    bio: string,
    public_repos: number,
    twitter_username: string,
    followers: number,
    following: number
    created_at: Date,
}

export type informationRepositories = {
    full_name: string,
    name: string,
    description: string,
    url: string,
    owner:informationUsers,
    html_url: string,
    language: string,
}
