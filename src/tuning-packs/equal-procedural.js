/**
 * Band.js - Music Composer
 * An interface for the Web Audio API that supports rhythms, multiple instruments, repeating sections, and complex
 * time signatures.
 *
 * @author Cody Lundquist (http://github.com/meenie) - 2014
 */

/**
 * Equal Temperament Tuning - Procedural Notation
 * Source: http://www.phy.mtu.edu/~suits/notefreqs.html
 */

module.exports = {
    01: 16.35,
    011: 17.32,
    020: 17.32,
    02: 18.35,
    021: 19.45,
    030: 19.45,
    03: 20.60,
    04: 21.83,
    041: 23.12,
    050: 23.12,
    05: 24.50,
    051: 25.96,
    060: 25.96,
    06: 27.50,
    061: 29.14,
    070: 29.14,
    07: 30.87,
    11: 32.70,
    111: 34.65,
    120: 34.65,
    12: 36.71,
    121: 38.89,
    130: 38.89,
    13: 41.20,
    14: 43.65,
    141: 46.25,
    150: 46.25,
    15: 49.00,
    151: 51.91,
    160: 51.91,
    16: 55.00,
    161: 58.27,
    170: 58.27,
    17: 61.74,
    21: 65.41,
    211: 69.30,
    220: 69.30,
    22: 73.42,
    221: 77.78,
    230: 77.78,
    23: 82.41,
    24: 87.31,
    241: 92.50,
    250: 92.50,
    25: 98.00,
    251: 103.83,
    260: 103.83,
    26: 110.00,
    261: 116.54,
    270: 116.54,
    27: 123.47,
    31: 130.81,
    311: 138.59,
    320: 138.59,
    32: 146.83,
    321: 155.56,
    330: 155.56,
    33: 164.81,
    34: 174.61,
    341: 185.00,
    350: 185.00,
    35: 196.00,
    351: 207.65,
    360: 207.65,
    36: 220.00,
    361: 233.08,
    370: 233.08,
    37: 246.94,
    41: 261.63,
    411: 277.18,
    420: 277.18,
    42: 293.66,
    421: 311.13,
    430: 311.13,
    43: 329.63,
    44: 349.23,
    441: 369.99,
    450: 369.99,
    45: 392.00,
    451: 415.30,
    460: 415.30,
    46: 440.00,
    461: 466.16,
    470: 466.16,
    47: 493.88,
    51: 523.25,
    511: 554.37,
    520: 554.37,
    52: 587.33,
    521: 622.25,
    530: 622.25,
    53: 659.26,
    54: 698.46,
    541: 739.99,
    550: 739.99,
    55: 783.99,
    551: 830.61,
    560: 830.61,
    56: 880.00,
    561: 932.33,
    570: 932.33,
    57: 987.77,
    61: 1046.50,
    611: 1108.73,
    620: 1108.73,
    62: 1174.66,
    621: 1244.51,
    630: 1244.51,
    63: 1318.51,
    64: 1396.91,
    641: 1479.98,
    650: 1479.98,
    65: 1567.98,
    651: 1661.22,
    660: 1661.22,
    66: 1760.00,
    661: 1864.66,
    670: 1864.66,
    67: 1975.53,
    71: 2093.00,
    711: 2217.46,
    720: 2217.46,
    72: 2349.32,
    721: 2489.02,
    730: 2489.02,
    73: 2637.02,
    74: 2793.83,
    741: 2959.96,
    750: 2959.96,
    75: 3135.96,
    751: 3322.44,
    760: 3322.44,
    76: 3520.00,
    761: 3729.31,
    770: 3729.31,
    77: 3951.07,
    81: 4186.01
};
