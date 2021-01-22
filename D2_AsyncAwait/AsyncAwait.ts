async function add (a: number, b: number) {
    return a + b;
}

async function test() {
    let result = await add (5, 3);
    console.log (result);
}
test();
