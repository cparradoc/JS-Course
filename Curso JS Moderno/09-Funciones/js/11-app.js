const aprendiendo = function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}

const aprendiendo2 = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
};

const aprendiendo3 = tecnologia =>  console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("JavaScript");

aprendiendo2("JavaScript");

aprendiendo3("JavaScript");

const aprendiendo4 = function (tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia}, ${tecnologia2}`);
}

const aprendiendo5 = (tecnologia, tecnologia2) => {
    console.log(`Aprendiendo ${tecnologia}, ${tecnologia2}`);
};

const aprendiendo6 = (tecnologia, tecnologia2) =>  console.log(`Aprendiendo ${tecnologia}, ${tecnologia2}`);

aprendiendo4("JavaScript","C");

aprendiendo5("JavaScript","C");

aprendiendo6("JavaScript","C");