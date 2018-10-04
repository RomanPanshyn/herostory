$( document ).ready(function() {

    var minHealthPlayer = 70;
    var maxHealthPlayer = 100;
    var randomHealthPlayer = Math.floor(Math.random()*(maxHealthPlayer-minHealthPlayer+1)+minHealthPlayer);
    $(".health-player").html(randomHealthPlayer);

    var minStrengthPlayer = 70;
    var maxStrengthPlayer = 80;
    var randomStrengthPlayer = Math.floor(Math.random()*(maxStrengthPlayer-minStrengthPlayer+1)+minStrengthPlayer);
    $(".strength-player").html(randomStrengthPlayer);

    var minDefensePlayer = 45;
    var maxDefensePlayer = 55;
    var randomDefensePlayer = Math.floor(Math.random()*(maxDefensePlayer-minDefensePlayer+1)+minDefensePlayer);
    $(".defense-player").html(randomDefensePlayer);

    var minSpeedPlayer = 40;
    var maxSpeedPlayer = 50;
    var randomSpeedPlayer = Math.floor(Math.random()*(maxSpeedPlayer-minSpeedPlayer+1)+minSpeedPlayer);
    $(".speed-player").html(randomSpeedPlayer);

    var minLuckPlayer = 10;
    var maxLuckPlayer = 30;
    var randomLuckPlayer = Math.floor(Math.random()*(maxLuckPlayer-minLuckPlayer+1)+minLuckPlayer);
    $(".luck-player").html(randomLuckPlayer);

    var minHealthBeast = 60;
    var maxHealthBeast = 90;
    var randomHealthBeast = Math.floor(Math.random()*(maxHealthBeast-minHealthBeast+1)+minHealthBeast);
    $(".health-beast").html(randomHealthBeast);

    var minStrengthBeast = 60;
    var maxStrengthBeast = 90;
    var randomStrengthBeast = Math.floor(Math.random()*(maxStrengthBeast-minStrengthBeast+1)+minStrengthBeast);
    $(".strength-beast").html(randomStrengthBeast);

    var minDefenseBeast = 40;
    var maxDefenseBeast = 60;
    var randomDefenseBeast = Math.floor(Math.random()*(maxDefenseBeast-minDefenseBeast+1)+minDefenseBeast);
    $(".defense-beast").html(randomDefenseBeast);

    var minSpeedBeast = 40;
    var maxSpeedBeast = 60;
    var randomSpeedBeast = Math.floor(Math.random()*(maxSpeedBeast-minSpeedBeast+1)+minSpeedBeast);
    $(".speed-beast").html(randomSpeedBeast);

    var minLuckBeast = 25;
    var maxLuckBeast = 40;
    var randomLuckBeast = Math.floor(Math.random()*(maxLuckBeast-minLuckBeast+1)+minLuckBeast);
    $(".luck-beast").html(randomLuckBeast);

    var playerAtack = 1;
    var beastAtack = 0;

    if (randomSpeedPlayer>randomSpeedBeast)
    {
        playerAtack = 1;
        beastAtack = 0;
    }
    if (randomSpeedPlayer<randomSpeedBeast)
    {
        playerAtack = 0;
        beastAtack = 1;
    }
    if (randomSpeedPlayer==randomSpeedBeast)
    {
        if (randomLuckPlayer>=randomLuckBeast)
        {
            playerAtack = 1;
            beastAtack = 0;
        }
        if (randomLuckPlayer<randomLuckBeast)
        {
            playerAtack = 0;
            beastAtack = 1;
        }
    }

    var currentHealthPlayer = randomHealthPlayer;
    var currentHealthBeast = randomHealthBeast;
    var damage = 0;
    var rapidStrike = 1;
    var magicShield = 1;
    var noDamage = 1;
    var randRapidStrike = 1;
    var randMagicShield = 1;
    var randNoDamage = 1;

    if (playerAtack == 1)
    {
        $(".who-attacks").html('Stanhope');
        randRapidStrike = Math.random();
        if (randRapidStrike < 0.1)
        {
            rapidStrike = 2;
            $(".skill").html('Rapid strike skill is used.');
        }
        randNoDamage = Math.random();
        if (randNoDamage < randomLuckBeast*0.01)
        {
            noDamage = 0;
            $(".lucky").html('Beast gets lucky.');
        }
        damage = noDamage * rapidStrike * (randomStrengthPlayer - randomDefenseBeast);
        currentHealthBeast -= damage;
        playerAtack = 0;
        beastAtack = 1;
    }
    else
    {
        $(".who-attacks").html('Beast');
        randMagicShield = Math.random();
        if (randMagicShield < 0.2)
        {
            magicShield = 0.5;
            $(".skill").html('Magic shield skill is used.');
        }
        noDamage = 1;
        randNoDamage = Math.random();
        if (randNoDamage < randomLuckPlayer*0.01)
        {
            noDamage = 0;
            $(".lucky").html('Stanhope gets lucky.');
        }
        damage = noDamage * magicShield * (randomStrengthBeast - randomDefensePlayer);
        currentHealthPlayer -= damage;
        playerAtack = 1;
        beastAtack = 0;
    }
    $(".damage").html(damage);
    $(".current-health-player").html(currentHealthPlayer);
    $(".current-health-beast").html(currentHealthBeast);

    $(".start-battle").click(function(){
        location.reload();
    });

    $(".next-turn").click(function(){
        $(".skill").html('');
        $(".lucky").html('');
        rapidStrike = 1;
        magicShield = 1;
       if (playerAtack == 1)
       {
           $(".who-attacks").html('Stanhope');
           randRapidStrike = Math.random();
           if (randRapidStrike < 0.1)
           {
               rapidStrike = 2;
               $(".skill").html('Rapid strike skill is used.');
           }
           noDamage = 1;
           randNoDamage = Math.random();
           if (randNoDamage < randomLuckBeast*0.01)
           {
               noDamage = 0;
               $(".lucky").html('Beast gets lucky.');
           }
           damage = noDamage * rapidStrike * (randomStrengthPlayer - randomDefenseBeast);
           currentHealthBeast -= damage;
           playerAtack = 0;
           beastAtack = 1;
       }
       else
       {
           $(".who-attacks").html('Beast');
           randMagicShield = Math.random();
           if (randMagicShield < 0.2)
           {
               magicShield = 0.5;
               $(".skill").html('Magic shield skill is used.');
           }
           noDamage = 1;
           randNoDamage = Math.random();
           if (randNoDamage < randomLuckPlayer*0.01)
           {
               noDamage = 0;
               $(".lucky").html('Stanhope gets lucky.');
           }
           damage = noDamage * magicShield * (randomStrengthBeast - randomDefensePlayer);
           currentHealthPlayer -= damage;
           playerAtack = 1;
           beastAtack = 0;
       }
       $(".damage").html(damage);
       $(".current-health-player").html(currentHealthPlayer);
       $(".current-health-beast").html(currentHealthBeast);
       if (currentHealthPlayer <= 0)
       {
           $(".winner").html('Beast');
           $(".who-wins").show();
           $(".next-turn").hide();
       }
       if (currentHealthBeast <= 0)
       {
           $(".winner").html('Stanhope');
           $(".who-wins").show();
           $(".next-turn").hide();
       }
       var turn = Number($(".turn").text());
       if (turn>=20)
       {
           if (currentHealthPlayer>=currentHealthBeast)
           {
               $(".winner").html('Stanhope');
               $(".who-wins").show();
               $(".next-turn").hide();
           }
           if (currentHealthPlayer<currentHealthBeast)
           {
               $(".winner").html('Beast');
               $(".who-wins").show();
               $(".next-turn").hide();
           }
       }
       turn++;
       $(".turn").html(turn);
    });
});