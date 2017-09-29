# Sendable Node Client

## Installation

```bash
npm install sendable
```

# Setup

You can either use the environment variables, or configure the client manually.

### Option 1 - Environment Variable

Add the following environment variable to your application. You can get your API key from the project settings page of your Sendable dashboard.

`SENDABLE_API_KEY`=`YOUR API KEY`

### Option 2 - Manual Configuration

If you don't want to set an environment variable, use the following code:

```javascript
const { Client } = require('sendable')
const sendable = new Client('<SENDABLE_API_KEY>')
```

# Usage

## Render Method

The `render` method renders your email template and returns the HTML in response. It accepts two arguments and returns a `Promise` object.

- **template** - *integer* - This is your Sendable email template id
- **params** - *object* - Object containing the following keys
  - **data** - *object* - Any email data attributes that will be replaced in the mustache email template

#### Render Request

```javascript
const { Sendable } = require('sendable')

return Sendable.render(
  123, {
    data: {
      firstName: "John",
      age: 28
    },
  }
).then(result => {
  // response goes here
})
```

#### Render Response

```javascript
{
  success: true,
  email: {
    html: "<html><head></head><body><h1>Sample HTML</h1></body></html>",
    plain: "Sample Plain Text",
    subject: "Sample Subject",
    preheader: "Sample Preheader"
  }
}
```

## Email Method

The `email` method sends the email using your configured SMTP mailer in Sendable. It accepts two arguments and returns a `Promise` object.

- **template** - *integer* - This is your Sendable template id
- **params** - *object* - Object containing the following keys
  - **to** - *string* - This is the recipient's email address
  - **from** - *string* - This is the sender's email address
  - **data** - *object* - Any email data attributes that will be replaced in the `mustache` email template

#### Email Request
```javascript
const { Sendable } = require('sendable')

return Sendable.email(
  123, {
    from: 'me@awesome.com',
    to: 'john@doe.com',
    data: {
      firstName: "John",
      age: 28
    },
  }
).then(result => {
  // response goes here
})
```

#### Email Response

```javascript
{
  success: true,
  email: {
    html: "<html><head></head><body><h1>Sample HTML</h1></body></html>",
    plain: "Sample Plain Text",
    subject: "Sample Subject",
    preheader: "Sample Preheader"
  },
  delivery: {}
}
```

The `delivery` key contains the response from your ESP.
