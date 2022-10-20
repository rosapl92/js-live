export const populatePersonsList = function (persons) {

    function ToListItem({name, city, age}) {
        return `<li class ="list-group-item d-flex">
                      <div>
                       ${name} ${city ? `(${city})`:''}
                       </div>
                       <div class ="ms-auto"> ${age}  anni</div>
                 </li>`;
    }

    if (persons instanceof Array){
        const ul = document.getElementById("persons-list");
        ul.innerHTML = persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age )
            .map(ToListItem)
            .join("");
    }

}

export function populateOption(persons) {
    if (persons instanceof Array){
        const form = document.forms.item(1);
        const select = form.elements[0];
        const newOprions = persons
            .filter(p => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .map((p, index) => new Option(p.name, index.toString()));
        const firstchild = [select.children[0]];
        const t = firstchild.concat(newOprions);
        select.innerHTML = ""; // svuota semplice
        t.forEach(i => {
            select.append(i);
        })
    }
}