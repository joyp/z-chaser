var Player = function(){};

Player.prototype.preload = function(){
  game.load.spritesheet('dude', '../assets/player.png', 50, 50);
};

Player.prototype.create = function(){

  // player animations for walking
  this.player = game.add.sprite(50, game.world.height - 150, 'dude');
  this.player.scale.setTo(2, 2);
  game.physics.arcade.enable(this.player);
  this.player.body.bounce.y = 0.7;
  this.player.body.gravity.y = 500;
  this.player.body.collideWorldBounds = true;

  // this.player animations for walking
  this.player.animations.add('left', [105, 106, 107, 108, 112], 10, true);
  this.player.animations.add('right', [131, 132, 133, 134, 138], 10, true);
  cursors = game.input.keyboard.createCursorKeys();
};

Player.prototype.update = function(platforms, enemies){
  game.physics.arcade.collide(platforms, enemies);

  this.player.body.velocity.x = 0;

  if(cursors.left.isDown){
    this.player.body.velocity.x = -150;
    this.player.animations.play('left');
  }else if(cursors.right.isDown){
    this.player.body.velocity.x = 150;
    this.player.animations.play('right');
  }else{
    // this.player facing forward when not moving
    this.player.animations.stop();
    this.player.frame = 26;
  }

  if(cursors.up.isDown && this.player.body.touching.down){
    this.player.body.velocity.y = -350;
  }

//  game.physics.arcade.overlap(this.player, enemies, null, this);

};
