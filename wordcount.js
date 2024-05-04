#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// diplay  colourfull name
console.log(chalk.redBright("\t\t+++++++++++++++++++++"));
console.log(chalk.bold.italic.greenBright("\n\t\t<!!!>WORD COUNTER<!!!>\n"));
console.log(chalk.redBright("\t\t+++++++++++++++++++++"));
// taking inpt from user
let user_text = await inquirer.prompt([
    {
        name: "paragraph",
        type: "input",
        message: "Enter your text."
    }
]);
// now triming and spliting paragraph to count words
let word_count = user_text.paragraph.trim().split(" ").length;
// now printing the out put 
console.log("\nTotal words are \n" + chalk.bold.red(word_count));
