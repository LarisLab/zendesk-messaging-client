# Zendesk messaging Client

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[Zendesk Messaging](https://www.zendesk.com/service/messaging/) typescript API client.

Missing something? Create [feature request](https://github.com/LarisLab/zendesk-messaging-client/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=)!

Read [documentation 📘](https://larislab.github.io/zendesk-messaging-client/) or [API reference 📕](https://docs.smooch.io/rest/)

## Installation

[![npm version](https://badge.fury.io/js/zendesk-messaging-client.svg)](https://www.npmjs.com/package/zendesk-messaging-client)
[![npm](https://img.shields.io/npm/dt/zendesk-messaging-client)](https://www.npmjs.com/package/zendesk-messaging-client)

### Install with NPM/yarn:

```bash
# NPM
npm install zendesk-messaging-client
# Yarn
yarn add zendesk-messaging-client
```

## Usage

```typescript
import { createClient, Sdk } from 'zendesk-messaging-client'

const appId = 'xxx'
const keyId = 'app_xxx'
const secretLey = 'xxxxx'

const client = createClient({
    subdomain: 'subdomain', // https://<subdomain>.zendesk.com/sc
    auth: `${keyId}:${secretLey}`,
})

const { conversation } = await Sdk.getConversation({
    client,
    path: {
        appId,
        conversationId: '685xxx',
    },
}).then((v) => v.data)
```
