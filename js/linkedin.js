{
    //1 question
    document.querySelectorAll('div').forEach(e => {
        e.onclick = e => console.log(e.currentTarget.id); // C - B - A
    })
}

{
    // 2
    var a = ['dog', 'cat', 'hen'];
    a[100] = 'fox';
    console.log(a.length); // 101
}

{
    // 3
    const foo = [1, 2, 3];
    const [n] = foo;
    console.log(n); // 1
}

{
    // 5
    const arr1 = [2, 4, 6];
    const arr2 = [3, 5, 7];

    console.log([...arr1, ...arr2]); //[2,4,6,3,5,7]

}

{
    console.log(typeof (42)); // number
}

{
    let volwes = 'aeiou';

    for (var i = 0; i < volwes.length; i++) {
        console.log(volwes[i]);
    }

    // let volwes = 'aeiou';
}

{
    const numbers = [1, 2, 3, 4, 5];
    const [ one, two, three, four, five ] = [numbers];

    console.log( one, two, three, four, five )
}

{
    var pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squrtle'];
    pokedex.pop();
    console.log(pokedex.pop()); // 'Charmander'
}

{
    const lion = 1;
    let tiger = 2;
    var bear;

    // ++lion;
    // bear += lion + tiger;
    // tiger++;
    //    ++lion; перепризначення змінної
}

{
    var thing;
    let func = (str = 'no arg') => {
        console.log(str);
    }

    func(thing);
    func(null); // no arg, null
}

{
    for (var i = 0; i < 5; i++) {
        console.log(i); 
    }
    // 0, 1, 2, 3, 4
}