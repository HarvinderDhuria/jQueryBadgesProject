
$(document).ready(function(){
  var url="https://www.codeschool.com/users/manvindersingh.json";
  $.ajax(url,{
    dataType:"jsonp",
    success:function(response){
      console.log("succeed "+response);
      console.log(response.badges);
      console.log(response.courses.completed);

      var badges=$("#badges");
      var count=response.courses.completed.length;
      for(var i=0;i<count;i++){
        var currentCourse =  response.courses.completed[i];
        var title="<h3>" + currentCourse.title + "</h3>";
        var image = "<img src='" + currentCourse.badge +  "' alt='" + currentCourse.title + "'/>";
        var linkElement = "<a class='btn btn-primary' href='" + currentCourse.url + "' target=_blank>See Course</a>";

        var div="<div class='course'>" + title + image +  linkElement + "</div";
        $("#badges").append(div);
      }
    },
  });
});
