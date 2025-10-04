document.addEventListener("DOMContentLoaded", () => {
    const clickButton = document.getElementById("click-button");
    const clickCountDisplay = document.getElementById("click-count");
    const upgradeButton = document.getElementById("upgrade-button");
    const clickRateDisplay = document.getElementById("click-rate");
    const antiCheatEnabled = true;
    let clickCount = 0;
    let ckanticht = 0;
    let clickRate = 0;
    let lastClickCount = 0;
    let upgradeCPS = 0; // clicks per second from upgrades

    const upgrades = [
        { id: "upgrade-1", cost: 10, ogcost: 10, increment: 1, quantity: 0 },
        { id: "upgrade-2", cost: 50, ogcost: 50, increment: 5, quantity: 0 },
        { id: "upgrade-3", cost: 200, ogcost: 200, increment: 20, quantity: 0 }
    ];

    upgrades.forEach(upg => {
        const btn = document.getElementById(upg.id);
        btn.addEventListener("click", () => {
            if (clickCount >= upg.cost) {
                clickCount -= upg.cost;
                upgradeCPS += upg.increment;
                upg.quantity++;
                upg.cost = Math.floor(upg.cost * 1.5); // Increase cost for next purchase
                btn.textContent = `${upg.quantity}x - ${btn.textContent.split('-')[1]}- Cost: ${upg.cost} clicks`;
                clickCountDisplay.textContent = `Clicks: ${clickCount}`;
            }
            checkUpgradeButtons();
        });
    });

    clickButton.addEventListener("click", () => {
        clickCount++;
        ckanticht++;
        clickRate++;
        clickCountDisplay.textContent = `Clicks: ${clickCount}`;
        checkUpgradeButtons();
    });

    setInterval(() => {
        console.log(ckanticht);

        if (clickCount - lastClickCount > upgradeCPS + 40) {
            console.log("dont cheat");
            cheaterDetected();
        }

        lastClickCount = clickCount;

    }, 1000);

    // game loop
    setInterval(() => {
        console.log("game loop")
        clickCount += upgradeCPS; // add CPS from upgrades
        clickRate += upgradeCPS;
        clickCountDisplay.textContent = `Clicks: ${clickCount}`;
        clickRateDisplay.textContent = `Clicks per second: ${clickRate}`;
        clickRate = 0;

        checkUpgradeButtons();

    }, 1000);


    function cheaterDetected() {
        if (!antiCheatEnabled) return;
        // show cheater graphic message
        resetGame();
        alert("Cheater detected, I've resetted your game, you're welcome!");

    }

    function resetGame() {
        clickCount = 0;
        ckanticht = 0;
        lastClickCount = 0;
        upgradeCPS = 0;
        upgrades.forEach(upg => {
            upg.quantity = 0;
            upg.cost = upg.ogcost;
            const btn = document.getElementById(upg.id);
            btn.textContent = `0x - ${btn.textContent.split('-')[1]}- Cost: ${upg.cost} clicks`;
        });
        clickCountDisplay.textContent = `Clicks: ${clickCount}`;
    }

    function checkUpgradeButtons() {
        upgrades.forEach(upg => {
            const btn = document.getElementById(upg.id);
            btn.disabled = clickCount < upg.cost;
        });
    }

});

