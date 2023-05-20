// Buttons
const quoteBox = document.querySelector(".quote-tabs");

const quoteLeft = document.querySelector(".fa-quote-left");

const quoteRight = document.querySelector(".fa-quote-right");

const animeQuotes = document.querySelector(".animequotes");

const philosopherQuotes = document.querySelector(".philosopherquotes");

const coffeeQuotes = document.querySelector(".coffeequotes");

const animeBox = document.getElementById("anime-box");

const philosopherBox = document.getElementById("philosopher-box");

const coffeeBox = document.getElementById("coffee-box");

const xAnime = document.querySelector(".x-anime");

const xPhilosopher = document.querySelector(".x-philosopher");

const xCoffee = document.querySelector(".x-coffee");

// Anime Quote Generators
const aniQuotes = document.querySelector(".anime-quote");

const aniAuthor = document.querySelector(".ani-author");

const apiUrl = "https://animechan.vercel.app/api/random";

const aniBtn = document.querySelector(".ani-btn");

// Philosopher Quote Generator
const philQuotesElement = document.querySelector(".phil-quote");

const philAuthorElement = document.querySelector(".phil-author");

const philUrl = "https://type.fit/api/quotes";

const philBtn = document.querySelector(".phil-btn");

//Coffee Quote Generator
const cofQuotes = document.querySelector(".coffee-quote");

const cofAuthor = document.querySelector(".coffee-author");

const cofBtn = document.querySelector(".coffee-btn");

// Buttons
const aniTwitter = document.querySelector(".anitweet");

const aniFacebook = document.querySelector(".anifb");

const philTwitter = document.querySelector(".philtweet");

const philFacebook = document.querySelector(".philfb");

const cofTwitter = document.querySelector(".coftweet");

const cofFacebook = document.querySelector(".coffb");

