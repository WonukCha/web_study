kim ={name:'kim'};
lee = {name:'lee'};

function hi()
{
    console.log('hi'+this.name);
}

// hi();
// hi.call(kim);
// hi.call(lee);


var KimsHi = hi.bind(kim);
KimsHi();
