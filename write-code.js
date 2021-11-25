const addToZero=arr=>arr.reduce((a,c,i)=>arr.includes(-c)&&arr.indexOf(-c)!=i?true:a,false);
//the runtime of addToZero is O(n^2) - 'Big O of n squared' - reduce passes over the whole array making it O(n), nesting array.includes and array.indexOf methods, which are likely to be O(n) themselves, makes this exponential.
// the space complexity of addToZero is O(n) because as the length of the string (which is an array of characters) grows, the memory required to store it will increase linearly.

const hasUniqueChars=str=>str.split('').reduce((a,c,i,arr)=>arr.indexOf(c)==arr.lastIndexOf(c)?a:false,true);
// the runtime of hasUniqueChars is O(n^2). Splitting the string into an array is O(n) as is the basic process of reduce. However, given that the array.indexOf and array.lastIndexOf methods are likely both O(n) themselves, having them nested in the reduce causes this to be a O(n^2) solution.
// the space complexity of hasUniqueChars is O(n) because as the length of the string (which is an array of characters) grows, the memory required to store it will increase linearly. 

const isPangram=str=>{

    const letters = new Set()
    for (let i=0; i<str.length; i++) {
        if (str[i].toLowerCase().charCodeAt(0) >= 97 && str[i].toLowerCase().charCodeAt(0) <= 122) {
            letters.add(str[i].toLowerCase())
            if (letters.size = 26) {
                return true;
            }
        }
    }
    return false;
}
// the runtime of isPangram is O(n) - (worst case, it makes a full pass over the array and the set of letters in never completed. All of the string and set functions should be O(1) and therefore won't make the function exponential)
// the space complexity of isPangram is O(n) because as the length of the string (which is an array of characters) grows, the memory required to store it will increase linearly.


const findLongestWord=arr=>arr.map(c=>c.length).reduce((a,c)=>Math.max(a, c));
// the runtime of findLongestWord is O(n) - (it makes a single pass over the array to map it to its length and a single pass over the array to reduce the array to its largest length, 2n is O(n))
// the space complexity of findLongestWord is O(n) because as the length of the array grows, the memory required to store it will increase linearly.