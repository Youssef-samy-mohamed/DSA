/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
//  marry = 180 , john = 165 
// key: name  , value: height
// then i will check who is bigger 
var sortPeople = function(names, heights) {
// i will be the them in an array to sort them easily 

    let people = []

    for( let i = 0 ; i < names.length ; i++ ){
        people.push({
            name: names[i],
            height: heights[i]
        })
    } 
    
    
    people.sort((a , b )=>  b.height - a.height );

        return people.map(person => person.name)


};