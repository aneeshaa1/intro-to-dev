import oneLinerJoke from 'one-liner-joke';
import chalk from 'chalk';

var getRandomJoke = oneLinerJoke.getRandomJokeWithTag("IT");
console.log(chalk.underline.blueBright(getRandomJoke.body));