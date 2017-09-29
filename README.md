# Sendable Node Client

## Installation

```bash
npm install sendable
```

## Setup

You can either use the environment variables, or configure the client manually.

### Environment Variables

Add the following environment variables to your application. You can get these values from the settings page of your Sendable dashboard.

`SENDABLE_PROJECT_ID`=`YOUR PROJECT ID`

`SENDABLE_API_KEY`=`YOUR API KEY`

### Manual Configuration

```javascript
const { Client } = require('sendable')

const sendable = new Client(
  <SENDABLE_PROJECT_ID>,
  <SENDABLE_API_KEY>
)
```

## Usage

### Render

The `render` method renders your email template and returns the HTML in response. It accepts two arguments and returns a `Promise` object.

- **templateId** - *integer* - This is your Sendable template id
- **params** - *object* - Object containing the following keys
  - **assigns** - *object* - Any email data attributes that will be replaced in the mustache email template

```javascript
const { Sendable } = require('sendable')

return Sendable.render(
  123, {
    assigns: {
      firstName: "John",
      age: 28
    },
  }
)
```

### Email

The `email` method renders your email template and returns the HTML in response. It accepts two arguments and returns a `Promise` object.

- **templateId** - *integer* - This is your Sendable template id
- **params** - *object* - Object containing the following keys
  - **to** - *string* - This is the recipient's email address
  - **from** - *string* - This is the sender's email address
  - **assigns** - *object* - Any email data attributes that will be replaced in the `mustache` email template

```javascript
const { Sendable } = require('sendable')

return Sendable.email(
  123, {
    from: 'me@awesome.com',
    to: 'john@doe.com',
    assigns: {
      firstName: "John",
      age: 28
    },
  }
)
```
