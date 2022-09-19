const quotes = [
    {quote : " fkasdkfmaksdmf . ",
author : "asdfasdfasdfa"},
{quote : "adsfasdfasd",
author : "fasdnfkdsa"}
]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;