function takeCharacters(s: string, k: number): number {
    if (k === 0) return 0; 

    const totalCount = { a:0 , b:0 , c:0 }
    for ( let ch of s ) {
        totalCount[ch]++
    }

    if ( totalCount.a < k || totalCount.b < k || totalCount.c < k ){
        return -1;
    }

  let left = 0;
   let maxWindow = 0 ; 
   const count = { a:0 , b:0 , c:0} 

   for ( let right = 0 ; right < s.length ; right++ ){
    count [s[right]]++;


    while (
        count.a > totalCount.a - k ||
        count.b > totalCount.b - k || 
        count.c > totalCount.c - k 

    ){
        count[s[left]]--;
        left++;
    }


maxWindow = Math.max( maxWindow , right - left + 1)

   }
   return s.length - maxWindow

    
}
