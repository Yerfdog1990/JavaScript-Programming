/*
The diﬀerences between null and undefined null and undefined share abstract equality == but not strict equality ===,
    null == undefined // true
    null === undefined // false
They represent slightly diﬀerent things:
    undefined represents the absence of a value, such as before an identifier/Object property has been created
    or in the period between identifier/Function parameter creation and it's first set, if any.
    null represents the intentional absence of a value for an identifier or property which has already been created.
They are diﬀerent types of syntax:
    undefined is a property of the global Object, usually immutable in the global scope. This means anywhere you
    can define an identifier other than in the global namespace could hide undefined from that scope (although
    things can still be undefined)
    null is a word literal, so it's meaning can never be changed and attempting to do so will throw an Error.
The similarities between null and undefined
    null and undefined are both falsy.
    if (null) console.log("won't be logged");
    if (undefined) console.log("won't be logged");
    Neither null or undefined equal false (see this question).
false == undefined // false
false == null // false
false === undefined // false
false === null // false
Using undefined
    If the current scope can't be trusted, use something which evaluates to undefined, for example void 0;.
    If undefined is shadowed by another value, it's just as bad as shadowing Array or Number.
    Avoid setting something as undefined. If you want to remove a property bar from an Object foo, delete
    foo.bar; instead.
    Existence testing identifier foo against undefined could throw a Reference Error, use typeof foo against
    "undefined" instead.
 */