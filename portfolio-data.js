(function(){
  var METODO_INTRO = "Sei fasi in sequenza. La sesta non chiude il processo: rimanda alla quinta, finché il prodotto regge l'uso.";
  var RETURN_TEXT = "Dal modello di studio si torna al pretotipo: ogni test genera la versione successiva.";

  var METODO = [
    { n:'01', title:'Ascolto', sub:'Persone e contesti', symbol:'Onde concentriche con punti',
      text:"Prima di disegnare, ascolto e osservo. Interviste mirate, brainstorming di gruppo con il metodo World Café, workshop e monitoraggio dei trend per capire che cosa serve davvero. Poi vado nei luoghi in cui il progetto vivrà e li documento, studiando anche normative e manuali.",
      chips:['World Café','Interviste','Trend','Workshop','Sopralluoghi','Desk research'],
      proofs:[
        { src:'assets/bcstation-hero.jpg', cap:'Città 30 — interviste sul campo', alt:'Città 30: interviste sul campo in una strada di Roma' },
        { src:'assets/labubu-teardown.jpg', cap:'Labubu The Clever — smontaggio e analisi', alt:'Labubu smontato nei suoi componenti per l’analisi dei materiali' }
      ] },
    { n:'02', title:'Riferimenti', sub:'Smontare, osservare, scegliere', symbol:'Vista esplosa a strati',
      text:"Chiaro per chi progetto, cerco il come. Smonto oggetti esistenti per capire come sono fatti, raccolgo ispirazioni da altri oggetti, scelgo i materiali e costruisco la palette colori. È il vocabolario da cui parte il progetto.",
      chips:['Smontaggi','Ispirazioni','Palette colori','Materiali'],
      proofs:[
        { src:'assets/juicer-exploded-start.jpg', cap:'Orange Juicer — esploso del prodotto originale', alt:'Esploso dello spremiagrumi originale in metallo' },
        { src:'assets/snail-palette-fabrics.jpg', cap:'Snail — palette e tessuti', alt:'Palette colori e campioni di tessuto per il progetto Snail' }
      ] },
    { n:'03', title:'Sintesi', sub:'Il foglio bianco', symbol:'Foglio con primitivi sovrapposti',
      text:"Metto tutto su un grande foglio bianco e confronto ciò che ho ascoltato con ciò che ho raccolto. Cerco nella storia del design, negli archetipi e nelle forme primitive il segno che risponde al bisogno emerso: con gli schizzi il problema diventa un'idea.",
      chips:['Moodboard','Schizzi','Confronto','Archetipi','Storia del design'],
      proofs:[
        { src:'assets/axia-ideation.jpg', cap:'Axia — ideazione', alt:'Tavola di ideazione della lampada Axia' }
      ] },
    { n:'04', title:'Forma', sub:'Dallo schizzo al modello 3D', symbol:'Sfera in wireframe',
      text:"Porto gli schizzi in vettoriale e poi in 3D. Voglio arrivare presto a forme sensate e confrontare più versioni: quella finale nasce spesso da quelle che pensavo di scartare.",
      chips:['Illustrator','Rhino','Blender','Versioni a confronto'],
      proofs:[
        { src:'assets/snail-sketches.jpg', cap:'Snail — schizzi', alt:'Schizzi a mano del progetto Snail' },
        { src:'assets/bcstation-wireframe.jpg', cap:'Città 30 — wireframe della panchina', alt:'Wireframe 3D della panchina per Città 30' }
      ] },
    { n:'05', title:'Pretotipo', sub:'Pretotyping: capire se vale la pena costruire una cosa, prima di costruirla bene.', symbol:'Forma tratteggiata con crocini',
      text:"È la versione più povera del prototipo: carta tagliata, mockup, stampe 3D veloci. Costa poco e risponde subito, così capisco se l'idea regge prima di costruirla bene. Qui arrivano i primi riscontri reali.",
      chips:['Carta','Mockup','Stampa 3D','CNC 3 assi'],
      proofs:[
        { src:'assets/irregular-process-hands.jpg', cap:'Irregular — modello a mano', alt:'Mani che assemblano un modello della serie Irregular' },
        { src:'assets/cloe-proto1.jpg', cap:'Cloe — primo prototipo', alt:'Primo prototipo del progetto Cloe' }
      ] },
    { n:'06', title:'Modello di studio', sub:'Render e iterazione', symbol:'Forma piena con anello di iterazione',
      text:"Un prodotto quasi pronto, mostrato con render realistici e affidato a un gruppo ristretto di persone. Quello che non funziona emerge solo nell'uso: da lì nascono la v2.0 e la v3.0, fino al prodotto finale. Ogni test rimanda al pretotipo.",
      note:'Irregular è stato esposto e testato dal pubblico al Maker Faire 2025.',
      chips:['Render','Test ristretto','v2.0','v3.0'],
      proofs:[
        { src:'assets/cloe-proto2.jpg', cap:'Cloe — secondo prototipo', alt:'Secondo prototipo del progetto Cloe' },
        { src:'assets/juicer-redesign-comparison.jpg', cap:'Orange Juicer — originale e redesign a confronto', alt:'Confronto tra spremiagrumi originale e redesign' }
      ] }
  ];

  var METODO_EN = [{"title":"Listening","sub":"People and contexts","symbol":"Concentric waves with dots","text":"Before drawing, I listen and observe. Targeted interviews, group brainstorming with the World Café method, workshops and trend monitoring to understand what is really needed. Then I go to the places where the project will live and document them, studying regulations and manuals too.","chips":["World Café","Interviews","Trends","Workshops","Site visits","Desk research"]},{"title":"References","sub":"Take apart, observe, choose","symbol":"Layered exploded view","text":"Once it is clear who I am designing for, I look for the how. I take existing objects apart to understand how they are made, collect inspiration from other objects, choose materials and build the colour palette. It is the vocabulary the project starts from.","chips":["Teardowns","Inspiration","Colour palette","Materials"]},{"title":"Synthesis","sub":"The blank sheet","symbol":"Sheet with overlapping primitives","text":"I put everything on a large blank sheet and compare what I heard with what I collected. I look in design history, archetypes and primitive forms for the sign that answers the need that emerged: with sketches, the problem becomes an idea.","chips":["Moodboard","Sketches","Comparison","Archetypes","Design history"]},{"title":"Form","sub":"From sketch to 3D model","symbol":"Wireframe sphere","text":"I take the sketches into vector and then into 3D. I want to reach sensible forms early and compare several versions: the final one is often born from those I thought I would discard.","chips":["Illustrator","Rhino","Blender","Versions compared"]},{"title":"Pretotype","sub":"Pretotyping: finding out whether something is worth building, before building it well.","symbol":"Dashed shape with crop marks","text":"It is the poorest version of a prototype: cut paper, mockups, quick 3D prints. It costs little and answers right away, so I can see whether the idea holds before building it properly. The first real feedback arrives here.","chips":["Paper","Mockup","3D printing","3-axis CNC"]},{"title":"Study model","sub":"Renders and iteration","symbol":"Solid shape with iteration ring","text":"An almost finished product, shown through realistic renders and handed to a small group of people. What does not work only emerges in use: from there come v2.0 and v3.0, up to the final product. Every test sends me back to the pretotype.","note":"Irregular was exhibited and tested by the public at Maker Faire 2025.","chips":["Render","Limited test","v2.0","v3.0"]}];
  var METODO_INTRO_EN = "Six phases in sequence. The sixth does not close the process: it sends you back to the fifth, until the product holds up in use.";
  var RETURN_TEXT_EN = "From the study model you go back to the pretotype: every test generates the next version.";

  // 9 primitive per fase: [x, y, w, h, raggio, riempimento 0-1, tratteggio 0/1] in un box 120×120
  var PEB = [24,30,72,60,30];
  function peb(f, d){ return PEB.concat([f, d||0]); }
  var SYMBOLS = [
    [[57,7,6,6,3,1,0],[93,57,6,6,3,1,0],[35,57,6,6,3,1,0],[57,93,6,6,3,1,0],[75,26,6,6,3,1,0],[52,52,16,16,8,1,0],[38,38,44,44,22,0,0],[24,24,72,72,36,0,0],[10,10,100,100,50,0,0]],
    [[28,6,64,20,6,0,0],[28,32,64,20,6,0,0],[28,58,64,20,6,0,0],[28,84,64,20,6,0,0],[8,16,10,10,5,1,0],[102,42,10,10,5,1,0],[8,68,10,10,5,1,0],[102,94,10,10,5,1,0],[46,108,28,6,3,1,0]],
    [[10,14,100,92,2,0,0],[22,28,40,40,20,0,0],[50,44,36,36,2,0,0],[30,76,58,12,6,0,0],[74,22,10,10,5,1,0],[7,11,6,6,0,1,0],[107,11,6,6,0,1,0],[7,103,6,6,0,1,0],[107,103,6,6,0,1,0]],
    [[12,12,96,96,48,0,0],[34,12,52,96,26,0,0],[52,12,16,96,8,0,0],[12,34,96,52,26,0,0],[12,52,96,16,8,0,0],[4,4,112,112,56,0,1],[34,34,52,52,26,.22,0],[22,22,76,76,38,0,0],[46,46,28,28,14,1,0]],
    [peb(0,1),[4,11.25,16,1.5,0,1,0],[11.25,4,1.5,16,0,1,0],[100,11.25,16,1.5,0,1,0],[107.25,4,1.5,16,0,1,0],[4,107.25,16,1.5,0,1,0],[11.25,100,1.5,16,0,1,0],[100,107.25,16,1.5,0,1,0],[107.25,100,1.5,16,0,1,0]],
    [[34,38,52,44,22,1,0],[12,12,96,96,48,0,0],[90,22,8,8,4,1,0],[34,38,52,44,22,1,0],[34,38,52,44,22,1,0],[34,38,52,44,22,1,0],[34,38,52,44,22,1,0],[34,38,52,44,22,1,0],[34,38,52,44,22,1,0]]
  ];

  window.PF = { METODO_EN: METODO_EN, METODO_INTRO_EN: METODO_INTRO_EN, RETURN_TEXT_EN: RETURN_TEXT_EN, METODO: METODO, SYMBOLS: SYMBOLS, METODO_INTRO: METODO_INTRO, RETURN_TEXT: RETURN_TEXT };
})();

