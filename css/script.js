document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked')
    ];

    if (answers.includes(null)) {
        document.getElementById("result").textContent = "Please answer all questions!";
        document.getElementById("resultImage").innerHTML = "";
        return;
    }

    const counts = {};
    answers.forEach(answer => {
        const value = answer.value;
        counts[value] = (counts[value] || 0) + 1;
    });

    let resultMob = null;
    let maxCount = 0;

    for (const mob in counts) {
        if (counts[mob] > maxCount) {
            maxCount = counts[mob];
            resultMob = mob;
        }
    }

    let message = "";
    switch (resultMob) {
        case "zombie":
            message = "You're a Zombie! Tough and relentless, you’re not afraid to go head first into anything.";
            break;
        case "creeper":
            message = "You're a Creeper! You like to sneak up on people and leave a big impression.";
            break;
        case "skeleton":
            message = "You're a Skeleton! Cool under pressure and skilled from a distance.";
            break;
        case "villager":
            message = "You're a Villager! Calm, clever, and full of trades. People count on your wisdom.";
            break;
        case "enderman":
            message = "You're an Enderman! Mysterious and powerful—you’re always in control of your surroundings.";
            break;
        default:
            message = "You're a unique mix of mobs—special in your own way!";
    }

    document.getElementById("result").textContent = message;
});
