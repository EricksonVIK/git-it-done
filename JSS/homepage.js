var getUserRepos = function(){
    // console.log("function was called") -- console log used to verify function was being called
    // used curl and ping in terminal to verify connection with api
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();