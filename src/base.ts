// import fetch from 'cross-fetch';
// import 'cross-fetch/polyfill';
import node_fetch from "node-fetch";

var fetch: any = window && window.fetch
if (!fetch) fetch = node_fetch

type Config = {
    apiKey: string,
    basePath?: string,
}

export type Pagination = {
    page?: number,
    pageSize?: number,
}

export abstract class Base {
    private apiKey: string
    private basePath: string
    private accessToken: string

    constructor(config: Config) {
        this.apiKey = config.apiKey
        this.basePath = config.basePath || 'https://dev.to/api/'
    }
    
    protected request<T> (endpoint: string, options?: RequestInit): Promise<T> {
        const url = this.basePath + endpoint
        const headers = {
            'api-key': this.apiKey,
            'Content-type': 'application/json'
        }
        const { accessToken } = this;
        const insertAccessToken = accessToken && headers["Authorization"] === undefined;
        if (insertAccessToken) headers["Authorization"] = "Bearer " + accessToken;

        const config = {
            ...options,
            headers,
        }

        return fetch(url, config).then(r => {
            console.log("HERE")
            if (r.ok) {
                return r.json()
            }
            throw new Error(r.statusText)
        })
    }

    setAccessToken( accessToken: string ): boolean {
        this.accessToken = accessToken;
        return true;
    }
}