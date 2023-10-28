# string-tools-pro

**Tiny** & **versatile** Node.js library for in-depth text analysis, including character, word, and sentence counting, punctuation analysis, case sensitivity, email and URL detection, and more. Perform **text manipulation** and **data extraction** effortlessly. **No external dependencies** needed.

## Installation

To get started with **string-tools-pro**, you can easily install it via npm:

```bash
npm install string-tools-pro
```

## Usage

### Importing the Package

To use **string-tools-pro** in your Node.js project, import it as follows:

```javascript
const stringTools = require('string-tools-pro');
```

## Functions and Sub-Functions
- [analyzeText()](https://github.com/VishwaGauravIn/string-tools-pro#analyzetextinputtext)
- [findQueryFromURL()](https://github.com/VishwaGauravIn/string-tools-pro#findqueryfromurlurl)
- [findDomainFromURL()](https://github.com/VishwaGauravIn/string-tools-pro#finddomainfromurlurl)
- [extractCookie()](https://github.com/VishwaGauravIn/string-tools-pro#extractcookiecookiestring)
- [extractEmails()](https://github.com/VishwaGauravIn/string-tools-pro#extractemailsinputtext)
- [extractURLs()](https://github.com/VishwaGauravIn/string-tools-pro#extracturlsinputtext)

### `analyzeText(inputText)`

The `analyzeText` function serves as a one-stop solution for comprehensive text analysis. It computes a variety of metrics related to the input text, providing a detailed overview of its characteristics.

**Usage:**

```javascript
const inputText = 'This is a sample text. It contains sentences.';
const analysisResult = stringTools.analyzeText(inputText);
console.log(analysisResult);
```

**Example of the Returned Object:**

```javascript
{
  charCount: 41,
  wordCount: 8,
  sentenceCount: 2,
  newLineCount: 0,
  punctuationCount: 3,
  consonantCount: 20,
  vowelCount: 21,
  spaceConsumedOnDisk: 41,
  capitalLetters: 3,
  capitalPercentage: '7.32',
  smallLetters: 18,
  smallPercentage: '43.90',
  consonantPercentage: '51.28',
  vowelPercentage: '48.72',
  isEmail: false,
  isURL: false,
  alphanumericText: 'ThisisasampletextItcontainssentences',
  whitespaceCount: 7
}
```

In this example, the input text is "This is a sample text. It contains sentences." The `analyzeText` function returns an object with various metrics related to the text, including character count, word count, sentence count, punctuation count, and more. The metrics provide a detailed analysis of the input text.

### `findQueryFromURL(url)`

The `findQueryFromURL` function extracts and returns the query parameters from a URL in the form of a JSON object.

**Usage:**

```javascript
const url = 'https://www.example.com/search?query=test&page=1';
const queryParameters = stringTools.findQueryFromURL(url);
console.log(queryParameters);
```

**Example of the Returned Object:**

```javascript
{
  query: 'test',
  page: '1'
}
```

The function retrieves the query parameters from the given URL and returns them as a JSON object. The resulting JSON object represents the key-value pairs from the URL's query string.

### `findDomainFromURL(url)`

The `findDomainFromURL` function extracts and returns the domain from a URL.

**Usage:**

```javascript
const url = 'https://www.example.com/search?query=test&page=1';
const domain = stringTools.findDomainFromURL(url);
console.log(domain);
```

**Example of the Returned String:**

```
'www.example.com'
```

This function isolates the domain portion of the provided URL and returns it as a string. The extracted domain typically represents the host of the URL.

### `extractCookie(cookieString)`

The `extractCookie` function parses a cookie string and returns the cookies as a JSON object.

**Usage:**

```javascript
const cookieString = 'cookie1=value1; cookie2=value2; cookie3=value3';
const cookies = stringTools.extractCookie(cookieString);
console.log(cookies);
```

**Example of the Returned Object:**

```javascript
{
  cookie1: 'value1',
  cookie2: 'value2',
  cookie3: 'value3'
}
```

This function takes a semicolon-delimited cookie string and separates it into key-value pairs. The result is returned as a JSON object with the cookie names as keys and their corresponding values as values.

### `extractEmails(inputText)`

The `extractEmails` function extracts all email addresses from the input text and returns them as an array.

**Usage:**

```javascript
const inputText = 'This is an email: test@example.com and another one: contact@mywebsite.com';
const emails = stringTools.extractEmails(inputText);
console.log(emails);
```

**Example of the Returned Array:**

```javascript
['test@example.com', 'contact@mywebsite.com']
```

This function utilizes regular expressions to identify email addresses within the input text. All discovered email addresses are returned as an array of strings.

### `extractURLs(inputText)`

The `extractURLs` function identifies and returns all URLs present in the input text as an array.

**Usage:**

```javascript
const inputText = 'Visit our website at https://www.example.com or check out our blog at http://blog.example.com';
const urls = stringTools.extractURLs(inputText);
console.log(urls);
```

**Example of the Returned Array:**

```javascript
['https://www.example.com', 'http://blog.example.com']
```

This function employs regular expressions to locate URLs in the input text. The discovered URLs are returned as an array of strings.

## License

**string-tools-pro** is distributed under the Apache 2.0 license.

## Contributions

Contributions to this package are encouraged. If you encounter issues or have suggestions for enhancements, please feel free to open

 an issue or submit a pull request on [GitHub](https://github.com/VishwaGauravIn/string-tools-pro).

## Author

This package was developed by [Vishwa Gaurav](https://itsvg.in).

## Support

For support and inquiries, please contact [itsvgin@gmail.com](mailto:itsvgin@gmail.com).

We hope that **string-tools-pro** proves to be an invaluable asset for your text analysis and manipulation needs. Enjoy the functionality it offers!
