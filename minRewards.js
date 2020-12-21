// O(n) Time - O(n) Space
function minRewards(scores) {
    const rewards = scores.map(score => 1)

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i - 1]) {
            rewards[i] = rewards[i - 1] + 1;
        }
    }

    for (let i = scores.length - 2; i >= 0; i--) {
        if (scores[i] > scores[i + 1]) {
            rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
        }
    }

    console.log(rewards);
    return rewards.reduce((total, score) => total + score);
}

// [4, 3, 2, 1, 2, 3, 4, 5, 1]
// Expects 25
let array = [8, 4, 2, 1, 3, 6, 7, 9, 5];
console.log(minRewards(array));