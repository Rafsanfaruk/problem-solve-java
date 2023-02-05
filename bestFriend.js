// { name: "abul", friend: "babul" },

// { name: "babul", friend: "abul" }

// { name: "abul", friend: "kabul" },

// { name: "kabul", friend: "sabul" }

// { name: "doe", friend: "alex" },

// { name: "john", friend: "doe" }

function isBestFriend(objectOne,objectTwo){
    if(objectOne.name ==objectTwo.friend && objectTwo.name == objectOne.friend){
        return true;
    }
    else{
        return false;
    }
}

const bestFriend =isBestFriend( { name: "abul", friend: "kabul" },

{ name: "kabul", friend: "sabul" });
console.log(bestFriend);

