import { resolver } from '../config/axios.config'

export const fetchGithubUsers = async (query: string) => {
    const response = await resolver.get(`/search/users?q=${query}`)
    return response.data
}

export const fetchGithubUserDetails = async (query: string) => {
    const response = await resolver.get(`/users/${query}`)
    return response.data
}

export const fetchGithubRepos = async (query: string) => {
    const response = await resolver.get(`/search/repositories?q=${query}`)
    return response.data
}
