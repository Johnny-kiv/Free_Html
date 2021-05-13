function checkForm(el){
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
      return false;
    }else {
      alert("Все данные заполнены коректное.");
      return true;
    }
}
