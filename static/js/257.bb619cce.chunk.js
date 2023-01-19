"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{9257:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,s,i,c,o,a,d,u=e(9439),x=e(2791),l=e(7596),f=e(1087),h=e(7689),j=e(9025),b=e(8494),m=e(2942),p=e(2069),A=e(168),g=e(6444),v=g.ZP.img(r||(r=(0,A.Z)(["\n  display: block;\n"]))),Z=g.ZP.div(s||(s=(0,A.Z)(["\n  display: flex;\n"]))),z=g.ZP.div(i||(i=(0,A.Z)(["\n  width: 1400px;\n  margin: 0 auto;\n"]))),W=g.ZP.button(c||(c=(0,A.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 110px;\n  height: 40px;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n\n  font-size: 16px;\n\n  cursor: pointer;\n  background-color: aqua;\n\n  &:hover {\n    background-color: #84d2c5;\n  }\n"]))),Y=g.ZP.div(o||(o=(0,A.Z)(["\n  margin-left: 30px;\n"]))),w=g.ZP.div(a||(a=(0,A.Z)(["\n  font-weight: 700;\n"]))),V=g.ZP.div(d||(d=(0,A.Z)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n  height: 3px;\n  width: 100vw;\n  background-color: #84d2c5;\n"]))),N=e(184);function k(){var n=(0,h.UO)().id,t=(0,x.useState)({}),e=(0,u.Z)(t,2),r=e[0],s=e[1],i=(0,h.s0)(),c=(0,h.TH)(),o=(0,x.useState)("/"),a=(0,u.Z)(o,2),d=a[0],A=a[1],g=(0,x.useState)("resolved"),k=(0,u.Z)(g,2),F=k[0],P=k[1],O=(0,x.useRef)(!0);if((0,x.useEffect)((function(){P("pending"),(0,j.Y5)(n).then((function(n){s(n),P("resolved")})).catch((function(n){l.Am.error(n.response.data.status_message),P("resolved")}))}),[n]),(0,x.useEffect)((function(){if(!c.state&&O.current)return A("/"),void(O.current=!1);O.current&&(A(c.state.from),O.current=!1)}),[c.state]),r.title)return console.log(F),"pending"===F?(0,N.jsx)(m.Z,{}):"resolved"===F?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(z,{children:[(0,N.jsxs)(W,{onClick:function(){return i(d)},children:[(0,N.jsx)(b.Fjg,{})," Go back"]}),(0,N.jsxs)(Z,{children:[(0,N.jsx)(v,{src:r.poster_path?"https://image.tmdb.org/t/p/w500".concat(r.poster_path):p,alt:"Movie poster",width:"250"}),(0,N.jsxs)(Y,{children:[(0,N.jsx)("h3",{children:r.title}),(0,N.jsxs)("p",{children:["User score: ",Math.round(10*r.vote_average),"%"]}),(0,N.jsx)(w,{children:"Overview"}),(0,N.jsx)("p",{children:r.overview}),(0,N.jsx)(w,{children:"Genres"}),(0,N.jsx)("p",{children:function(){var n=r.genres.map((function(n){return n.name}));return n.join(", ")}()})]})]})]}),(0,N.jsx)(V,{}),(0,N.jsxs)(z,{children:[(0,N.jsx)("p",{children:"Additional information"}),(0,N.jsxs)("ul",{children:[(0,N.jsx)("li",{children:(0,N.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,N.jsx)("li",{children:(0,N.jsx)(f.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,N.jsx)(V,{}),(0,N.jsx)(z,{children:(0,N.jsx)(h.j3,{})})]}):void 0}},2069:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACzCAIAAAAi6yTMAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAzlJREFUeJzt3cFq6kAYQOH0EkEhAV34/o/nMoEJKJjFXQh30ZsZU2c8OvZ8Sysxcwhp4m/t1+l0aoT48+od+EVszbE1x9YcW3NszbE1x9YcW3NszbE1x9acduXzxnG8Xq9P3ZWqbTab/X6ffs6q49rQd12v13Ec089Z1drQa9yt5PmaY2uOrTmrrkPmeX72fvwGHtccW3NszVl737hot9t1Xde23zcyz/M0TefzOWfjL1d8dVnH9eKuNE3Ttm3XdTlbfgfFV5fVenFX7v6oFsVX5/maY2uOrTm25tiak9U68T7JB7yFUnx1Wa2naVp81dvVfs6W30Hx1WVdBZ/P59pvDhOKr87zNcfWHFtzbM2xNcfWHFtzbM1xBhblDIzjDIzjDKxitubYmmNrjq05zsCinIFxnIFxnIFVzNYcW3NszbE1x9YcW3NszbE1x9YcZ7tRznY5znY5xVf3xO+0+IC3sBMeWJ2/Gzm25tiaY2uOs90oZ7uc95rthhBCCDlbeGfFV+f5mmNrjq05tubYmmNrjq05tubYmpN139j3fWIiV/stZfHVOW+Mct7I8W9JK2Zrjq05tubYmuO8Mcp5I8d5I8d5Y8VszbE1x9YcW3NszbE1x9YcW3Oy7hu32+3hcFicyA3DcLlccjb+csVXl3VcL+5K0zRt2x4Oh5wtv4Piq3PeGOW8sWK25tiaY2uOrTnOG6OKry7rexaGYej7frvdfnv8crmEEGrPXXx1WVfB0zR9wAw3pvjqPF9zbM2xNcfWHFtzbM2xNcfWHFtzsu4bu65L3MXWfktZfHW5f0v6/640TXN7sPbWxVeXdQ5Z3JW7P6pF8dV5vubYmmNrjq05tuZktU58pq32D/M1yaHiY6vLah1CWHzV29V+zpbfQewDkg+vznljlPPGitmaY2uOrTm25tiaY2uOrTm25tia42w3ytkux9kux9luxWzNsTXH1hxbc5ztRjnb5Tjb5TjbrZitObbm2JqT9Z0W+hGPa46tS0qfAFa1/oB/WgeI/V+8f1a1Ph6P5k7ruu54PKaf83U6nZi9kedrjq05tubYmmNrjq05tubYmmNrjq05tubYmmNrjq05fwGcoQnTWwlgjwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=257.bb619cce.chunk.js.map