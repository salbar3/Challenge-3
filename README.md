# Challenge-3

![Screen Shot 2022-03-01 at 17 40 28 PM  2](https://user-images.githubusercontent.com/96930257/156278421-244f556a-8df8-406e-8b60-ec94549e98c6.png)

I started by creating arrays full of letters, symbols, and numbers, that would be used for random generation later in the code.

I then created functions for each array that would would randomly generate a character from their respective index.

I added window prompts/confirms in the questions function and stored the data in an object that would be called later in the generatepassword function.

I then defined the generatepassword function by adding a for loop that would go through the indexes of the of the character arrays ,depending on the responses from the questions function, and randomly generate characters from them. Those randomly generated characters would then be formed into a string the length that was chosen by the user and the given code took care of the rest.

This results in a randomly generated password that will appear in the browser that meets the criteria that the user selects.


