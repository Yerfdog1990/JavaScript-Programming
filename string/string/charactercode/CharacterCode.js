// The method charCodeAt retrieves the Unicode character code of a single character:
const str1 = "A".charCodeAt();
console.log("Character code of \"A\": ", str1);
const str2 = "B".charCodeAt();
console.log("Character code of \"B\": ", str2);
const str3 = "C".charCodeAt();
console.log("Character code of \"C\": ", str3);
const str4 = "D".charCodeAt();
console.log("Character code of \"D\": ", str4);

// Using the 0-based position of the character is passed as a parameter to charCodeAt:
const str5 = "ABCD".charCodeAt(0);
console.log("\nCharacter code of \"A\": ", str5);
const str6 = "ABCD".charCodeAt(1);
console.log("Character code of \"B\": ", str6);
const str7 = "ABCD".charCodeAt(2);
console.log("Character code of \"C\": ", str7);
const str8 = "ABCD".charCodeAt(3);
console.log("Character code of \"D\": ", str8);

// Some Unicode symbols don't fit in a single character, and instead require two UTF-16 surrogate pairs to encode.
// This is the case of character codes beyond 216 - 1 or 63553. These extended character codes or code point values
// can be retrieved with codePointAt:

// The Grinning Face Emoji has code point 128512 or 0x1F600
const codePoint = "☀☁☂☃☄★☆☉☊☋☌☍☎☏☑☒☓☕☘☠☢☣☦☮☯☸☽☾♠♡♢♣♤♥♦♧♨♩♪♫♬⚀⚁⚂⚃⚄⚅⚡⚢⚣⚤⚥⚦⚧⚨⚪⚫⚬⚭⚮⚯⛀⛁⛂⛃⛄⛅⛈⛉⛊⛋⛌⛏⛑⛒⛓⛔⛪⛰⛱⛲⛳⛴⛵⛷⛸⛹⛺⛽✀✁✂✃✄✅✆✇✈✉✌✍✎✏✐✑✒✔✕✖✗✘✙✚✛✜✝✞✟✠✡✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊❋❌❍❏❐❑❒❖❘❙❚❛❜❝❞❡❢❣❤❥❦❧❨❩❪❫❬❭❮❯❰❱❲❳❴❵❶❷❸❹❺❻❼❽❾❿➀➁➂➃➄➅➆➇➈➉➊➋➌➍➎➏➐➑➒➓";
console.log("Code point of \"☀\": ", codePoint.codePointAt(0));
console.log("Code point of \"☁\": ", codePoint.codePointAt(1));
console.log("Code point of \"☂\": ", codePoint.codePointAt(2));
console.log("Code point of \"☃\": ", codePoint.codePointAt(3));
console.log("Code point of \"☄\": ", codePoint.codePointAt(4));
console.log("Code point of \"★\": ", codePoint.codePointAt(5));
console.log("Code point of \"☆\": ", codePoint.codePointAt(6));
console.log("Code point of \"☉\": ", codePoint.codePointAt(7));
console.log("Code point of \"☊\": ", codePoint.codePointAt(8));
console.log("Code point of \"☋\": ", codePoint.codePointAt(9));
console.log("Code point of \"☌\": ", codePoint.codePointAt(10));
console.log("Code point of \"☍\": ", codePoint.codePointAt(11));
console.log("Code point of \"☎\": ", codePoint.codePointAt(12));
console.log("Code point of \"☏\": ", codePoint.codePointAt(13));
console.log("Code point of \"☑\": ", codePoint.codePointAt(14));
console.log("Code point of \"☒\": ", codePoint.codePointAt(15));
console.log("Code point of \"☓\": ", codePoint.codePointAt(16));
console.log("Code point of \"☕\": ", codePoint.codePointAt(17));
console.log("Code point of \"☘\": ", codePoint.codePointAt(18));
console.log("Code point of \"☠\": ", codePoint.codePointAt(19));
console.log("Code point of \"☢\": ", codePoint.codePointAt(20));
console.log("Code point of \"☣\": ", codePoint.codePointAt(21));
console.log("Code point of \"☦\": ", codePoint.codePointAt(22));
console.log("Code point of \"☮\": ", codePoint.codePointAt(23));
console.log("Code point of \"☯\": ", codePoint.codePointAt(24));
console.log("Code point of \"☸\": ", codePoint.codePointAt(25));
console.log("Code point of \"☽\": ", codePoint.codePointAt(26));
console.log("Code point of \"☾\": ", codePoint.codePointAt(27));
