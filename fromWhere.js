export function fromWhere(regNumber) {
    if (regNumber.startsWith('CY')) return 'Bellville';
    if (regNumber.startsWith('CJ')) return 'Paarl';
    if (regNumber.startsWith('CA')) return 'Cape Town';
    return 'Unknown';
}
