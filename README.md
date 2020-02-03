# ushio-mail

## Quick Start

### Import mail module

```js
const mail = require('ushio-mail')(API_url); //substitute the API_url

```

### Send mail

```js
await mail.send(To, Subject, Body, From);
```

## License

Apache-2.0