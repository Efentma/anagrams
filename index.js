function sortString(str) {
    return str.split('').sort().join('');
}

function groupAnagrams(words) {
    const anagram = {};
    for (let word of words) {
        const sortedWord = sortString(word);
        if (anagram.hasOwnProperty(sortedWord)) {
            anagram[sortedWord].push(word);
        } else {
            anagram[sortedWord] = [word];
        }
    }

    const result = [];
    for (let key in anagram) {
        result.push(anagram[key]);
    }
    return result
}

const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];

console.log(groupAnagrams(words))