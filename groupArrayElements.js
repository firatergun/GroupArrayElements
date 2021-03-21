const log = console.log;

/**
 * Returns an array divided into .
 *
 * @param array {Array} Array to split
 * @param N {Integer} Number of groups
 */
function groupArrayElements(array, N=1){
    //Return undefined when: 
    // - N is 0 or negative
    // - array is Empty
    // - N > array.length 
    if((N > array.length) || array.length == 0 || N <= 0 ){
        return undefined;
    }
    let results = [];
    let chunkSize;
    chunkSize = Math.ceil(array.length/N);
    // log(`Array: ${array}, divide into: ${N}`);
    while (array.length) {
        N-=1;
        results.push(array.splice(0, chunkSize));
        chunkSize = Math.ceil(array.length/(N));
    }
    // log('Result: ', results);    
    return results;
}
module.exports = { groupArrayElements };

