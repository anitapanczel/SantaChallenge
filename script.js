window.addEventListener("load", init);

function init() {
    console.log("hello");
    document.getElementById("root").insertAdjacentHTML("beforeend", createCards(3));
}

function createCards(howMany) {
    let createTags = "";
    for (let i = 0; i < howMany; i++) {
        createTags += `
        <div class="tags">
            <div class="tag-container">
                <div class="tag">
                    <div class="tag-side tag-1-side">
                        <div class="tag-1-top"></div>
                        <div class="tag-text tag-1-text cardName">
                            Here goes<br>the name
                            <div class="rule-shape rule-red">&starf;</div>
                        </div>
                    </div>
                    <div class="tag-side tag-1-side is-back">
                        <div class="tag-1-top"></div>
                        <div class="tag-text tag-1-text surprise">
                            Here goes<br>the surprise
                            <div class="rule-shape">&starf;</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tag-container">
                <div class="tag">
                    <div class="tag-side tag-2-side">
                        <div class="tag-text tag-2-text cardName">
                            Happy<br />Holidays
                            <div class="rule-diagonal"></div>
                        </div>
                    </div>
        
                    <div class="tag-side tag-2-side is-back">
                        <div class="tag-text tag-2-text surprise">
                            May your ev'ry wish come true
                            <div class="rule-diagonal"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tag-container">
                <div class="tag">
                    <div class="tag-side tag-3-side">
                        <div class="tag-text tag-3-text cardName">
                            Feliz<br />Navidad
                            <div class="rule-shape">&#10052;</div>
                        </div>
                    </div>
                    <div class="tag-side tag-3-side is-back">
                        <div class="tag-text tag-3-text surprise">
                            Prospero Año Nuevo
                            <div class="rule-shape">&#10052;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

    }

    return createTags;

}

function cardNames() {
    for (const name of profiles) {

    }
}