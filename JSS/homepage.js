// var getUserRepos = function(){
//     // console.log("function was called") -- console log used to verify function was being called
//     // used curl and ping in terminal to verify connection with api
//     var response =fetch("https://api.github.com/users/octocat/repos").then(function(response){
//         response.json().then(function (data){
//             console.log(data);
//         });
//         console.log("inside", response)
//     });
//     console.log("outside");
// };
// ABOVE was used t verify access to data

var getUserRepos = function(user){
    // format the github api url
    var apiUrl = "http://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
        console.log(data);
        });
    });
};

getUserRepos("EricksonVIK");