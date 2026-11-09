"use strict";

const scores = [58, 72, 85, 40, 93];

const updatedScores = scores.map((score) => {
    return score + 5
});

updatedScores.forEach((score, index) => {
    console.log(`${index + 1}人目：${score[index]}点 -> ${score}点`)

    if(score >= 70) {
        passCount++
    }

});


