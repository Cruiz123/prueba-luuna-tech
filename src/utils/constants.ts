import { RootStackParamsList } from "../types/global"

const BASE_URL =  'https://api.github.com';

// eslint-disable-next-line prettier/prettier
const ROUTER: { [K in keyof RootStackParamsList]: K } = {
    Home: 'Home',
    UserSearch: 'UserSearch',
    RepoSearch: 'RepoSearch',
    DetailsUser: 'DetailsUser',
}


const QUERY_CACHE_KEYS = {
    users:'users',
    repository: 'repository',
}

const STATUS_QUERY = {
    success: 'success',
    error: 'error',
    pending: 'pending',
}

export { ROUTER, QUERY_CACHE_KEYS, STATUS_QUERY,BASE_URL }