(function(){
  var ASSET_BASE = 'assets/';
  function im(src, r, cap, alt, extra){ var o = { src: src, r: r, cap: cap, alt: alt || cap }; for(var k in (extra||{})) o[k] = extra[k]; return o; }
  var PROGETTI = [
    { id:'arbor', num:'01', titolo:'Arbor', motto:'Dal tronco ai rami', sottotitolo:'Family Feeling — libreria per Artisan',
      committente:'Artisan', categoria:'Furniture Design', anno:'2026', team:'',
      colori:{ giorno:'#7A5236', notte:'#B98A66', linea:'#7A5236' }, fasi:['03','04'],
      chip:[],
      brief:"Progettare una libreria su richiesta dell'azienda Artisan, rispettando le linee guida del brand ma lasciando piena libertà formale al designer nello sviluppo del concept.",
      approccio:"Il progetto nasce dall'osservazione della forma dell'albero: la struttura portante si dirama come un tronco che si apre in rami, trasformando un gesto naturale in un sistema di mensole funzionale. Pur muovendosi entro i vincoli tecnici e di linguaggio richiesti da Artisan, la libreria conserva un'identità scultorea e organica, pensata per integrarsi sia in ambienti domestici che contract. Il sistema è modulare e assemblabile: il numero di montanti, l'altezza e la disposizione delle mensole possono essere configurati su misura.",
      software:['Rhino 3D','V-Ray','Photoshop'],
      copertina:'arbor-cover.jpg',
      immagini:[
        im('arbor-product.jpg', .95, 'Libreria Arbor, vista frontale', 'Libreria Arbor in legno con mensole sospese, vista frontale', { ruolo:'lead' }),
        im('arbor-detail-shelves-row.jpg', 3.3, 'Le mensole sospese in sequenza', 'Dettaglio in sequenza delle mensole sospese', { ruolo:'pano', fit:'contain', bg:'#F3F3F3' }),
        im('arbor-detail-joint.jpg', .71, 'Il ripiano si infila sul montante', "Dettaglio della mensola e dell'incastro con il montante", { ruolo:'riga' }),
        im('arbor-detail-base.jpg', 1.05, 'Base in legno con innesto metallico', 'Dettaglio della base in legno con innesto metallico', { ruolo:'riga' }),
        im('arbor-detail-wallmount.jpg', 1.08, 'Aggancio a parete', "Dettaglio dell'aggancio a parete in metallo", { ruolo:'riga' }),
        im('arbor-detail-office.jpg', .89, 'Arbor in uno studio', 'Libreria Arbor ambientata in uno studio minimale', { ruolo:'ambiente' }),
        im('arbor-detail-shelf-profile.jpg', 3.6, 'Profilo ravvicinato di una mensola', 'Profilo ravvicinato di una mensola in legno', { ruolo:'pano', fit:'contain', bg:'#F3F3F3' })
      ],
      frase:'Pensata per casa e contract: montanti, altezza e ripiani si configurano su misura.',
      video:[],
      disegni:[ { src:'', titolo:'Prospetto e pianta', scala:'1:10', inverti:true }, { src:'', titolo:'Giunto montante–ripiano', scala:'1:2', inverti:true }, { src:'', titolo:'Base e aggancio a parete', scala:'1:2', inverti:true } ] },

    { id:'irregular', num:'02', titolo:'Irregular — Serie MNM', motto:'Tre pezzi, tre colori', sottotitolo:'Arredi antisismici con il CNR',
      committente:'CNR — Consiglio Nazionale delle Ricerche', categoria:'Anti-seismic Design', anno:'2025', team:'team di 3 persone',
      colori:{ giorno:'#9E7405', notte:'#D9A82A', linea:'#C8960E' }, fasi:['04','05','06'],
      chip:['Esposto al Maker Faire 2025'],
      brief:"Ideare e realizzare arredi antisismici che coniugassero funzionalità, sicurezza e qualità estetica, sviluppati in collaborazione con il Consiglio Nazionale delle Ricerche per rispondere alle esigenze abitative nelle zone sismiche.",
      approccio:"Una serie di tre pezzi — elemento rifugio, tavolo rotondo e seduta — sviluppata in un team di tre persone, che unisce criteri di sicurezza strutturale e linguaggio del design contemporaneo. Modellata in Rhino e Blender, resa in V-Ray, esposta al Maker Faire 2025.",
      software:['Rhino 3D','V-Ray','Photoshop','Blender'],
      copertina:'mnm-1.jpg',
      immagini:[
        im('mnm-2.jpg', 1, 'La serie MNM sui piani colorati', 'Composizione degli elementi della serie MNM su piani colorati', { ruolo:'lead' }),
        im('mnm-3.jpg', 1, 'Elemento rifugio', 'Elemento rifugio della serie MNM su sfondo rosa con silhouette', { ruolo:'pezzo', tinta:'#C96CA1' }),
        im('mnm-4.jpg', 1, 'Tavolo rotondo', 'Tavolo rotondo MNM su sfondo blu con silhouette di studenti', { ruolo:'pezzo', tinta:'#0541A2' }),
        im('mnm-5.jpg', 1, 'Seduta', 'Elemento seduta MNM su sfondo arancione con silhouette', { ruolo:'pezzo', tinta:'#C66837' })
      ],
      video:[],
      disegni:[ { src:'', titolo:'Elemento rifugio', scala:'1:10', inverti:true }, { src:'', titolo:'Tavolo rotondo', scala:'1:10', inverti:true }, { src:'', titolo:'Seduta', scala:'1:10', inverti:true } ] },

    { id:'axia', num:'03', titolo:'Axia', motto:'Pietra e luce', sottotitolo:'Lampada in pietra per Giovannozzi Marmi',
      committente:'Giovannozzi Marmi', categoria:'Light Design', anno:'', team:'',
      colori:{ giorno:'#3B3A38', notte:'#A8A39B', linea:'#3B3A38' }, fasi:['03','04'],
      chip:[],
      brief:"Progettare una lampada realizzata in marmo o onice, in collaborazione con Giovannozzi Marmi, azienda lapidea specializzata nella lavorazione di materiali pregiati.",
      approccio:"Axia nasce da uno studio scultoreo sulla pietra: due volumi conici contrapposti che si bilanciano in un equilibrio visivo essenziale. La forma è disponibile in tre materiali — marmo nero Marquinia, marmo bianco Calacatta e travertino — scelti per rispecchiare il catalogo e l'identità di Giovannozzi Marmi. Il dimmer integrato permette di regolare l'intensità luminosa, mentre il sostegno strutturale in metallo cela i componenti tecnici lasciando la pietra assoluta protagonista.",
      software:['Rhino 3D','V-Ray','Photoshop'],
      copertina:'axia-cover.jpg',
      immagini:[
        im('axia-g5.jpg', 16/9, 'Axia accesa in un interno scuro', 'Lampada Axia accesa su un mobile in un interno scuro', { ruolo:'sera', fit:'cover', bg:'#1A1A1A' }),
        im('axia-product.jpg', 16/9, 'Le tre varianti: Marquinia, Calacatta, travertino', 'Tre varianti della lampada Axia in marmo bianco, nero e travertino', { ruolo:'giorno', fit:'contain', bg:'#BBBBBB' }),
        im('axia-g3.jpg', 1.58, 'Tre viste: frontale, laterale, posteriore', 'Tre viste della lampada Axia in marmo nero: frontale, laterale e posteriore', { ruolo:'riga', fit:'contain', bg:'#FFFFFF' }),
        im('axia-g4.jpg', 1.78, 'On/off, dimmer e sostegno strutturale', 'Dettaglio funzionale Axia: on/off, dimmer e sostegno strutturale', { ruolo:'riga', fit:'contain', bg:'#FFFFFF' })
      ],
      materiali:[ { nome:'Marquinia nero', col:'#1D1D1F' }, { nome:'Calacatta bianco', col:'#ECE9E3' }, { nome:'Travertino', col:'#CDB89A' } ],
      video:[],
      disegni:[ { src:'', titolo:'Viste ortogonali', scala:'1:2', inverti:true }, { src:'', titolo:'Sezione e componenti', scala:'1:1', inverti:true } ] },

    { id:'juicer', num:'04', titolo:'Orange Juicer', motto:'Prima e dopo', sottotitolo:'Redesign di uno spremiagrumi in metallo',
      committente:'', categoria:'Product Design', anno:'', team:'',
      colori:{ giorno:'#C9551F', notte:'#F07A45', linea:'#E8632A' }, fasi:['02','04','06'],
      chip:['Redesign'],
      brief:"Semplificare e ridisegnare un oggetto in metallo, ripensandone i materiali e i meccanismi di funzionamento mantenendo l'identità del prodotto originale.",
      approccio:"Il design originale interamente in metallo è stato scomposto e riprogettato sostituendo gran parte dei componenti con plastica stampata, riducendo peso e costi, mantenendo solo la struttura portante in metallo. Il risultato è un prodotto lavabile in lavastoviglie, con un meccanismo di spremitura più efficiente, una caraffa ad incastro con drenaggio ottimizzato e un sistema ambidestro pensato per essere usato comodamente da chiunque.",
      software:['Rhino 3D','V-Ray','Photoshop'],
      copertina:'juicer-cover.jpg',
      immagini:[
        im('juicer-lifestyle2.jpg', 1, 'Lo spremiagrumi nella luce del tramonto', 'Spremiagrumi arancione su piano in marmo', { ruolo:'lead' }),
        im('juicer-redesign-comparison.jpg', 16/9, 'Originale e redesign a confronto', 'Confronto tra design originale e redesign', { ruolo:'confronto', fit:'contain', bg:'#F3F3F3' }),
        im('juicer-detail-filter.jpg', 4/3, 'Filtro conico e caraffa a incastro', 'Dettaglio filtro conico e caraffa', { ruolo:'dettaglio' }),
        im('juicer-detail-base.jpg', 4/3, 'Base in metallo spazzolato', 'Dettaglio base in metallo spazzolato', { ruolo:'dettaglio' }),
        im('juicer-detail-button.jpg', 4/3, 'Pulsante a fungo', 'Dettaglio pulsante superiore', { ruolo:'dettaglio' })
      ],
      video:[], disegni:[] },

    { id:'labubu', num:'05', titolo:'Labubu The Clever', motto:'Il racconto in slide', sottotitolo:'Ridurre l’impronta di un collectible toy',
      committente:'', categoria:'Eco Design', anno:'', team:'',
      colori:{ giorno:'#D81F26', notte:'#F0484E', linea:'#D81F26' }, fasi:['01','02','04'],
      chip:[],
      brief:"Scegliere un oggetto di consumo ad alto impatto ambientale, calcolarne in grandi linee il Life Cycle Assessment (LCA) e ripensarlo per ridurne l'impronta, mantenendo il carattere e il valore percepito del prodotto originale.",
      approccio:"Ho scelto come caso di studio Labubu di Pop Mart, uno dei collectible toy più diffusi al mondo, e ne ho smontato un esemplare per analizzarne materiali e processi produttivi: PET, PVC, stampaggio a iniezione, fleece, PP e cartone, per un totale stimato di 332 gCO2eq in produzione. Il redesign — «My Labubu» — trasforma la action figure in un portachiavi da zaino, riducendo i materiali a sole due plastiche (PVC e PET) e portando le emissioni di produzione a 201 gCO2eq, circa il 40% in meno. Il packaging diventa un sacchetto in tessuto richiudibile, pensato per essere riutilizzato oltre l'acquisto.",
      software:['Blender','Photoshop','Illustrator'],
      copertina:'labubu-cover.jpg',
      immagini:[
        im('labubu-lifestyle.jpg', 16/9, 'My Labubu agganciato allo zaino', 'Portachiavi Labubu ridisegnato su uno zaino', { ruolo:'lead' }),
        im('labubu-title.jpg', 16/9, 'Il progetto', 'Slide del titolo: Labubu The Clever', { ruolo:'slide', fit:'contain', bg:'#FFFFFF', cap1:'01 Il progetto' }),
        im('labubu-teardown.jpg', 16/9, 'Smontaggio e analisi', 'Smontaggio e analisi dei componenti', { ruolo:'slide', fit:'contain', bg:'#FFFFFF', cap1:'02 Smontaggio e analisi' }),
        im('labubu-lca-orig.jpg', 16/9, 'LCA del prodotto originale', 'Tabella LCA del prodotto originale Pop Mart', { ruolo:'lca', fit:'contain', bg:'#FFFFFF' }),
        im('labubu-lca-redesign.jpg', 16/9, 'LCA del redesign My Labubu', 'Tabella LCA del redesign a confronto', { ruolo:'lca', fit:'contain', bg:'#FFFFFF' }),
        im('labubu-materials.jpg', 16/9, 'Materiali e collezione', 'Materiali e varianti colore del redesign', { ruolo:'slide', fit:'contain', bg:'#FFFFFF', cap1:'04 Materiali e collezione' }),
        im('labubu-reuse.jpg', 16/9, 'Riuso del packaging', 'Concept di riuso del packaging', { ruolo:'slide', fit:'contain', bg:'#FFFFFF', cap1:'05 Riuso del packaging' })
      ],
      video:[],
      disegni:[ { src:'', titolo:'Portachiavi, quote', scala:'1:1', inverti:true }, { src:'', titolo:'Packaging, sviluppo', scala:'1:2', inverti:true } ] },

    { id:'jamu', num:'06', titolo:'Jamu', motto:'Il palco', sottotitolo:'Concept di startup per musicisti',
      committente:'', categoria:'UX/UI Design · Concept Startup', anno:'', team:'',
      colori:{ giorno:'#177E9F', notte:'#45B5D9', linea:'#177E9F' }, fasi:['01','03','04'],
      chip:[],
      brief:"L'esame richiedeva la creazione di una startup a tutti gli effetti: individuare un problema realmente esistente sul mercato, studiarne i trend, e costruire attorno ad esso un concept di prodotto completo di modello di business.",
      approccio:"Il lavoro ha seguito il percorso completo di creazione di una startup: analisi dei trend di mercato, individuazione del problema da risolvere, progettazione del concept di prodotto e del business model. Il progetto si è concluso con la preparazione di uno speech di 7 minuti, pensato per presentare e vendere l'idea a potenziali investitori.",
      software:['Figma','Illustrator','InDesign'],
      copertina:'jamu-01-cover.jpg',
      immagini:[
        im('jamu-02-logo.jpg', .83, 'Logo Jamu — Play for real', 'Logo Jamu, tagline Play for real', { ruolo:'lead', fit:'contain', bg:'#0B0B0F' }),
        im('jamu-03-problema.jpg', 1.5, 'Il problema', 'Slide: il problema affrontato da Jamu', { ruolo:'slide', fit:'contain', bg:'#0B0B0F' }),
        im('jamu-04-soluzione.jpg', 1.5, 'La soluzione', 'Slide: la soluzione proposta', { ruolo:'slide', fit:'contain', bg:'#0B0B0F' }),
        im('jamu-05-live-match-chat.jpg', 16/9, 'Live, Match e Chat', 'Slide: funzionalità Live, Match e Chat', { ruolo:'funzioni', fit:'contain', bg:'#0B0B0F' }),
        im('jamu-09-tagline.jpg', 16/9, 'Collaborare dovrebbe essere facile', 'Slide: collaborare dovrebbe essere facile', { ruolo:'tagline', fit:'contain', bg:'#0B0B0F' }),
        im('jamu-10-band.jpg', 16/9, 'Il team durante la simulazione', 'Foto del team durante la simulazione', { ruolo:'chiusura' })
      ],
      video:[ { src:'jamu-07-video2.mp4', etichetta:'Live', live:true }, { src:'jamu-06-video1.mp4', etichetta:'Match' }, { src:'jamu-08-video3.mp4', etichetta:'Chat' } ],
      disegni:[] }
  ];
  window.PF.ASSET_BASE = ASSET_BASE;
  window.PF.asset = function(p){ return /^https?:/.test(p) ? p : ASSET_BASE + String(p).replace(/^assets\//, ''); };
  window.PF.PROGETTI = PROGETTI;
  window.PF.PRESENTAZIONE = "Sono un product designer formato allo IED di Roma e progetto per le persone, preferibilmente insieme a loro: nei progetti intervisto chi userà l'oggetto prima di decidere la forma. Lavoro soprattutto sull'arredo, dalla libreria modulare Arbor, pensata dentro il linguaggio visivo di un marchio, alla serie Irregular. Faccio molti prototipi, tra schizzi, modelli 3D in Rhino e stampe, e confronto più versioni: quella finale nasce spesso da quelle che pensavo di scartare.";
})();
