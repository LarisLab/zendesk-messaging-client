import { defineConfig } from '@hey-api/openapi-ts'
import { defaultPlugins } from '@hey-api/openapi-ts'

export default defineConfig({
    input: './openapi.yaml',
    output: {
        path: 'src/generated',
        indexFile: false,
        format: 'prettier',
    },
    plugins: [
        ...defaultPlugins,
        {
            name: '@hey-api/typescript',
        },
        {
            name: '@hey-api/sdk',
            client: false,
            auth: true,
            responseStyle: 'data',
            exportFromIndex: false,
            classStructure: 'off',
        },
        {
            name: '@hey-api/client-fetch',
            throwOnError: true,
            bundle: true,
            exportFromIndex: false,
        },
    ],
})
