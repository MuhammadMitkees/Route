var counter;

console.log(counter);

var text = document.getElementById("text").innerHTML;
var author = document.getElementById("author").innerHTML;

function btnFires() {
  counter = Math.floor(Math.random() * 11); // 4

  switch (counter) {
    case 1:
      text = `Be yourself; everyone else is already taken.`;
      author = " Oscar Wilde";
      break;
    case 2:
      text = `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`;
      author = " Oscar Wilde";
      break;
    case 3:
      text = `Be yourself; everyone else is already taken.`;
      author = " Albert Einstein";
      break;
    case 4:
      text = `So many books, so little time.`;
      author = " Frank Zappa";
      break;
    case 5:
      text = `A room without books is like a body without a soul.`;
      author = " Marcus Tullius Cicero";

      break;
    case 6:
      text = `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`;
      author = " Bernard M. Baruch";
      break;
    case 7:
      text = `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening,And live like it's heaven on earth.`;
      author = " William W. Purkey";
      break;
    case 8:
      text = `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`;
      author = " Dr. Seuss";
      break;
    case 9:
      text = `You only live once, but if you do it right, once is enough.`;
      author = " Mae West";
      break;
    case 10:
      text = `Be the change that you wish to see in the world.`;
      author = " Mahatma Gandhi";
      break;
    default:
      break;
  }

  document.getElementById("text").innerHTML = text;
  document.getElementById("author").innerHTML = author;
}
