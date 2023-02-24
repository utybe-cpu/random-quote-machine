const API_URL = "https://api.quotable.io/random";

const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetQuoteBtn = document.getElementById("tweet-quote");

function getRandomQuote() {
  return axios.get(API_URL).then((res) => res.data);
}

function setQuote(quote) {
  quoteText.textContent = `"${quote.content}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

function setRandomQuote() {
  getRandomQuote().then((quote) => setQuote(quote));
}

function tweetQuote() {
  const quote = quoteText.textContent.trim();
  const author = quoteAuthor.textContent.trim();
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", setRandomQuote);
tweetQuoteBtn.addEventListener("click", tweetQuote);

setRandomQuote();
