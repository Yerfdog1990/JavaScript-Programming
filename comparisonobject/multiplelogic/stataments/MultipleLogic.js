// You can group multiple boolean logic statements within parenthesis in order to create a more complex logic
// evaluation, especially useful in if statements.


// Using multiple boolean logic statements to demonstrate grouped logic:
const age = 18;
const height = 5.11;
const status = 'royalty';
const hasInvitation = true;
if ((age >= 18 && height >= 5.11) || (status === 'royalty' && hasInvitation)) {
    console.log('You can enter our club');
}

// Breaking the logic into variables to make it more readable:
const age1 = 18;
const height1 = 5.11;
const status1 = 'royalty';
const hasInvitation1 = true;
const isLegal = age1 >= 18;
const tall = height1 >= 5.11;
const suitable = isLegal && tall;
const isRoyalty = status === 'royalty';
const specialCase = isRoyalty && hasInvitation1;
const canEnterOurBar = suitable || specialCase;

if (canEnterOurBar) console.log('You can enter our club');