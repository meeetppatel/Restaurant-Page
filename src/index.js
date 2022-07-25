import { loadheader } from './header';
import { loadhome } from './home';
import { loadmenu } from './menu';
import { loadcontact } from './contact';
import { loadfooter } from './footer';
import { loaddefault } from './default';


loaddefault();


const tabswich = function(){
    document.getElementById("homeBtn").addEventListener("click", function(){
        window.location.reload();
        loadheader();
        loadhome();
        loadfooter();
        tabswich();
    });
    document.getElementById("contactBtn").addEventListener("click",function(){
        window.location.reload();
        loadheader();
        loadcontact();      
        loadfooter();
        tabswich();
    })
    
};

tabswich(); 