import{E as h,j as l,_ as m,o as a,c as i,a as e,F as p,r as u,t as n,d as g,e as b}from"./index-XqyBzGGU.js";import{_ as f}from"./AbstractComponent.vue_vue_type_script_lang-rnmACDZd.js";const _=[{headlineLeft:"The Beginning",paragraphContentLeft:"In 2004, founders Cvetan Spirkovski and Dijana Peshovska embarked on a musical journey, giving birth to Ambroz. United by their passion for black metal, they laid the foundation for a band that would soon make waves in the Macedonian music scene.",imageSrcLeft:"../assets/aboutUs/aboutUs-1.webp",headlineRight:"Members of Ambroz",paragraphContentRight:"The ensemble shaping Ambroz's sonic landscapes includes Cvetan Spirkovski and Ivan Jamandilovski on guitars, Igor Stojkovski on bass, Dijana Peshovska on keyboards, Damjan Klincharevski as the commanding vocalist, and Nikola Dimitrovski behind the drums.",imageSrcRight:"../assets/aboutUs/aboutUs-2.webp"},{headlineLeft:"Into The Endless Void",paragraphContentLeft:`In 2015, Ambroz unleashed their debut album, "Into The Endless Void" captivating listeners with its raw intensity and atmospheric soundscapes. The release marked a significant milestone, establishing the band's presence in the black metal realm.`,imageSrcLeft:"../assets/aboutUs/aboutUs-4.webp",headlineRight:"First shot outside Macedonia",paragraphContentRight:"Breaking boundaries, Ambroz ventured beyond Macedonia in a landmark moment, playing in Sofia for the first time. This marked a pivotal step in their evolution, exposing their dark melodies to a wider audience beyond their homeland.",imageSrcRight:"../assets/aboutUs/aboutUs-3.webp"},{headlineLeft:"A new sound",paragraphContentLeft:"Due to some changes in the band's lineup, Ambroz underwent a transformative phase. The infusion of new talent reshaped their sound, adding layers of complexity and depth to their music, setting them on a path of creative exploration.",imageSrcLeft:"../assets/aboutUs/aboutUs-5.webp",headlineRight:"The Pandemic",paragraphContentRight:"Amidst the global pandemic, Ambroz found a silver lining. The forced isolation fueled their creativity, providing an opportune moment to delve into new sonic territories. This period became a breeding ground for innovative compositions and intense self-reflection.",imageSrcRight:"../assets/aboutUs/aboutUs-6.webp"},{headlineLeft:"Growing up",paragraphContentLeft:"Maturing both musically and personally, Ambroz dedicated themselves to a rigorous creative process. Relocating to a new studio, they embraced a more serious approach, investing time and effort into refining their craft. The band was evolving, ready to unveil their next chapter.",imageSrcLeft:"../assets/aboutUs/aboutUs-7.webp",headlineRight:"Monuments Of The Deceived",paragraphContentRight:`In a triumphant culmination of their journey, Ambroz released their second album, "Monuments Of The Deceived" This monumental opus showcased their growth, solidifying their place in the black metal scene. Each track stood as a testament to the band's dedication and artistic evolution.`,imageSrcRight:"../assets/aboutUs/aboutUs-8.webp"}],v={extends:f,data(){return{content:_,isVisible:!1}},mounted(){window.three.setElementVisible(h.CONCERT_STAGE,!1),window.three.emitter.addEventListener(l.CREATE.type,()=>{this.$forceUpdate()}),document.addEventListener("scroll",this.fadeElementsInScreen)},beforeUnmount(){document.removeEventListener("scroll",this.fadeElementsInScreen)},methods:{}},k={id:"background"},w={ref:"main",id:"main"},U={class:"section-container fade-incoming"},y={class:"section-container__inner"},L={class:"section-container__paragraph"},R=["src"],S={class:"section-container fade-incoming"},E=["src"],T={class:"section-container__inner"},C={class:"section-container__paragraph"};function A(s,o,r,x,d,z){return a(),i("div",k,[e("main",w,[(a(!0),i(p,null,u(d.content,(t,c)=>(a(),i("div",{key:c},[e("div",U,[e("div",y,[e("h1",null,n(t.headlineLeft),1),e("p",L,n(t.paragraphContentLeft),1)]),e("img",{src:t.imageSrcLeft,class:"section-container__image"},null,8,R)]),e("div",S,[e("img",{src:t.imageSrcRight,class:"section-container__image"},null,8,E),e("div",T,[e("h1",null,n(t.headlineRight),1),e("p",C,n(t.paragraphContentRight),1)])])]))),128))],512)])}const I=m(v,[["render",A],["__scopeId","data-v-e1c8e9df"]]),M=g({__name:"AboutUsView",setup(s){return(o,r)=>(a(),i("main",null,[b(I)]))}});export{M as default};