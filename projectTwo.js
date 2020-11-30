var chalk=require("chalk");
var inp = require('readline-sync');

var name=inp.question("What's your name? ");
console.log("Welcome "+name+"!");

function data(score){
  var scores={
    "Vinit":8,
    "Rakesh":6,
  }
    highscore=Math.max(...Object.values(scores))
    if (highscore<score){
        console.log(chalk.green("Yay!, You have highest score"))
        console.log("Please send the screenshot of your score.")
    }
  }

// Check answer
function check(questions){
    var score=0;
    for(i=0;i<questions.length;i++){
      var ques=questions[i].que
      if (ques==-1){
        continue;
      }
      else{
      if(ques>=0){
        if (questions[i].opt[ques]==questions[i].ans){
          
          score+=2;
      
      }
      
      }

    }
    
    }
    console.log("\n")
    console.log("You Scored "+score+"!");
    data(score)
}
// Marvel questions
function marvel(){
  var questions=[
    {
      opt:["Marvel cinematic universe","Marvel cinema universe","Marvel cinematic unified"],

      que:inp.keyInSelect(["Marvel cinematic universe","Marvel cinema universe","Marvel cinematic unified"], "What does MCU stand for?",{cancel:"Skip"}),

      ans:"Marvel cinematic universe",
    },
    {
      opt:["Steve Harper","Steven Universe","Steve Rogers"],
      que:inp.keyInSelect(["Steve Harper","Steven Universe","Steve Rogers"],"What is the real name of Captain America?",{cancel:"Skip"}),
  
      ans:"Steve Rogers",
    },
    {
      opt:["Avengers Assemble","The incredible Hulk","Iron Man 2"],
      que:inp.keyInSelect(["Avengers Assemble","The incredible Hulk","Iron Man 2"],"In which film did Black Widow first appear?",{cancel:"Skip"}),
      ans:"Iron Man 2",

    },
    {
      opt:["Captain America: The First Avenger","Thor","Iron Man 3"],
      que:inp.keyInSelect(["Captain America: The First Avenger","Thor","Iron Man 3"],"In which film did Hawkeye first appear?",{cancel:"Skip"}),
      ans:"Thor",
  
    },
    {
     opt:["Sam Wilson","Elijah Bradley","Alexander Pierce"],
      que:inp.keyInSelect(["Sam Wilson","Elijah Bradley","Alexander Pierce"],"What is the Falcon’s real name?",{cancel:"Skip"}),
      ans:"Sam Wilson",
    }];
    check(questions);
}

// DC questions
function dc(){
  var questions=[
    {
      opt:["Orlando","Jack Kent","Jor-El"],

      que:inp.keyInSelect(["Orlando","Jack Kent","Jor-El"], "What is Superman's dad's name?",{cancel:"Skip"}),

      ans:"Jor-El",
    },
    {
      opt:["Gamma radiation","Inhaled nuclear fumes","Caught in space/time warp"],
      que:inp.keyInSelect(["Gamma radiation","Inhaled nuclear fumes","Caught in space/time warp"],"How did the original Flash get his powers?",{cancel:"Skip"}),
  
      ans:"Inhaled nuclear fumes",
    },
    {
      opt:["Alfred Wayne","Henry Farthing","Alfred Pennyworth"],
      que:inp.keyInSelect(["Alfred Wayne","Henry Farthing","Alfred Pennyworth"],"What is the name of Batman's butler?",{cancel:"Skip"}),
      ans:"Alfred Pennyworth",

    },
    {
      opt:["The Scarecrow","Catwoman","The Pengiun"],
      que:inp.keyInSelect(["The Scarecrow","Catwoman","The Pengiun"],"Who was Batman's main rival in Batman Returns?",{cancel:"Skip"}),
      ans:"The Pengiun",
  
    },
    {
     opt:["Metropolis","Galactus","Krypton"],
      que:inp.keyInSelect(["Metropolis","Galactus","Krypton"],"Where is Superman's home?",{cancel:"Skip"}),
      ans:"Krypton",
    }];
    check(questions);
}



index = inp.keyInSelect(["Marvel","DC"], 'Are you fan of Marvel or DC?',);

if (index==0){
  marvel();
  
}
else if (index==1){
  dc();
}

 
