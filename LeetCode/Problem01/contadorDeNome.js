// Contador  de nomes por inicias

// O que eu tenho ??

const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"];

// O que eu espero ??
// namesCount = {d: 1, m:2, j:3}

// Resolvendo com looping convencional: (tentando)

const namesCount01 = {};

for (let i = 0; i < names.length; i++) {
  const currentName = names[i];
  const firstLetter = currentName[0].toLocaleLowerCase();

  if (namesCount01[firstLetter]) {
    namesCount01[firstLetter]++;
  } else {
    namesCount01[firstLetter] = 1;
  }

}

console.log("iteração convencional: ", namesCount01);

// Resolvendo com reduce

const namesCount = names.reduce((count, nomeAtual) => {
  const firstLetter = nomeAtual[0].toLocaleLowerCase();

  if (count[firstLetter]) {
    count[firstLetter]++;
  } else {
    count[firstLetter] = 1;
  }

  return count;
}, {});

console.log(namesCount);
