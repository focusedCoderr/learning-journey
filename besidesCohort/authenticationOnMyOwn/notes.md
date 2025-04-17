#### Mongo DB Behaviour

    //null will keep the key and set value to null,
    // but if value is undefined, mongodb treats it as
    // if this key doesn't exist and it will not be
    // shown in the document
    existingUser.verificationToken = undefined;
    // existingUser.verificationToken = null;
