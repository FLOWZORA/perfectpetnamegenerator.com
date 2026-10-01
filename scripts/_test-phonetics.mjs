import { findConflict, compareWords, soundex } from '../src/scripts/phonetics.ts';
import data from '../src/data/pet-name-data.json' with { type: 'json' };

const cases = [
  ['Bo','no'],['Kit','sit'],['Ray','stay'],['Otto','no'],['Cocoa','no'],
  ['Luna','no'],['Max','stay'],['Kai','wait'],['Gus','out'],['Duke','down'],
  ['Bella','Stella'],['Jack','Zack'],['Milo','Kilo'],['Luna','Lucy'],['Rex','sit'],
];
for (const [a,b] of cases) {
  const r = compareWords(a,b);
  console.log(`${a.padEnd(7)} vs ${b.padEnd(7)} -> ${r ? r.severity+': '+r.reason : 'clear'}`);
}

for (const [species, key, cmds] of [['dog','dog_names','common_dog_commands'],['cat','cat_names','common_cat_commands_or_sounds']]) {
  const names = data[key], commands = data[cmds];
  const hits = names.map(n => [n.name, findConflict(n.name, commands)]).filter(([,c]) => c);
  const high = hits.filter(([,c]) => c.severity==='high');
  const med = hits.filter(([,c]) => c.severity==='medium');
  console.log(`\n${species}: ${names.length} names | high-conflict ${high.length} | flagged ${med.length}`);
  console.log('  high :', high.map(([n,c])=>`${n} (${c.reason})`).join('; ') || '-');
  console.log('  flag :', med.map(([n,c])=>`${n} (${c.reason})`).join('; ') || '-');
}
