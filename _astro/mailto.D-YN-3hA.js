const a="clarence@piolankaholidays.com";function c(n,e){const t=e.filter(([,o])=>o&&String(o).trim()).map(([o,i])=>`${o}: ${i}`).join(`
`);window.location.href=`mailto:${a}?subject=${encodeURIComponent(n)}&body=${encodeURIComponent(t)}`}export{a as C,c as o};
