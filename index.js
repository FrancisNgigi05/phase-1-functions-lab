// Code your solution in this file!
let numberOfBlocks = distanceFromHqInBlocks(50);
let result;
let feet;
let remainingFeet;
// function that returns the number of blocks to be covered
function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return (street - 42);
    }
    else {
        return(42 - street);
    }
}
// function that converts blocks into feet
function distanceFromHqInFeet(street) {
    // calculated the number of blocks between the streets
    let blocks = distanceFromHqInBlocks(street);

    result = blocks * 264;
    return (result);
}

function distanceTravelledInFeet (start, destination) {
    if (destination > start) {
        return ((destination - start) * 264);
    }
    else {
        return ((start - destination) * 264);
    }
}
function calculatesFarePrice (start, destination) {
    if (destination > start) {
        feet = (destination - start) * 264;
    }
    else {
        feet = (start - destination) * 264;
    }
    if (feet <= 400) {
        result = 0;
    }
    else if (feet > 400 && feet <= 2000) {
        remainingFeet = feet - 400;
        result = (remainingFeet * 0.02)
    }
    else if (feet > 2000 && feet <= 2500) {
        result = 25;
    }
    else {
        result = 'cannot travel that far';
    }
    return (result);
}
