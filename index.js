/* ---------------------------------------------
              </> with 💛 by Vishwa Gaurav
     GitHub : https://github.com/VishwaGauravIn
              Website : https://itsvg.in
------------------------------------------------ */

/**
 * Analyzes text and returns various statistical information
 * @param {string} inputText - The text to analyze
 * @returns {Object} Analysis results
 */
function analyzeText(inputText) {
  if (!inputText || typeof inputText !== "string") {
    throw new Error("Input must be a non-empty string");
  }

  const charCount = inputText.length;
  const wordCount = inputText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const sentenceCount = inputText
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0).length;

  const newLineCount = (inputText.match(/\n/g) || []).length;
  const punctuationCount = (
    inputText.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g) || []
  ).length;

  const consonantMatch = inputText.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
  const consonantCount = consonantMatch.length;

  const vowelMatch = inputText.match(/[aeiou]/gi) || [];
  const vowelCount = vowelMatch.length;

  const spaceConsumedOnDisk = calcDiskUsage(inputText);

  const capitalLettersMatch = inputText.match(/[A-Z]/g) || [];
  const capitalLetters = capitalLettersMatch.length;

  const smallLettersMatch = inputText.match(/[a-z]/g) || [];
  const smallLetters = smallLettersMatch.length;

  const totalLetters = capitalLetters + smallLetters;

  const consonantPercentage = totalLetters
    ? ((consonantCount / totalLetters) * 100).toFixed(2)
    : "0.00";
  const vowelPercentage = totalLetters
    ? ((vowelCount / totalLetters) * 100).toFixed(2)
    : "0.00";
  const capitalPercentage = totalLetters
    ? ((capitalLetters / totalLetters) * 100).toFixed(2)
    : "0.00";
  const smallPercentage = totalLetters
    ? ((smallLetters / totalLetters) * 100).toFixed(2)
    : "0.00";

  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputText);
  const isURL =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i.test(
      inputText
    );

  const alphanumericText = inputText.replace(/[^0-9a-z]/gi, "");
  const whitespaceCount = (inputText.match(/\s/g) || []).length;

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

/**
 * Extracts query parameters from a URL
 * @param {string} url - The URL to parse
 * @returns {Object} Query parameters as key-value pairs
 */
function findQueryFromURL(url) {
  try {
    const urlObject = new URL(url);
    const queryJSON = {};

    for (const [key, value] of urlObject.searchParams.entries()) {
      queryJSON[key] = value;
    }

    return queryJSON;
  } catch (error) {
    throw new Error("Invalid URL provided");
  }
}

/**
 * Extracts domain from a URL
 * @param {string} url - The URL to parse
 * @returns {string} The domain name
 */
function findDomainFromURL(url) {
  try {
    const urlObject = new URL(url);
    return urlObject.hostname;
  } catch (error) {
    throw new Error("Invalid URL provided");
  }
}

/**
 * Parses cookie string into an object
 * @param {string} cookieString - The cookie string to parse
 * @returns {Object} Parsed cookies as key-value pairs
 */
function extractCookie(cookieString) {
  if (!cookieString || typeof cookieString !== "string") {
    return {};
  }

  const cookiesJSON = {};

  cookieString.split(";").forEach((cookie) => {
    const parts = cookie.split("=");
    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();
      if (key) {
        cookiesJSON[key] = value;
      }
    }
  });

  return cookiesJSON;
}

/**
 * Calculates the disk space usage of a string in bytes
 * @param {string} inputText - The text to analyze
 * @returns {number} Number of bytes the text would occupy
 */
function calcDiskUsage(inputText) {
  if (!inputText || typeof inputText !== "string") {
    return 0;
  }

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

/**
 * Extracts URLs from text
 * @param {string} inputText - The text to analyze
 * @returns {string[]} Array of found URLs
 */
function extractURLs(inputText) {
  if (!inputText || typeof inputText !== "string") {
    return [];
  }

  const urlRegex =
    /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  return inputText.match(urlRegex) || [];
}

/**
 * Extracts email addresses from text
 * @param {string} inputText - The text to analyze
 * @returns {string[]} Array of found email addresses
 */
function extractEmails(inputText) {
  if (!inputText || typeof inputText !== "string") {
    return [];
  }

  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
  return inputText.match(emailRegex) || [];
}

module.exports = {
  analyzeText,
  findQueryFromURL,
  findDomainFromURL,
  extractCookie,
  extractEmails,
  extractURLs,
};
