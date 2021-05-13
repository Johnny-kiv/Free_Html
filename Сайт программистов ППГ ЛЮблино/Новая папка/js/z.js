function checkForm(el){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('Password').value;
    var repass = document.getElementById('RePass').value;
    var fail="";
    if(name==""||pass==""||email==""||repass=="")
      fail="Заполните все поля!!!";
    else if(name.length<=1 || name.length>50)
      fail="Введите коректное имя.";
    else if(pass<8)
      fail="Пароль должен быть не меньше 8 символов.";
    else if(pass != repass)
      fail="Пароли не должны совпадать.";
    else if(pass.split("$").length>1)
      fail="Символ $ в пароле дожен быть не больше 1-го раза.";
    else if(pass.split("!").length>1)
      fail="Символ ! в пароле быть не больше 2-х раза.";
    else if(pass.split("@").length>1)
      fail="Символ @ в пароле дожен быть не больше 1-го раза.";
    else if(pass.split("#").length>1)
      fail="Символ # d пароле дожен быть не больше 1-го раза.";
    else if(isCyrillic(pass)==true)
      fail="Язык должен быть английским.";
    else if(email.split("@")length==0)
      fail="Адрес почты должен иметь символ @";
    else if(email.split("@")length>1)
      fail="Адрес почты должен иметь символ @ не больше 1-го";
    if (fail !=""){
      document.getElementById('error').innerHTML=fail;
      return false;
    }else {
      alert("Все данные коректное.");
      return true;
    }
}
