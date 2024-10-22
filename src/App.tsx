import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import QUERY_CLIENT_CONFIG from './config/query.config'
import Router from './common/Router'

const App = () => {
    return (
        <QueryClientProvider client={QUERY_CLIENT_CONFIG}>
            <Router />
        </QueryClientProvider>
    )
}

export default App
