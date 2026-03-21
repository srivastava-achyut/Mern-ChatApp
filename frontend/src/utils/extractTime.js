export function extractTime(dateString) {
    const date = new Date(dateString);
    // Convert to string first, then pad to 2 digits with '0'
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${hours}:${minutes}`;
}