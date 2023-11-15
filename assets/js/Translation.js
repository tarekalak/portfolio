const translations ={
    en: {
        home:'Home',
        aboutMe:'About Me',
        skills:'Skills',
        education:'Education',
        lang:'language',
        cv:'Download CV',
        connect:'Connect Me',
        tarekakrami:'Tarek Alakrami',
        engineer:'Software Engineer - back-end development',
        howAmI:'I am studying software engineering at the moment and am heading into the field of back-end development. I have built many projects in this field.',
        from:' from & Lives In : ',
        place:'Dimashq Governorate, Syria',
        age:'Age : ',
        gender:'Gender : ',
        male:'Male',
        ar_en :' : Arabic & English',
        speed:'Speed in learning',
        SE:'Software Engineer',
        Jazeera:'Al Jazeera Private University',
        jazeeraInfo:'I am still studying IT Engineering at Gezira Private University and I am currently in my third year.',
        fullStack:'FULL STACK DEVELOPER',
        society:'Syrian Computer Society Training & Formation',
        societyInfo:'I have been trained in organization, but my interest is backend development.',
        experience:'Experience',
        freelance:'Freelance Web Developer',
        FreelanceInfo:'Startrd working on real project in this year.',
        training:'Training at Al Mounkez',
        atNow:'2023/10/10 - At Now : ',
        trainingInfo:'I started training in this company and they are now helping me to develop my programming skills.',
        plane :'My plan for the future',
        react:'Learn React',
        soon:'SOON',
        reactInfo:'In order for the site to be flexible, you must learn one of the JavaScript frameworks.',
        laravel:'Learn Laravel APIs',
        laravelInfo:'In order to be able to deal with mobile applications, you must learn the APIs',
        market:'Getting started in the labor market',
        marketInfo:'In order to develop your skills effectively, you should get a job in a company and start working on real projects.',
        followMe:'Follow Me',
        Copyright:'Copyright ©2023. All right reserved',
        design:'Designed by : Tarek Alakrami'
    },
    ar: {
        home:'الرئيسية',
        aboutMe:'من أنا',
        skills:'المهارات',
        education:'التعليم',
        lang:'اللغة',
        cv:'الملف التعرفي',
        connect:'تواصل معي',
        tarekakrami:'طارق الأكرمي ',
        engineer:'هندسة البرمجيات - مطور واجهات خلفية',
        howAmI:'أنا أدرس هندسة البرمجيات في الوقت الحالي وأتجه إلى مجال التطوير الخلفي. لقد بنيت العديد من المشاريع في هذا المجال.',
        from:' الأصل & السكن : ',
        place:'محافظة دمشق, سوريا',
        age:'العمر : ',
        gender:'الجنس : ',
        male:'ذكر',
        ar_en :' : العربية و الإنجليزية',
        speed:'سريع في التعلم',
        SE:'هندسة البرمجيات',
        Jazeera:'جامعة الجزيرة الخاصة',
        jazeeraInfo:'ما زلت أدرس هندسة البرمجيات وأن الآن في السنة الثالثة',
        fullStack:'تطوير المواقع',
        society:'الجمعية السورية للمعلوماتية',
        societyInfo:'تدربت في هذه الجمعية واهتمامي كان لتطوير الواجهات الخلفية أكثر',
        experience:'الخبرات',
        freelance:'عمل حر',
        FreelanceInfo:'بأت العمل على مشاريع حقيقية في هذه السنة',
        training:'التدريب لدى المنقذ',
        atNow:'2023/10/10 - حتى الآن : ',
        trainingInfo:'لقد بدأت التدريب في هذه الشركة وهم يساعدونني الآن في تطوير مهاراتي في البرمجة.',
        plane :'خطتي للمستقبل',
        react:'تعلّم React',
        soon:'قريباً',
        reactInfo:'لكي يكون الموقع مرنا ، يجب أن تتعلم أحد أطر عمل JavaScript',
        laravel:'تعلّم laravel APIs',
        laravelInfo:'لكي تتمكن من التعامل مع تطبيقات الهاتف المحمول ، يجب أن تتعلم APIs',
        market:'الانضمام إلى سوق العمل',
        marketInfo:'من أجل تطوير مهاراتك بشكل فعال ، يجب أن تحصل على وظيفة في شركة وتبدأ العمل في مشاريع حقيقية.',
        followMe:'تابعني',
        Copyright:'Copyright ©2023. جميع الحقوق محفوظة',
        design:'صمّم الموقع : طارق الأكرمي'
    }
};

const languageSelector=document.getElementById('tran');
languageSelector.addEventListener('change',(event)=>{
    setLanguage(event.target.value);
    localStorage.setItem("lang",event.target.value);
});

document.addEventListener('DOMContentLoaded',()=>{
const language=localStorage.getItem('lang');
setLanguage(language);
console.log(language);
});
const setLanguage=(language)=>{
const elemnts=document.querySelectorAll('[data-tran]');
elemnts.forEach((element)=>{
    const translationKey =element.getAttribute('data-tran');
    element.textContent= translations[language][translationKey];
});
if (language === 'ar'){
    document.dir='rtl';
}
else
{
    document.dir='ltr';
}
};
