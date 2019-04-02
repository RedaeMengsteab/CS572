// //simple filter Word 
String.prototype.filterWords = function (wordsToFilter) {
    return this.split(' ').map((word) => { if (wordsToFilter.includes(word)) return word = "***"; else return word }).join(' ');
}
console.log("this house is nice!".filterWords(["house", "nice!"]));

// //filter words using Promise
String.prototype.filterWords = function (wordsToFilter) {
    const str = this;
    return new Promise(function (resolve, reject) {
        resolve(str.split(' ').map((word) => { if (wordsToFilter.includes(word)) return word = "***"; else return word }).join(' '));
    }
    );
};
"this house is nice!".filterWords(["house", "nice!"]).then(data => console.log(data));

//filter words using async and await
String.prototype.filterWords = async function (wordsToFilter) {
    try {
        return await this.split(' ').map((word) => { if (wordsToFilter.includes(word)) return word = "***"; else return word }).join(' ');
    } catch (error) {
        console.log(error);
    }
}

"this house is nice!".filterWords(["house", "nice!"]).then(data => console.log(data));

//filter words using Observable.
const { Observable } = require('rxjs');

String.prototype.filterWords = function (wordsToFilter) {
    return obs$ = Observable.create((observer) => {
        const result = this.split(' ').map((word) => { if (wordsToFilter.includes(word)) return word = "***"; else return word }).join(' ');
        observer.next(result);
    })

}

const subsciption = "this house is nice!".filterWords(["house", "nice!"]);
subsciption.subscribe(
    function (result) {
        console.log(result);
    }
)