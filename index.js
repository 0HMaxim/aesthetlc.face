let dienstleistungen_header_menu = document.getElementById("dienstleistungen_header_menu");
let dienstleistungen = document.getElementById("dienstleistungen");

let lang_block = document.getElementById("lang_block");
let langs = document.getElementsByClassName("langs");




lang_block.addEventListener("mouseover", function(e){

    langs[0].style.display = 'block';

})





lang_block.addEventListener('mouseout', function(e) {

    langs[0].style.display = 'none';

});




dienstleistungen_header_menu.innerHTML=`


<li><a>ВИДАЛЕННЯ НОВОУТВОРЕНЬ</a></li>

<li><a>КОСМЕТОЛОГІЯ ОБЛИЧЧЯ ТА ТІЛА</a></li>

<li><a>ІНТИМНА КОСМЕТОЛОГІЯ</a></li>

<li><a>МЕЗОТЕРАПІЯ</a></li>
    
<li><a>БІОРЕВІТАЛІЗАЦІЯ / БІОРЕПАРАЦІЯ</a></li>
    
<li><a>БОТУЛІНОТЕРАПІЯ</a></li>
    
<li><a>ЛАЗЕРНЕ ВИДАЛЕННЯ РОЗТЯЖЕК / РУБЦІВ</a></li>
    
<li><a>IPL LUMENIS M22 ( ЛІКУВАННЯ КУПЕРОЗУ , ПІГМЕНТАЦІЇ , АКНЕ )</a></li>
                                       
<li><a>ФРАКЦІЙНЕ ОМОЛОДЖЕННЯ RESUR - FX</a></li>
    
<li><a>КОНТУРНА ПЛАСТИКА</a></li>
    
<li><a>ЛАЗЕРНА EПІЛЯЦІЯ</a></li>
    
<li><a>ПЛАЗМОЛІФТИНГ</a></li>
    
<li><a>СКЛЕРОТЕРАПІЯ</a></li>
    
<li><a>ВОЛЮМІЗАЦІЯ ОБЛИЧЧЯ (БЕЗОПЕРАЦІЙНА ПІДТЯЖКА)</a></li>
    
<li><a>БЛАНШИНГ</a></li>
    
<li><a>ХІМІЧНА ЛІПОСАКЦІЯ</a></li>
    
<li><a>ПЕРМАНЕНТНИЙ МАКІЯЖ</a></li>



`




dienstleistungen.addEventListener('mouseover', function(e) {

    dienstleistungen_header_menu.style.display = 'block';

});


dienstleistungen.addEventListener('mouseout', function(e) {

    dienstleistungen_header_menu.style.display = 'none';

});

















