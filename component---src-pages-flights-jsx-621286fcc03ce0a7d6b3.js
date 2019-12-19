(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{d17x:function(e,t,r){"use strict";r.r(t);r("q1tI"),r("bWfx"),r("jqX0"),r("KKXr"),r("8+KV"),r("bHtr");var n=r("h4VS");function a(){var e=Object(n.a)(["Between "," and "," I took "," flights with and average distance of "," miles, and total milage of ",".  Total energy usage was around "," kwh or "," tonnes of co2.\n\nYou can drag the globe below to rotate."]);return a=function(){return e},e}function o(){var e=Object(n.a)(["# "," years of flights"]);return o=function(){return e},e}function i(e,t){var r=e.module();return r.variable(t("title")).define("title",["md","diff_years","start_end_date"],(function(e,t,r){return e(o(),t(r[1],r[0]))})),r.variable(t("blurb")).define("blurb",["md","format_date","start_end_date","routes","fmt_num","average_miles","total_miles","fmt_num_round","eu","tonnes_co2"],(function(e,t,r,n,o,i,u,f,l,c){return e(a(),t(r[0]),t(r[1]),n.length,o(i),o(u),f(l.flying.flying_miles_to_kwh(u)),f(c))})),r.variable(t("chart")).define("chart",["DOM","width","height","d3","projection","sphere","land","routes","resample","colour_scale","drag"],(function(e,t,r,n,a,o,i,u,f,l,c){var s=e.context2d(t,r),d=n.geoPath(a,s);function _(){s.clearRect(0,0,t,r),s.beginPath(),d(o),s.fillStyle="#fff",s.fill(),s.beginPath(),d(i),s.fillStyle="#000",s.fill(),s.beginPath(),d(o),s.stroke(),u.forEach((function(e){var t=[[e.lng_from,e.lat_from],[e.lng_to,e.lat_to]],r=f(t),n=[r.after[1][0]+e.random,r.after[1][1]+e.random];r.after[1]=n;var a={type:"LineString",coordinates:r.after};s.lineWidth=1,s.lineO,s.beginPath(),d(a),s.strokeStyle=l(e.date),s.stroke()})),s.lineWidth=1,s.strokeStyle="#000000"}return n.select(s.canvas).call(c(a).on("drag.render",_)).call(_).node()})),r.variable(t("projection")).define("projection",["d3","width","height","sphere"],(function(e,t,r,n){return e.geoOrthographic().fitExtent([[1,1],[t-1,r-1]],n).translate([t/2,r/2]).rotate([0,-51]).precision(.1)})),r.variable(t("tonnes_co2")).define("tonnes_co2",["kwh_to_kg_co2","eu","total_miles"],(function(e,t,r){return e(t.flying.flying_miles_to_kwh(r))/1e3})),r.variable(t("kwh_to_kg_co2")).define("kwh_to_kg_co2",["eu"],(function(e){return function(t){return t*e.convert.per("kg_co2_jet_fuel/kwh")}})),r.variable(t("total_miles")).define("total_miles",["d3","routes"],(function(e,t){return e.sum(t,(function(e){return e.distance}))})),r.variable(t("average_miles")).define("average_miles",["d3","routes"],(function(e,t){return e.mean(t,(function(e){return e.distance}))})),r.variable(t("eu")).define("eu",["require"],(function(e){return e("@robinl/energy_usage@0.0.34")})),r.variable(t("start_end_date")).define("start_end_date",["d3","routes"],(function(e,t){return e.extent(t,(function(e){return e.date}))})),r.variable(t("fmt_num")).define("fmt_num",["d3"],(function(e){return e.format(",.0f")})),r.variable(t("fmt_num_round")).define("fmt_num_round",["d3"],(function(e){return e.format(",.2r")})),r.variable(t("diff_years")).define("diff_years",(function(){return function(e,t){var r=(e.getTime()-t.getTime())/1e3;return r/=86400,Math.abs(Math.round(r/365.25))}})),r.variable(t("format_date")).define("format_date",(function(){return function(e){return e.toISOString().split("T")[0]}})),r.variable(t("colour_scale")).define("colour_scale",["d3","routes"],(function(e,t){return e.scaleSequential(e.interpolateOrRd).domain(e.extent(t,(function(e){return e.date})))})),r.variable(t("resample")).define("resample",["projection","d3"],(function(e,t){return function(r){for(var n=0,a=r.length,o=[],i=[];++n<a;){var u=r[n-1].slice(),f=r[n].slice(),l=e(u),c=e(f),s=c[0]-l[0],d=c[1]-l[1],_=s*s+d*d;if(o.push(u),i.push(u),_>.4){var h=t.geoInterpolate(u,f)(.5),g=e(h),v=g[0]-l[0],b=g[1]-l[1],m=d*v-s*b;if(m*m/_>.1){var p=(v*s+b*d)/_;o.push(e.invert(h.resampled=[l[0]+p*s,l[1]+p*d])),i.push(h)}}}return a&&(o.push(f),i.push(f)),{before:o,after:i}}})),r.variable(t("drag")).define("drag",["versor","d3"],(function(e,t){return function(r){var n,a,o;return t.drag().on("start",(function(){n=e.cartesian(r.invert(t.mouse(this))),a=e(o=r.rotate())})).on("drag",(function(){var i=e.cartesian(r.rotate(o).invert(t.mouse(this))),u=e.multiply(a,e.delta(n,i));r.rotate(e.rotation(u))}))}})),r.variable(t("height")).define("height",["width"],(function(e){return e})),r.variable(t("sphere")).define("sphere",(function(){return{type:"Sphere"}})),r.variable(t("land")).define("land",["topojson","world"],(function(e,t){return e.feature(t,t.objects.land)})),r.variable(t("world")).define("world",["d3"],(function(e){return e.json("https://unpkg.com/world-atlas@1/world/110m.json")})),r.variable(t("versor")).define("versor",["require"],(function(e){return e("versor@0.0.3")})),r.variable(t("topojson")).define("topojson",["require"],(function(e){return e("topojson-client@3")})),r.variable(t("d3")).define("d3",["require"],(function(e){return e("d3@5")})),r.variable(t("routes_raw")).define("routes_raw",["d3"],(function(e){return e.csv("https://gist.githubusercontent.com/RobinL/ba3acbf42349115ed266a98643eb5a80/raw/a603b1fec071383d6a3eb27cbcda789c54cb0014/my_flights.csv",e.autoType)})),r.variable(t("routes")).define("routes",["routes_raw"],(function(e){return e.map((function(e){return e.random=(Math.random()-.5)*e.distance/1e3,e}))})),r}var u=r("56Sw"),f=r("qKvR");r.d(t,"frontmatter",(function(){return l}));var l={title:"My flights",post_date:"2019-10-05",code_url:"https://observablehq.com/@robinl/my-flights/",post_type:"obs",post_category:"energy"},c=["title","blurb","chart"];t.default=function(e){e.data;return Object(f.c)(u.a,{define:i,output_order:c,post_frontmatter:l})}},jqX0:function(e,t,r){var n=r("XKFU"),a=r("jtBr");n(n.P+n.F*(Date.prototype.toISOString!==a),"Date",{toISOString:a})},jtBr:function(e,t,r){"use strict";var n=r("eeVq"),a=Date.prototype.getTime,o=Date.prototype.toISOString,i=function(e){return e>9?e:"0"+e};e.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))}))||!n((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+("00000"+Math.abs(t)).slice(n?-6:-4)+"-"+i(e.getUTCMonth()+1)+"-"+i(e.getUTCDate())+"T"+i(e.getUTCHours())+":"+i(e.getUTCMinutes())+":"+i(e.getUTCSeconds())+"."+(r>99?r:"0"+i(r))+"Z"}:o}}]);
//# sourceMappingURL=component---src-pages-flights-jsx-621286fcc03ce0a7d6b3.js.map