// Array of object
let coffeeLinesOfQuotes = [
  { text: "No one can understand the truth until he drinks of coffee’s frothy goodness.", name: "Sheik Abd-al-Kabir" },
  { text: "If it wasn’t for coffee, I’d have no discernible personality at all.", name: "David Letterman" },
  { text: "How far behind would technology be, if no one ever discovered coffee?", name: "Unknown" },
  { text: "Even bad coffee is better… than no coffee at all.", name: "David Lynch" },
  { text: "I want someone to look at me the way I look at coffee.", name: "Unknown" },
  { text: "I have measured out my life with coffee spoons.", name: "T.S. Eliot" },
  { text: "Good communication is as stimulating as black coffee, and just as hard to sleep after.", name: "Anne Morrow Lindbergh" },
  { text: "Decaffeinated coffee is kind of like kissing your sister.", name: "Bob Irwin" },
  { text: "Adventure in life is good. Consistency in coffee even better.", name: "Justina Headley" },
  { text: "Coffee is a beverage that puts one to sleep when not drank.", name: "Alphonse Allais" },
  { text: "There’s nothing sweeter than a cup of bitter coffee.", name: "Rian Aditia" },
  { text: "Doctors found traces of blood in my coffee stream.", name: "Unknown" },
  { text: "Deja Brew: The feeling that you’ve had this coffee before.", name: "Unknown" },
  { text: "I like instant gratification. It’s like instant Coffee, only it won’t keep you up all night.", name: "Jarod Kintz" },
  { text: "Caffeine and sugar—the two basic food groups.", name: "Laurell K. Hamilton" },
  { text: "Politics now is rather like going into Starbucks for a coffee.", name: "Rory Bremner" },
  { text: "Decaf? No, it’s dangerous to dilute my caffeine stream.", name: "Unknown" },
  { text: "The first cup is for the guest, the second for enjoyment, the third for the sword.", name: "Old Arabic Saying" },
  { text: "Life’s too short to drink cheap coffee.", name: "Unknown" },
  { text: "Everyone should believe in something. I believe I will have another coffee.", name: "Unknown" },
  { text: "A cup of gourmet coffee shared with a friend is happiness tasted and time well spent.", name: "Unknown" },
  { text: "Did I run out of caffeine or are you really that boring?", name: "Unknown" },
  { text: "As long as there was coffee in the world, how bad could things be?", name: "Cassandra Clare" },
  { text: "I judge a restaurant by the bread and by the coffee.", name: "Burt Lancaster" },
  { text: "I gave up coffee. It's almost worse than giving up a lover.", name: "Sandra Bullock" },
  { text: "Coffee in England is just toasted milk.", name: "Christopher Fry" },
  { text: "Decaf coffee only works if you throw it at people.", name: "Unknown" },
  { text: "Once you wake up and smell the coffee, it’s hard to go back to sleep.", name: "Fran Drescher" },
  { text: "I never drink coffee at lunch. I find it keeps me awake for the afternoon.", name: "Ronald Reagan" },
    {text: "I’m sorry, if you were right, I’d agree with you.", name: "Robin Williams"
    },
    {text: "Coffee is a way of stealing time that should by rights belong to your older self.", name: "Terry Pratchett"
    },
    {text: "We want to do a lot of stuff; we’re not in great shape. We didn’t get a good night’s sleep. We’re a little depressed. Coffee solves all these problems in one delightful little cup.",
      name: "Jerry Seinfeld"
    },
    { text: "Behind every successful woman is a substantial amount of coffee.",
      name: "Stephanie Piro"
    },
    { text: "Do you know how helpless you feel if you have a full cup of coffee in your hand and you start to sneeze?",name: "Jean Kerr"
    },
    {text: "I have measured out my life with coffee spoons.", name: "T.S. Eliot"
    },
    {text: "Way too much coffee. But if it weren’t for the coffee, I’d have no identifiable personality whatsoever.",name: "David Letterman"
    },
    { text: "Even bad coffee is better than no coffee at all.", name: "David Lynch"
    },
    { text: "Adventure in life is good; consistency in coffee even better.",name: "Justina Headley"
    },
    {text: "Coffee is a language in itself.",name: "Jackie Chan"
    },
    {text: "Without my morning coffee, I’m just like a dried-up piece of roast goat.", name: "Johann Sebastian Bach"
    },
    { text: "I orchestrate my mornings to the tune of coffee.",name: "Terri Guillemets"
    },
    {text: "Coffee is the common man’s gold, and like gold, it brings to every person the feeling of luxury and nobility.",name: "Sheik-Abd-al-Kabir"
    },
    {text: "Coffee is a hug in a mug.",name: "Unknown"
    },
    {text: "I have measured out my life with coffee spoons.", name: "Unknown"
    },
    {text: "Caffeine and sugar—the two basic food groups.",name: "Unknown"
    },
    {text: "If it wasn’t for coffee, I’d have no discernible personality at all.", name: "Unknown"
    },
    {text: "Coffee is a beverage that puts one to sleep when not drank.", name: "Alphonse Allais"
    },
    {text: "Did I run out of caffeine or are you really that boring?", name: "Unknown"
    },
    {text: "As long as there was coffee in the world, how bad could things be?",name: "Cassandra Clare"
    },
    {text: "I judge a restaurant by the bread and by the coffee.",name: "Burt Lancaster"
    },
    { text: "I gave up coffee. It's almost worse than giving up a lover.",name: "Sandra Bullock"
    },
    { text: "Coffee in England is just toasted milk.",
      name: "Christopher Fry"
    },
      { text: "Decaf coffee only works if you throw it at people.", name: "Unknown"
      },
      { text: "Once you wake up and smell the coffee, it’s hard to go back to sleep.", name: "Unknown"
      },
      { text: "I’m going to start measuring the complexity of coding tasks in coffee cups. This was a five-espresso algorithm.",name: "Unknown"
      },
      { text: "It is inhumane, in my opinion, to force people who have a genuine medical need for coffee to wait in line behind people who apparently view it as some kind of recreational activity.", name: "Unknown"
      },
      {text: "Television is not real life. In real life people actually have to leave the coffee shop and go to jobs.",name: "Unknown"
      },
      {text: "Coffee smells like freshly ground heaven.",name: "Unknown"
      },
      {text: "The road to success is paved in coffee.",name: "Unknown"
      },
      {text: "It is inhumane, in my opinion, to force people who have a genuine medical need for coffee to wait in line behind people who apparently view it as some kind of recreational activity.",name: "Unknown"
      },
      {text: "Television is not real life. In real life people actually have to leave the coffee shop and go to jobs.",name: "Unknown"
      },
      { text: "I’m sorry, if you were right, I’d agree with you.", name: "Robin Williams"
      },
      { text: "Coffee is a way of stealing time that should by rights belong to your older self.", name: "Terry Pratchett"
      },
      {text: "We want to do a lot of stuff; we’re not in great shape. We didn’t get a good night’s sleep. We’re a little depressed. Coffee solves all these problems in one delightful little cup.",
        name: "Jerry Seinfeld"
      },
      {text: "Behind every successful woman is a substantial amount of coffee.",name: "Stephanie Piro"
      },
      { text: "Do you know how helpless you feel if you have a full cup of coffee in your hand and you start to sneeze?", name: "Jean Kerr"
      },
      { text: "I have measured out my life with coffee spoons.",name: "T.S. Eliot"
      },
      {text: "Way too much coffee. But if it weren’t for the coffee, I’d have no identifiable personality whatsoever.",name: "David Letterman"
      },
      {text: "Even bad coffee is better than no coffee at all.",name: "David Lynch"
      },
      {text: "Adventure in life is good; consistency in coffee even better.", name: "Justina Headley"
      },
      {text: "Coffee is a language in itself.", name: "Jackie Chan"
      },
      {text: "Without my morning coffee, I’m just like a dried-up piece of roast goat.",name: "Johann Sebastian Bach"
      },
      {text: "I orchestrate my mornings to the tune of coffee.",name: "Terri Guillemets"
      },
      {text: "Coffee is the common man’s gold, and like gold, it brings to every person the feeling of luxury and nobility.", name: "Sheik-Abd-al-Kabir"
      },
      {text: "Coffee is a hug in a mug.",name: "Unknown"
      } 
];

