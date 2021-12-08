let a = ['moishe@gmail.com', 'david@gmail.com', 'bob@gmail.com']

let iterator = a.entries();

const runCode = () => {
    for (let e of iterator) {
        console.log(e)
    }
}

