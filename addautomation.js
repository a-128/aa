$.getScript("https://cdn.jsdelivr.net/gh/a-128/dd@latest/dd.js");
(async () => {
await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
whyphil=Deobfuscator.function(ig.game.painter, "a,b):", true)
whyphil2=Deobfuscator.function(ig.game.painter, "cell ", true)
whyphil3=Deobfuscator.keyBetween(ig.game.painter[whyphil2], "]&&this.types[this.data.type].", ")&&(this.maxCells=i")
whyphil4=Deobfuscator.keyBetween(ig.game.painter[whyphil2], "e].", ")&&\n")
whyphil5=Deobfuscator.function(ig.game.painter, ";b=d+", true)
whyphil6=Deobfuscator.keyBetween(ig.game.painter[Deobfuscator.function(ig.game.painter,"a&&this.types[a]",true)],"a].",":4")
ig.game.painter.types.happening={title:"happening",key:"HAPPENING",[whyphil3]:!0,rip:0,tileSize:{width:29,height:29},[whyphil4]:!0,parent:"happeningGroup"};ig.game.painter.types.brain={title: "brain",key: "BRAIN",[whyphil5]: 55,[whyphil6]: 0,parent: "happeningGroup"};ig.game.painter.types.generator={title: "area generator",key: "GENERATOR",[whyphil5]: 64,[whyphil6]: 0,parent: "happeningGroup"};ig.game.painter.types.changer={title: "changer",key: "CHANGER",[whyphil5]: 56,[whyphil6]: 0,
parent: "happeningGroup"}; ig.game.painter.types.happeningGroup={title: "automation",iconRow: 47}
eval("ig.game.painter."+whyphil+"="+ig.game.painter[whyphil].toString().replaceAll('"HAPPENING","BRAIN","GENERATOR","CHANGER"', '"RIPGAME"'))
})();
