const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('Game');
    const gameContract = await gameContractFactory.deploy(
        ["Luffy", "Sanji", "Zoro"],
        ["https://i.imgur.com/PLAobHS.jpeg", // Images
        "https://i.imgur.com/pCQlVVW.gif", 
        "https://i.imgur.com/1JjAarn.jpeg"],
        [500, 950, 750],
        [200, 100,  150],
        "Omni-Man",
        "https://i.imgur.com/clyHuvh.jpeg",
        3500,
        200
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
