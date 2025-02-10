type user={
    name: string,
    age: number,
}

const user1={
    name: 'james',
    age : 5,
}

console.log(user1);

function greet(name: string) {
    console.log(`Hello, ${name}!`);
  }

  const names: any= 'xavier'
  greet(names);