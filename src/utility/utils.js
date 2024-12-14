export function coverMinutes (minutes) {
    const hours =Math.floor(minutes/60);
    const remainingTime =minutes %60;
    return `${hours}h ${remainingTime}m`;
    
}