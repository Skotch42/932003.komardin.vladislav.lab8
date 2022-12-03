function string() 
{
    var fr = document.getElementById('forma');
    var str = document.getElementsByClassName('fields')[0];
    var el = str.cloneNode(true); 
    fr.appendChild(el);
}

function up(el) {
    par = el.parentNode;
    var fr = document.getElementById('forma');
    var sosed = par.previousSibling;
    fr.insertBefore(par, sosed);
}

function down(el) {
    par = el.parentNode;
    var fr = document.getElementById('forma');
    var sosed = par.nextSibling;
    fr.insertBefore(par, sosed.nextSibling);
}

function del(el) 
{
    var fr = document.getElementById('forma');
    var prnt = el.parentNode;
    fr.removeChild(prnt);
}

function save() 
{
    var el = document.createElement('div');
    var object = document.getElementsByClassName('fields');
    el.className = 'save';
    el.innerHTML = '{';
    document.body.appendChild(el);

    for (const key in object) 
    {
        if (object.hasOwnProperty(key)) 
        {
            const element = object[key];

            if (element != document.getElementsByClassName('fields')[0])
            {
                var text = '"' + element.children[0].value + '":"' + element.children[1].value + '"';
                el.innerHTML += text;

                if (element.nextSibling != undefined)
                {
                    el.innerHTML += ',';
                } 
            }
        }
    }

    el.innerHTML += "}";
}