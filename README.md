# IFFTTT

**IF** -> **F**ilter **T**hat -> **T**hen **T**hat

A webhook built for [ifttt](https://ifttt.com/home): take in your input -> filter it -> pipe it to anywhere by programming

# Configuration

- `URL`: `https://iffttt.vercel.app/?filter=.*(code|%E9%AA%8C%E8%AF%81%E7%A0%81).*`

  Please specify a `filter` paramater using [js regexp: make sure to encode it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)

- `Method`: POST

- `Content Type`: application/json

- `Body`:

  ```json
  {
    "text": "Text",
    "from": "FromNumber",
    "occurred": "OccurredAt"
  }
  ```

# Example

- [`api/iffttt.ts`](./api/iffttt.ts): filter(`/.*(code|验证码).*/i`) SMS message received on your phone, send an email to `i@beetcb.com` using @sendgrid/mail

  "demo":

  ![](https://i.imgur.com/9RCD51o.png)

  ![](https://i.imgur.com/MqXf8gl.jpg)
