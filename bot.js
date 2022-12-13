//Define variables
let inputField;
let submitButton;
let isIndex;
let wordAfterIs;

//Function to get the text content of the webpage
const getPageTextContent = () => {
  let pageContent = document.body.innerText;
  return pageContent;
};

//Function to find the index of the word 'is' in the page content using indexof
const findIsIndex = (pageContent) => {
  isIndex = pageContent.indexOf('is');
  return isIndex;
};

//Function to get the word after 'is' in the page content + 10 spaces
const getWordAfterIs = (pageContent, isIndex) => {
  wordAfterIs = pageContent.substring(isIndex + 3, isIndex + 10);
  return wordAfterIs;
};

//Function to get the input field on the webpage. Using query selector
const getInputField = () => {
  inputField = document.querySelector('input[type="text"]');
  return inputField;
};

//Function to get the submit button on the webpage. change value/type as is depending on page.
const getSubmitButton = () => {
  submitButton = document.querySelector('input[value="submit"]');
  return submitButton;
};

//Function to run the bot
const runBot = () => {
  //Get the page content
  let pageContent = getPageTextContent();
  let isIndex = findIsIndex(pageContent);
  let wordAfterIs = getWordAfterIs(pageContent, isIndex);
  let inputField = getInputField();
  let submitButton = getSubmitButton();
  inputField.value = wordAfterIs;

  submitButton.click();
};
