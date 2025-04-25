function isPalindrome(s: string): boolean {
    const filtered = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    const reversed = filtered.split('').reverse().join('');
    
    return filtered === reversed;
}