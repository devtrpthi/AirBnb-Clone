import React from "react";
/*import Tweet from "./tweet"; */
import "./App.css";
import Header from "./navbar";
import Main from "./hero";
import Card from "./card";
import Contact from "./contact";
import Joke from "./jokes";

  function App() {
    // Javascript written here
      return(
          <div className="contacts">
              <Joke 
                setup= "Blah bjsbjkcb"
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                ispun={false}
                upvotes={10}
                downvotes={1000}
                
            />
            <Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." 
                ispun={false}
            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!" 
                ispun={true}
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
                ispun={true}
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
                ispun={true}
            />
            <Joke 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
                ispun={false}
            />
          </div>
    );
}

export default App;

