import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
   myIcon.src = Icon;
   var btn = document.createElement('button');
   
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
   element.appendChild(btn);
   element.appendChild(myIcon);

   console.log(Data);
  
    return element;
  }
  
  document.body.appendChild(component());

