# IFFTTT

**IF** -> **F**ilter **T**hat -> **T**hen **T**hat

A webhook built for [ifttt](https://ifttt.com/home): take in you input -> filter it -> pipes it to anywhere by programming

# Configuration

- `URL`: https://iffttt-git-main-beetcb.vercel.app/?filter=.*(code|%E9%AA%8C%E8%AF%81%E7%A0%81).*

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
