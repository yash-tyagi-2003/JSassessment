let nftCollection = [];

function mintNFT(name, rarity, edition) {
    const newNFT = {
        name: name,
        rarity: rarity,
        edition: edition,
    };

    nftCollection.push(newNFT);
    console.log(`NFT minted - Name: ${name}, Rarity: ${rarity}, Edition: ${edition}`);
}

function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log("Name: " + nft.name);
        console.log("Rarity: " + nft.rarity);
        console.log("Edition: " + nft.edition);
        console.log("--------------------------");
    });
}

function getTotalSupply() {
    console.log("Total NFTs Minted: " + nftCollection.length);
}
mintNFT("Cool NFT", "Legendary", 1);
mintNFT("Awesome NFT", "Rare", 2);
mintNFT("Unique NFT", "Epic", 3);

listNFTs();

getTotalSupply();
