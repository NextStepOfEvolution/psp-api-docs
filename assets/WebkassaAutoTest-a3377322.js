import{f as b,r as i,o as u,c as d,a as l,d as t,b as a,w as e,F as P,g as V,h as A,t as B}from"./index-8fdf7ed5.js";const h="/psp-api-docs/assets/auto-test-page-926974d7.png",y="/psp-api-docs/assets/auto-test-credential-92eb631d.png",v="/psp-api-docs/assets/auto-test-step-success-fc609f18.png",f="/psp-api-docs/assets/auto-test-step-error-672f47b4.png",x="/psp-api-docs/assets/auto-test-step-error-details-09e144e8.png",I="/psp-api-docs/assets/auto-test-complete-d09c801a.png";const N={class:""},E=l("h2",{class:"text-2xl font-bold my-4"},"Этап 4. Тестирование",-1),D={class:"my-4"},F={class:"my-4"},G={class:"my-4"},O={class:"my-2"},U=["src","alt"],W=["src","alt"],j={key:0,class:"grid grid-cols-2 gap-4"},L={class:"m-2"},M=["src","alt","onClick"],$={class:"text-lg"},J={__name:"WebkassaAutoTest",setup(q){const n=[{itemImageSrc:h,thumbnailImageSrc:h,title:"Страница автоматическоого тестирования",alt:"#"},{itemImageSrc:y,thumbnailImageSrc:y,title:"Начало тестирования",alt:"#"},{itemImageSrc:v,thumbnailImageSrc:v,title:"Успешный тест",alt:"#"},{itemImageSrc:f,thumbnailImageSrc:f,title:"Не успешный тест",alt:"#"},{itemImageSrc:x,thumbnailImageSrc:x,title:"Детали запроса(запрос, ответ)",alt:"#"},{itemImageSrc:I,thumbnailImageSrc:I,title:"Отправка отчета об успещном завершении тестирования",alt:"#"}],r=b(0),S=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],m=b(!1);function k(_){r.value=_,m.value=!0}return(_,c)=>{const o=i("PrimeChip"),p=i("Tag"),C=i("Galleria"),T=i("Card"),w=i("BlockPagination");return u(),d("div",N,[E,l("p",D,[t(" Тестирование API производиться в личном кабинете Мерчанта в разделе "),a(o,{class:"my-1"},{default:e(()=>[t("Тестирование API поставщика")]),_:1}),t(". ")]),l("p",F,[t(" Для начала тестирования необходимо ввести номер сформированного заказа или идентификатор пользователя а также сумму платежа. Введя все данные нужно нажать на кнопку проверить "),a(p,{class:"text-md !text-gray-900",severity:"info"},{default:e(()=>[t("Проверить")]),_:1}),t(". ")]),l("p",G,[t(" После чего появится блок с разделами для тестирования. Тестирование включает 2 этапа: "),a(o,{class:"my-1"},{default:e(()=>[t("Одиночный тест")]),_:1}),t(" и "),a(o,{class:"my-1"},{default:e(()=>[t("Комплексное тестирование")]),_:1}),t(". "),a(o,{class:"my-1"},{default:e(()=>[t("Одиночный тест")]),_:1}),t(" производиться путем отправки нескольких запросов с различным сценарием на один метод. В то время как "),a(o,{class:"my-1"},{default:e(()=>[t("Комплексное тестирование")]),_:1}),t(" производиться путем отправки полного сценария запросов от начало и конца проведения платежа. Чтобы провести тест определенного этапа необходимо выбрать его и нажать кнопку "),a(o,{class:"my-1"},{default:e(()=>[t("Проверить")]),_:1}),t(". Если тест пройден успешно то раздел подсветиться "),a(p,{class:"text-md !text-gray-900",severity:"success"},{default:e(()=>[t("зелемным")]),_:1}),t(" или в противном случаи "),a(p,{class:"text-md !text-gray-900",severity:"danger"},{default:e(()=>[t("красным.")]),_:1}),t("При необходимости можно просмотреть запрос от PSP и отправленный ответ нажав на соответствующий тест. ")]),l("p",O,[t("Пройдя все тесты необходимо перейти в раздел "),a(o,{class:"my-1"},{default:e(()=>[t("Отправить отчет")]),_:1}),t(" и нажать кнопку проверить.")]),a(C,{activeIndex:r.value,"onUpdate:activeIndex":c[0]||(c[0]=s=>r.value=s),visible:m.value,"onUpdate:visible":c[1]||(c[1]=s=>m.value=s),value:n,responsiveOptions:S,numVisible:7,containerStyle:"max-width: 850px",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1},{item:e(s=>[l("img",{src:s.item.itemImageSrc,alt:s.item.alt,style:{width:"100%",display:"block"}},null,8,U)]),thumbnail:e(s=>[l("img",{src:s.item.thumbnailImageSrc,alt:s.item.alt,style:{display:"block"}},null,8,W)]),_:1},8,["activeIndex","visible"]),n?(u(),d("div",j,[(u(),d(P,null,V(n,(s,g)=>a(T,{key:g,class:"text-center dark:text-gray-200 dark:bg-gray-900"},{header:e(()=>[l("div",L,[l("img",{src:s.thumbnailImageSrc,alt:s.alt,style:{cursor:"pointer"},class:"w-full h-full object-contain w-full",onClick:z=>k(g)},null,8,M)])]),title:e(()=>[l("p",$,B(s.title),1)]),_:2},1024)),64))])):A("",!0),a(w,{prev:{label:"Этап 3. Merchant API",name:"webkassa-merchant-api"},next:{label:"Этап 5. Перевод в боевой режим",name:"webkassa-goto-prodiction"}},null,8,["prev","next"])])}}};export{J as default};
