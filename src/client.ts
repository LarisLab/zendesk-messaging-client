import {
    type Client,
    type Config,
    createClient as createDefaultClient,
    createConfig as createDefaultConfig,
} from './generated/client'

export interface ClientConfig extends Pick<Config, 'fetch'> {
    subdomain?: string
    auth: string
}

export type { Client }

export class ClientError extends Error {
    code?: string
    status?: number

    constructor(message: string, code?: string, status?: number) {
        super(message)
        this.name = 'ClientError'
        this.code = code
        this.status = status
    }
}

export function createClient({ subdomain, ...config }: ClientConfig): Client {
    const client = createDefaultClient(
        createDefaultConfig({
            throwOnError: true,
            baseUrl: subdomain
                ? `https://${subdomain}.zendesk.com/sc`
                : 'https://api.smooch.io',
            ...config,
        }),
    )

    client.interceptors.error.use((error) => {
        if (
            typeof error === 'object' &&
            error &&
            'errors' in error &&
            Array.isArray(error.errors)
        ) {
            const { errors } = error
            const message = errors
                .map((e) => e.title)
                .filter((v) => !!v)
                .join(', ')
            const status = errors[0].status
            const code = errors[0].code

            if (message) {
                return new ClientError(message, code, status)
            }
        }

        return error instanceof Error
            ? new ClientError(error.message)
            : new ClientError(String(error))
    })

    return client
}
