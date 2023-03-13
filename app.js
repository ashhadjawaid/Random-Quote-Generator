let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote : "Your time is limited,so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking." ,
    person : `Steve Jobs`
},{
    quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,
    person : `James Cameron`
},{
    quote : "It is during our darkest moments that we must focus to see the light." ,
    person : `Aristotle`
},{
    quote : "Many of life's failures are people who did not realize how close they were to success when they gave up." ,
    person : `Thomas A. Edison`
},{
    quote : "Never let the fear of striking out keep you from playing the game." ,
    person : `Babe Ruth`
},{
    quote :"Life is made of ever so many partings welded together." ,
    person :`Charles Dickens`
}]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})