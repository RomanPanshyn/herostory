<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="js/script.js"></script>
<link rel="stylesheet" href="css/style.css">
<body>
<h1>A Hero's story</h1>
<h2>Battle</h2>
<div class="btn btn-success start-battle">Start New Battle</div>
<h2>Turn #<span class="turn">1</span></h2>
<div class="btn btn-success next-turn">Next turn</div>
<div class="row">
    <div class="col-sm-6">
        <h2>Stanhope</h2>
        <h4>Health: <span class="health-player"></span></h4>
        <h4>Strength: <span class="strength-player"></span></h4>
        <h4>Defense: <span class="defense-player"></span></h4>
        <h4>Speed: <span class="speed-player"></span></h4>
        <h4>Luck: <span class="luck-player"></span>%</h4>
        <h4>Rapid strike: 10%</h4>
        <h4>Magic shield: 20%</h4>
    </div>
    <div class="col-sm-6">
        <h2>Beast</h2>
        <h4>Health: <span class="health-beast"></span></h4>
        <h4>Strength: <span class="strength-beast"></span></h4>
        <h4>Defense: <span class="defense-beast"></span></h4>
        <h4>Speed: <span class="speed-beast"></span></h4>
        <h4>Luck: <span class="luck-beast"></span>%</h4>
    </div>
</div>
<div class="row">
    <div class="col-sm-12">
        <h4><span class="who-attacks"></span> attacks. <span class="skill"></span> Damage: <span class="damage"></span>. <span class="lucky"></span></h4>
    </div>
</div>
<div class="row">
    <div class="col-sm-6">
        <h4>Health: <span class="current-health-player"></span></h4>
    </div>
    <div class="col-sm-6">
        <h4>Health: <span class="current-health-beast"></span></h4>
    </div>
</div>
<div class="row">
    <div class="col-sm-12">
        <h4 class="who-wins" style="display: none;"><span class="winner"></span> wins!</h4>
    </div>
</div>
</body>
</html>
