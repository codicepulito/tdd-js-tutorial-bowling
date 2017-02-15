# Tutorial in italiano di Test Drive Development in javascript #
[![Build Status](https://travis-ci.org/gianlucaciarcelluti/tdd-js-tutorial-bowling.svg?branch=master)](https://travis-ci.org/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![codecov](https://codecov.io/gh/gianlucaciarcelluti/tdd-js-tutorial-bowling/branch/master/graph/badge.svg)](https://codecov.io/gh/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Code Climate](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling/badges/gpa.svg)](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![Issue Count](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling/badges/issue_count.svg)](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![API Doc](https://doclets.io/gianlucaciarcelluti/tdd-js-tutorial-bowling/master.svg)](https://doclets.io/gianlucaciarcelluti/tdd-js-tutorial-bowling/master)

*Read this in other languages: [English](README.md).*

Questo tutorial ha l'obiettivo di illustrare l'approccio del TDD orientato ad una implementazione per approssimazioni successive che porta lo sviluppatore a concentrarsi sulle problematiche man mano che esse si presentano.

Ancora oggi, molti sviluppatori sono abituati a svolgere una analisi complessiva sullo sviluppo di un progetto alfine di trovare una soluzione funzionante da poter implementare; questo approccio pone delle grandi difficoltà quando il problema da risolvere è complesso, scoraggiando in particolare le persone che non hanno avuto modo di sperimentare esperienze adeguate.

Attraverso l'utilizzo del procedimento TDD, la soluzione viene costruita per fasi e approssimazioni incrementali che rendono molto più semplice e alla portata di tutti la gestione di un problema complesso.

Git tags:

- passo1: stato iniziale del progetto
- passo2: partita con tutti i tiri che colpiscono un birillo
- passo3: partita con primo frame in chiusura e tutti gli altri che colpiscono un birillo
- passo4: partita con primo frame in strike e tutti gli altri che colpiscono un birillo
- passo5: partita con primi due frame in strike e tutti gli altri che colpiscono un birillo
- passo6: refactoring
- passo7: partita con tutti i frame in chiusura e ultimo tiro che colpisce un birillo
- passo8: partita con tutti i frame in strike
- passo9: ripulito il codice riducendo la complessità ciclomatica e la leggibilità

La pratica del TDD si svolge in 3 fasi distinte: Red Flag, Green Flag e Refactoring.
La prima fase (Red Flag) richiede che il test scritto fallisce alla sua prima esecuzione, a garanzia che il test stesso sia stato scritto bene.

La seconda fase richiede la scrittura del codice che si sta testando, facendo attenzione a scrivere lo stretto necessario per eseguire il test con successo.

Nella terza ed ultima fase, possiamo concentrarci sull'analisi del codice appena scritto, verificando la possibilità di migliorare la sua leggibilità ed eleganza.

### Creazione del progetto
Clonate il progetto tramite il comando
```
git clone https://github.com/codicepulito/tdd-js-tutorial-bowling
```
poi spostatevi nella cartella appena creata e scaricate le librerie necessarie tramite il comando
```
npm install
```

### Passo1: stato iniziale del progetto
Posizionatevi nello stato iniziale del progetto lanciando il seguente comando
```
git checkout step1
```
Partiamo con un test iniziale per verificare che tutti i tiri fatti a vuoto restituiscano come risultato zero punti scrivendo il seguente codice nel file test/bowlingTest.js
```
describe("bowling", function() {
    it("game with all the empty shots", function() {
        var shots = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];        
        expect(Bowling.calculateScore(shots)).toEqual(0);
    });    
});
```
successivamente scriviamo la seguente funzione da testare all'interno del file src/bowling.js
```
function Bowling () {}

Bowling.prototype = {
  calculateScore: function (shots) {
    return
  }
}
```
lanciando il test con il seguente comando dovremmo ottenere il fallimento del test come segue
```
tdd-js-tutorial-bowling: ./node_modules/.bin/karma start
04 01 2017 00:23:13.986:WARN [karma]: No captured browser, open http://localhost:9876/
04 01 2017 00:23:14.007:INFO [karma]: Karma v1.3.0 server started at http://localhost:9876/
04 01 2017 00:23:14.008:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
04 01 2017 00:23:14.034:INFO [launcher]: Starting browser PhantomJS
04 01 2017 00:23:15.353:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#wIPf20S9JFX4UjEhAAAA with id 80746822
PhantomJS 2.1.1 (Mac OS X 0.0.0) bowling partita con tutti i tiri a vuoto FAILED
	Expected null to equal 0.
	test/bowlingTest.js:5:55
	loaded@http://localhost:9876/context.js:151:17
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 (1 FAILED) ERROR (0.007 secs / 0.004 secs)
```
a questo punto passiamo alla fase 2 scrivendo
```
function Bowling () {}

Bowling.prototype = {
  calculateScore: function (shots) {
    return 0
  }
}
```
rilanciando il test, questa volta dovremmo ottenere la sua esecuzione con successo
```
tdd-js-tutorial-bowling: ./node_modules/.bin/karma start
04 01 2017 00:25:53.304:WARN [karma]: No captured browser, open http://localhost:9876/
04 01 2017 00:25:53.323:INFO [karma]: Karma v1.3.0 server started at http://localhost:9876/
04 01 2017 00:25:53.324:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
04 01 2017 00:25:53.387:INFO [launcher]: Starting browser PhantomJS
04 01 2017 00:25:54.648:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#flyhaVqaAERUUOljAAAA with id 80882250
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 SUCCESS (0.007 secs / 0.004 secs)
```

### Passo2: partita con tutti i tiri che colpiscono un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout step2
```
Proseguiamo con l'aggiunta del test nel file test/bowlingTest.js per verificare che tutti i tiri fatti colpiscono un birillo e che il risultato finale sia di 20 punti
```
 it("game with all the shots that hit a pin", function() {
    var shots = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calculateScore(shots)).toEqual(20);
  });
```
quindi, la nostra funzione riuscirà a soddisfare solamente il primo test e per superare anche il secondo avrà bisogno di essere modificata, per esempio, nella seguente maniera
```
var Bowling = {
  calculateScore: function(shots) {
    var score = 0;
        
    shots.forEach(function(shots, index) {
        score += shots[0] + shots[1];
    });

    return score; 
  }
};
```

### Passo3: partita con primo frame in chiusura e tutti gli altri che colpiscono un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout step3
```
Se nel primo tiro faremo una chiusura (Spare) e tutti gli altri tiri colpiscono un birillo, il risultato finale sarà di 29 punti
```
  it("game with the first frame when closed and all the others that hit a pin", function() {
    var shots = [[9,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calculateScore(shots)).toEqual(29);
  });
```
quindi, la nostra funzione riuscirà a soddisfare solamente i primi due test e per superare anche il terzo avrà bisogno di essere modificata, in maniera tale da computare, in caso di chiusura, il primo tiro successivo 
```
var Bowling = {
  calculateScore: function(shots) {
    var score = 0;

    shots.forEach(function(shot, index) {
      if ((shot[0] + shot[1]) == 10) {
          score += shot[0] + shot[1] + shots[index+1][0];
      } else {
          score += shot[0] + shot[1];
      }
    });
    
    return score; 
  }
};
```

### Passo4: partita con primo frame in strike e tutti gli altri che colpiscono un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout step4
```
Se nel primo tiro faremo uno Strike e tutti gli altri tiri colpiscono un birillo, il risultato finale sarà di 30 punti
```
  it("game with the first frame in strike and all the others that hit a pin", function() {
    var shots = [[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calculateScore(shots)).toEqual(30);
  });
```
per superare anche il quarto test modifichiamo, in maniera tale da computare, in caso di Strike, i 2 tiri del Frame successivo 
```
var Bowling = {
  calculateScore: function(shots) {
    var score = 0;

    shots.forEach(function(shot, index) {
      if (shot[0] == 10) {
        score += shot[0] + shots[index+1][0] + shots[index+1][1];
      } else if ((shot[0] + shot[1]) == 10) {
        score += shot[0] + shot[1] + shots[index+1][0];
      } else {
          score += shot[0] + shot[1];
      }
    });
    
    return score; 
  }
};
```

### Passo5: partita con primi due frame in strike e tutti gli altri che colpiscono un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout step5
```
Se nei primi tiro faremo uno Strike e tutti gli altri tiri colpiscono un birillo, il risultato finale sarà di 49 punti
```
  it("game with the first two frames in strike and all the others that hit a pin", function() {
    var shots = [[10],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calculateScore(shots)).toEqual(49);
  });
```
per superare anche il quinto test modifichiamo, in maniera tale da computare, in caso di Strike, i 2 tiri del Frame successivo 
```
var Bowling = {
  calculateScore: function(shots) {
    var score = 0;

    shots.forEach(function(shot, index) {
      if (shot[0] == 10) {
        if (shots[index+1][0] == 10) {
            score += shot[0] + shots[index+1][0] + shots[index+2][0];
        } else {
            score += shot[0] + shots[index+1][0] + shots[index+1][1];
        }
      } else if ((shot[0] + shot[1]) == 10) {
        score += shot[0] + shot[1] + shots[index+1][0];
      } else {
          score += shot[0] + shot[1];
      }
    });
    
    return score; 
  }
};
```

### Passo6: refactoring
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout step6
```
Analizzando il codice, possiamo notare che ci sono casi che vengono controllati più di una volta, come ad esempio il caso dello Strike (tiro[0] == 10) e il caso dello Spare ((tiro[0] + tiro[1]) == 10); la filosofia [DRY] (https://it.wikipedia.org/wiki/Don't_Repeat_Yourself) (Don't repeat yourself) ci suggerisce di fare un Refactoring estraendo i controlli ripetuti all'interno di una apposita funzione esterna.
Le funzioni potrebbero essere così:
```
isSpare: function(shot) {
  return ((shot[0] + shot[1]) === 10);
},
```
e
```
isStrike: function(shot) {
  return (shot[0] === 10);
}
```
sostituendo nel codice precedente, otteniamo
```
var Bowling = {
  calculateScore: function(shots) {
    var punteggio = 0;
    var me = this;

    shots.forEach(function(shot, index) {
        if (me.isStrike(shot)) {
            if (me.isStrike(shots[index+1])) {
                punteggio += shot[0] + shots[index+1][0] + shots[index+2][0];
            } else {
                punteggio += shot[0] + shots[index+1][0] + shots[index+1][1];
            }
        } else if (me.isSpare(shot)) {
            punteggio += shot[0] + shot[1] + shots[index+1][0];
        } else {
            punteggio += shot[0] + shot[1];
        }
    });

    return punteggio;
  },
  
  isSpare: function(shot) {
    return ((shot[0] + shot[1]) === 10);
  },
    
  isStrike: function(shot) {
    return (shot[0] === 10);
  }
};
```
### Passo7: partita con tutti i frame in chiusura e ultimo tiro che colpisce un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout step7
```
Se in tutti i tiri faremo una chiusura abbiamo diritto ad un tiro aggiuntivo. Ipotizzando che il tiro aggiuntivo faccia cadere un solo birillo, il risultato finale sarà di 182 punti
```
  it("game all the frames in the closing and final shot that hit a pin", function() {
    var shots = [[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1,1]];
    expect(bowling.calculateScore(shots)).toEqual(182);
  });
```
per superare anche il sesto test modifichiamo, in maniera tale da computare, in caso di Strike, il primo tiro del Frame successivo. Nel caso in cui ci troviamo all'ultimo frame, invece, dovremo sommare un tiro aggiuntivo.
```
function Bowling() {}

Bowling.prototype = {
  calculateScore: function(shots) {
    var me = this;
    var score = 0;
    var firstNextShoto = 0;
    var secondNextShot = 0;

    shots.forEach(function(shot, index) {
      if (index===9) {
        firstNextShoto = shot[2];
        secondNextShot = 0;
      } else {
        firstNextShoto = shots[index+1][0];
        secondNextShot = shots[index+1][1];
      }

      if (me.isStrike(shot)) {
        if (me.isStrike(shots[index+1])) {
          score += shot[0] + firstNextShoto + shots[index+2][0];
        } else {
          score += shot[0] + firstNextShoto + secondNextShot;
        }
      } else if (me.isSpare(shot)) {
        score += shot[0] + shot[1] + firstNextShoto;
      } else {
        score += shot[0] + shot[1];
      }
    });

    return score;
  },

  isSpare: function(shot) {
    return ((shot[0] + shot[1]) === 10);
  },

  isStrike: function(shot) {
    return (shot[0] === 10);
  }
};
```

### Passo8: partita con tutti i frame in strike
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout step8
```
Se in tutti i tiri faremo uno Strike, il risultato finale sarà il massimo punteggio di una partita di Bowling che è di 300 punti
```
  it("game with all the frames in strike", function() {
    var shots = [[10],[10],[10],[10],[10],[10],[10],[10],[10],[10,10,10]];
    expect(bowling.calculateScore(shots)).toEqual(300);
  });
```
per superare anche il settimo ed ultimo test modifichiamo, in maniera tale da computare, in caso di Strike, i 2 tiri del Frame successivo tranne nel caso in cui ci troviamo all'ultimo frame dove, invece, dovremo sommarne uno solo successivo.
```
function Bowling() {}

Bowling.prototype = {
    calculateScore: function(shots) {
      var me = this;
      var score = 0;
      var firstNextShot = 0;
      var secondNextShot = 0;
      var lastShot = 0;

      shots.push([0]);

      shots.forEach(function(shot, index) {
        if (index===10) { return; }
        if (index===9) {
          if (me.isSpare(shot) || me.isStrike(shot)) {
              firstNextShot = shot[2];
              if (me.isSecondoStrike(shot)) {
                secondNextShot = 10;
              } else {
                secondNextShot = 0;
              }
          } else {
            firstNextShot = 0;
            secondNextShot = 0;
          }
        } else {
          firstNextShot = shots[index+1][0];
          secondNextShot = shots[index+1][1];
        }

        if (me.isStrike(shot)) {
          //console.log(index+1);
          if (me.isStrike(shots[index+1])) {
            if (index===8) {
                lastShot = shots[index+1][2];
            } else {
                lastShot = shots[index+2][0];
            }
            score += shot[0] + firstNextShot + lastShot;
          } else {
            score += shot[0] + firstNextShot + secondNextShot;
          }
        } else if (me.isSpare(shot)) {
          score += shot[0] + shot[1] + firstNextShot;
        } else {
          score += shot[0] + shot[1];
        }
      });

      return score;
    },
    
    isSpare: function(shot) {
      return ((shot[0] + shot[1]) === 10);
    },
    
    isStrike: function(shot) {
      return (shot[0] === 10);
    },
    
    isSecondoStrike: function(shot) {
      return (shot[1] === 10);
    }
};
```

### Step9: refactoring
Ripulito il codice riducendo la complessità ciclomatica e la leggibilità

Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout step9
```

```
function Bowling () {}

Bowling.prototype = {
  /**
  * Calculates the score of the game by analyzing every frame.
  * @param {array} shots Array composed of 10 elements, each of two shots.
  * @return {number} Match score
  */
  calculateScore: function (shots) {
    var me = this
    var score = 0
    var firstNextShot = 0
    var secondNextShot = 0
    var lastShot = 0

    shots.push([0])

    for (var index = 0; index < 10; index++) {
      var shot = shots[index]
      firstNextShot = me.calculateFirstNextShot(shots, index)
      secondNextShot = me.calculateSecondNextShot(shots, index)

      if (me.isStrike(shot)) {        
        if (me.isStrike(shots[index + 1])) {
          if (index === 8) {
            lastShot = shots[index + 1][2]
          } else {
            lastShot = shots[index + 2][0]
          }
          score += shot[0] + firstNextShot + lastShot
        } else {
          score += shot[0] + firstNextShot + secondNextShot
        }
      } else if (me.isSpare(shot)) {
        score += shot[0] + shot[1] + firstNextShot
      } else {
        score += shot[0] + shot[1]
      }
    }

    return score
  },

  /**
   * Calculates the score of the second shot in the next frame.
   * @param {array} shots Array composed of 10 elements, each of two shots.
   * @param {number} index indicating the frame in which you are located
   * @return {number} score for the second shot of the next frame.
   */
  calculateSecondNextShot: function (shots, index) {
    var me = this
    var score = 0
    var shot = shots[index]
    if (index === 9) {
      if (me.isSpare(shot) || me.isStrike(shot)) {
        if (me.isSecondoStrike(shot)) {
          score = 10
        } else {
          score = 0
        }
      }
    } else {
      score = shots[index + 1][1]
    }
    return score
  },

  /**
   * Calculates the score of the first shot in the next frame.
   * @param {array} shots Array composed of 10 elements, each of two shots.
   * @param {number} index indicating the frame in which you are located
   * @return {number} score for the first shot of the next frame.
   */
  calculateFirstNextShot: function (shots, index) {
    var me = this
    var score = 0
    var shot = shots[index]
    if (index === 9) {
      if (me.isSpare(shot) || me.isStrike(shot)) {
        score = shot[2]
      }
    } else {
      score = shots[index + 1][0]
    }
    return score
  },

  /**
  * Checking whether a frame is a Spare.
  * Is a Spare when the sum of the two shots results in 10.
  * @param {array} shot Array with the results of the two shots
  * @return {boolean} True if it is a spare false otherwise
  */
  isSpare: function (shot) {
    return ((shot[0] + shot[1]) === 10)
  },

  /**
  * Checking whether a frame is a Strike.
  * Is a Strike when the first shot all 10 pins are knocked down.
  * @param {array} shot Array with the results of the two shots
  * @return {boolean} True if it is a Strike false otherwise
  */
  isStrike: function (shot) {
    return (shot[0] === 10)
  },

  /**
  * Check if the last shot of the last frame is a strike.
  * @param {array} shot Array with the results of the two shots
  * @return {boolean} True if it is a Strike false otherwise
  */
  isSecondoStrike: function (shot) {
    return (shot[1] === 10)
  }
}

```

### Conclusioni
Il nostro primo esercizio di Test Drive Development è terminato.
Spero di essere riuscito a trasferire i benefici che questo tipo di approccio porta con se.

Ritengo personalmente che dovrebbe essere l'ABC di ogni sviluppatore poichè una volta diventata abitudine, la qualità del prodotto finito e la capacità personale di ciascuno aumenta in maniera considerevole.

Se trovate errori, imprecisioni, difficoltà, malfunzionamenti o semplicemente suggerimenti per migliorare ulteriormente, non esitate a segnalarmeli direttamente nelle Issues o se preferite via email all'indirizzo gianluca@ciarcelluti.it

Grazie a tutti :-)
