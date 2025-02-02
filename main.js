let wel = document.getElementById("Welcome");
let but = document.getElementById('scroll');
let ul = document.getElementById("ul");

window.onscroll = function() {
    // تغيير حجم الخط عند التمرير
    if (window.scrollY > 50) {
        wel.style.fontSize = '40px';
    } else {
        wel.style.fontSize = '60px';
    }

    // إظهار زر التمرير عند الوصول إلى أسفل الصفحة
    if (window.scrollY >= 300) {
        but.style.display = "block";
    } else {
        but.style.display = "none";
    }

    // تغيير لون الخلفية للقائمة عند التمرير
    if (window.scrollY > 150) {
        ul.style.backgroundColor = '#aa930e',ul.style.borderRadius='12px';
    } else {
        ul.style.backgroundColor = 'transparent';  // أو 'none' لو عايز تكون الخلفية شفافة
    }
}

// التمرير السلس للصفحة عند الضغط على الزر
but.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
}
