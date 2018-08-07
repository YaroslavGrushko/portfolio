function langChooser(){
//language indecator:
var mylang=lang;
//array of objects that you need to change language:
var arrLangObj=$('.lang');
//foreach every object in arrLangObj:
arrLangObj.each(function(index, element){
try{
  //object identification key:
var key=$(this).attr('key');
//string that is needed to paste:
var stringToPaste=arrLang[lang][key];
//paste appropriate string to the object:
  $(this).text(stringToPaste);

}catch(err){}

  })
}
