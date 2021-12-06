window.addEventListener("load", init);

function init() {
    console.log("hello");
    document.getElementById("root").insertAdjacentHTML("beforeend", createCards());
}

function createCards() {
    let createTags = "";

    for (let index = 0; index < 48; index++) {
        let present1 = profiles[index].present.split(",");
        let present2 = profiles[index + 1].present.split(",");
        let present3 = profiles[index + 2].present.split(",");

        createTags += `
        <div class="tags">
            <div class="tag-container">
                <div class="tag">
                    <div class="tag-side tag-1-side">
                        <div class="tag-1-top"></div>
                        <div class="tag-text tag-1-text cardName">
                            ${profiles[index].name}
                            <div class="rule-shape rule-red">&starf;</div>
                            </div>
                            </div>
                            <div class="tag-side tag-1-side is-back">
                            <div class="tag-1-top"></div>
                            <div class="tag-text tag-1-text surprise">
                            ${present1[0]}
                            <div class="rule-shape">&starf;</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tag-container">
            <div class="tag">
                <div class="tag-side tag-2-side">
                    <div class="tag-text tag-2-text cardName">
                    ${profiles[index+1].name}
                        <div class="rule-diagonal"></div>
                    </div>
                </div>
    
                <div class="tag-side tag-2-side is-back">
                    <div class="tag-text tag-2-text surprise">
                    ${present2[0]}
                        <div class="rule-diagonal"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tag-container">
            <div class="tag">
                <div class="tag-side tag-3-side">
                    <div class="tag-text tag-3-text cardName">
                        ${profiles[index+2].name}
                        <div class="rule-shape">&#10052;</div>
                    </div>
                </div>
                <div class="tag-side tag-3-side is-back">
                    <div class="tag-text tag-3-text surprise">
                    ${present3[0]}
                        <div class="rule-shape">&#10052;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
        index++;
        index++;
    }

    return createTags;

}

function cardNames() {
    for (const name of profiles) {

    }
}