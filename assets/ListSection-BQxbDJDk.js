import{k as R,l as x,j as e,F as I,E as T,m as k,n as A,M as D,i as f,r as y,u as w,h as $,s as M,c as V,B as q,p as Y}from"./index-BzyNyVFC.js";const z="_list_n7wgd_1",U="_listItem_n7wgd_10",E="_imgSection_n7wgd_23",O="_image_n7wgd_32",P="_status_n7wgd_38",Z="_statusDisable_n7wgd_51",B="_infoSection_n7wgd_58",W="_nameSection_n7wgd_62",H="_nannyName_n7wgd_67",J="_about_n7wgd_76",K="_buttonReadMore_n7wgd_84",X="_iconSvg_n7wgd_101",G="_iconSvgStar_n7wgd_109",Q="_iconSvgFavorite_n7wgd_117",ee="_isFavorite_n7wgd_125",te="_locationSection_n7wgd_130",ae="_locationFavorite_n7wgd_138",se="_spanLocation_n7wgd_143",ne="_spanPrice_n7wgd_162",ie="_buttonFavorite_n7wgd_166",c={list:z,listItem:U,imgSection:E,image:O,status:P,statusDisable:Z,infoSection:B,nameSection:W,nannyName:H,about:J,buttonReadMore:K,iconSvg:X,iconSvgStar:G,iconSvgFavorite:Q,isFavorite:ee,locationSection:te,locationFavorite:ae,spanLocation:se,spanPrice:ne,buttonFavorite:ie},re="_reviewsList_1kij1_1",oe="_itemReviews_1kij1_8",ce="_reviewerName_1kij1_14",le="_reviewerLeter_1kij1_19",de="_reviewerTitle_1kij1_34",me="_reviewValueBox_1kij1_44",ue="_reviewValue_1kij1_44",he="_iconSvgStar_1kij1_55",_e="_buttonAppointment_1kij1_62",h={reviewsList:re,itemReviews:oe,reviewerName:ce,reviewerLeter:le,reviewerTitle:de,reviewValueBox:me,reviewValue:ue,iconSvgStar:he,buttonAppointment:_e},pe="_madalContent_1d0o5_1",xe="_title_1d0o5_11",ge="_description_1d0o5_19",ve="_nameAvatar_1d0o5_27",Ne="_avatar_1d0o5_34",fe="_youNanny_1d0o5_39",je="_nannyName_1d0o5_46",be="_iconSvg_1d0o5_53",_={madalContent:pe,title:xe,description:ge,nameAvatar:ve,avatar:Ne,youNanny:fe,nannyName:je,iconSvg:be},we=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,Se=/^\+380\d{9}$/,De=/^([01]\d|2[0-3]):([0-5]\d)$/,ye=R().shape({address:x().min(1,"Too Short!").max(20,"Too Long!").required("Required"),numberPhone:x().matches(Se,"Invalid phone number format").required("Required"),age:x().min(1,"Too Short!").max(2,"Too Long!").required("Required"),time:x().matches(De,"Invalid time format").required("Required"),email:x().email("Invalid email").matches(we,"Invalid email domain").required("Required"),fatherName:x().required("Required"),comment:x().required("Required")}),Fe="_form_axi9p_1",Ce="_positionInput_axi9p_7",Le="_errorsSchema_axi9p_12",Re="_field_axi9p_23",Ie="_textarea_axi9p_24",Te="_buttonSubmit_axi9p_46",ke="_blockField_axi9p_57",Ae="_hiddenLabel_axi9p_64",p={form:Fe,positionInput:Ce,errorsSchema:Le,field:Re,textarea:Ie,buttonSubmit:Te,blockField:ke,hiddenLabel:Ae},g=({id:t,name:a,type:s="text",placeholder:n,ariaLabel:i,as:o="input"})=>e.jsxs("div",{className:p.positionInput,children:[e.jsx("label",{htmlFor:t,className:p.hiddenLabel,children:n}),e.jsx(I,{type:s,id:t,name:a,placeholder:n,"aria-label":i,className:o==="textarea"?p.textarea:p.field,as:o}),e.jsx(T,{name:a,component:"div",className:p.errorsSchema})]}),$e=()=>e.jsx(k,{initialValues:{address:"",numberPhone:"+380",age:"",time:"",email:"",fatherName:"",comment:""},onSubmit:t=>console.log(t),validationSchema:ye,children:()=>e.jsxs(A,{className:p.form,children:[e.jsxs("div",{className:p.blockField,children:[e.jsx(g,{id:"address",name:"address",placeholder:"Address",ariaLabel:"Address"}),e.jsx(g,{id:"numberPhone",name:"numberPhone",placeholder:"+380",ariaLabel:"number phone"}),e.jsx(g,{id:"age",name:"age",placeholder:"Child's age",ariaLabel:"Child's age"}),e.jsx(g,{id:"time",name:"time",type:"time",placeholder:"00:00",ariaLabel:"time"})]}),e.jsx(g,{id:"email",name:"email",type:"email",placeholder:"Email",ariaLabel:"Email"}),e.jsx(g,{id:"fatherName",name:"fatherName",placeholder:"Father's or mother's name",ariaLabel:"Father's or mother's name"}),e.jsx(g,{id:"comment",name:"comment",placeholder:"Comment",ariaLabel:"Comment",as:"textarea"}),e.jsx("button",{type:"submit",className:p.buttonSubmit,children:"Submit"})]})}),Me={content:{border:"none",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"30px",padding:"64px",color:"#11101c",zIndex:1001},overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)",zIndex:1e3}};D.setAppElement("#root");function Ve({data:t,isModal:a=!1,closeModal:s}){return e.jsx(D,{isOpen:a,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:s,style:Me,children:e.jsxs("div",{className:_.madalContent,children:[e.jsx("button",{type:"button",onClick:s,children:e.jsx("svg",{className:_.iconSvg,children:e.jsx("use",{href:`${f}#icon-iconX`})})}),e.jsx("h2",{className:_.title,children:"Make an appointment with a babysitter"}),e.jsx("p",{className:_.description,children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),e.jsxs("div",{className:_.nameAvatar,children:[e.jsx("img",{src:t.avatar_url,alt:"avatar nanny",className:_.avatar,width:44}),e.jsxs("div",{children:[e.jsx("span",{className:_.youNanny,children:"Your nanny"}),e.jsx("h3",{className:_.nannyName,children:t.name})]})]}),e.jsx($e,{})]})})}function qe({nanny:t}){const[a,s]=y.useState(!1);function n(){s(!0)}function i(){s(!1)}return e.jsxs("ul",{className:h.reviewsList,children:[t.reviews.map((o,l)=>e.jsxs("li",{className:h.itemReviews,children:[e.jsxs("div",{className:h.reviewerTitle,children:[e.jsx("div",{className:h.reviewerLeter,children:e.jsx("span",{children:o.reviewer.substr(0,1)})}),e.jsxs("div",{children:[e.jsx("h3",{className:h.reviewerName,children:o.reviewer}),e.jsxs("span",{className:h.reviewValueBox,children:[e.jsx("svg",{className:h.iconSvgStar,children:e.jsx("use",{href:`${f}#icon-star`})}),e.jsx("span",{className:h.reviewValue,children:o.rating.toFixed(1)})]})]})]}),e.jsx("p",{children:o.comment})]},l)),e.jsx("button",{type:"button",onClick:n,className:h.buttonAppointment,children:"Make an appointment"}),e.jsx(Ve,{data:t,isModal:a,closeModal:i})]})}function v(t){const a=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&a==="[object Date]"?new t.constructor(+t):typeof t=="number"||a==="[object Number]"||typeof t=="string"||a==="[object String]"?new Date(t):new Date(NaN)}const F=6e4,C=36e5;function S(t,a){const s=v(t),n=v(a),i=s.getTime()-n.getTime();return i<0?-1:i>0?1:i}function Ye(t,a){const s=v(t),n=v(a);return s.getFullYear()-n.getFullYear()}function ze(t,a){const s=v(t),n=v(a),i=S(s,n),o=Math.abs(Ye(s,n));s.setFullYear(1584),n.setFullYear(1584);const l=S(s,n)===-i,d=i*(o-+l);return d===0?0:d}function Ue(t,a){const n=Ze(t);let i;if(n.date){const r=Be(n.date,2);i=We(r.restDateString,r.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);const o=i.getTime();let l=0,d;if(n.time&&(l=He(n.time),isNaN(l)))return new Date(NaN);if(n.timezone){if(d=Je(n.timezone),isNaN(d))return new Date(NaN)}else{const r=new Date(o+l),u=new Date(0);return u.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),u.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),u}return new Date(o+l+d)}const j={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ee=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Oe=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Pe=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Ze(t){const a={},s=t.split(j.dateTimeDelimiter);let n;if(s.length>2)return a;if(/:/.test(s[0])?n=s[0]:(a.date=s[0],n=s[1],j.timeZoneDelimiter.test(a.date)&&(a.date=t.split(j.timeZoneDelimiter)[0],n=t.substr(a.date.length,t.length))),n){const i=j.timezone.exec(n);i?(a.time=n.replace(i[1],""),a.timezone=i[1]):a.time=n}return a}function Be(t,a){const s=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+a)+"})|(\\d{2}|[+-]\\d{"+(2+a)+"})$)"),n=t.match(s);if(!n)return{year:NaN,restDateString:""};const i=n[1]?parseInt(n[1]):null,o=n[2]?parseInt(n[2]):null;return{year:o===null?i:o*100,restDateString:t.slice((n[1]||n[2]).length)}}function We(t,a){if(a===null)return new Date(NaN);const s=t.match(Ee);if(!s)return new Date(NaN);const n=!!s[4],i=N(s[1]),o=N(s[2])-1,l=N(s[3]),d=N(s[4]),r=N(s[5])-1;if(n)return et(a,d,r)?Ke(a,d,r):new Date(NaN);{const u=new Date(0);return!Ge(a,o,l)||!Qe(a,i)?new Date(NaN):(u.setUTCFullYear(a,o,Math.max(i,l)),u)}}function N(t){return t?parseInt(t):1}function He(t){const a=t.match(Oe);if(!a)return NaN;const s=b(a[1]),n=b(a[2]),i=b(a[3]);return tt(s,n,i)?s*C+n*F+i*1e3:NaN}function b(t){return t&&parseFloat(t.replace(",","."))||0}function Je(t){if(t==="Z")return 0;const a=t.match(Pe);if(!a)return 0;const s=a[1]==="+"?-1:1,n=parseInt(a[2]),i=a[3]&&parseInt(a[3])||0;return at(n,i)?s*(n*C+i*F):NaN}function Ke(t,a,s){const n=new Date(0);n.setUTCFullYear(t,0,4);const i=n.getUTCDay()||7,o=(a-1)*7+s+1-i;return n.setUTCDate(n.getUTCDate()+o),n}const Xe=[31,null,31,30,31,30,31,31,30,31,30,31];function L(t){return t%400===0||t%4===0&&t%100!==0}function Ge(t,a,s){return a>=0&&a<=11&&s>=1&&s<=(Xe[a]||(L(t)?29:28))}function Qe(t,a){return a>=1&&a<=(L(t)?366:365)}function et(t,a,s){return a>=1&&a<=53&&s>=0&&s<=6}function tt(t,a,s){return t===24?a===0&&s===0:s>=0&&s<60&&a>=0&&a<60&&t>=0&&t<25}function at(t,a){return a>=0&&a<=59}const st="_listCharacters_qbzly_1",nt="_charactersNanny_qbzly_10",it="_charactersValue_qbzly_16",rt="_charactersValueAge_qbzly_20",m={listCharacters:st,charactersNanny:nt,charactersValue:it,charactersValueAge:rt},ot=new Date;function ct({nanny:t}){return e.jsxs("ul",{className:m.listCharacters,children:[e.jsxs("li",{className:m.charactersNanny,children:[e.jsx("span",{children:"Age:"})," ",e.jsx("span",{className:m.charactersValueAge,children:ze(ot,Ue(t.birthday))})]}),e.jsxs("li",{className:m.charactersNanny,children:[e.jsx("span",{children:"Experience:"})," ",e.jsx("span",{className:m.charactersValue,children:t.experience})]}),e.jsxs("li",{className:m.charactersNanny,children:[e.jsx("span",{children:"Kids Age:"})," ",e.jsx("span",{className:m.charactersValue,children:t.kids_age})]}),e.jsxs("li",{className:m.charactersNanny,children:[e.jsx("span",{children:"Characters:"})," ",e.jsx("span",{className:m.charactersValue,children:t.characters.map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(", ")})]}),e.jsxs("li",{className:m.charactersNanny,children:[e.jsx("span",{children:"Education:"})," ",e.jsx("span",{className:m.charactersValue,children:t.education})]})]})}function dt({nanniesCatalog:t}){const[a,s]=y.useState([]),n=w($),i=w(M),o=V(),l=r=>{if(!i){q.warn("Please log in to continue.");return}o(Y(r))},d=r=>{s(u=>[...u,r.target.id])};return e.jsx("ul",{className:c.list,children:t.map(r=>e.jsxs("li",{className:c.listItem,children:[e.jsxs("div",{className:c.imgSection,children:[e.jsx("img",{src:r.avatar_url,alt:r.name,className:c.image}),e.jsx("div",{className:c.status,children:e.jsx("div",{className:c.statusDisable})})]}),e.jsxs("div",{className:c.infoSection,children:[e.jsxs("div",{className:c.nameSection,children:[e.jsxs("div",{children:[e.jsx("span",{children:"Nanny"}),e.jsx("h2",{className:c.nannyName,children:r.name})]}),e.jsxs("div",{className:c.locationFavorite,children:[e.jsxs("div",{className:c.locationSection,children:[e.jsxs("span",{className:c.spanLocation,children:[e.jsx("svg",{className:c.iconSvg,children:e.jsx("use",{href:`${f}#icon-map`})}),e.jsx("span",{children:r.location})]}),e.jsxs("span",{className:c.spanLocation,children:[e.jsx("svg",{className:c.iconSvgStar,children:e.jsx("use",{href:`${f}#icon-star`})}),e.jsxs("span",{children:["Rating: ",r.rating]})]}),e.jsxs("span",{children:["Price / 1 hour:"," ",e.jsxs("span",{className:c.spanPrice,children:[r.price_per_hour,"$"]})]})]}),e.jsx("button",{type:"button",className:c.buttonFavorite,onClick:()=>l(r),children:e.jsx("svg",{className:`${c.iconSvgFavorite} ${n.some(u=>u.id===r.id)?c.isFavorite:""}`,children:e.jsx("use",{href:`${f}#icon-heart`})})})]})]}),e.jsx(ct,{nanny:r}),e.jsx("p",{className:c.about,children:r.about}),a.includes(r.id)?e.jsx(qe,{nanny:r}):e.jsx("button",{type:"button",id:r.id,className:c.buttonReadMore,onClick:d,"aria-label":"show reviews",children:"Read more"})]})]},r.id))})}export{dt as L};
