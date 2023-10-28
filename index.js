/* ---------------------------------------------

            </> with 💛 by Vishwa Gaurav
    GitHub : https://github.com/VishwaGauravIn
              Website : https://itsvg.in

------------------------------------------------ */

function analyzeText(inputText) {
  const charCount = inputText.length;
  const wordCount = inputText
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const sentenceCount = inputText
    .split(/[.!?]/)
    .filter((sentence) => sentence.length > 0).length;
  const newLineCount = (inputText.match(/\n/g) || []).length;
  const punctuationCount = inputText
    .split(/[\s,.!?]/)
    .filter((punctuation) => punctuation.length > 0).length;
  const consonantCount = inputText.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  const vowelCount = inputText.match(/[aeiou]/gi).length;
  const spaceConsumedOnDisk = calcDiskUsage(inputText);
  const capitalLetters = inputText.match(/[A-Z]/g).length;
  const smallLetters = inputText.match(/[a-z]/g).length;

  const totalLetters = capitalLetters + smallLetters;
  const consonantPercentage = ((consonantCount / totalLetters) * 100).toFixed(
    2
  );
  const vowelPercentage = ((vowelCount / totalLetters) * 100).toFixed(2);
  const capitalPercentage = ((capitalLetters / totalLetters) * 100).toFixed(2);
  const smallPercentage = ((smallLetters / totalLetters) * 100).toFixed(2);

  const isEmail = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i.test(inputText);
  const isURL = /https?:\/\/[^\s/$.?#].[^\s]*/i.test(inputText);

  const alphanumericText = inputText.replace(/[^0-9a-z]/gi, "");
  const whitespaceCount = inputText.match(/\s/g).length;

  return {
    charCount,
    wordCount,
    sentenceCount,
    newLineCount,
    punctuationCount,
    consonantCount,
    consonantPercentage,
    vowelCount,
    vowelPercentage,
    spaceConsumedOnDisk,
    capitalLetters,
    capitalPercentage,
    smallLetters,
    smallPercentage,
    isEmail,
    isURL,
    alphanumericText,
    whitespaceCount,
  };
}

function findQueryFromURL(url) {
  const urlObject = new URL(url);
  const queryJSON = {};

  for (const [key, value] of urlObject.searchParams.entries()) {
    queryJSON[key] = value;
  }

  return queryJSON;
}

function findDomainFromURL(url) {
  const urlObject = new URL(url);
  return urlObject.hostname;
}

function extractCookie(cookieString) {
  const cookiesJSON = {};

  cookieString.split(";").forEach((cookie) => {
    const parts = cookie.split("=");
    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();
      cookiesJSON[key] = value;
    }
  });

  return cookiesJSON;
}

function calcDiskUsage(inputText) {
  // Assuming UTF-8 encoding, one character can take 1 to 4 bytes.
  let totalBytes = 0;

  for (let i = 0; i < inputText.length; i++) {
    const charCode = inputText.charCodeAt(i);

    if (charCode <= 0x7f) {
      totalBytes += 1; // 1-byte character
    } else if (charCode <= 0x7ff) {
      totalBytes += 2; // 2-byte character
    } else if (charCode <= 0xffff) {
      totalBytes += 3; // 3-byte character
    } else {
      totalBytes += 4; // 4-byte character
    }
  }
  return totalBytes;
}

function extractURLs(inputText) {
  const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
  const urls = inputText.match(urlRegex) || [];
  return urls;
}

function extractEmails(inputText) {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi;
  const emails = inputText.match(emailRegex) || [];
  return emails;
}

module.exports = {
  analyzeText,
  findQueryFromURL,
  findDomainFromURL,
  extractCookie,
  extractEmails,
  extractURLs,
};

const text =
  "This is a sample text. It contains sentences. vgmaza@gmail.ckm http://apc.com";
const analysisResult = analyzeText(text);
console.log("Text Analysis Result:", analysisResult);

const url = "https://www.example.com/search?query=test&page=1";
const query = findQueryFromURL(url);
console.log("Query from URL:", query);

const domain = findDomainFromURL(url);
console.log("Domain from URL:", domain);

const cookieString = "cookie1=value1; cookie2=value2; cookie3=value3";
const cookies = extractCookie(cookieString);
console.log("Extracted Cookies:", cookies);
const urls = extractURLs(text);
const emails = extractEmails(text);

console.log("URLs:", urls);
console.log("Emails:", emails);
