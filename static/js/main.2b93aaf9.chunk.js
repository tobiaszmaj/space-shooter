(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={wrapper:"Battleship_wrapper__3OUr_",body:"Battleship_body__3RdFQ",shadow:"Battleship_shadow__2KHfr",flyleft:"Battleship_flyleft__2bq8W",flyright:"Battleship_flyright__3VtKy",blue:"Battleship_blue__11HE7",red:"Battleship_red__2xXhB",exhaust:"Battleship_exhaust__xsZgN",exhaustleft:"Battleship_exhaustleft__2jCo4",exhaustanimation:"Battleship_exhaustanimation__1eJYF",exhaustright:"Battleship_exhaustright__3KVx6"}},,,,function(e,t,a){e.exports={wrapper:"Start_wrapper__n-lKy",logo:"Start_logo__GHE3A",platform:"Start_platform__1wLnh"}},function(e,t,a){e.exports={wrapper:"Stats_wrapper__12jJV",lives:"Stats_lives__25zoT"}},function(e,t,a){e.exports={body:"Bullets_body__1ixZh","bullet-animation":"Bullets_bullet-animation__JDrai",laser:"Bullets_laser__1uLV8",minigun:"Bullets_minigun__1-gKL",plasma:"Bullets_plasma__1HLwb"}},function(e,t,a){e.exports={body:"Asteroid_body__3y_Ml",type1:"Asteroid_type1__1bmmg",type2:"Asteroid_type2__3GWGL",type3:"Asteroid_type3__3ChCr",type4:"Asteroid_type4__tMcmo"}},function(e,t,a){e.exports={wrapper:"Gameover_wrapper__fCY_t",menu:"Gameover_menu__1YV26"}},,,function(e,t,a){e.exports={wrapper:"Layout_wrapper__1KINx"}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAAkklEQVQ4jWNkQAX/GbADdHUwQFA9E4YUlQHNLWBE9uaLOF8MBSAgsWgzhhgI3JNAsI/+QrBj3yHYQz+IWDBEoODbLkSwIAcFqWCYBRFysFALDI+MhgzgmY6YlIMrcw2/sggO/v9HlL6MjIxYgwtXsNTwMTA2f/wP0wsXHzpBBHM9OsBVU6EDUms6OBjiqYiBgQEA5FojWIvrN38AAAAASUVORK5CYII="},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(12),c=a.n(i),s=(a(21),a(3)),l=a(4),o=a(1),u={player:{lives:3,score:0,gun:"laser",userName:"Player name",selectedShip:"blue"},game:{isStarted:!1,gameOver:!1,arenaHeight:0,arenaWidth:0,playerPosition:{width:64,height:64,x:0,y:0},playerBullets:[]},enemies:[]},p=function(e,t){switch(t.type){case"INIT_GAME":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{arenaHeight:t.payload.arenaHeight,arenaWidth:t.payload.arenaWidth,playerPosition:Object(o.a)({},e.game.playerPosition,{x:t.payload.playerPosition.x,y:t.payload.playerPosition.y})})});case"GAME_OVER":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{gameOver:!0})});case"RESET_GAME":return Object(o.a)({},u,{player:Object(o.a)({},u.player,{userName:e.player.userName}),game:Object(o.a)({},u.game,{isStarted:!0,arenaHeight:e.game.arenaHeight,arenaWidth:e.game.arenaWidth,playerPosition:Object(o.a)({},u.game.playerPosition,{x:e.game.arenaWidth/2-32,y:e.game.arenaHeight-120})})});case"MAIN_MENU":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{isStarted:!1,gameOver:!1,playerPosition:Object(o.a)({},u.game.playerPosition)})});case"SET_USERNAME":return Object(o.a)({},e,{player:Object(o.a)({},e.player,{userName:t.userName})});case"SET_BATTLESHIP":return Object(o.a)({},e,{player:Object(o.a)({},e.player,{selectedShip:t.selectedShip})});case"START_GAME":return Object(o.a)({},e,{player:Object(o.a)({},e.player,{userName:t.userName}),game:Object(o.a)({},e.game,{isStarted:!0})});case"MOVE_LEFT":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{playerPosition:Object(o.a)({},e.game.playerPosition,{x:e.game.playerPosition.x-10})})});case"MOVE_RIGHT":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{playerPosition:Object(o.a)({},e.game.playerPosition,{x:e.game.playerPosition.x+10})})});case"BULLET_CREATE":return Object(o.a)({},e,{game:Object(o.a)({},e.game,{playerBullets:[].concat(Object(l.a)(e.game.playerBullets),[t.payload])})});case"BULLET_REMOVE":var a=e.game.playerBullets.filter(function(e){return e.id!==t.id});return Object(o.a)({},e,{game:Object(o.a)({},e.game,{playerBullets:Object(l.a)(a)})});case"ENEMY_ADD":return Object(o.a)({},e,{enemies:[].concat(Object(l.a)(e.enemies),[t.payload])});case"ENEMY_REMOVE":var r=e.enemies.filter(function(e){return e.id!==t.id});return Object(o.a)({},e,{enemies:Object(l.a)(r)});case"ENEMY_CORDS":var n=e.enemies.map(function(e){return e.id===t.payload.id?Object(o.a)({},e,{cords:t.payload.cords}):e});return Object(o.a)({},e,{enemies:Object(l.a)(n)});case"PLAYER_ADD_POINTS":return Object(o.a)({},e,{player:Object(o.a)({},e.player,{score:e.player.score+t.payload})});case"PLAYER_REMOVE_HP":return Object(o.a)({},e,{player:Object(o.a)({},e.player,{lives:e.player.lives-1})});default:return e}},m=n.a.createContext(),d=a(13),y=a.n(d),g=a(6),E=a.n(g),h=a(2),_=a.n(h),f=function(e){var t={left:e.x+"px",top:e.y+"px",transition:"all linear ".concat(e.animationTime,"ms")},a=null,r=null,i=e.flyingRight?_.a.flyright:e.flyingLeft?_.a.flyleft:null;return e.selected&&(a=n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"".concat(_.a.exhaust," ").concat(_.a.exhaustleft)}),n.a.createElement("div",{className:"".concat(_.a.exhaust," ").concat(_.a.exhaustright)}))),e.withShadow&&(r=n.a.createElement("div",{className:_.a.shadow})),n.a.createElement("div",{style:t,className:_.a.wrapper},n.a.createElement("div",{className:"".concat(_.a.body," ").concat(_.a[e.color]," ").concat(i)}),a,r)},b=function(e){var t=Object(r.useContext)(m);return n.a.createElement("div",null,n.a.createElement("p",null,"Choose your battle ship!"),n.a.createElement("div",{className:E.a.platform},e.ships.map(function(e,a){var r=e===t.state.player.selectedShip;return n.a.createElement("div",{key:a,onClick:function(){return t.dispatch({type:"SET_BATTLESHIP",selectedShip:e})}},n.a.createElement(f,{animationTime:200,x:0===a?"105":"200",y:r?"40":"60",color:e,selected:r,withShadow:r}))})))},O=function(){var e=Object(r.useContext)(m),t=Object(r.useState)(""),a=Object(s.a)(t,2),i=a[0],c=a[1],l=Object(r.useState)({touched:!1,valid:!1}),o=Object(s.a)(l,2),u=o[0],p=o[1];Object(r.useEffect)(function(){u.valid&&e.dispatch({type:"START_GAME",userName:i})},[u]);return n.a.createElement("div",{className:E.a.wrapper},n.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),p(""===i?{touched:!0,valid:!1}:{touched:!0,valid:!0})}(e)}},n.a.createElement("div",{className:!u.valid&&u.touched?"form-row form-row__input form-row__input--invalid":"form-row form-row__input"},n.a.createElement("input",{placeholder:"Player name",onChange:function(e){return c(e.target.value)},type:"text",value:i})),n.a.createElement("div",{className:"form-row"},n.a.createElement("button",{type:"submit"},"Start Game"))),n.a.createElement(b,{ships:["blue","red"]}))},v=a(7),j=a.n(v),w=a(14),x=a.n(w),A=function(){var e=Object(r.useContext)(m);return Object(r.useEffect)(function(){0===e.state.player.lives&&e.dispatch({type:"GAME_OVER"})},[e.state.player.lives]),n.a.createElement("div",{className:j.a.wrapper},n.a.createElement("ul",{className:j.a.lives},Object(l.a)(Array(e.state.player.lives)).map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("img",{src:x.a,alt:"Heart"}))})),n.a.createElement("div",null,"SCORE: ",e.state.player.score))},N=a(8),S=a.n(N),B=a(5),M=function(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.height+e.y>t.y},R=function(e){var t=Object(r.useRef)(),a=Object(r.useContext)(m);Object(r.useEffect)(function(){Object(B.a)({targets:t.current,translateY:-a.state.game.arenaHeight+(a.state.game.arenaHeight-e.y)-28,duration:1500,easing:"linear",complete:function(t){t.completed&&a.dispatch({type:"BULLET_REMOVE",id:e.id})}})},[]),Object(r.useEffect)(function(){var r=t.current.getBoundingClientRect();if(a.state.enemies.length>0){var n=!0,i=!1,c=void 0;try{for(var s,l=a.state.enemies[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var o=s.value;null!==o.cords&&M(r,o.cords)&&(a.dispatch({type:"BULLET_REMOVE",id:e.id}),a.dispatch({type:"ENEMY_REMOVE",id:o.id}),a.dispatch({type:"PLAYER_ADD_POINTS",payload:o.value}))}}catch(u){i=!0,c=u}finally{try{n||null==l.return||l.return()}finally{if(i)throw c}}}},[a.state.enemies]);var i={left:e.x+"px",top:e.y+"px"},c=null;return e.y>0&&(c=n.a.createElement("div",{ref:t,style:i,className:"".concat(S.a.body," ").concat(S.a[e.type])})),c},P=a(9),L=a.n(P),T=function(e){var t=Object(r.useRef)(),a=Object(r.useContext)(m);Object(r.useEffect)(function(){a.state.game.arenaHeight>0&&(Object(B.a)({targets:t.current,translateY:a.state.game.arenaHeight+e.height,rotate:360,duration:5e3,easing:"linear",change:function(){if(null!==t.current){var r={cords:t.current.getBoundingClientRect(),id:e.id};a.dispatch({type:"ENEMY_CORDS",payload:r})}},complete:function(t){t.completed&&a.dispatch({type:"ENEMY_REMOVE",id:e.id})}}),a.state.game.gameOver&&B.a.remove(t.current))},[a.state.game.arenaHeight,a.state.game.gameOver]),Object(r.useEffect)(function(){var r=t.current.getBoundingClientRect();r.y+r.height>=a.state.game.arenaHeight-120&&M(r,a.state.game.playerPosition)&&(a.dispatch({type:"ENEMY_REMOVE",id:e.id}),a.dispatch({type:"PLAYER_REMOVE_HP"}))},[a.state.enemies]);var i={left:e.x+"px",top:e.y+"px"},c="type1";switch(e.style){case 1:c="type1";break;case 2:c="type2";break;case 3:c="type3";break;case 4:c="type4";break;default:c="type1"}return n.a.createElement("div",{ref:t,style:i,className:"".concat(L.a.body," ").concat(L.a[c])})},C=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},k=function(){return Date.now()+Math.random()},H=function(){var e=Object(r.useContext)(m);return Object(r.useEffect)(function(){if(!e.state.game.gameOver)var t=setInterval(function(){var t=C(1,4),a=C(100,e.state.game.arenaWidth-70),r=0,n=0;switch(t){case 1:r=37,n=39;break;case 2:r=26,n=26;break;case 3:r=36,n=37;break;case 4:r=35,n=44;break;default:r=0,n=0}var i={id:k(),hp:1,value:1,type:"asteroid",style:t,x:a,y:-r,hited:!1,cords:null,width:n,height:r};e.dispatch({type:"ENEMY_ADD",payload:i})},1500);return function(){return clearInterval(t)}},[e.state.game.arenaWidth,e.state.game.gameOver]),n.a.createElement(n.a.Fragment,null,e.state.enemies.map(function(e){return n.a.createElement(T,Object.assign({key:e.id},e))}))},Y=a(10),I=a.n(Y),V=function(e){var t=Object(r.useContext)(m);return n.a.createElement("div",{className:I.a.wrapper},n.a.createElement("h1",null,"Game Over!"),n.a.createElement("p",null,"You scored: ",e.score," "),n.a.createElement("div",{className:I.a.menu},n.a.createElement("button",{onClick:function(){return t.dispatch({type:"RESET_GAME"})}},"New Game"),n.a.createElement("button",{className:"red-btn",onClick:function(){t.dispatch({type:"RESET_GAME"}),t.dispatch({type:"MAIN_MENU"})}},"Main Menu")))},G=function(e){var t=Object(r.useContext)(m),a=Object(r.useState)(!0),i=Object(s.a)(a,2),c=i[0],l=i[1],o=Object(r.useState)(!1),u=Object(s.a)(o,2),p=u[0],d=u[1],y=Object(r.useState)(!1),g=Object(s.a)(y,2),E=g[0],h=g[1];Object(r.useEffect)(function(){if(t.state.game.isStarted){var a=e.arena.current.clientWidth,r=e.arena.current.clientHeight,n={arenaHeight:r,arenaWidth:a,playerPosition:{x:a/2-32,y:r-120}};t.dispatch({type:"INIT_GAME",payload:n})}setTimeout(function(){return l(!1)},1200)},[t.state.game.isStarted]),Object(r.useEffect)(function(){var e=function(e){39===e.keyCode&&t.state.game.playerPosition.x+84<t.state.game.arenaWidth?(t.dispatch({type:"MOVE_RIGHT"}),E||(h(!0),d(!1))):37===e.keyCode&&t.state.game.playerPosition.x-20>0?(t.dispatch({type:"MOVE_LEFT"}),p||(h(!1),d(!0))):a()},a=function(e){h(!1),d(!1)},r=function(){var e={id:k(),type:t.state.player.gun,position:{x:t.state.game.playerPosition.x+28,y:t.state.game.playerPosition.y-28}};t.dispatch({type:"BULLET_CREATE",payload:e})};return t.state.game.gameOver||(window.addEventListener("keydown",e),window.addEventListener("keyup",a),window.addEventListener("click",r)),t.state.game.gameOver&&(h(!1),d(!1)),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",a),window.removeEventListener("click",r)}},[p,E,t]);var _=null;return t.state.game.gameOver&&(_=n.a.createElement(V,{score:t.state.player.score})),n.a.createElement(n.a.Fragment,null,_,n.a.createElement(H,null),t.state.game.playerBullets.map(function(e){return n.a.createElement(R,{key:e.id,id:e.id,type:e.type,x:e.position.x,y:e.position.y})}),n.a.createElement(f,{color:t.state.player.selectedShip,animationTime:c?900:0,flyingLeft:p,flyingRight:E,x:0===t.state.game.playerPosition.x?null:t.state.game.playerPosition.x,y:0===t.state.game.playerPosition.y?null:t.state.game.playerPosition.y,selected:!0}))},W=function(){var e=Object(r.useContext)(m),t=Object(r.useRef)(null),a=null;return e.state.game.isStarted||(a=n.a.createElement(O,null)),e.state.game.isStarted&&(a=n.a.createElement(G,{arena:t})),n.a.createElement("div",{ref:t,className:y.a.wrapper},n.a.createElement(A,null),a)},D=function(){var e=Object(r.useReducer)(p,u),t=Object(s.a)(e,2),a=t[0],i=t[1];return n.a.createElement(m.Provider,{value:{state:a,dispatch:i}},n.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.2b93aaf9.chunk.js.map