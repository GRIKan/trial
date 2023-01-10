import lang from './language.json';

const ChangeLanguage = () => {
    var defaultLanguage = "greek";
    // console.log(lang);
    var flag = document.getElementById("language");

    const renderView = (data) => {
        // console.log(data);
        var save = document.getElementById("save");
        save.style.opacity= "0";
        var done = document.getElementById("done");
        done.style.opacity= "0";
        flag.title= data.changelang;
        var instructions = document.getElementById("instructions");
        instructions.style.opacity= "0";
        var comments = document.getElementById("comments");
        comments.style.opacity= "0";

        var addcattext = document.getElementById("addcattext");
        if (addcattext !== null) {
          addcattext.style.opacity= "0";
        };

        setTimeout(function(){
            save.innerText = data.save;
            save.style.opacity= "1";
            save.style.transition= "linear 0.10s";
            done.innerText = data.done;
            done.style.opacity= "1";
            done.style.transition= "linear 0.10s";
            instructions.innerText = data.instructions;
            instructions.style.opacity= "1";
            instructions.style.transition= "linear 0.10s";
            comments.innerText = data.comments;
            comments.style.opacity= "1";
            comments.style.transition= "linear 0.10s";
            
            if (addcattext !== null) {
              addcattext.innerText = data.addcattext;
              addcattext.style.opacity= "1";
              addcattext.style.transition= "linear 0.10s";
            };
        },200)
    };

    const getData = (language) => {
        var url= lang[language];
        // console.log(url);
        renderView(url);
      };

    const handleLanguage = (event) => {
        var attr = event.target.getAttribute("lang");
        if (attr) {
          getData(attr);
        };
      };
    
    getData(defaultLanguage);
    flag.addEventListener('click', handleLanguage);

    return
}

export default ChangeLanguage;