export function transportFee(shift) {
    if (shift === 'morning') return 'R20';
    if (shift === 'afternoon') return 'R10';
    return 'R0';
}
