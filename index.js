export function szamologep(){
    let txt=""
    for (let index = 0; index < 10; index++) {
       txt+=`
            <button class="szam">${index}</button>
           `
    }
    return txt
}

