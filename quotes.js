const quotes = [
    {quote : "Success usually comes to those who are too busy to be looking for it.",
author : "-Henry David Thoreau"},
{quote : "The way to get started is to quit talking and begin doing.",
author : "-Walt Disney"},
{quote : "Success seems to be connected with action. Successful people keep moving.",
author : "-Conrad Hilton"},
{quote : "In order to succeed, we must first believe that we can.",
author : "-Nikos Kazantzakis"},
{quote : "The only place where success comes before work is in the dictionary.",
author : "-Vidal Sassoon"},
]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;