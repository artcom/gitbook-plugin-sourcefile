# gitbook-plugin-sourcefile

Include source code from external file

## Installation:

`$ npm install artcom/gitbook-plugin-sourcefile --save`

Add this to `book.json`:
```
{
    "plugins": ["sourcefile"]
}
```

## Usage

```
{{ "./index.html" | sourcefile }}
```
