function kuis() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
var score=0;
    Question.prototype.checkAnswer = function(ans) {
        
        if (ans === this.correct) {
            score +=1;
            console.log('Jawaban benar!');
            console.log('Skor anda : '+score);
        }
        
        else {
            console.log('SALAH. coba lagi :) ')
            console.log('Skor anda : '+score)
        }
    }

    var q1 = new Question('Apakah JavaScript bahasa pemrograman paling keren sedunia?',
                          ['Ya', 'Enggak'],
                          '0');

    var q2 = new Question('Siapa nama dosen yang mengajar kuliah ini ?',
                          ['John', 'Micheal', 'Oskar'],
                          '2');

    var q3 = new Question('Kata yang paling bagus mendeskripsikan koding',
                          ['Bosen', 'Susah', 'Membahagiakan', 'Membosenkan'],
                          '2');
A:
    {
    for(;;){
        
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Pilih jawaban yang bener.');
        if(answer == 'exit'){
            break A;
        }
    questions[n].checkAnswer(answer);
    }}
};