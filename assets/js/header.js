

document.write("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">" );    
document.write("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\" crossorigin=\"anonymous\">" );    
document.write("<script src=\"assets/js/jquery-3.4.1.min.js\"></script>");    
document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/header.css\">");
document.write("<link rel=\'stylesheet\' href=\'https://use.fontawesome.com/releases/v5.7.0/css/all.css\' integrity=\'sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\' crossorigin=\'anonymous\'>");


 
const $menu = $('#navbarToggleExternalContent'); 
$menu.on('show.bs.collapse', function () { 
$menu.addClass('show');   
}); 
$menu.on('hide.bs.collapse', function () { 
$menu.removeClass('show');   
}); 


document.write("</head>");
document.write("<body>");
document.write("<div class=\"pos-f-t fixed \">");  
document.write("<nav class=\"navbar navbar-dark bg-dark \" style=\"height: 96px;\">");      
document.write("<button class=\"navbar-toggler\" style=\" width:53px;\"type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\">");        
document.write("<span class=\"navbar-toggler-icon\" ></span>");        
document.write("</button>");
document.write("<button id=\"btn\" onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;position:absolute;left:100px;top:15px;\">Login</button> ");
document.write("<button id=\"btn\" onclick=\"document.getElementById('id02').style.display='block'\" style=\"width:auto;position:absolute;left:200px;top:15px;\">Sign up</button> ");       
document.write("<img id=\"logoimg\" src=\"assets/img/LOGO1.png\" alt=\"blossom\" width=\"200px\" height=\"80px\" align=\"right\">");        
document.write("<h4 style=\"text-align:right; color:#FFFFFF; \"><img src=\"assets/img/blossom.png\" alt=\"\" style=\"width: 45px; margin-right:20px;\">瀏覽人數 : 10000<img src=\"assets/img/blossom.png\" alt=\"\" style=\"width: 45px; margin-left:20px;\">");        
document.write("</h4>");        
document.write("</nav>");      
document.write("<div class=\"bg-dark collapse width position-fixed \" id=\"navbarToggleExternalContent\">");      
document.write("<!-- https://stackoverflow.com/a/10055302/9265131 -->");        
document.write("<div class=\"bg-dark py-4 \" style=\" text-align:center\">");        
document.write("<center><img src=\"assets/img/logo2.jpg\" alt=\"logo2\" class=\"rounded-circle center-block \"></center><br>");           
document.write("<a href=\"index.html\"><h4 class=\"text-white mx-4\" >首頁</h4></a>");          
document.write("<hr color=\"white\" width=\"100px\" size=\"20\">");    
document.write("<a href=\"member.html\"><h4 class=\"text-white mx-4\" >會員中心</h4></a>");      
document.write("<a href=\"purchase.html\"><h4 class=\"text-white mx-4\" >商品選購</h4></a>");          
document.write("<a href=\"allproduct.html\"><h4 class=\"text-white mx-4\" >商品總覽</h4></a>");          
document.write("<a href=\"about_us.html\"><h4 class=\"text-white mx-4\" >關於我們</h4></a>");                    
document.write("<a href=\"cart.html\"><img src=\"assets/img/cart.png\" style=\"width:50px;\"></a>");         
document.write("</div>");        
document.write("</div>");      
document.write(" </div>");
/*登入框架*/
document.write("<div id=\"id01\" class=\"modal\">");
document.write("<form class=\"modal-content animate\" style=\" text-align:center\" action=\"/action_page.php\">");
document.write("<div class=\"imgcontainer\" >");
document.write("<span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">&times;</span>");
document.write("<img src=\"assets/img/1.png\"style=\"width:130px;\" alt=\"Avatar\" class=\"avatar\">");
document.write("</div>");
document.write("<div class=\"container\">");
document.write("<h5 style=\"text-align:left;font-weight:bold;\">電子信箱</h5>");
document.write("<input id=\"input\" class=\"text\" type=\"email\" placeholder=\"Enter E-mail\" name=\"uname\" required>");
document.write("<h5 style=\"text-align:left;font-weight:bold;\">密碼</h5>");
document.write("<input type=\"password\" class=\"psw\" placeholder=\"Enter Password\" name=\"psw\" required>");
document.write("<button id=\"btn\" type=\"submit\">Login</button>");
document.write("<label>");
document.write("<input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me</label></div>");
document.write("<div class=\"container\" style=\"background-color:#f1f1f1\">");
document.write("<button  type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Cancel</button><br>");
document.write("</div>");
document.write("</form></div>");
/*註冊框架*/
document.write("<div id=\"id02\" class=\"modal\">");
document.write("<form class=\"modal-content animate\" style=\" text-align:center\" action=\"/action_page.php\">");
document.write("<div class=\"imgcontainer\" >");
document.write("<span onclick=\"document.getElementById('id02').style.display='none'\" class=\"close\" title=\"Close Modal\">&times;</span>");
document.write("<img src=\"assets/img/1.png\"style=\"width:130px;\" alt=\"Avatar\" class=\"avatar\">");
document.write("</div>");
document.write("<div class=\"container\">");
document.write("<h5 style=\"text-align:left;font-weight:bold;\">使用者名稱</h5>");
document.write("<input id=\"input\"  type=\"text\" class=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>");
document.write("<h5 style=\"text-align:left;font-weight:bold;\">電子信箱</h5>");
document.write("<input type=\"email\" class=\"text\" placeholder=\"Enter E-mail\" name=\"mail\" required>");
document.write("<h5 style=\"text-align:left;font-weight:bold;\">密碼</h5>");
document.write("<input type=\"password\" class=\"psw\" placeholder=\"Enter Password\" name=\"psw\" required>");
document.write("<h5 style=\"text-align:left;font-weight:bold;\">電話</h5>");
document.write("<input type=\"tel\" class=\"text\" placeholder=\"Enter Phone\" name=\"phone\" required>");
document.write("<h5 style=\"text-align:left;font-weight:bold;\">地址</h5>");
document.write("<input type=\"text\" class=\"text\" placeholder=\"Enter Address\" name=\"address\" required>");
document.write("<button id=\"btn\" type=\"submit\">Sign up</button>");
document.write("<label>");
document.write("<input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me</label></div>");
document.write("<div class=\"container\" style=\"background-color:#f1f1f1\">");
document.write("<button  type=\"button\" onclick=\"document.getElementById('id02').style.display='none'\" class=\"cancelbtn\">Cancel</button><br>");
document.write("</div>");
document.write("</form></div>");   

document.write("</body>"); 
document.write("<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"><\/script>");  
document.write("<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\" crossorigin=\"anonymous\"><\/script>");  
document.write("<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\" crossorigin=\"anonymous\"><\/script>"); 
document.write("</script>");
