<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Jogo dos dados</title>
</head>
<script>
    <main id="container">
		<div class="wrapper">
            <form action="" method="post">
            <fieldset>
                <legend>Digite seu nome</legend>
                <label for="nome">Nome</label>
                <input type="text" name="pessoa" id="pessoa" >
            </fieldset>
            <fieldset>
                <input type="submit" class="jogar" name="gerarFace" id="gerarFace" value="Jogar">
            </fieldset>
            </form>

        <div class="pessoa">
            <?php 
                gerarFaces($pessoaDado1);
                gerarFaces($pessoaDado2);
                echo "<br/>";
                echo "<h2 style=\"color: black;\">Soma das suas faces: $somaPessoa</h2>"
            ?>   
        </div>  
        <div class="maquina">
            <?php 
                gerarFaces($maquinaDado1);
                gerarFaces($maquinaDado2);
                echo "<br/>";
                echo "<h2 style=\"color: black;\">Soma das faces da máquina: $somaMaquina</h2>"
            ?>
        </div>
        <div class="resultado">
            <?php
                echo "<br/>";
                echo "<h2 style=\"color: black;\">$ganhador</h2>"
            ?>
        </div>
        </div>
    </main>
</script>


<style>
    #container {
	    width: 80vw;
	    margin: 0 auto;
    }

    .wrapper {
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    margin-top: 5rem;
    }
    .pessoa {
        display: inline-block;
        width: 30%;
        position: top;
        left: 5px;
        text-align: left;
    }
    .maquina {
        display: inline-block;
        width: 30%;
        position: top;
        text-align: left;
    }
    .resultado {
        display: inline-block;
        width: 30%;
        position: top;
        text-align: left;
    }
    .resultado p{
        color: black;
        font-size: 100px;
    }
    .jogar {
        display: flex;
        position: center;
    }
</style>
</html>