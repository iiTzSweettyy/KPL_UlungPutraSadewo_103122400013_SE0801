/**
 * 
 * @param {string} x
 * @param {number} a
 */
export function plsv_dua(x, a) {
    //x + 5 = 12
    const coeff = parseInt(x);
    const hasil = a/coeff;

    return {
        "x" : x,
        "dengan" : "=",
        "hasil" : hasil
    }
}

/** 
 * @param {string} x
 * @param {number} a
 * @param {number} b
 * */
export function plsv_tiga(x, a, b) {
    // y - 8 = 10
    let hasil = 0;
    if (x.length === 1) {
        hasil = b - a;
    } else if (x.length >= 2) {
        const coeff = parseInt(x);
        hasil = (b - a) / coeff;
    }

    return {
        "x" : x,
        "dengan" : "=",
        hasil
    }
}