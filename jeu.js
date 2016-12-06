(function()
{
  var Jeu = function(){
    this.persos = [];
    this.interval = 0;
  };

  Jeu.prototype.addPerso = function( unpersonnage )
  {
    if( unpersonnage instanceof Personnage )
    {
      this.persos.push( unpersonnage );
    }
  }

  Jeu.prototype.start = function()
  {
    var self = this;
    this.interval = setInterval
    (
      function()
      {
        // 1- option functionnelle
        self.persos.forEach
        (
          function( unperso )
          {
            console.log( unperso.bouge() );
          }
        )
        // 2- option procédurale
        /*
        for( var i=0, l=self.persos.length; i<l; i++ )
        {
          console.log( self.persos[i].bouge() );
        }*/
      }, 500
    )
  }

  Jeu.prototype.stop = function()
  {
    clearInterval( this.interval );
  }


  var Personnage = function( nom ){
    this.nom = nom;
    // PAS BEAU ! this.bouge = function(){}
  };
  var Voleur = function( nom )
  {
      Personnage.call( this, nom );
  };
  var Gendarme = function( nom ){
    Personnage.call( this, nom );
  };
  var Pieton = function( nom ){
    Personnage.call( this, nom );
  };

  // Héritage
  Voleur.prototype = Object.create( Personnage.prototype );
  Gendarme.prototype = Object.create( Personnage.prototype );
  Pieton.prototype = Object.create( Personnage.prototype );

  // Méthodes
  Personnage.prototype.bouge = function()
  {
    console.log( "Personnage "+ this.nom + " bouge !" )
  };
  Voleur.prototype.bouge = function()
  {
    console.log( "Voleur "+ this.nom + " bouge furtivement !" )
  };
  Gendarme.prototype.bouge = function()
  {
    console.log( "Gendarme "+ this.nom + " bruyamment !" )
  };


  // Instanciation
  var monjeu = new Jeu();
  monjeu.addPerso( new Voleur( 'al capone' ) );
  monjeu.addPerso( new Voleur( 'sarkozy' ) );
  monjeu.addPerso( new Gendarme( 'colombo' ) );
  monjeu.addPerso( new Pieton( 'anonymous' ) );
  monjeu.addPerso( new Pieton( 'Kim Jun Hun' ) );
  monjeu.addPerso( new Pieton( 'Julie Lescault' ) );

  monjeu.start();
  monjeu.start();
})()
