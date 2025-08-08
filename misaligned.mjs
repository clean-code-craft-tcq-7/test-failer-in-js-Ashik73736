import { expect } from 'chai';

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

const result = print_color_map();

expect(result[12]).to.equal("13 | Black | Green"); 

expect(result[0]).to.equal("1 | White | Blue"); 

expect(result[0].startsWith(" 1 ")).to.be.true; 

console.log("If you're seeing this after fixes, tests are passing!");

expect(result).equals(25);
console.log('All is well (maybe!)');


