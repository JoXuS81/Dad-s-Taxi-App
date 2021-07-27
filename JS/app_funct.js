// Click on Calculate Button
function calculateArea() {

    // Get the Input Value
    let milesAmount = document.getElementById('enterNumber').value;

    // Variables, Prices
    const babysitting = 6;
    const bathroom = 2.19;
    const bedroom = 2;
    const bins = 1.71;
    const car = 3;
    const cooking = 2.04;
    const dishes = 1.84;
    const dusting = 1.84;
    const priceMile = 0.115;
    const vacuuming = 2;
    const washing = 1.89;

    //Variables, Calculations
    let fuelPrice = priceMile * milesAmount;
    let babysittingJob = fuelPrice / babysitting;
    let bathroomJob = fuelPrice / bathroom;
    let bedroomJob = fuelPrice / bedroom;
    let binsJob = fuelPrice / bins;
    let carJob = fuelPrice / car;
    let cookingJob = fuelPrice / cooking;
    let dishesJob = fuelPrice / dishes;
    let dustingJob = fuelPrice / dusting;
    let vacuumingJob = fuelPrice / vacuuming;
    let washingJob = fuelPrice / washing;

    document.getElementById("babysittingValue").innerHTML = Math.round(babysittingJob) + "x" + "  " + "or";
    document.getElementById("bathroomValue").innerHTML = Math.round(bathroomJob) + "x" + "  " + "or";
    document.getElementById("bedroomValue").innerHTML = Math.round(bedroomJob) + "x" + "  " + "or";
    document.getElementById("binsValue").innerHTML = Math.round(binsJob) + "x" + "  " + "or";
    document.getElementById("carValue").innerHTML = Math.round(carJob) + "x" + "  " + "or";
    document.getElementById("cookingValue").innerHTML = Math.round(cookingJob) + "x" + "  " + "or";
    document.getElementById("dishesValue").innerHTML = Math.round(dishesJob) + "x" + "  " + "or";
    document.getElementById("dustingValue").innerHTML = Math.round(dustingJob) + "x" + "  " + "or";
    document.getElementById("vacuumingValue").innerHTML = Math.round(vacuumingJob) + "x";
    document.getElementById("washingValue").innerHTML = Math.round(washingJob) + "x" + "  " + "or";
}