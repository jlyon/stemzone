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
            "id": 1,
            "q": "What is the rate of acceleration due to gravity near earth?",
            "a": [
                {"option": "100 m/s", "correct": false},
                {"option": "50 ft/s", "correct": false},
                {"option": "0", "correct": false},
                {"option": "9.8 m/s<sup>2</sup>", "correct": true}
            ],
            "correct": "<p><span>That's right!</span> The acceleration due to gravity is 9.8 m/s<sup>2</sup> when the object is close to earth .  Think about how that might be different if the object was in outerspace.  You're off to a great start!</p>",
            "incorrect": "<p align='center'><span>Not Quite.</span> The acceleration due to gravity is 9.8 m/s<sup>2</sup>.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "id": 2,
            "q": "In an assessment of 34 countries, the U.S. Ranked what in Science?",
            "a": [
                {"option": "First", "correct": false},
                {"option": "17th", "correct": true},
                {"option": "Last", "correct": false},
                {"option": "5th", "correct": false}
            ],
            "select_any": true,
            "correct": "<p><span>Yes.</span> In a 2009 OECD assessment of 34 countries, the United States ranked 17th in science and 25th math, with South Korea, Japan, Singapore and Finland all outpacing the U.S.<br/><br/> At Chevron, we depend on an educated workforce to meet our business needs, and we know that an educated and skilled workforce leads to economic growth for our business and the communities where we operate.</p>",
            "incorrect": "<p><span>Unfortunately, the correct answer is 17th.</span> At Chevron, we depend on an educated workforce to meet our business needs, and we know that an educated and skilled workforce leads to economic growth for our business and the communities where we operate.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "id": 3,
            "q": "Between 2009 and 2012 Chevron hired more than how many people worldwide?",
            "a": [
                {"option": "2,50", "correct": false},
                {"option": "2,400", "correct": false},
                {"option": "5,600", "correct": false},
                {"option": "14,400", "correct": true}
            ],
            "correct": "<p><span>Spot on!</span> Between 2009 and 2012, Chevron hired more than 14,400 people around the world, and we expect that our hiring will continue to grow as our business grows.</p>",
            "incorrect": "<p><span>The correct answer is 14,400.</span> Between 2009 and 2012, Chevron hired more than 14,400 people around the world, and we expect that our hiring will continue to grow as our business grows.</p>"
        },
        { // Question 4
            "id": 4,
            "q": "The Conservation of Momentum was first described by:",
            "a": [
                {"option": "Galileo", "correct": false},
                {"option": "Newton", "correct": true},
                {"option": "Einstein", "correct": false},
                {"option": "Honey Boo Boo", "correct": false}
            ],
            "correct": "<p><span>That's right!</span> In a closed system the total momentum is constant. This fact, known as the law of conservation of momentum, is implied by Newton's laws of motion. Check out the giant Newton’s Cradle in the STEM ZONE demonstrated this principle.</p>",
            "incorrect": "<p><span>Sorry, it was Newton.</span> In a closed system the total momentum is constant. This fact, known as the law of conservation of momentum, is implied by Newton's laws of motion. Check out the giant Newton’s Cradle in the STEM ZONE demonstrated this principle.</p>" // no comma here
        },
        { // Question 5
            "id": 5,
            "q": "Employees in STEM related jobs consistently earn how much more than workers in non STEM related positions?",
            "a": [
                {"option": "7%", "correct": false},
                {"option": "26%", "correct": true},
                {"option": "50%", "correct": false},
                {"option": "65%", "correct": false}
            ],
            "correct": "<p><span>That's correct.</span> The U.S. Department of Commerce Economics and Statistics Administration has discovered that employees in STEM jobs consistently earn a wage premium of up to 26 percent more than workers in non-STEM positions, a trend that has been steady over time.</p>",
            "incorrect": "<p><span>No, it's actually 26% more.</span> The U.S. Department of Commerce Economics and Statistics Administration has discovered that employees in STEM jobs consistently earn a wage premium of up to 26 percent more than workers in non-STEM positions, a trend that has been steady over time.</p>" // no comma here
        },
        { // Question 6
            "id": 6,
            "q": "What is a \"limiting reagent\" in a chemical reaction?",
            "a": [
                {"option": "A substance that is totally consumed when a reaction is complete.", "correct": true},
                {"option": "A substance that limits the temperature of an reaction.", "correct": false},
                {"option": "A substance when combined with another reactant causes the least reaction.", "correct": false},
                {"option": "None of the above.", "correct": false}
            ],
            "correct": "<p><span>Nice one!</span> A limiting reagent in a substance that is totally consumed when a reaction is complete.</p>",
            "incorrect": "<p><span>Nice try.</span>  However a limiting reagent is a substance that is totally consumed when a reaction is complete.</p>" // no comma here
        },
        { // Question 7
            "id": 7,
            "q": "How much did Chevron invest in education partnerships and programs in 2012?",
            "a": [
                {"option": "$45 million", "correct": true},
                {"option": "$100 million", "correct": false},
                {"option": "$5 million", "correct": false},
                {"option": "$1.5 billion", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> In 2012, Chevron invested more than $45 million in education partnerships and programs worldwide.  In the U.S., over the last three years 1, our total investment in education was more than $100 million-largely focused on ensuring students are prepared for STEM related careers.</p>",
            "incorrect": "<p><span>It was actually $45 million.</span> In 2012, Chevron invested more than $45 million in education partnerships and programs worldwide.  In the U.S., over the last three years 1, our total investment in education was more than $100 million-largely focused on ensuring students are prepared for STEM related careers.</p>" // no comma here
        },
        { // Question 8
            "id": 8,
            "q": "When was Archimedes born.",
            "a": [
                {"option": "1224 AD", "correct": false},
                {"option": "1735 AD", "correct": false},
                {"option": "1057 BC", "correct": false},
                {"option": "287 BC", "correct": true}
            ],
            "correct": "<p><span>Yes.</span> Over two milleniums ago.</p>",
            "incorrect": "<p><span>No.</span> Archimedes was actually born in 287 BC.</p>" 
        },
        { // Question 9
            "id": 9,
            "q": "What purpose do dimples on a golf ball serve?",
            "a": [
                {"option": "They make the ball easier to pick up.", "correct": false},
                {"option": "They create friction with the club head, causing more spin.", "correct": false},
                {"option": "They create a thin layer of turbulence which reduces drag.", "correct": true},
                {"option": "They make the ball lighter.", "correct": false}
            ],
            "correct": "<p><span>You got it!</span> The dimples on golf balls create a thin layer of turbulence called a boundry layer which reduces drag as the ball flies through the air.</p>",
            "incorrect": "<p><span>Not quite.</span> The dimples on golf balls create a thin layer of turbulence called a boundry layer which reduces drag as the ball flies through the air.</p>" // no comma here
        },
        { // Question 10
            "id": 10,
            "q": "What percentage of jobs in the U.S. Require knowledge in at least one STEM field?",
            "a": [
                {"option": "5%", "correct": false},
                {"option": "20%", "correct": true},
                {"option": "80%", "correct": false},
                {"option": "None of the above", "correct": false}
            ],
            "correct": "<p><span>Yes, 20%.</span> Currently, 20 percent of all U.S. jobs – 26 million positions – require knowledge in one STEM field.1 And that number is estimated to grow 17 percent by 2018, compared with only 9.8 percent growth for all other fields combined.</p>",
            "incorrect": "<p><span>No.</span> Can you believe that 20% of jobs in the U.S. Require knowledge in at least one STEM field? <br/><br/>Chevron is committed to increasing access to and the quality of education around the world because an educated and skilled workforce leads to economic growth – for our business, our partners and the communities where we operate.</p>" // no comma here
        },
        { // Question 11
            "id": 11,
            "q": "Who stated that an increase in fluid speed occurs simultaneously with a decrease in pressure?",
            "a": [
                {"option": "Daniel Bernoulli", "correct": true},
                {"option": "Carl Sagan", "correct": false},
                {"option": "David Copperfield", "correct": false},
                {"option": "Stephen Hawking", "correct": false}
            ],
            "correct": "<p align='center'><span>Yes.</span> That's why it's called Bernoulli's Principle.</p>",
            "incorrect": "<p><span>The right answer is:</span> Daniel Bernoulli. He stated that an increase in fluid speed occurs simultaneously with a decrease in pressure.</p>" // no comma here
        },
        { // Question 12
            "id": 12,
            "q": "In an assessment of 34 countries the U.S. Ranked what in mathematics",
            "a": [
                {"option": "First", "correct": false},
                {"option": "Sixth", "correct": false},
                {"option": "25th", "correct": true},
                {"option": "Last", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> Chevron partners with education organizations, government officials, NGOs and community leaders to increase access to – and the quality of – education and career and technical training for students and workers.</p>",
            "incorrect": "<p><span>The U.S. actually ranked 25th in mathematics.</span> Chevron partners with education organizations, government officials, NGOs and community leaders to increase access to – and the quality of – education and career and technical training for students and workers.</p>" // no comma here
        },
        { // Question 13
            "id": 13,
            "q": "Who famously illustrated that the effect of gravity is irrespective of mass?",
            "a": [
                {"option": "Isaac Newton", "correct": false},
                {"option": "Galileo Gallilei", "correct": true},
                {"option": "Niels Bohr", "correct": false},
                {"option": "Gregor Mendel", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> Galileo illustrated that the effect of gravity is irrespective of mass in a famous experiment by dropping two balls of different masses off the Leaning Tower of Piza.</p>",
            "incorrect": "<p><span>Not quite.</span> It was Galileo who illustrated that the effect of gravity is irrespective of mass in a famous experiment by dropping two balls of different masses off the Leaning Tower of Piza.</p>" // no comma here
        },
        { // Question 14
            "id": 14,
            "q": "Who stated that the buoyancy of a body immersed in a fluid is equal to the weight of the displaced fluid?",
            "a": [
                {"option": "Mark Spitz", "correct": false},
                {"option": "Archimedes of Syracuse", "correct": true},
                {"option": "Marie Curie", "correct": false},
                {"option": "Aristotle", "correct": false}
            ],
            "correct": "<p><span>Yes, it was Archimedes.</span> Chevron supports science, technology, engineering and math education initiatives to arm students with the critical skills they will need to succeed in jobs of the future.</p>",
            "incorrect": "<p><span>No.</span> Archimedes stated that the buoyancy of a body immersed in a fluid is equal to the weight of the displaced fluid. <br/><br/>Chevron supports science, technology, engineering and math education initiatives to arm students with the critical skills they will need to succeed in jobs of the future..</p>" // no comma here
        }
        ,
        { // Question 15
            "id": 15,
            "q": "What number, a one followed by 100 zeros, was first used by nine-year-old Milton Sirotta in 1940?",
            "a": [
                {"option": "Tretrigintillion", "correct": false},
                {"option": "Novemquardragintillion", "correct": false},
                {"option": "Googol", "correct": true},
                {"option": "Centillion", "correct": false}
            ],
            "correct": "<p align='center'><span>Spot on.</span> Googol was the inspiration for the name Google.</p>",
            "incorrect": "<p align='center'><span>Almost.</span> A one followed by 100 zeros is a Googol.</p>" // no comma here
        }
        ,
        { // Question 16
            "id": 16,
            "q": "An earthquake that measures 8 on the Richter Scale would be how many times stronger than an earthquake that measures 4 on the same scale?",
            "a": [
                {"option": "2 Times Stronger", "correct": false},
                {"option": "100 Times Stronger", "correct": false},
                {"option": "10,000 Times Stronger", "correct": true},
                {"option": "20,000 Times Stronger", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> An earthquake that measures 8 on the Richter Scale would be 10,000 Times Stronger than an earthquake that measures 4. <br/><br/>Improving STEM education will help the U.S. build a highly skilled workforce that can compete for and excel in the careers that fuel innovation and help solve some of our biggest challenges.</p>",
            "incorrect": "<p><span>Guess again. An earthquake that measures 8 on the Richter Scale would be 10,000 Times Stronger than an earthquake that measures 4</span> Improving STEM education will help the U.S. build a highly skilled workforce that can compete for and excel in the careers that fuel innovation and help solve some of our biggest challenges.</p>" // no comma here
        }
        ,
        { // Question 17
            "id": 17,
            "q": "What would an object that weighs 120 pounds on Earth weigh on the moon?",
            "a": [
                {"option": "10 pounds", "correct": false},
                {"option": "20 pounds", "correct": true},
                {"option": "82 pounds", "correct": false},
                {"option": "150 pounds", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> Gravitational pull is a function of mass and radius of the planet.  The moon's gravitational pull is approximately 1/6 of the earth's.</p>",
            "incorrect": "<p><span>Sorry.</span> An object that weighs 120 pounds on Earth would only weigh 20 pounds on the moon. <br/><br>Gravitational pull is a function of mass and radius of the planet.  The moon's gravitational pull is approximately 1/6 of the earth's.</p>" // no comma here
        }
        ,
        { // Question 18
            "id": 18,
            "q": "To form carbonic acid in the bloodstream, what two compounds are needed?",
            "a": [
                {"option": "Carbon Dioxide and Citric Acid", "correct": false},
                {"option": "Water and Carbon Dioxide", "correct": true},
                {"option": "Pyruvic Acid and Water", "correct": false},
                {"option": "Glucose and Carbon Dioxide", "correct": false}
            ],
            "correct": "<p><span>Yes.</span> An excess of Carbon Dioxide and Water form carbonic acid.<br/><br/> Chevron has teamed up with the Fab Foundation in the first corporate initiative of its kind.  Chevron support will bring Fab Labs to locations in areas where we operate as well as help build a model replicable by others.  A Fab Lab gives students the tools to develop the practical and critical thinking skills they will need to be the inventors and innovators of the future. Fab Labs are technical platforms for STEM education, workforce development and business idea prototyping.</p>",
            "incorrect": "<p><span>Sorry.</span> It's actually an excess of Carbon Dioxide and Water that form carbonic acid. <br/><br/>Chevron has teamed up with the Fab Foundation in the first corporate initiative of its kind.  Chevron support will bring Fab Labs to locations in areas where we operate as well as help build a model replicable by others.  A Fab Lab gives students the tools to develop the practical and critical thinking skills they will need to be the inventors and innovators of the future. Fab Labs are technical platforms for STEM education, workforce development and business idea prototyping.</p>" // no comma here
        }
    ]
};
