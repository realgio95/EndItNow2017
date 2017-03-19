  var userinfo = {
    userId: undefined,
    userFName: undefined,
    userLName: undefined,
    userEmail: undefined,
    userpictre: undefined,
    posts: [],
    likes: []

  }
   window.fbAsyncInit = function() {
            FB.init({
              appId      : '1515152825175931',
              xfbml      : true,
              version    : 'v2.8'
            });
            FB.AppEvents.logPageView();
          };

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));

          

           function myFacebookLogin() {
             FB.login(function(){}, {scope: 'publish_actions,email,user_likes'});
           }

           function myFacebookName() {
             FB.api('/me', function(response) {
                  alert("Name: "+ response.name + "\nFirst name: " + response.first_name + "\nID: "+response.id);
              });
           }

          function myFacebookMore() {
           FB.api('/me', {fields: 'gender, first_name, last_name, email, likes'}, function(response) {
               alert("Name: " + response.first_name + "\nEmail: " + response.email + "\nGender: "+response.gender);
             });
           }

           function myFacebookLikes() {
             var likesObjects = [];
             FB.api('/me', {fields: 'gender, first_name, last_name, email, likes'}, function(response) {
               var likesList = []
                 for (var like of response.likes.data){
                   likesList.push(like.name);
                 }
                 for (var likeName of likesList){
                   alert(likeName);
                 }
              });
           }
