function lengthOfLastWord(s: string): number {
    s = s.trim();

    const lastSpaceIndex = s.lastIndexOf(" ")
    return s.length - lastSpaceIndex - 1;
    
};