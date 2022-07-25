import { loadhome } from './home';
import { loadmenu } from './menu';
import { loadcontact } from './contact';

loadhome();

const tabswich = function(){
    document.getElementById("homeBtn").addEventListener("click", function(){
        loadhome();
        tabswich();
    });
    document.getElementById("contactBtn").addEventListener("click",function(){
        loadcontact();      
        tabswich();
    });
    document.getElementById("menuBtn").addEventListener("click",function(){
        loadmenu();
        tabswich();
    })
};
tabswich(); 