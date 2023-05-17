function quat(a,b,c) {
    if(a==0) return "Помилка, a=0 недопустиме значення";
    var D=b*b-4*a*c;
    var x1,x2;
    if(D>0) {
       x1=(-b+Math.sqrt(D))/(2*a);
       x2=(-b-Math.sqrt(D))/(2*a);
       return "Коефіцієнти: a="+a+", b="+b+", c="+c+"\nКорені рівняння: X1=" + x1 + ", X2=" + x2 + 
       "\nДискримінант(D)=" + D;
    } else if(D==0) {
        x1=-b/(2*a);
        return "Коефіцієнти: a="+a+", b="+b+", c="+c+"\nКорінь рівняння: X1=" + x1 + "\nДискримінант(D)=" + D;
    } else if(D<0) return "Коефіцієнти: a="+a+", b="+b+", c="+c+"\nНемає коренів\nДискримінант(D)=" + D; 
}
function prog(){
    var a = document.getElementById(`a`).value;
    var b = document.getElementById(`b`).value;
    var c = document.getElementById(`c`).value;
    var result = quat(a,b,c);
    document.getElementById(`result`).textContent = result;
    document.getElementById('otvet').style.display = 'block';
}

