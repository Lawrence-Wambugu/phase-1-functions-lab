// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;  // Assume Scuber's headquarters is at block 42
    return Math.abs(pickupLocation - hqLocation); } // Calculate the absolute distance in blocks

    function distanceFromHqInFeet(pickupLocation) {
        const blocks = distanceFromHqInBlocks(pickupLocation);  // Get the distance in blocks
        const feetPerBlock = 264;  // Each block is 264 feet long
        return blocks * feetPerBlock;  // Convert blocks to feet
      }

      function distanceTravelledInFeet(startingBlock, endingBlock) {
        const blockLengthInFeet = 264;  // Each block is 264 feet long
        const blocksTravelled = Math.abs(endingBlock - startingBlock);  // Calculate the absolute difference between blocks
        return blocksTravelled * blockLengthInFeet;  // Convert blocks to feet
      }

      function calculatesFarePrice(startingBlock, endingBlock) {
        const distanceInFeet = distanceTravelledInFeet(startingBlock, endingBlock);  // Get the distance in feet
        
        // Case 1: Distance over 2500 feet
        if (distanceInFeet > 2500) {
          return 'cannot travel that far';
        }
      
        // Case 2: Distance between 2000 and 2500 feet (flat fare of $25)
        if (distanceInFeet > 2000) {
          return 25;
        }
      
        // Case 3: Distance between 400 and 2000 feet (2 cents per foot)
    if (distanceInFeet > 400) {
        return (distanceInFeet - 400) * 0.02;  // 2 cents per foot, excluding the first 400 feet
      }
    
      // Case 4: Distance 400 feet or less (free)
      return 0;
    }