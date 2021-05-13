document.getElementById('z-form').addEventListener("submit",checkForm);

function checkForm(){
    var el=document.getElementById('z-form');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('Password').value;
    var repass = document.getElementById('RePass').value;
    var fail="";
    if(name==""||pass==""||email==""||repass=="")
      fail="Заполните все поля.";
    else if(name.length<=1 || name.length>50)
      fail="Введите коректное имя.";
    else if(pass.length<8)
      fail="Пароль должен быть не меньше 8 символов.";
    else if(pass != repass)
      fail="Пароли должны совпадать.";
    else if(pass.split("$").length>1)
      fail="Знак $ дожен быть не больше 1-го раза.";
    else if(pass.split("!").length>1)
      fail="Знак ! дожен быть не больше 2-х раза.";
    else if(pass.split("@").length>1)
      fail="Знак @ дожен быть не больше 1-го раза.";
    else if(pass.split("#").length>1)
      fail="Знак # дожен быть не больше 1-го раза.";
    if (fail !=""){
      document.getElementById('error').innerHTML=fail;

    }else {
      alert("Все данные заполнены коректное.");
      window.location='https://lichess.org';
    }
    return false;
}
