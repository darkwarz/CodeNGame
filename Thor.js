* the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position
var thorX = initialTX; // Thor's position that can be modified
var thorY = initialTY; // Thor's position that can be modified
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let directionX = "";
    let directionY = "";
    
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    if (thorX > lightX) { // if thor's x coordinates are greater than where the charge light is run this
        directionX = "W";
        thorX--;
    } else if (thorX < lightX) { // If thor's x Coordinates are lesser than where the charge light is, run this
        directionX = "E";
        thorX++;
    }
    
    if (thorY > lightY) { // if Thor's y coordinates are greater than charge Light Coordinates run this
        directionY = "N";
        thorY--;
    } else if (thorY < lightY) { // if Thor's y Coordinates are lesser than charge light coordinates run this 
        directionY = "S";
        thorY++;
    }   

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(directionY + directionX); // A single line providing the move to be made: N NE E SE S SW W or NW
}
