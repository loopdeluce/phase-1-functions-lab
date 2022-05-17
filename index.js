// Code your solution in this file!

function distanceFromHqInBlocks (pickup) {
    if (pickup > 42) {
        return pickup - 42;
    }
    else { 
        return 42 - pickup;
    }
}

function distanceFromHqInFeet (pickup) {
    let blocks = distanceFromHqInBlocks(pickup);
    return blocks * 264;
}

function distanceTravelledInFeet (start, destination)
{
    let blocks;
    if (start > destination) {
        blocks = start - destination;
    }
    else {
        blocks = destination - start;
    }

    return blocks * 264;
}

function calculatesFarePrice (start, destination) {
    const feet = distanceTravelledInFeet(start, destination)

    if (feet <= 400) {
        return 0;
    }
    else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * 0.02;
    }
    else if (feet > 2000 && feet <= 2500) {
        return 25;
    }
    else if (feet > 2500) {
        return 'cannot travel that far';
    }

}