// Function buttons
animeQuotes.addEventListener("click", () => {
  animeBox.classList.add("display");
  quoteBox.classList.add("removequote-tabs");
});

philosopherQuotes.addEventListener("click", () => {
  philosopherBox.classList.add("display");
  quoteBox.classList.add("removequote-tabs");
});

coffeeQuotes.addEventListener("click", () => {
  coffeeBox.classList.add("display");
  quoteBox.classList.add("removequote-tabs");
});

xAnime.addEventListener("click", () => {
  animeBox.classList.remove("display");
  quoteBox.classList.remove("removequote-tabs");
});

xPhilosopher.addEventListener("click", () => {
  philosopherBox.classList.remove("display");
  quoteBox.classList.remove("removequote-tabs");
});

xCoffee.addEventListener("click", () => {
  coffeeBox.classList.remove("display");
  quoteBox.classList.remove("removequote-tabs");
});

aniBtn.addEventListener("click", () => {
  getAnimeQuote(apiUrl);
});

philBtn.addEventListener("click", () => {
  getPhilQuote(philUrl);
});

cofBtn.addEventListener("click", getCofQuote);

aniTwitter.addEventListener("click", function() {
  window.open("https://twitter.com/intent/tweet?text=" + aniQuotes.innerHTML+ " ~ by " + aniAuthor.innerHTML, "Tweet Window", "width=600", "height=300")
});

philTwitter.addEventListener("click", function() {
  window.open("https://twitter.com/intent/tweet?text=" + philQuotesElement.innerHTML+ " ~ by " + philAuthorElement.innerHTML, "Tweet Window", "width=600", "height=300")
});

cofTwitter.addEventListener("click", function() {
  window.open("https://twitter.com/intent/tweet?text=" + cofQuotes.textContent+ " ~ by " + cofAuthor.textContent, "Tweet Window", "width=600", "height=300")
});

aniFacebook.addEventListener("click", function () {
  window.open('https://www.facebook.com/sharer.php' +aniQuotes.innerHTML+ " ~ by " + aniAuthor.innerHTML, "Facebook Window", "width=600", "height=300") 
});

philFacebook.addEventListener("click", function () {
  window.open('https://www.facebook.com/sharer.php' +philQuotesElement.innerHTML+ " ~ by " + philAuthorElement.innerHTML, "Facebook Window", "width=600", "height=300") 
});

cofFacebook.addEventListener("click", function () {
  window.open('https://www.facebook.com/sharer.php' +cofQuotes.textContent+ " ~ by " + cofAuthor.textContent, "Facebook Window", "width=600", "height=300") 
});
// aniFacebook.addEventListener('click', function() {
//   var quote = aniQuotes.innerHTML;
//   var author = aniAuthor.innerHTML;
//   var url = 'https://your-website-url.com'; // Replace with your website URL

//   // Encode the quote and author for the Facebook share URL
//   var quoteEncoded = encodeURIComponent(quote + ' ~ by ' + author);
//   var urlEncoded = encodeURIComponent(url);

//   // Open the Facebook share dialog
//   window.open('https://www.facebook.com/sharer/sharer.php?u=' + urlEncoded + '&quote=' + quoteEncoded, 'Facebook Share', 'width=600, height=300');
// });


// API Function

async function getAnimeQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  aniQuotes.innerHTML = data.quote;
  aniAuthor.innerHTML = "~" + data.character;
}

async function getPhilQuote(url) {
  const response = await fetch(url);
  let data1 = await response.json();
  const philQuotes = data1.slice(0, 1600); 
  const randomIndex = Math.floor(Math.random() * philQuotes.length);
  const randomPhilQuote = philQuotes[randomIndex];
  console.log(randomPhilQuote);
  philQuotesElement.innerHTML = randomPhilQuote.text;
  philAuthorElement.innerHTML = "~" + randomPhilQuote.author;
}
// coffeeLinesOfQuotes: this is the array of object name

function getCofQuote() {
  const randomCofIndex = Math.floor(Math.random() * coffeeLinesOfQuotes.length);
  const coffquote = coffeeLinesOfQuotes[randomCofIndex];
  cofQuotes.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${coffquote.text} <i class="fa-solid fa-quote-right"></i>`;
  cofAuthor.textContent = " ~ " + coffquote.name;
}

getAnimeQuote(apiUrl);
getPhilQuote(philUrl);