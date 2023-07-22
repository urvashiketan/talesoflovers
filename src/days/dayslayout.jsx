import { Component } from 'react';
import { Parallax } from 'react-parallax';


import './main.css'










const raw_data = {
    "theproposal": [
        "Normal day for a boy.",
        "Hope of seeing a girl.",
        "Girl who changed his life.",
        "Girl who make him feel different.",
        "Girl who make him believe that he can also be loved.",
        "Ohhh! He didn’t get to see her.",
        "What happened? The boy was never so excited to see a girl.",
        "Somethings are meant to be changed.",
        "He could hold it any longer.",
        "He proposed her. (Online)",
        "And.",
        "Anddd.",
        "Annndddddd.",
        "SHE SAID YES.",
        "There started a new life of two LOVERS."
    ],
    "felloveragain": [
        "Ohhh! The awaited moment came on unpredictable time.",
        "Getting to meet in real.",
        "Those eye contacts.",
        "Those feelings.",
        "That night on the roof.",
        "What a day."
    ],
    "firstdate": [
        "What a surprise!",
        "She came to whole new city to meet him.",
        "What more could he ask for?",
        "He got more, a whole day.",
        "From temple to mall.",
        "From mall to restaurant.",
        "From restaurant to to garden.",
        "From garden to back to station.",
        "Enjoyed every moment.",
        "Every moment was magical."
    ],
    "longtimenosee": [
        "Long distance, long time.",
        "He travelled all the way to meet her.",
        "Just for a day of love. Feeling of touch became feeling of love.",
        "Holding hand everywhere.",
        "Eating with same spoon.",
        "So much to do, so much to feel, but so little time.",
        "Time went so fast we didn’t se the time to get back.",
        "It was day to fall in love over again."
    ],
    "luckcalledher": [
        "Kismat ne kiya he kuchh haseeb sitam.",
        "She came to his city for training.",
        "Well, not allowed to meet, met anyways.",
        "Took risks and was worth it.",
        "Got in trouble, fell in love over again.",
        "So much memorable things."
    ],
    "urgetomeet": [
        "Just an urge of seeing in real life,",
        "Took him back to her city.",
        "Simple play to watch a movie together.",
        "That day, he got the most pleasure moments.",
        "Didn’t watch the movie.",
        "And finally got to eat her favorite.",
        "And the moments in train were wordless.",
        "It was painful to watch her go again."
    ],
    "realproposal": [
        "Wait! 2 days.",
        "Family function is finally here and gonna meet her.",
        "What will I wear? What would I do? What should i gift her?",
        "Okay! she took charge and made him gentleman.",
        "Have to go 1 day before.",
        "She surprised him being there.",
        "What a great time.",
        "Functions time, dressing to impress each other.",
        "And damn she did.",
        "Those eye contacts.",
        "That time of pictures.",
        "Finally, the real life proposal.",
        "Zindagi bahot khubsurat he aapke sath",
        "Kya aap puri zindagi mere sath bitana chahoge",
        "Ha! ofcourse",
        "He gave her ring, a really oversized ring.",
        "Can’t believe how much of love there was."
    ]
}











export class DaysLayout extends Component {
    render() {
        const page = window.location.href.split('/')[3];
        const data = raw_data[page];
        const parallaxes = [];
        for (let i = 0; i < data.length; i ++) {
            let image = require(`./${page}/${i}.jpg`)
            parallaxes.push(
                <section>
                    <Parallax
                        blur = {{ min: -15, max: 15 }}
                        bgImage = { image } 
                        strength = { -50 }
                    >
                        <div className='slide'>
                            <h2>{ data[i] }</h2>
                        </div>
                    </Parallax>
                    <div className="partition">| | |</div>
                </section>
            )
        }
        return (
            <main>
                <a href='/' className="back">&lt;</a>
                {
                    parallaxes
                }
            </main>
        );
    }
}