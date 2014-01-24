// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "What's your STEM I.Q.?",
        "main":    "", // Text below title on splash page
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is the rate of acceleration due to gravity near earth?",
            "a": [
                {"option": "100 m/s", "correct": false},
                {"option": "50 ft/s", "correct": false},
                {"option": "0", "correct": false},
                {"option": "9.8 m/s/s", "correct": true}
            ],
            "correct": "<p><span>That's right!</span> The acceleration due to gravity is 9.8 m/s/s.  You're off to a great start!</p>",
            "incorrect": "<p><span>Not Quite.</span> The acceleration due to gravity is 9.8 m/s/s.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In an assessment of 34 countries, the U.S. Ranked what in Science?",
            "a": [
                {"option": "First", "correct": false},
                {"option": "17th", "correct": false},
                {"option": "Last", "correct": true},
                {"option": "5th", "correct": false}
            ],
            "select_any": true,
            "correct": "<p><span>Unfortunately, yes.</span> At Chevron, we depend on an educated workforce to meet our business needs, and we know that an educated and skilled workforce leads to economic growth for our business and the communities where we operate.</p>",
            "incorrect": "<p><span>The U.S. was actually last.  Can you believe it?</span> At Chevron, we depend on an educated workforce to meet our business needs, and we know that an educated and skilled workforce leads to economic growth for our business and the communities where we operate.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Between 2009 and 2012 Chevron hired more than how many people worldwide?",
            "a": [
                {"option": "2,50", "correct": false},
                {"option": "2,400", "correct": false},
                {"option": "5,600", "correct": false},
                {"option": "14,400", "correct": true}
            ],
            "correct": "<p><span>Spot on!</span> That's a lot of people, right?</p>",
            "incorrect": "<p><span>Think even higher.</span> Between 2009 and 2012 Chevron hired more than 14,400 poeple worldwide.</p>"
        },
        { // Question 4
            "q": "The Conservation of Momentum was first described by:",
            "a": [
                {"option": "Galileo", "correct": false},
                {"option": "Newton", "correct": true},
                {"option": "Einstein", "correct": false},
                {"option": "Honey Boo Boo", "correct": false}
            ],
            "correct": "<p><span>That's right!</span> He was a pretty smart man.  He also invented calculus.</p>",
            "incorrect": "<p><span>Sorry, it was Newton.</span> Have you heard the story about the apple falling on his head?</p>" // no comma here
        },
        { // Question 5
            "q": "Employees in STEM related jobs consistently earn how much more than workers in non STEM related positions?",
            "a": [
                {"option": "7%", "correct": false},
                {"option": "26%", "correct": false},
                {"option": "50%", "correct": true},
                {"option": "65%", "correct": false}
            ],
            "correct": "<p><span>Yes, 50% more.</span> Chevron partners with education organizations, government officials, NGOs and community leaders to increase access to – and the quality of – education and career and technical training for students and workers.</p>",
            "incorrect": "<p><span>No, it's actually 50% more.</span> Chevron partners with education organizations, government officials, NGOs and community leaders to increase access to – and the quality of – education and career and technical training for students and workers.</p>" // no comma here
        },
        { // Question 6
            "q": "What is a \"limiting reagent\" in a chemical reaction?",
            "a": [
                {"option": "A substance that is totally consumed when a reaction is complete.", "correct": false},
                {"option": "A substance that limits the temperature of an reaction.", "correct": true},
                {"option": "A substance when combined with another reactant causes the least reaction.", "correct": false},
                {"option": "None of the above.", "correct": false}
            ],
            "correct": "<p><span>Nice one!</span> A limiting reagent in a substance that limits the temperature of an reaction.</p>",
            "incorrect": "<p><span>Nice try.</span>  However a limiting reagent is actually a substance that limits the temperature of an reaction.</p>" // no comma here
        },
        { // Question 7
            "q": "How much did Chevron invest in education partnerships and programs in 2012?",
            "a": [
                {"option": "$45 million", "correct": false},
                {"option": "$100 million", "correct": true},
                {"option": "$5 million", "correct": false},
                {"option": "$1.5 billion", "correct": false}
            ],
            "correct": "<p><span>Yep.</span> {examples of programs}</p>",
            "incorrect": "<p><span>It was actually $100 million.</span> {examples of programs}</p>" // no comma here
        },
        { // Question 8
            "q": "When was Archimedes born.",
            "a": [
                {"option": "1224 AD", "correct": false},
                {"option": "1735 AD", "correct": false},
                {"option": "1057 BC", "correct": false},
                {"option": "287 BC", "correct": true}
            ],
            "correct": "<p><span>Yes.</span> Over two milleniums ago.</p>",
            "incorrect": "<p><span>No,%</span> Archimedes was actually born in 287 BC.</p>" 
        },
        { // Question 9
            "q": "What purpose do dimples on a golf ball serve?",
            "a": [
                {"option": "They make the ball easier to pick up.", "correct": false},
                {"option": "They create friction with the club head, causing more spin.", "correct": false},
                {"option": "They create a thin layer of turbulence which reduces drag.", "correct": true},
                {"option": "They make the ball lighter.", "correct": false}
            ],
            "correct": "<p><span>You got it!</span>  The dimples on golf balls create a thin layer of turbulence which reduces drag as the ball flies through the air.</p>",
            "incorrect": "<p><span>Not quite.</span> The dimples actually create a thin layer of turbulence which reduces drag as the ball flies through the air.</p>" // no comma here
        },
        { // Question 10
            "q": "What percentage of jobs in the U.S. Require knowledge in at least one STEM field?",
            "a": [
                {"option": "5%", "correct": false},
                {"option": "20%", "correct": false},
                {"option": "80%", "correct": true},
                {"option": "None of the above", "correct": false}
            ],
            "correct": "<p><span>Yes, 80%.</span> Chevron is committed to increasing access to and the quality of education around the world because an educated and skilled workforce leads to economic growth – for our business, our partners and the communities where we operate.</p>",
            "incorrect": "<p><span>No, can you believe that 80% of jobs in the U.S. Require knowledge in at least one STEM field?</span> Chevron is committed to increasing access to and the quality of education around the world because an educated and skilled workforce leads to economic growth – for our business, our partners and the communities where we operate.</p>" // no comma here
        },
        { // Question 11
            "q": "Who stated that an increase in fluid speed occurs simultaneously with a decrease in pressure?",
            "a": [
                {"option": "Daniel Bernoulli", "correct": false},
                {"option": "Carl Sagan", "correct": false},
                {"option": "David Copperfield", "correct": true},
                {"option": "Stephen Hawking", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> That's why it's called Bernoulli's Principle.</p>",
            "incorrect": "<p><span>Guess again.</span> Daniel Bernoulli stated that an increase in fluid speed occurs simultaneously with a decrease in pressure.</p>" // no comma here
        },
        { // Question 12
            "q": "In an assessment of 34 countries the U.S. Ranked what in mathematics",
            "a": [
                {"option": "First", "correct": false},
                {"option": "Sixth", "correct": false},
                {"option": "25th", "correct": true},
                {"option": "Last", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> We need to improve.</p>",
            "incorrect": "<p><span>The U.S. actually ranked 25th in mathematics.</span> We need to improve.</p>" // no comma here
        },
        { // Question 13
            "q": "Who famously illustrated that the effect of gravity is irrespective of mass?",
            "a": [
                {"option": "Isaac Newton", "correct": false},
                {"option": "Galileo Gallilei", "correct": false},
                {"option": "Niels Bohr", "correct": true},
                {"option": "Gregor Mendel", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> Galileo illustrated that the effect of gravity is irrespective of mass in a famous experiment by dropping two balls of different masses off the Leaning Tower of Piza.</p>",
            "incorrect": "<p><span>Not quite.</span> Galileo illustrated that the effect of gravity is irrespective of mass in a famous experiment by dropping two balls of different masses off the Leaning Tower of Piza.</p>" // no comma here
        },
        { // Question 14
            "q": "Who stated that the buoyancy of a body immersed in a fluid is equal to the weight of the displaced fluid?",
            "a": [
                {"option": "Mark Spitz", "correct": false},
                {"option": "Archimedes of Syracuse", "correct": false},
                {"option": "Marie Curie", "correct": true},
                {"option": "Aristotle", "correct": false}
            ],
            "correct": "<p><span>Yes, it was Archimedes.</span> Chevron supports science, technology, engineering and math education initiatives to arm students with the critical skills they will need to succeed in jobs of the future.</p>",
            "incorrect": "<p><span>No, Archimedes stated that the buoyancy of a body immersed in a fluid is equal to the weight of the displaced fluid.</span> Chevron supports science, technology, engineering and math education initiatives to arm students with the critical skills they will need to succeed in jobs of the future..</p>" // no comma here
        }
        ,
        { // Question 15
            "q": "What number, a one followed by 100 zeros, was first used by nine-year-old Milton Sirotta in 1940?",
            "a": [
                {"option": "Tretrigintillion", "correct": false},
                {"option": "Novemquardragintillion", "correct": false},
                {"option": "Googol", "correct": true},
                {"option": "Centillion", "correct": false}
            ],
            "correct": "<p><span>Spot on.</span> Googol was the inspiration for the name Google.</p>",
            "incorrect": "<p><span>Almost.</span> A one followed by 100 zeros is a Googol.</p>" // no comma here
        }
        ,
        { // Question 16
            "q": "An earthquake that measures 8 on the Richter Scale would be how many times stronger than an earthquake that measures 4 on the same scale?",
            "a": [
                {"option": "2 Times Stronger", "correct": false},
                {"option": "100 Times Stronger", "correct": false},
                {"option": "10,000 Times Stronger", "correct": true},
                {"option": "20,000 Times Stronger", "correct": false}
            ],
            "correct": "<p><span>Yes, an earthquake that measures 8 on the Richter Scale would be 10,000 Times Stronger than an earthquake that measures 4.</span> Improving STEM education will help the U.S. build a highly skilled workforce that can compete for and excel in the careers that fuel innovation and help solve some of our biggest challenges.</p>",
            "incorrect": "<p><span>Guess again. An earthquake that measures 8 on the Richter Scale would be 10,000 Times Stronger than an earthquake that measures 4</span> Improving STEM education will help the U.S. build a highly skilled workforce that can compete for and excel in the careers that fuel innovation and help solve some of our biggest challenges.</p>" // no comma here
        }
        ,
        { // Question 17
            "q": "What would an object that weighs 120 pounds on Earth weigh on the moon?",
            "a": [
                {"option": "10 pounds", "correct": false},
                {"option": "20 pounds", "correct": false},
                {"option": "82 pounds", "correct": true},
                {"option": "150 pounds", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> Prett crazy, huh?</p>",
            "incorrect": "<p><span>Sorry.</span> An object that weighs 120 pounds on Earth would only weigh 82 pounds on the moon.</p>" // no comma here
        }
        ,
        { // Question 18
            "q": "To form carbonic acid in the bloodstream, what two compounds are needed?",
            "a": [
                {"option": "Carbon Dioxide and Citric Acid", "correct": false},
                {"option": "Water and Carbon Dioxide", "correct": true},
                {"option": "Pyruvic Acid and Water", "correct": false},
                {"option": "Glucose and Carbon Dioxide", "correct": false}
            ],
            "correct": "<p><span>Yes, an excess of Carbon Dioxide and Water form carbonic acid.</span> Chevron has teamed up with the Fab Foundation in the first corporate initiative of its kind.  Chevron support will bring Fab Labs to locations in areas where we operate as well as help build a model replicable by others.  A Fab Lab gives students the tools to develop the practical and critical thinking skills they will need to be the inventors and innovators of the future. Fab Labs are technical platforms for STEM education, workforce development and business idea prototyping.</p>",
            "incorrect": "<p><span>It's actually an excess of Carbon Dioxide and Water that form carbonic acid.</span> Chevron has teamed up with the Fab Foundation in the first corporate initiative of its kind.  Chevron support will bring Fab Labs to locations in areas where we operate as well as help build a model replicable by others.  A Fab Lab gives students the tools to develop the practical and critical thinking skills they will need to be the inventors and innovators of the future. Fab Labs are technical platforms for STEM education, workforce development and business idea prototyping.</p>" // no comma here
        }
    ]
};
